import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i class='bx bx-award about__icon' ></i>

                <h3 className="about__title">Experiência</h3>
                <span className="about__subtitle">7 anos de trabalho</span>
            </div>

            <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon' ></i>
                <h3 className="about__title">Completados</h3>
                <span className="about__subtitle">1147 projetos</span>
            </div>

            <div className="about__box">
            <i class="bx bx-support about__icon"></i>
                <h3 className="about__title">Suporte</h3>
                <span className="about__subtitle">10:00 - 12:00 / 14:00 - 17:00</span>
            </div>
        </div>
    )
}

export default Info