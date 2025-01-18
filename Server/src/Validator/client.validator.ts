import Joi from "joi";
import { Request, Response, NextFunction } from "express";

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

export const validateClient = (req: Request, res: Response, next: NextFunction) => {
    const { error } = clientSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            error: error.details[0].message,  // Return the first validation error message
        });
    }
    next();
};
