import React ,{useState} from "react";
// hook --> useState
const Contador = (props) => {
    const [cuenta, setCuenta] = useState(props.count);
    const [edad, setEdad] = useState(props.age);
    return(
        <>
            <p>Presionaste el boton {cuenta} veces</p>
            <button onClick={()=>setCuenta(cuenta+1)}>
                Haz Click
            </button>
            <p>Tu edad es {edad} años</p>
            <button onClick={()=>setEdad}></button>
        </>
    )
}
export default Contador;