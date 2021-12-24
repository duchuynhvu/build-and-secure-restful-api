import Joi from "joi";

export default {
    validateSignup(body) {
        const schema = Joi.object().keys({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        });
        const { value, error } = schema.validate(body);
        if (error && error.details) {
            return { error };
        }
        return { value }
    }
}