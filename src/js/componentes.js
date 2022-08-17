import '../css/componentes.css';

export const saludar = (nombre) => {
    console.log('creando etiqueta ')
    const etiqueta = document.createElement('h1')
    etiqueta.textContent = `Hola ${nombre}`
    document.body.append(etiqueta)
}