

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el input de búsqueda
    var inputBusqueda = document.querySelector('input[name="txt"]');
    // Obtener el div donde se mostrarán los resultados de búsqueda
    var searchResults = document.getElementById("searchResults");
    // Variable para almacenar el índice del elemento resaltado en el dropdown
    var highlightedIndex = -1;

    // Evento keydown para manejar la entrada del usuario y la navegación del teclado
    inputBusqueda.addEventListener('keydown', function(event) {
        // Manejar la navegación del teclado
        handleKeyboardNavigation(event);
    });

    // Función para resaltar el elemento seleccionado en el dropdown
    function highlightItem() {
        var dropdownItems = document.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(function(item, index) {
            if (index === highlightedIndex) {
                item.classList.add('highlighted');
            } else {
                item.classList.remove('highlighted');
            }
        });
    }

    // Función para manejar la navegación del teclado
    function handleKeyboardNavigation(event) {
        // Verificar si se presionaron las teclas de flecha
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            // Evitar el comportamiento predeterminado de las teclas de flecha
            event.preventDefault();
            // Obtener todos los elementos del dropdown
            var dropdownItems = document.querySelectorAll('.dropdown-item');
            // Calcular el nuevo índice resaltado
            if (event.key === 'ArrowDown') {
                highlightedIndex = Math.min(highlightedIndex + 1, dropdownItems.length - 1);
            } else if (event.key === 'ArrowUp') {
                highlightedIndex = Math.max(highlightedIndex - 1, 0);
            }
            // Resaltar el elemento correspondiente
            highlightItem();
        }
    }

    // Resto del código para la búsqueda y la visualización de resultados...
    
    // Evento keyup para manejar la búsqueda
    inputBusqueda.addEventListener('keyup', function(event) {
        // Obtener el valor del input de búsqueda
        var query = inputBusqueda.value.trim().toLowerCase();

        // Limpiar el contenido anterior del dropdown
        searchResults.innerHTML = '';

        // Buscar juegos que coincidan con la consulta
        var juegos = [
            { titulo: "Call Of Duty (2003)", imagen: "../multimedia/Top/Call_of_Duty_Cover.webp", url: "../juegos/call_of_duty.html" },
            { titulo: "Age of Empires II (1999)", imagen: "../multimedia/Top/AgeOfEmpires2.jpg", url: "../juegos/age_of_empires_ii.html" },
            { titulo: "Resident Evil 4 (2005)", imagen: "../multimedia/Top/Resident-Evil-4.jpg", url: "../top/ResidentEvil4.html" },
            { titulo: "Devil May Cry (2001)", imagen: "../multimedia/Top/DevilMayCry.webp", url: "../top/DevilMayCry.html" },
            { titulo: "Croc: Legend of the Gobbos (1997)", imagen: "../multimedia/Top/Croc.jpg", url: "../top/Croc.html" },
            { titulo: "Silent Hill 2 (2001) ", imagen: "../multimedia/Top/SilentHill2.jpg", url: "../top/SilentHill.html" },
            { titulo: "Grim Fandango (1998)", imagen: "../multimedia/Top/GrimFamdango.jpg", url: "../top/GrimFandango.html" },
            { titulo: "The Curse Of Monkey Island (1997)", imagen: "../multimedia/Top/MonkeyIsland.jpg", url: "../top/TheCurseOfMonkeyIsland.html" },
            { titulo: "Life Is Strange (2015)", imagen: "../multimedia/Top/Life_Is_Strange_cover_art.png", url: "../top/lifestrange.html" },
            // Agrega más juegos aquí según necesites
        ];

        // Filtrar juegos que coincidan con la consulta
        var resultados = juegos.filter(function(juego) {
            return juego.titulo.toLowerCase().includes(query);
        });

        // Mostrar resultados en el dropdown
        resultados.forEach(function(juego, index) {
            var dropdownItem = document.createElement('div');
            dropdownItem.classList.add('dropdown-item');
            dropdownItem.innerHTML = `<img src="${juego.imagen}" alt="${juego.titulo}" style="width: 100px; height: 100px; margin-right: 10px;"> ${juego.titulo}`;
            dropdownItem.addEventListener('click', function() {
                // Redirigir a la página del juego cuando se hace clic en el elemento del dropdown
                window.location.href = juego.url;
            });
            dropdownItem.addEventListener('mouseover', function() {
                highlightedIndex = index;
                highlightItem();
            });
            searchResults.appendChild(dropdownItem);
        });

        // Mostrar u ocultar el dropdown según haya resultados o no
        if (resultados.length > 0) {
            searchResults.style.display = 'block';
        } else {
            searchResults.style.display = 'none';
        }
    });

    // Evento para ocultar el dropdown cuando se hace clic fuera de él
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.box')) {
            searchResults.style.display = 'none';
        }
    });
});