import * as Yup from 'yup';

const VoosValidator = Yup.object().shape({

  internacional: Yup.boolean(),

  identificador: Yup.string()
   .required('Campo Obrigatório!'),
  
  dataCheckin: Yup.date()
    .required('Campo Obrigatório!'),

  dataEmbarque: Yup.date()
    .required('Campo Obrigatório!'),

  origem: Yup.string()
    .min(3, 'O mínimo de caracteres é 3')
    .max(50, 'O máximo de caracteres é 50!')
    .required('Campo Obrigatório!'),

  destino: Yup.string()
    .min(3, 'O mínimo de caracteres é 3')
    .max(50, 'O máximo de caracteres é 50!')
    .required('Campo Obrigatório!'),

  empresa: Yup.string()
    .min(3, 'O mínimo de caracteres é 3')
    .max(50, 'O máximo de caracteres é 50!')
    .required('Campo Obrigatório!'),

  preco: Yup.number()
    .positive('O preço deve ser um número positivo!')
    .required('Campo Obrigatório!')
});

export default VoosValidator;
