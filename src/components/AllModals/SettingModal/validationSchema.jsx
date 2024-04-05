import * as yup from 'yup';

const emailPattern = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);


export const updateUserProfileSchema = yup.object().shape({
  gender: yup.string().required(),
  name: yup
    .string()
    .max(32, 'Max length 32')
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ]+$/,
      'Name should only contain letters (Latin, Ukrainian or Cyrillic)'
    ),
  email: yup.string().matches(emailPattern, 'Email is not valid'),
  oldPassword: yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .when('newPassword', (newPassword, field) =>
      newPassword[0] ? field.required() : field
    ),
  newPassword: yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .nullable()
    .test(
      'differentPassword',
      'The new password must differ from the old one.',
      function (value) {
        const oldPassword = this.resolve(yup.ref('oldPassword'));
        return !oldPassword || value !== oldPassword;
      }
    ),
  repeatPassword: yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .test('commonPassword', 'Passwords do not match.', function (value) {
      const newPassword = this.resolve(yup.ref('newPassword'));
      return !newPassword || String(value) === String(newPassword);
    }),
});