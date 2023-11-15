import React from "react";
import img from './img/checklist.svg';

const Banner = () => {
    return(
        <div className="rounded shadow p-5 mt-5 d-flex">
            <img src={img} alt="" width="250"/>
            <div>
                <h3 className="text-primary">Bienvenido a tareas byllarreal</h3>
                <h5 className="text-secundary">
                    Con esta aplicación podrás consultar, crear, actualizar y eliminar tus tareas
                </h5>
                <hr />

                <p className="text-muted">
                    Esta aplicación fue desarrollada por Byron Villarreal con Spring Boot, RactJS y Mongo DB
                </p>
            </div>
        </div>
    )
}

export default Banner;