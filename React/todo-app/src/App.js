import React ,{ useReducer,useState } from 'react'
import {v4} from 'uuid'
import Todo from './Component/Todo';

function reducer(todos,action){
  switch (action.type) {
    case 'add_todo':
      return [...todos , newTodo(action.payload.name)]
    case 'toggle':  
      return todos.map(todo =>{
        if(todo.id === action.payload.id){
          return {...todo , complete : !todo.complete}
        }
        return todo;
      })
    case 'delete':  
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      break;
  }

}

function newTodo(name){
  return {id: Date.now() , name , complete: false }
}


function App() {
  const [todos,dispatch] = useReducer(reducer,[])
  const [name,setName] = useState('')

  function handleSubmit(e){
    dispatch({type: 'add_todo' , payload: {name:name}})
    setName('');
    e.preventDefault();
  }


  return (
    <>
    <form onSubmit={handleSubmit} >
      <input 
        type='text' 
        value={name} 
        onChange={(e)=>{
          e.preventDefault();
          setName(e.target.value);
        }}
      />
    </form>

    {
      todos.map((todo)=>{
        return <Todo key={v4()} todo={todo} dispatch={dispatch}/>
      })
    }
    </>
  );
}

export default App;
