function cambiarColor() {
    var elementos = document.getElementsByTagName("p");
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.color = "red";
    }
}