document.addEventListener("DOMContentLoaded", function() {
    var menuBtn = document.querySelector(".btn-burguer"); 
    var miDialogo = document.getElementById("miDialogo");
    var dismissBtn = miDialogo.querySelector(".dismiss");

    document.getElementById("btn_burguer").addEventListener("change", function() {
        if(this.checked) {
            miDialogo.showModal(); // Muestra el diálogo cuando el checkbox está marcado
        }
    });

    dismissBtn.addEventListener("click", function() {
        miDialogo.close(); // Cierra el diálogo
        document.getElementById("btn_burguer").checked = false; // Desmarca el checkbox
    });
});
