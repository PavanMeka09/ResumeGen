import * as Yup from 'yup';

export const inputsValidation = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('*')
});