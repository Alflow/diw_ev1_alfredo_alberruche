document.addEventListener("DOMContentLoaded", function() {
    var menuBtn = document.querySelector(".menu-btn");
    var miDialogo = document.getElementById("miDialogo");
    var dismissBtn = miDialogo.querySelector(".dismiss");

    menuBtn.addEventListener("click", function() {
        miDialogo.showModal(); // Usa `showModal` para un diálogo modal
    });

    dismissBtn.addEventListener("click", function() {
        miDialogo.close();
    });
});
