import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail valido')
    .required('O e-mail e obrigatorio'),
  password: Yup.string().required('A senha e obrigatorio'),
});
