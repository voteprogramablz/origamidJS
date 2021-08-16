import { ValidarCpf } from "./modules/validar-cpf.js";

const cpf = document.querySelector('#cpf')
const validarcpf = new ValidarCpf(cpf);

validarcpf.addEvent()