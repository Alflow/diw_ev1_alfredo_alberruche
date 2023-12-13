// Esperar a que la página se cargue completamente
window.onload = function() {
    
    var dialog = document.getElementById('miDialogo'); // Ocultar el diálogo al inicio
    dialog.close();

    
    setTimeout(function() {
        dialog.showModal();
    }, 1000); // Mostrar el diálogo después de 1 segundo

    // Cerrar el diálogo al hacer clic en la 'X'
    document.querySelector('.dismiss').addEventListener('click', function() {
        dialog.close();
    });
};