import {useEffect, useState} from 'react'
function Filter() {
    const [input, setInput] = useState("")
  
    const[students, setStudents] = useState([])

    useEffect[()=>{
        fetch("https://my-json-server.typicode.com/troy1129/jsonplaceholder/data")
        .then((response)=>response.json())
        .then((data)=>setStudents(data))
    }, []]
  
  
    const renderStudents = () =>{
      return students.filter(student => student.id == input).map(filteredStudent => (
        <div>
        <p>Name: {filteredStudent.name}</p>
        <p>Age: {filteredStudent.age}</p>
        <p>Course: {filteredStudent.course}</p>
        <p>ID: {filteredStudent.id}</p>
        <hr />
      </div> 
      ))
    };
  
    // const handleSearch = () => {
    //   setInput(filteredStudents)
  
    // };
  
  
    return (
      <>
        <p>Input Student ID#</p>
        <input  onChange = {(e) => setInput(e.target.value)} value={input} />
        {/**/}
  {/* 
       <button onClick = {handleSearch}>Search</button>  */}
      {renderStudents()}
       {students}
  
      </>
    )
  }
  
  export default Filter;