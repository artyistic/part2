const Person = ({persons, deleteHandler}) => {
    return (
      persons.map(person => 
        <li key={person.id}>
          {person.name} {person.number}
          <button key={-person.id} onClick={() => deleteHandler(person.name, person.id)}>delete</button>
        </li>
        )
    )
  }
  
  export default Person