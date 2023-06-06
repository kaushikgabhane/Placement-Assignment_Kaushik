import React from 'react'

const Todo = ({todo,dispatch}) => {
  return (
    <div>
        <h1 className={todo.complete ? 'bg-red-400' :'bg-green-400' }>{todo.name}</h1>

        <button onClick={()=>{
            dispatch({type:'toggle' , payload:{id: todo.id}})
        }}>Toggle</button>

        <button onClick={()=>{
            dispatch({type:'delete' , payload:{id: todo.id}})
        }}
        >Delete</button>
    </div>
  )
}

export default Todo