const mongoose = require('mongoose');
const { compare } = require('bcryptjs');
const { Schema } = mongoose;
const { UnauthorizedError } = require('../../error/UnauthorizedError');
const { EMAIL_REGEX } = require('../../utils/regex');

const userSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
      validate: {
        validator: ({length}) => length >= 2 && length <= 30,
        message: 'Длина имени пользователя от 2 до 30 символов',
      },
    },

    password: {
      required: true,
      type: String,
      select: false,
    },

    email: {
      required: true,
      type: String,
      unique: true,
      validate: {
        validator: email => EMAIL_REGEX.test(email),
        message: 'Введите электронную почту',
      },
    },
  },

  {
    statics: {
      findUserByCredentials(email, password) {
        return (
          this.findOne({email})
            .select('+password')
        )
          .then(user => {
            if (user) {
              return compare(password, user.password)
                .then(matched => {
                  if (matched) return user;
                  return Promise.reject(new UnauthorizedError('Неверно указана почта или пароль'));
                });
            }
            return Promise.reject(new UnauthorizedError('Неверно указана почта или пароль'));
          });
      },
    },
  },
);

module.exports = mongoose.model('user', userSchema);
