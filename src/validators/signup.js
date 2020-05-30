import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required('O nome e obrigatorio'),
  email: Yup.string()
    .email('Insira um e-mail valido')
    .required('O e-mail e obrigatorio'),
  password: Yup.string()
    .min(6, 'No minimo 6 caracteres')
    .required('A senha e obrigatorio'),
});
