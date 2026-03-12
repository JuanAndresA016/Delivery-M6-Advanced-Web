import React from "react"
import NavBar from "../navBar/Navbar"
import "./MinecraftForm.css";

export default function MinecraftForm(){

    return(
        <>
            <NavBar />

            <h1>Arma a tu personaje de Minecraft</h1>

            <div className="minecraftFormContainer">
                <form action="" className="minecraftForm">

                    <div className="option_container">
                        <label for="car-select">Escoge un casco:</label>
                        <select name="cars" id="car-select">
                            <option value="">--Por favor escoge una opción--</option>
                            <option value="1">Casco de diamante</option>
                            <option value="2">Casco de oro</option>
                            <option value="3">Casco de netherite</option>
                            <option value="4">Casco de hierro</option>
                        </select>
                    </div>
                    
                    <div className="option_container">
                        <label for="car-select">Escoge una pechera:</label>
                        <select name="cars" id="car-select">
                            <option value="">--Por favor escoge una opción--</option>
                            <option value="1">Pechera de diamante</option>
                            <option value="2">Pechera de oro</option>
                            <option value="3">Pechera netherite</option>
                            <option value="4">Pechera de hierro</option>
                        </select>
                    </div>
                    
                    <div className="option_container">
                        <label for="car-select">Escoge un pantalon:</label>
                        <select name="cars" id="car-select">
                            <option value="">--Por favor escoge una opción--</option>
                            <option value="1">Pantalon de diamante</option>
                            <option value="2">Pantalon de oro</option>
                            <option value="3">Pantalon netherite</option>
                            <option value="4">Pantalon de hierro</option>
                        </select>

                    </div>
                    
                    <div  className="option_container">
                        <label for="car-select">Escoge unas botas:</label>
                        <select name="cars" id="car-select">
                            <option value="">--Por favor escoge una opción--</option>
                            <option value="1">Botas de diamante</option>
                            <option value="2">Botas de oro</option>
                            <option value="3">Botas netherite</option>
                            <option value="4">Botas de hierro</option>
                        </select>
                    </div>
                    
                    <div className="option_container">
                        <label for="car-select">Escribe una nombre para tu personaje:</label>
                        <input type="text" style={{padding: "10px"}} />
                        
                    </div>
                    

                    <button className="submit" type="submit">Armar a mi personaje</button>

                   
                </form>

                

                <div className=" name_container">
                        <p className="user">Nombre</p>

                    <div className="display">
                        <img className="steve" src="steve.png" alt="" />

                        <img className="casco" src="casco_hierro.png" alt="" />
                        <img  className="pechera" src="pechera_netherite.png" alt="" />
                        <img className="pantalones" src="pantalon_diamante.png" alt="" />
                        <img className="botas" src="botas_hierro.png" alt="" />


                    </div>
                    
                    
                </div>
            </div>
        </>
    )
}