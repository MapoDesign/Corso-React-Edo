import { useReducer, useState } from 'react'
import './App.css'
import Card from './components/Card'
import CardForm from './components/CardForm';
import Exemple from './components/Exemple';

function handleClick() {
  alert("Ciao")
}

function handleChange(e) {
  console.log(e.target.value);
}

function handleSubmit(e) {
  e.preventDefault();
  alert("Modulo inviato")
}


function App() {
  const [count, setCount] = useState(0);

  const [cities, setCities] = useState([
    {
      id: 0,
      name: "Tokyo",
      descripion: "Description Tokyo",
      imgURL: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg",
      isVisited: true
    },
    {
      id: 1,
      name: "Rome",
      descripion: "Description Rome",
      imgURL: "https://images.pexels.com/photos/753639/pexels-photo-753639.jpeg",
      isVisited: false
    },
    {
      id: 2,
      name: "Milan",
      descripion: "Description Milan",
      imgURL: "https://images.pexels.com/photos/15207537/pexels-photo-15207537/free-photo-of-citta-punto-di-riferimento-luci-notte.jpeg",
      isVisited: true
    },
  ]);

  const addCity = (city) => {
    setCities([...cities, city])
  }

  function formReducer(state, action) {
    switch (action.type) {
      case "CHANGE_FIELD":
        return { ...state, [action.field]: action.value };

      case "RESET_FORM":
        return { name: '', email: '' };

      default:
        return state;
    }
  }

  const [formState, dispatchFormState] = useReducer(formReducer, { name: '', email: '' })

  const handleFieldChange = (field, value) => {
    dispatchFormState({ type: "CHANGE_FIELD", field, value })
  }

  const resetForm = (e) => {
    e.preventDefault()
    dispatchFormState({ type: "RESET_FORM" })
  }

  const sendForm = (e) => {
    e.preventDefault()
    console.log(formState);
  }

  return (
    <>
      <Exemple />

      <div className="card">
        <button onClick={handleClick}>
          alert
        </button>
        <input onChange={handleChange} />

        <form onSubmit={handleSubmit}>
          <button type='submit'>INVIA</button>
        </form>

      </div>

      <CardForm addCity={addCity} />

      {
        cities.map((city) => (
          <Card
            key={city.id}
            title={city.name}
            isVisited={city.isVisited}
            imgURL={city.imgURL}
          >
            {city.descripion}
          </Card>
        ))
      }

      <form>
        <div>
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" id="name" value={formState.name} onChange={(e) => handleFieldChange('name', e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" value={formState.email} onChange={(e) => handleFieldChange('email', e.target.value)} />
        </div>
        <button onClick={resetForm}>RESET</button>
        <button onClick={sendForm}>INVIA</button>
      </form>
    </>
  )
}

export default App
