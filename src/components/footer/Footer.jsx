import React from "react";
import "./footer.css";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Dinho</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">Sobre</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projetos</a>
                    </li>

                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/devdnhho" className="footer__social-link" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a href="https://twitter.com/diontravolta" className="footer__social-link" target="_blank">
                        <i class="bx bxl-twitter"></i>
                    </a>

                    <a href="https://github.com/DevDHNT" className="footer__social-link" target="_blank">
                        <i class="bx bxl-github"></i>
                    </a>
                </div>
                <span className="footer__copy">
                    &#169; DevDinho. Todos os direitos reservados.
                </span>
            </div>
        </footer>
    )
}

export default Footer