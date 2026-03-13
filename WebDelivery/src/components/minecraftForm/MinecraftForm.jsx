import React, {useState, useEffect} from "react"
import NavBar from "../navBar/Navbar"
import "./MinecraftForm.css";

export default function MinecraftForm() {

    const [arrayValues, setArrayValues] = useState([]);
    const [name, setName] = useState("");
    
   useEffect(() => {

    const container = document.querySelector(".display");

    let html = `<img class="steve" src="steve.png" alt="" />`;

    if (arrayValues.casco) {
        html += `<img class="casco" src="${arrayValues.casco}" alt="" />`;
    }

    if (arrayValues.pechera) {
        html += `<img class="pechera" src="${arrayValues.pechera}" alt="" />`;
    }

    if (arrayValues.pantalon) {
        html += `<img class="pantalones" src="${arrayValues.pantalon}" alt="" />`;
    }

    if (arrayValues.botas) {
        html += `<img class="botas" src="${arrayValues.botas}" alt="" />`;
    }

    container.innerHTML = html;

}, [arrayValues]);


    async function requestImageRoutes(e) {
        e.preventDefault();

        const cascoID = document.getElementById("casco-select").value;
        const pecheraID = document.getElementById("pechera-select").value;
        const pantalonID = document.getElementById("pantalon-select").value;
        const botasID = document.getElementById("botas-select").value;

        console.log(cascoID, pecheraID, pantalonID, botasID);

        const res = await fetch(`http://127.0.0.1:8080/?cascoID=${cascoID}&pecheraID=${pecheraID}&pantalonID=${pantalonID}&botasID=${botasID}`);

        const data = await res.json();
        setArrayValues(data)
        setName(document.getElementById("name").value)
    }


    return (
        <>
            <NavBar />

            <h1>Arma a tu personaje de Minecraft</h1>

            <div className="minecraftFormContainer">
                <form action="" className="minecraftForm" onSubmit={(e) => requestImageRoutes(e)}>

                    <div className="option_container">
                        <label for="casco-select">Escoge un casco:</label>
                        <select name="casco" id="casco-select">
                            <option value="">--Por favor escoge una opción--</option>
                            <option value="1">Casco de diamante</option>
                            <option value="2">Casco de oro</option>
                            <option value="3">Casco de netherite</option>
                            <option value="4">Casco de hierro</option>
                        </select>
                    </div>

                    <div className="option_container">
                        <label for="car-select">Escoge una pechera:</label>
                        <select name="cars" id="pechera-select">
                            <option value="">--Por favor escoge una opción--</option>
                            <option value="5">Pechera de diamante</option>
                            <option value="6">Pechera de oro</option>
                            <option value="7">Pechera netherite</option>
                            <option value="8">Pechera de hierro</option>
                        </select>
                    </div>

                    <div className="option_container">
                        <label for="car-select">Escoge un pantalon:</label>
                        <select name="cars" id="pantalon-select">
                            <option value="">--Por favor escoge una opción--</option>
                            <option value="9">Pantalon de diamante</option>
                            <option value="10">Pantalon de oro</option>
                            <option value="11">Pantalon netherite</option>
                            <option value="12">Pantalon de hierro</option>
                        </select>
                    </div>

                    <div className="option_container">
                        <label for="car-select">Escoge unas botas:</label>
                        <select name="cars" id="botas-select">
                            <option value="">--Por favor escoge una opción--</option>
                            <option value="13">Botas de diamante</option>
                            <option value="14">Botas de oro</option>
                            <option value="15">Botas netherite</option>
                            <option value="16">Botas de hierro</option>
                        </select>
                    </div>

                    <div className="option_container">
                        <label for="car-select">Escribe una nombre para tu personaje:</label>
                        <input type="text" id="name" style={{ padding: "10px" }} />

                    </div>


                    <button className="submit" type="submit">Armar a mi personaje</button>


                </form>



                <div className=" name_container">
                    {name == "" ? <span></span> : <p className="user">{name}</p>}
                    

                    <div className="display">



                    </div>


                </div>
            </div>
        </>
    )
}