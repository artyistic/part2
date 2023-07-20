const Submit = ({handleSubmit, nameChange, numChange}) =>{
  return(
    <>
			<form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={nameChange}/>
        </div>
        <div>
          number: <input onChange={numChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  	</>
  )
}

export default Submit