document.addEventListener("DOMContentLoaded", function() {
    var menuBtn = document.querySelector(".btn-burguer"); 
    var miDialogo = document.getElementById("miDialogo");
    var dismissBtn = miDialogo.querySelector(".dismiss");
    let botonBurger = document.getElementById("botonBurger");

    document.getElementById("btn_burguer").addEventListener("change", function() {
        if(this.checked) {
            miDialogo.showModal(); // Muestra el diálogo cuando el checkbox está marcado
            botonBurger.ariaExpanded="true";
        }
    });

    dismissBtn.addEventListener("click", function() {
        miDialogo.close(); // Cierra el diálogo
        document.getElementById("btn_burguer").checked = false; // Desmarca el checkbox
        botonBurger.ariaExpanded="false";
    });
});
