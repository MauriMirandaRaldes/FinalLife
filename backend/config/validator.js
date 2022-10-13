const joi = require("joi");

const validator = (req, res, next) => {
  const schema = joi.object({
    firstname: joi
      .string()
      .max(20)
      .min(3)
      .trim()
      .pattern(new RegExp("[a-zA-Z]"))
      .required()
      .messages({
        "string.min": "Firstame must have more than 3 characters",
        "string.max": "Firstame must have a maximum of 20 characters",
      }),

    lastname: joi
      .string()
      .max(30)
      .min(3)
      .trim()
      .pattern(new RegExp("[a-zA-Z]"))
      .required()
      .messages({
        "string.min": "Lastname must have more than 3 characters",
        "string.max": "Lastname must have a maximum of 30 characters",
      }),

    photoURL: joi.string().pattern(new RegExp("[a-zA-Z0-9]")).required(),

    email: joi
      .string()
      .email({ minDomainSegments: 2 })
      .required()
      .trim()
      .messages({
        "string.email": "Wrong email format, not found @",
      }),

    password: joi
      .string()
      .pattern(new RegExp("[a-zA-Z0-9]"))
      .required()
      .trim()
      .min(6)
      .max(20)
      .messages({
        "string.pattern":
          "Password must have lowercase, uppercase and a number",
        "string.min": "Password must have more than 6 characters",
        "string.max": "Password mus have a maximum of 20 characters",
      }),

    password2: joi
      .string()
      .pattern(new RegExp("[a-zA-Z0-9]"))
      .required()
      .trim()
      .min(6)
      .max(20)
      .messages({
        "string.pattern":
          "Password must have lowercase, uppercase and a number",
        "string.min": "Password must have more than 6 characters",
        "string.max": "Password mus have a maximum of 20 characters",
      }),

    from: joi.string(), /*Coloco un from para saber de donde viene el registro*/
  });

  const validation = schema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    return res.json({
      sucess: false,
      message: validation.error.details, /*Dentro de la propiedad message voy a alojar los mensajes que joi le envía al usuario*/
    });
  }

  next(); /*El next hace que si la informacion de un input es correcta, pasa al siguiente, "Continúa"*/
};

module.exports = validator;
