import { useState, useEffect } from "react";

export default function Exemple() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        localStorage.setItem('count', count.toString())
        document.title = `Conteggio ${count}`;
        console.log('useEffect');
    }, [count]);

    return (
        <div>
            <p>Conteggio: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementa</button>
        </div>
    )

}