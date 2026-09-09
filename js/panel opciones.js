function llamarPanel() {
    // Verifica si ya existe el botón o el sidebar para no duplicar
    if (document.getElementById('menu-toggle') || document.getElementById('sidebar')) {
        return; // Si ya existe, no hace nada
    }

    document.body.insertAdjacentHTML('afterbegin', `
        <button id="menu-toggle" class="menu-toggle">
            <span>&#9776;</span>
        </button>

        <aside class="sidebar" id="sidebar">
            <h2 id="PO">Panel Opciones</h2>
            <img src="/images/logo.jpeg" alt="Logo">
            <nav id="slideA" class="sidebar-nav">
                <a href="pedidos.html">Pedidos</a>
                <a href="clientes.html">Clientes</a>
                <a href="productos.html">Productos</a>
                <a href="panelP.html">Nuevo Producto</a>
            </nav>
        </aside>
    `);

    // Script para el toggle del menú (se ejecuta solo si no existe ya)
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    const appContainer = document.querySelector('.app-container');

    if (menuToggle && sidebar && mainContent && !window.panelInitialized) {
        window.panelInitialized = true; // Evita que se ejecute dos veces

        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            if (mainContent) mainContent.classList.toggle('active');
            if (appContainer) appContainer.classList.toggle('active');
        });

        document.addEventListener('click', (event) => {
            if (!sidebar.contains(event.target) && !menuToggle.contains(event.target) && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                if (mainContent) mainContent.classList.remove('active');
                if (appContainer) appContainer.classList.remove('active');
            }
        });
    }
}

// Ejecutar al cargar
llamarPanel();
