import { useContext } from "react";
import { ProvaContext } from "./proveders/provaContext";

export default function Exemple() {

    const { count, setCount } = useContext(ProvaContext)



    return (
        <div>
            <p>Conteggio: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementa</button>
        </div>
    )

}