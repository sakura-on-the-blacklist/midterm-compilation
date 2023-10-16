import './App.css'
import{BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import TodoMain from './TodoMain'
import Filter from './Pages/Filter'

function App() {

  return (
    <>
    <BrowserRouter>
    <Link to="/" >Go to ToDo App</Link>
    <Link to="/filter" style={{marginLeft: '20px'}}>Go to Filter Activity</Link>
    
    <Routes>
    <Route path='/' element={<TodoMain/>}/>
    <Route path='/filter' element={<Filter/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
