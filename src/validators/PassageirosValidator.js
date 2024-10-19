import * as Yup from 'yup';

const PassageirosValidator = Yup.object().shape({
  nomeCompleto: Yup.string()
    .min(3, 'O mínimo de caracteres é 3')
    .max(30, 'O máximo de caracteres é 30!')
    .required('Campo Obrigatório!'),
  
  tipoDocumento: Yup.string()
    .min(3, 'O mínimo de caracteres é 3')
    .max(30, 'O máximo de caracteres é 30!')
    .required('Campo Obrigatório!'),
  
  documento: Yup.number()
    .positive('O número deve ser positivo!')
    .integer('O número deve ser inteiro!')
    .test('len', 'O documento deve ter entre 7 e 11 dígitos', val => val && val.toString().length >= 7 && val.toString().length <= 11)
    .required('Campo Obrigatório!'),
  
  email: Yup.string()
    .email('Digite um email válido!')
    .required('Campo Obrigatório!'),
  
  telefone: Yup.number()
    .positive('O número deve ser positivo!')
    .integer('O número deve ser inteiro!')
    .test('len', 'O telefone deve ter entre 8 e 11 dígitos', val => val && val.toString().length >= 8 && val.toString().length <= 11)
    .required('Campo Obrigatório!'),
  
  dataNascimento: Yup.date()
    .required('Campo Obrigatório!')
});

export default PassageirosValidator;
