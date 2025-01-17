import Joi from "joi";

export const clientSchema = Joi.object({
    companyName: Joi.string().required(),
    email: Joi.string().email().required(),
    contactNumber: Joi.string().required(),
    schedule: Joi.object({
        date: Joi.string().required(),
        time: Joi.string().required(),
    }).required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
});
