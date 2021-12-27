import Joi from "joi";

export default {
    validateBody(body) {
        const schema = Joi.object().keys({
            songs: Joi.array().items().required(),
            name: Joi.string().required(),
        });
        const { value, error } = schema.validate(body);
        if (error && error.details) {
            return { error };
        }
        return { value }
    }
}