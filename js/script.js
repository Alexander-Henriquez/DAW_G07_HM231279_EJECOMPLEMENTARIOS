const imagenes = [
    'IMG/imagen1.jpg',
    'IMG/imagen2.jpg',
    'IMG/imagen3.jpg',
    'IMG/imagen4.jpg',
    'IMG/imagen5.jpg',
    'IMG/imagen6.jpg',
    'IMG/imagen7.jpg',
    'IMG/imagen8.jpg',
    'IMG/imagen9.jpg',
    'IMG/imagen10.jpg'
];

let indiceActual = 0;
const elementoImagen = document.getElementById('imagen');
const botonAnterior = document.getElementById('botonAnterior');
const botonSiguiente = document.getElementById('botonSiguiente');

botonAnterior.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    elementoImagen.src = imagenes[indiceActual];
});

botonSiguiente.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % imagenes.length;
    elementoImagen.src = imagenes[indiceActual];
});

document.addEventListener('keydown', (evento) => {
    if (evento.key === 'ArrowLeft') {
        indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
        elementoImagen.src = imagenes[indiceActual];
    } else if (evento.key === 'ArrowRight') {
        indiceActual = (indiceActual + 1) % imagenes.length;
        elementoImagen.src = imagenes[indiceActual];
    }
});

elementoImagen.src = imagenes[indiceActual];
