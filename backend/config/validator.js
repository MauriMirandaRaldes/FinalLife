const joi = require("joi")

const validator = (req,res,next)=> { /*Cuando vuelvo tengoq ue conitnuar trabajando con joi*/

    const schema = joi.object(
        {
            firstname: joi.string().max(20).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages(
                {
                    "string.min": "Name must have more than 3 characters",
                    "string.max": "Name must have a maximum of 20 characters"
                }),
        
            lastname: joi.string().max(30).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages(
                {
                    "string.min": "Last name must have more than 3 characters",
                    "string.max": "Last name must have a maximum of 30 characters"
                }),

            photoURL: joi.string().pattern(new RegExp("[a-zA-Z0-9]")).required(),

            email: joi.string().email({minDomainSegments: 2}).required().trim().messages(
                {
                    "string.email": "Wrong email format, not found @"
                }),
                
            password: joi.string().pattern(new RegExp("[a-zA-Z0-9]")).required().trim().min(6).max(20).messages(
                {
                    "string.pattern": "Password must have lowercase, uppercase and a number",
                    "string.min": "Password must have more than 6 characters",
                    "string.max": "Password mus have a maximum of 20 characters"
                }),
            
            from: joi.string() // Se coloca el from para saber de donde viene el registro
            
        })
        
        const validation = schema.validate(req.body, {abortEarly: false})

        // console.log(validacion.error)

        if (validation.error){

            return (

                res.json({
                        sucess: false,
                        message: validation.error.details // si el usuario se equivoca le va a tirar la respuesta de donde fue que se equivoco, osea las validaciones que creamos arriba
                    })

            )

        }

        next() // el next hace que si la informacion de un input fue correcta pasa al siguiente, continúa

    }

module.exports = validator