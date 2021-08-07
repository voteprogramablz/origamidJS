const controles = document.querySelector('#controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn')

controles.addEventListener(['change'], handleChange)

const handleStyle = {
    element: btn,
    backgroundColor(value) {
        this.element.style.backgroundColor = value;
    },
    height(value) {
        this.element.style.height = value + 'px';
    },
    width(value) {
        this.element.style.width = value + 'px';
    },
    texto(value) {
        this.element.innerText = value;
    },
    color(value) {
        this.element.style.color = value;
    },
    border(value) {
        this.element.style.border = value;
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + 'px';
    },
    fontFamily(value) {
        this.element.style.fontFamily = value;
    },
    fontSize(value) {
        this.element.style.fontSize = value * 0.1 + 'rem';
    },
}

function handleChange({target}) {
    const name = target.name
    const value = target.value
    
    handleStyle[name](value);

    saveValuesOnLocalStorage(name, value);
    showCss();
}

function saveValuesOnLocalStorage (name, value) {
    localStorage[name] = value;
}

function setValues() {
    const properties = Object.keys(localStorage);

    properties.forEach( propertie => {
        controles.elements[propertie].value = localStorage[propertie]
        handleStyle[propertie](localStorage[propertie])
    })
    showCss();
}

function showCss() {
    cssText.innerHTML ='<span>' + btn.style.cssText.split('; ').join('; </span> <span>');
}

setValues();
