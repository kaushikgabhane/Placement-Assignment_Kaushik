import React, { useReducer } from 'react'
import {v4} from 'uuid';


import Button from './Button'
import BTN_VALUES from '../Constant/btnValue'

function reducer(state,action){
    switch (action.type) {
        case getValue:
            return {state:state.val + }            
    
        default:
            break;
    }
}

const Body = () => {

    const [state,dispatch] = useReducer(reducer,{val:''})

  return (
    <div className=' w-[50%] h-[70%] sm:w-[300px] sm:h-[500px] py-5  bg-gray-900 shadow-2xl shadow-blue-300 rounded-xl flex flex-col justify-around'>
        <h1
            className='h-32 w-[80%] mx-auto mb-2 rounded-lg border-2 border-cyan-300 bg-white'
        >
            {}
        </h1>
        <div>
            <div className='w-[70%] mx-10 flex justify-center gap-2'>
                <button
                className='py-3 px-5  w-[50%] bg-red-500 rounded-lg text-lg font-mono font-semibold text-gray-100 shadow-inner shadow-slate-100'

                >
                    AC
                </button>
                
                <button
                className='py-3 px-5 w-[50%] bg-red-300 rounded-lg text-lg font-mono font-semibold text-gray-100 shadow-inner shadow-slate-100'
                >
                    Clear
                </button>
            </div>
            <div className='flex flex-wrap mx-8 justify-center gap-2 my-2'>
                {
                    BTN_VALUES.map((v)=>{
                        return <Button key={v4()} value={v}/>
                    })
                }
            </div>
            <button
                className='py-3 px-5 w-[70%] mx-10 bg-green-500 rounded-lg text-lg font-mono font-semibold text-gray-100 shadow-inner shadow-slate-100'
                onClick={(e)=>{
                    
                }}
            >
                =
            </button>
        </div>
    </div>
  )
}

export default Body