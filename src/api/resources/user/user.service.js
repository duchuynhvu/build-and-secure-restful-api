import Joi from "joi";
import bcrypt from "bcrypt"

export default {
    encryptPassword(palinText) {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(palinText, salt);
    },
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