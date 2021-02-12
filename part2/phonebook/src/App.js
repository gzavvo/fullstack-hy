import React, { useState } from 'react'

function App() {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' },
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return false
    }

    const personObject = {
      name: newName
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson} >
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <table>
        <tbody>
          {
            persons.map(person => {
              return <tr key={person.name}><td>{person.name}</td></tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
