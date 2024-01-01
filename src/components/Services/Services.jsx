import React, {useState} from "react";
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Serviços</h2>
            <span className="section__subtitle">O que eu posso te oferecer?</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">FullStack-Dev</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        Veja mais
                        <i className="uil uil-arrow-right 
                        services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Dev-FullStack</h3>
                            <p className="services__modal-description">Trabalhe e faça seu projeto com alguém que está a 7 anos no ramo.
                                Experiência, agilidade e praticidade para seu trabalho ou empresa!</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Eu desenvolvo interfaces de usuários tecnologicas e eficientes. Além de muito bonitas, por sinal.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Websites inteligentes e com as melhores tecnologias do mercado.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Por ter um longo conhecimento com UX/UI desenvolvo artes exclusivas para seu site ou sistema.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">É uma empresa? Pode contar comigo pra atualizar seu site, sistema ou app.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Você poderá acompanhar o projeto do inicio ao fim. Alterar o que gosta e o que não gosta no projeto! ♥</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">UI/UX Designer</h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="services__button">
                        Veja mais 
                        <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">UI/UX Designer</h3>
                            <p className="services__modal-description">Trabalhe e faça seu projeto com alguém que está a 7 anos no ramo.
                                Experiência, agilidade e praticidade para seu trabalho ou empresa!</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Eu desenvolvo interfaces de usuários tecnologicas e eficientes. Além de muito bonitas, por sinal.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Websites inteligentes e com as melhores tecnologias do mercado.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Por ter um longo conhecimento com UX/UI desenvolvo artes exclusivas para seu site ou sistema.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">É uma empresa? Pode contar comigo pra atualizar seu site, sistema ou app.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Você poderá acompanhar o projeto do inicio ao fim. Alterar o que gosta e o que não gosta no projeto! ♥</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Modernização</h3>
                    </div>

                    <span onClick={() => toggleTab(3)} className="services__button">Veja mais <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Modernização</h3>
                            <p className="services__modal-description">Tá com as células do seu site/App capenguinhas? Que tal uma modernização, hein!</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Eu desenvolvo interfaces de usuários tecnologicas e eficientes. Além de muito bonitas, por sinal.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Websites inteligentes e com as melhores tecnologias do mercado.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Por ter um longo conhecimento com UX/UI desenvolvo artes exclusivas para seu site ou sistema.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">É uma empresa? Pode contar comigo pra atualizar seu site, sistema ou app.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Você poderá acompanhar o projeto do inicio ao fim. Alterar o que gosta e o que não gosta no projeto! ♥</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services