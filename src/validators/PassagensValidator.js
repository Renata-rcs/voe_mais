import * as Yup from 'yup';

const PassagensValidator = Yup.object().shape({
  voo: Yup.string()
    .min(3, 'O mínimo de caracteres é 3')
    .max(30, 'O máximo de caracteres é 30!')
    .required('Campo Obrigatório!'),
  
  passageiro: Yup.string()
    .min(3, 'O mínimo de caracteres é 3')
    .max(30, 'O máximo de caracteres é 30!')
    .required('Campo Obrigatório!'),
  
  assento: Yup.number()
    .positive('O número deve ser positivo!')
    .integer('O número deve ser inteiro!')
    .required('Campo Obrigatório!'),
  
  preco: Yup.number()
  .positive('O preço deve ser um número positivo!')
  .typeError('O preço deve ser um número!')
  .required('Campo Obrigatório!')
});

export default PassagensValidator;
