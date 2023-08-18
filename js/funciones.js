document.addEventListener('DOMContentLoaded', () => {
    const tipoMemeSelect = document.getElementById('tipoMeme');
    const imagenMemeSelect = document.getElementById('imagenMeme');
    const fontTypeSelect = document.getElementById('fontType');
    const escribeInput = document.getElementById('escribe');
    const creadorInput = document.getElementById('creador');
    const fondoInput = document.getElementById('fondo');
    const createMemeButton = document.getElementById('createMeme');
    const memeContenedor = document.getElementById('memeContenedor');
    const mostrarMeme = document.getElementById('mostrarMeme');
    const memeTexto = document.getElementById('memeTexto');

    // Actualizar las opciones de imagen basadas en la categoría seleccionada
    tipoMemeSelect.addEventListener('change', () => {
        const categoriaSeleccionada = tipoMemeSelect.value;
        let opcionesImagen = '';

        if (categoriaSeleccionada === 'fc') {
            opcionesImagen = `
            <option value="media/U1.jpg">Golum</option>
            <option value="media/U2.jpg">Niña</option>
            <option value="media/U3.jpg">Chems</option>
            <option value="media/U4.jpg">Stickman</option>
        `;
        } else if (categoriaSeleccionada === 'michis') {
            opcionesImagen = `
            <option value="media/m1.jpg">Michi 1</option>
            <option value="media/m2.jpg">Michi 2</option>
            <option value="media/m3.jpg">Michi 3</option>
            <option value="media/m4.jpg">Michi 4</option>
        `;
        } else if (categoriaSeleccionada === 'anime') {
            opcionesImagen = `
            <option value="media/a1.jpg">Anime 1</option>
            <option value="media/a2.jpg">Anime 2</option>
            <option value="media/a3.jpg">Anime 3</option>
            <option value="media/a4.jpg">Anime 4</option>
        `;
        }

        imagenMemeSelect.innerHTML = opcionesImagen;
    });

    createMemeButton.addEventListener('click', () => {
        const tipoMeme = tipoMemeSelect.value;
        const imagenMeme = imagenMemeSelect.value;
        const fontType = fontTypeSelect.value;
        const mensaje = escribeInput.value;
        const creador = creadorInput.value;
        const colorFondo = fondoInput.value;

        mostrarMeme.src = imagenMeme;
        mostrarMeme.style.backgroundColor = colorFondo;
        memeTexto.style.fontFamily = fontType;

        memeTexto.innerText = `${mensaje}\n\nCreado por: ${creador}`;

        memeContenedor.classList.remove('hidden');
    });
});