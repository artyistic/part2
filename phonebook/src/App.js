import { useState, useEffect} from 'react'
import Persons from './components/Persons'
import Submit from './components/Submit'
import Filter from './components/Filter'
import Msg from './components/Msg'
import phonebookService from './services/phonebookService'
const App = () => {
  const [persons, setPersons] = useState([])


  useEffect(() => {
    phonebookService
      .getALL()
      .then(response => setPersons(response))
  }, [])
  
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter] = useState('')
  const [msg, setMsg] = useState(null)

  const handleSubmit = (event) =>{
    event.preventDefault()
    if (newName === ''){
      alert('name field should not be empty')
      return
    }
    if (newNum === ''){
      alert('Number field should not be empty')
      return
    }
    const index = persons.findIndex( element => element.name === newName)
    
    if (persons.findIndex( element => element.num === newNum) !== -1){
      console.log(`${newNum} is already added to phonebook`)
      return
    }


    let personObj
    if (index !== -1){
      if(window.confirm(`${newName} is already added to phonebook! Do you want to replace the number`)){
        const id = persons[index].id
        const person = persons[index]
        personObj = {...person, number: newNum}
        phonebookService
          .replace(id, personObj)
          .then(response => setPersons(persons.map(person => (person.id !== id) ? person : personObj)))
          .catch(()=>{
            setMsg(`${newName} is already deleted from the phonebook`)
            setTimeout(() => setMsg(null), 5000)
          })
      }
    }
    else{
      personObj = 
      {
        name: newName,
        number: newNum,
        id: persons.length + 1
      }
      phonebookService
        .create(personObj)
        .then(returnedEntry => setPersons(persons.concat(returnedEntry)))
      
      console.log('submitted!')
    }
    setMsg(`${newName} is added to the phonebook`)
    setTimeout(() => setMsg(null), 5000)
  }

  const nameChange = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const numChange = (event) =>{
    console.log(event.target.value)
    setNewNum(event.target.value)
  }

  const filterChange = (event) =>{
    console.log('filter by', event.target.value)
    setFilter(event.target.value)
  }

  const personsFilter = (filter === '')
    ? persons
    : persons.filter(element => element.name.toLowerCase().includes(filter.toLowerCase()))

  const deleteHandler = (name, id) =>{
    if(window.confirm(`Do you really want to delete ${name}?`)){
      phonebookService
        .removeNumber(id)
        .then(entry => {
          setPersons(persons.filter(person => person.id !== id))
      console.log("deleted")
      })
    }
    else{
      console.log(`deletion of ${name} cancelled`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Msg msg={msg}/>
      <Filter filterChange={filterChange}/>
      <h2>Add a new</h2>
      <Submit handleSubmit={handleSubmit} nameChange={nameChange} numChange={numChange}/>
      <h2>Numbers</h2>
      <Persons persons={personsFilter} deleteHandler={deleteHandler}/>
    </div>
  )
}


export default App