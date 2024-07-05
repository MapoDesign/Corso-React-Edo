import { useState } from "react";

export default function CardForm({ addCity }) {

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        imgURL: "",
        isVisited: true,
    })

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type == "checkbox" ? checked : value;
        setFormData({
            ...formData,
            [name]: inputValue,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const city = {
            id: Math.random(),
            name: formData.name,
            descripion: formData.description,
            imgURL: formData.imgURL,
            isVisited: formData.isVisited,
        };
        addCity(city)
    }
    return (
        <form onSubmit={handleSubmit} style={{ color: "white" }} className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rouded-lg">
            <div className="flex flex-col">
                <label>Nome Città</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} style={{ color: "grey" }} />
            </div>
            <div className="flex flex-col">
                <label>Descrizione</label>
                <input type="text" name="description" value={formData.description} onChange={handleInputChange} style={{ color: "grey" }} />
            </div>
            <div className="flex flex-col">
                <label>Immagine</label>
                <input type="text" name="imgURL" value={formData.imgURL} onChange={handleInputChange} style={{ color: "grey" }} />
            </div>
            <div>
                <input type="checkbox" name="isVisited" checked={formData.isVisited} onChange={handleInputChange} style={{ color: "grey" }} /><label>Visitata?</label>

            </div>
            <button type="submit" style={{ color: "grey" }}>Aggiungi Card</button>
        </form>
    )
}