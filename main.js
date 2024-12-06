function redirigir(url){
    window.location.href = url;
}

// Filtro por categoría
function filtrarCategoria(categoria) {
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        item.style.display = item.dataset.categoria === categoria || categoria === 'todo' ? 'flex' : 'none';
    });
}
