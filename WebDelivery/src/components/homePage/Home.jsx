import React from "react"
import "./Home.css"
import NavBar from "../navBar/Navbar"
export default function Home(){



    return(
        <>

            <NavBar />

            <div className="contenido">
                <h1>Home Page</h1>
                
                <p>En esta sección explicaremos como funciona nuestra interfaz para armar personaje en minecraft</p>
                <p>Se puede acceder a través del navbar de arriba, en la sección "Mi Minecraft"</p>
                <img src="image.png" alt="" />
                <p>
                    Una vez dentro, se hará visible un formulario con 5 campos, 4 siendo partes de la armadura que quieres que contenga tu personaje, y uno extra que es el nickname con el que aparecera este personaje
                </p>
                <p>No es obligatorio llenar todos los campos, solo aquellos que quieras que se ejecuten</p>
                <p>A continuación un ejemplo</p>
                <img src="image2.png" alt="" />
                <p>En el nabvbar en ña sección "Dashboard" se explicará el flujo y como funciona la logica detras de esta interfaz</p>

            </div>
        </>
    )
}