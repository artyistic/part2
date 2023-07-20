const Course = ({course}) =>{
    return (
      <div>
        <h1>{course.name}</h1>
        <table>
          <tbody>
            {course.parts.map(part => 
              <tr key={part.id}>
                <td>
                  {part.name}
                </td>
                <td>
                  {part.exercises}
                </td>
              </tr>)}
          </tbody>
        </table>
        <b>total of {course.parts.reduce((acc, next) => acc + next.exercises, 0)} exercises</b>
      </div>
    )
  }

  export default Course