const fotoInput = document.getElementById('fotoPerfil');
const previewImg = document.getElementById('preview');
const form = document.getElementById('registroForm');

// Cambiar la vista previa de la imagen
fotoInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImg.setAttribute('src', e.target.result);
        }
        reader.readAsDataURL(file);
    }
});

// Validación extra al enviar
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Formulario enviado con éxito!');
});
