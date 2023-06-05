import {useReducer} from 'react';


function reducer(state,actions){
  switch (actions.type) {
    case 'Increment':
      return {count: state.count + 1};
    case 'Decrement':
      return { count: state.count - 1};
    default:
      return state
  }
}

function App() {

  const [state,dispatch] = useReducer(reducer,{count:0});
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-slate-500 gap-10'>
      <button 
        className='px-3 py-1 bg-violet-400 border-2 border-violet-700 rounded-xl text-gray-50 font-medium text-4xl'
        onClick={()=> dispatch({type : 'Increment'})}
      >
        Increment
      </button>
      
      <span className='text-4xl font-bold text-white'>{state.count}</span>
      
      <button 
        className='px-3 py-1 bg-violet-400 border-2 border-violet-700 rounded-xl text-gray-50 font-medium text-4xl'
        onClick={()=> {
          if(state.count > 0){
          dispatch({type : 'Decrement'})}
        }}
      >
        Decrement
      </button>

    </div>
  );
}

export default App;
