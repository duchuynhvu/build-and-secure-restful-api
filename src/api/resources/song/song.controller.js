import Joi from 'joi';

export default {
    async create(req, res) {
        console.log(req.body);
        const schema = Joi.object().keys({
            title: Joi.string().required(),
            url: Joi.string().required(),
            rating: Joi.number()
                .integer()
                .min(0)
                .max(5)
                .optional(),
        });
        const { value, error } = schema.validate(req.body);
        if (error && error.details) {
            return res.status(400).json(error);
        }
        return res.json(value);
    },
};