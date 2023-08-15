const { Joi, celebrate } = require('celebrate');

const createMovieValidation = celebrate({
  body: Joi.object().keys({
    thumbnail: Joi.string().required(),
    trailerLink: Joi.string().required(),
    image: Joi.string().required(),
    description: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    movieId: Joi.number().required(),
    country: Joi.string().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    year: Joi.string().required(),
  }),
});

const deleteMovieValidation = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
});

module.exports = {
  createMovieValidation,
  deleteMovieValidation,
};
