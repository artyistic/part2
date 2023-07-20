const Filter = ({filterChange})=>{
    return(
        <form onSubmit={event => event.preventDefault()}>
        <div>
          filter by: <input onChange={filterChange}/>
        </div>
      </form>
    )
}

export default Filter