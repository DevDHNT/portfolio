import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

return (

<section className="qualification section">
   <h2 className="section__title">Diplomas</h2>
   <span className="section__subtitle">Minha jornada pessoal</span>
   <div className="qualification__container container">
      <div className="qualification__tabs">
         <div 
         className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button qualification__active button--flex"
            }
            onClick={() => toggleTab(1)}
         >
            <i className="uil uil-graduation-cap qualification__icon"></i>Diplomas
         </div>
         <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button qualification__active button--flex"
            }
            onClick={() => toggleTab(2)}
        >
            <i className="uil uil-briefcase-alt qualification__icon"></i>Experiência
         </div>
      </div>
      <div className="qualification__sections">
         <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
               <div>
                  <h3 className="qualification__title">ADS</h3>
                  <span className="qualification__subtitle">Anhanguera - Educacional</span>
                  <div className="qualification__calender">
                     <i className="uil uil-calendar-alt"></i> 2020 - 2022
                  </div>
               </div>
               <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
               </div>
            </div>
            {/* AQUI COMEÇA A BARRA DE EXPERIÊNCIA (1) !!!!!!!!!!! */ }
            <div className="qualification__data">
                <div></div>
                
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
               </div>

               <div>
                  <h3 className="qualification__title">Swift</h3>
                  <span className="qualification__subtitle">Alura</span>
                  <div className="qualification__calender">
                     <i className="uil uil-calendar-alt"></i> 2020 - 2024
                  </div>
               </div>
            </div>

            <div className="qualification__data">
               <div>
                  <h3 className="qualification__title">Lógica de programação</h3>
                  <span className="qualification__subtitle">Alura</span>
                  <div className="qualification__calender">
                     <i className="uil uil-calendar-alt"></i> 2020 - 2021
                  </div>
               </div>
               <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
               </div>
            </div>
            {/* AQUI COMEÇA A BARRA DE EXPERIÊNCIA (2) !!!!!!!!!!! */ }
            <div className="qualification__data">
                <div></div>
                
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
               </div>

               <div>
                  <h3 className="qualification__title">Alura</h3>
                  <span className="qualification__subtitle">UX/UI</span>
                  <div className="qualification__calender">
                     <i className="uil uil-calendar-alt"></i> 2021 - 2023
                  </div>
               </div>
            </div>
         </div>

         <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
               <div>
                  <h3 className="qualification__title">Fivem</h3>
                  <span className="qualification__subtitle">Legendary RP - Scripts em lua.</span>
                  <div className="qualification__calender">
                     <i className="uil uil-calendar-alt"></i> 2020 - 2022
                  </div>
               </div>
               <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
               </div>
            </div>
            {/* AQUI COMEÇA A BARRA DE EXPERIÊNCIA (1) !!!!!!!!!!! */ }
            <div className="qualification__data">
                <div></div>
                
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
               </div>

               <div>
                  <h3 className="qualification__title">UX/UI designer</h3>
                  <span className="qualification__subtitle">Empresa própria. </span>
                  <div className="qualification__calender">
                     <i className="uil uil-calendar-alt"></i> 2020 - 2024
                  </div>
               </div>
            </div>

            <div className="qualification__data">
               <div>
                  <h3 className="qualification__title">Web Designer</h3>
                  <span className="qualification__subtitle">Figma</span>
                  <div className="qualification__calender">
                     <i className="uil uil-calendar-alt"></i> 2020 - 2024
                  </div>
               </div>
               <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
               </div>
            </div>
            {/* AQUI COMEÇA A BARRA DE EXPERIÊNCIA (2) !!!!!!!!!!! */ }
         </div>
      </div>
   </div>
</section>
)
}
export default Qualification;