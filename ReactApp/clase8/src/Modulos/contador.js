import React ,{useState} from "react";
// hook --> useState
const Contador = () => {
    const [cuenta, setCuenta] = useState(0);
    return(
        <>
            <p>Presionaste el boton {cuenta} veces</p>
            <button onClick={()=>setCuenta(cuenta++)}>
                Haz Click
            </button>
        </>
    )
}
export default Contador;