const User = require("../models/userModel")
const bcryptjs = require("bcryptjs")
const crypto = require("crypto")
/*Send mail*/
const { google } = require("googleapis")
const nodemailer = require("nodemailer")
const Oauth2 = google.auth.OAuth2

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

    }

}

module.exports = userControllers