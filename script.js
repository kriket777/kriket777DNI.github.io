document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let num = document.getElementById('num').value;
    let letra = document.getElementById('letra').value.toUpperCase();
    
    if (num < 0 || num > 99999999) {
        alert("El número proporcionado no es válido.");
        return;
    }

    let letradni = letras[num % 23];
    
    if (letradni !== letra) {
        alert("La letra que ha indicado no es correcta");
    } else {
        alert("El número y la letra de DNI son correctos.");
    }
});
