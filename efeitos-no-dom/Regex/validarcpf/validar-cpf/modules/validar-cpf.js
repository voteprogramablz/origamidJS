export class ValidarCpf {
    constructor(element){
        this.element = element;
    }
    clean(cpf) {
        return cpf.replace(/\D/g, '')
    }
    build(cpf){
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    }
    format(cpf){
        const cpfLimpo = this.clean(cpf);
        return this.build(cpfLimpo)
    }
    validate(cpf) {
        const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g)
        return (matchCpf && matchCpf[0] === cpf)
    }

    validateOnChanges({value, classList, nextElementSibling}) {
        if(this.validate(value)){
            classList.add('valido')
            value = this.format(value);
            classList.remove('erro');
            nextElementSibling.classList.remove('invalido')
        } else {
            classList.remove('valido')
            classList.add('erro');
            nextElementSibling.classList.add('invalido')
        }
    }
    
    addEvent(event = 'change') {
        this.element.addEventListener(event, () => {
            this.validateOnChanges(this.element)
        })
        this.addSpanError()
        return this
    }

    addSpanError() {
        const erroElement = document.createElement('span');
        erroElement.classList.add('erro-text');
        erroElement.innerText = 'CPF Inválido';
        this.element.parentElement.insertBefore(erroElement, this.element.nextElementSibling);
    }
}