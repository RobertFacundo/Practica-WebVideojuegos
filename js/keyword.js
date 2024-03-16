// Manejar la navegación del dropdown con las flechas del teclado
function handleKeyboardNavigation(event) {
    // Verificar si se presionaron las teclas de flecha
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        // Evitar el comportamiento predeterminado de las teclas de flecha
        event.preventDefault();
        // Obtener todos los elementos del dropdown
        var dropdownItems = document.querySelectorAll('.dropdown-item');
        // Obtener el índice del elemento resaltado actualmente
        var highlightedIndex = Array.from(dropdownItems).findIndex(item => item.classList.contains('highlighted'));
        // Calcular el nuevo índice resaltado
        if (event.key === 'ArrowDown') {
            highlightedIndex = Math.min(highlightedIndex + 1, dropdownItems.length - 1);
        } else if (event.key === 'ArrowUp') {
            highlightedIndex = Math.max(highlightedIndex - 1, 0);
        }
        // Resaltar el elemento correspondiente
        dropdownItems.forEach(function(item, index) {
            if (index === highlightedIndex) {
                item.classList.add('highlighted');
            } else {
                item.classList.remove('highlighted');
            }
        });
    }
}

// Exportar la función para su uso en otros archivos
export { handleKeyboardNavigation };