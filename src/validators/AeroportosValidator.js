import * as Yup from "yup";

const AeroportosValidator = Yup.object().shape({
  nome: Yup.string()
    .min(3, "O mínimo de caracteres é 3!")
    .max(30, "O máximo de caracteres é 30!")
    .required("Campo Obrigatório"),

  sigla: Yup.string()
    .min(3, "O mínimo de caracteres é 3!")
    .max(5, "O máximo de caracteres é 5!")
    .required("Campo Obrigatório"),

  uf: Yup.string()
    .min(2, "O mínimo de caracteres é 3!")
    .max(4, "O máximo de caracteres é 4!")
    .required("Campo Obrigatório"),

  cidade: Yup.string()
    .min(3, "O mínimo de caracteres é 3")
    .max(30, "O máximo de caracteres é 30!")
    .required("Campo Obrigatório"),
    
  pais: Yup.string()
    .min(3, "O mínimo de caracteres é 3")
    .max(30, "O máximo de caracteres é 30!")
    .required("Campo Obrigatório"),
});

export default AeroportosValidator;
