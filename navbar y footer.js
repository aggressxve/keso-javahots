function cargarFooter(){
    document.body.insertAdjacentHTML('beforeend', `
        <footer class="site-footer">
            <img id="adornoFooter" src="images/imgFooter/adorno-footer.png">
            <div class="footer-container">
                <div class="footer-col">
                    <img id="kesoLogo" src="/images/imgFooter/kesologo.png">
                </div>
                <div class="footer-col">
                    <h3><a href="index.html">Inicio</a></h3>
                <ul>
                    <li><a href="#">Catálogo</a></li>
                    <li><a href="#">Pedido personalizado</a></li>
                </ul>
                </div>
                <div class="footer-col">
                    <h3>Contacto</h3>
                    <ul>
                        <li><p>E-mail: info@keso.com</p></li>
                        <li><p>Teléfono: +52 5511223344</p></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Síguenos</h3>
                    <img class="social-icon" src="/images/imgFooter/icono-fb.png">
                    <img class="social-icon" src="/images/imgFooter/icono-ig.png">
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 JavaHots. Todos los derechos reservados.</p>
            </div>
        </footer>
        `)
}
