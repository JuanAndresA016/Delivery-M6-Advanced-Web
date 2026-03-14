import NavBar from "../navBar/Navbar"
import "./Dashboard.css";


export default function Dashboard(){

    return(
        <>
            <NavBar />

            <div className="contenido">
                <h1>Explicación flujo de datos y código</h1>

                <h2>Frontend</h2>

                <h3>Armadura</h3>

                <p>Para la armadura se maneja con imagenes, la principal siendo la del personaje sin armadura, las demás imagenes son una serie de 
                    opciones que de igual manera son imagenes, y se superponen a la imagen principal del personaje, dando la impresión que la armadura 
                    ahora es parte del personaje, esto se hizo utilizando HTML y CSS, especificamente reglas de posicionamiento, donde el elemento padre 
                    que es el contenedor de las imagenes tiene una posicion relativa y los elementos hijos que son las imagenes, tienen una posicion absoluta,
                    con un ancho ya definido para que no cambien las dimensiones del contenedor padre, asi se logró que no importara el ancho de la pantalla, la armadura se siga 
                    viendo donde tiene que verse
                </p>

                <h3>Formulario</h3>
                <p>
                    En la parte del frontend se crea un formulario que maneja 5 campos dentro de un fromulario, en cuanto ese formulario se sube, se ejecuta
                    una función que manda los datos del fromulario al backend, lo único que se manda son los id values de las opciones seleccionadas, el backend regresa la ruta de las imagenes a superponer
                    y utilizando el metodo innerHTML que ofrece JavaScript, se reconstruye el contenido dentro del contenedor padre, pero ahora con las imagenes de las opciones seleccionadas.
                </p>

                <h2>Backend</h2>

                <h3>Controladores</h3>

                <p>Se manejo unicamente un controlador para definir una ruta en la cual se pudiera hacer la peticion de todos los valores seleccionados, 
                    porque de otra manera tendriamos que haber hecho un request al backend por cada campo del formulario, lo cual no lo hace eficiente, se utiliza el metodo GET para la obtencion de las rutas de las imagenes
                </p>

                <h3>DTO</h3>

                <p>Al investigar un poco mas a profundidad, nos dimos cuenta que si queriamos simular que las rutas de las imagenes estaban guardados en una base de datos, necesitabamos crear una clase con todos estos requisitos, donde 
                    se guarda el id de esa imagen, y su ruta
                </p>

                <h3>Servicios</h3>

                <p>Una vez teniendo acceso a esa simulación de como vendrian los datos de la base de datos, ahora hicimos en el servicio que dependiendo de los parametros solicitados regresara en un hashMap los datos con sus respectivos nombres, ejemplo "{"{pechera: 'pechera_oro.png' }"}" en dado caso que solo
                    se hay solicitado la pechera, el hashMap nos ayudó mucho para que los datos se regresaran en formato JSON y fuera mas facil de manipular una vez obteniendo los datos en JS </p>

                    <h3>CORS</h3>

                    <p>Por último, los CORS definen que direcciones tienen "permiso" de solicitar datos al backend, lo definimos utilizando la ruta "localhost:5173" la cual es donde viennen las peticiones</p>
            </div>
        </>
    )
}