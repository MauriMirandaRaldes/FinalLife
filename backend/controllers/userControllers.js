const User = require("../models/userModel")
const bcryptjs = require("bcryptjs") /*bcryptjs es para el encriptado de la contraseña*/
const crypto = require("crypto") /*crypto es para la creación del uniqueString*/
/*Send mail*/
const { google } = require("googleapis")
const nodemailer = require("nodemailer")
const Oauth2 = google.auth.OAuth2
/*Token*/
const jwt = require("jsonwebtoken")

const sendMail = async (email, uniqueString)=> {

    const myOauth2Client = new Oauth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        "https://developers.google.com/oauthplayground"
    );

    myOauth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN
    })

    const accessToken = myOauth2Client.getAccessToken()

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
      user: process.env.USUARIO,
      type: "OAuth2",
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    const emailOptions = {
      from: process.env.USUARIO,
      to: email,
      subject: "Verification",
      html: `<p><a href="http://localhost:8000/api/verification/${uniqueString}" >Click Here</a> for verify your account</p>`
    }

    await transport.sendMail(emailOptions, (error, response)=> {

        if (error){
            console.log(error)
        } else {
            console.log("Message sent")
        }

    })

}

const userControllers = {

    verifyEmail: async (req, res)=> {
    /*La información llega a éste controlador cuando el usuario hace click en el enlace que se encuentra en el mail de verificación*/

        let {uniqueString} = req.params
        let user = await User.findOne({uniqueString: uniqueString})

        if (user){

            (user.verification = true),
            await user.save()
            res.redirect("http://localhost:3000/signIn")

        } else {

            res.json({
                sucess: false,
                response: "error",
                message: "Email not verified"
            })

        }

    },

    signUp_user: async (req,res)=> {

        let {firstname, lastname, photoURL, email, password, from} = req.body
        let userExist = await User.findOne({email:email})

        try {

            if (userExist){
                /*Si el usuario existe*/
        
                    if (userExist.from.includes("signUp")){
                    /*Si el usuario existe, y se está intentando registrarse por medio de nuestro sign up*/
        
                        res.json({
                            sucess: false,
                            response: "error",
                            message: "You have already made your sign up with this email"
                        })
        
                    } else {
                    /*Si el usuario existe, pero está intentando registrarse por un medio distinto de nuestro sign up*/
        
                    }
        
                } else {
                /*Si el usuario no existe*/
        
                    if (from !== "signUp"){
                    /*Si el usuario no existe, y se está intentando registrar por un medio distinto a nuestro sign up*/
        
                    } else {
                    /*Si el usuario no existe y se está intentando registrar por medio de nuestro sign up*/
        
                        let encryptedPass = bcryptjs.hashSync(password,10)
        
                        let data = await new User({
                            firstname: firstname,
                            lastname: lastname,
                            photoURL: photoURL,
                            email: email,
                            password: encryptedPass,
                            uniqueString: crypto.randomBytes(15).toString("hex"),
                            verification: false,
                            from: from
            
                        }).save()

                        sendMail(email, data.uniqueString)
            
                        res.json({
                            sucess: true,
                            response: data,
                            message: "Congrats, you created your account sucesfully! We sent you a email for verificate it"
                        })
        
                    }
        
                }

        } catch (error){

            res.json({
                sucess: false,
                response: "error",
                message: "Something went wrong, please try it again"
            })

        }

    },

    signIn_user: async (req,res)=> {

        let {email, password, from} = req.body

        try {

            let userExist = await User.findOne({email: email})

            if (userExist){
            /*Si el usuario existe*/    

                if (from !== "signIn"){
                /*Si el usuario existe y está intentando ingresar por medio de nuestro sign in*/

                  let passwordMatch = userExist.password.filter(element => bcryptjs.compareSync(password, element))

                  if (passwordMatch){
                  /*Si la contraseña coincide*/  

                    let data = {
                        firstname: userExist.firstname,
                        lastname: userExist.lastname,
                        photoURL: userExist.photoURL,
                        email: userExist.email,
                        from: userExist.from,
                        id: userExist._id /*Le agregamos el id para el desencryptado del token*/
                    }

                    let token = jwt.sign(data, process.env.SECRET_KEY, {expiresIn: 60 * 60 * 24})

                    res.json({
                        sucess: true,
                        response: {data, token},
                        message: `Welcome again ${userExist.firstname}`
                    })

                  } else {
                  /*Si la contraseña no coincide*/  

                    res.json({
                        sucess: false,
                        response: "error",
                        message: `You didnt realize your registred with ${from}, please go sign up and do it`
                    })

                  }

                } else {
                /*Si el usuario está intentando ingresar por nuestro formulario de sign in*/

                  if (userExist.verification === true){
                  /*Si el email fue verificado*/

                  let passwordMatch = userExist.password.filter(element => bcryptjs.compareSync(password, element))

                  if (passwordMatch.length > 0){
                  /*Si la contraseña coincide*/

                    let data = {
                        firstname: userExist.firstname,
                        lastname: userExist.lastname,
                        photoURL: userExist.photoURL,
                        email: userExist.email,
                        id: userExist._id
                    }

                    let token = jwt.sign(data, process.env.SECRET_KEY, {expiresIn: 60 * 60 * 24})

                    res.json({
                        sucess: true,
                        response: {data, token},
                        message: `Welcome again ${userExist.firstname}`
                    })

                  } else {
                  /*Si la contraseña no coincide*/

                    res.json({
                        sucess: false,
                        response: "error",
                        message: "Password and email do not match"
                    })

                  }

                  } else {
                  /*Si el email aún no fue verificado*/

                    res.json({
                        sucess: false,
                        response: "error",
                        message: "You need verify your email for sign in"
                    })

                  }

                }

            } else {
            /*Si el usuario no existe*/   

              res.json({
                sucess: false,
                response: "error",
                message: "User doesnt exist, please go sign up"
              })

            }

        } catch(error){

            res.json({
                sucess: false,
                response: "error",
                message: "Something went wrong, please try again"
            })

        }

    },

    verifyToken: async (req,res)=> {

        let user = await req.user

        if (user){

            res.json({
                sucess: true,
                response: {
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    photoURL: user.photoURL,
                    id: req.user.id,
                    from: "token"
                },
                message: `Welcome again ${user.firstname}`
            })

        } else {

            res.json({
                sucess: false,
                response: "error",
                message: "Your session expired, please sign in again"
            })

        }

    }

}

module.exports = userControllers