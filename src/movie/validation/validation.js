const { Joi, celebrate } = require('celebrate');
const { URL_REGEX } = require('../../utils/regex');

const createMovieValidation = celebrate({
  body: Joi.object().keys({
    thumbnail: Joi.string().required().pattern(URL_REGEX),
    trailerLink: Joi.string().required().pattern(URL_REGEX),
    image: Joi.string().required().pattern(URL_REGEX),
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
    id: Joi.string().length(24).hex().required(),
  }),
});

module.exports = {
  createMovieValidation,
  deleteMovieValidation,
};
