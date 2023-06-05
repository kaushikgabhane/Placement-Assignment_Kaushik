import React from 'react';
import { useContext } from 'react';
import { themeContext } from '../App';

const Signup = () => {
    const {dark , setDark} = useContext(themeContext);


    return(
        <>
            <form 
            className={dark ? 'h-[80vh] w-[30vw] border-2 border-blue-200 shadow-2xl shadow-blue-300 py-2 rounded-lg flex flex-col justify-center mt-10 bg-slate-800':'h-[80vh] w-[30vw] border-2 border-blue-400 shadow-2xl bg-slate-100 py-2 shadow-blue-300 rounded-lg flex flex-col justify-center mt-10'}
            >
                <header
                    className={dark ? 'p-2 m-auto text-2xl font-semibold font-mono text-white':'p-2 m-auto text-2xl font-semibold font-mono'}
                    >
                    Signup
                </header>
                
                {dark ? <button 
                    className='shadow-md bg-slate-200 m-auto px-2 rounded-md text-sm animate-pulse'
                    onClick={(e)=> {
                        e.preventDefault();
                        setDark(!dark)}
                    }
                >
                 Light
                </button>

                :
                <button 
                    className='shadow-md bg-slate-500 text-white m-auto px-2 rounded-md text-sm animate-pulse'
                    onClick={(e)=> {
                        e.preventDefault();
                        setDark(!dark)}
                    }
                >
                 Dark 
                </button>}

                <div
                    className='box-border flex flex-col m-5'
                >
                    <label className={dark? ' text-white text-lg font-medium font-mono':'text-lg font-medium font-mono'}>First Name</label>
                    <input 
                        type='text'
                        title='Enter your first name'
                        className='outline-none border-2 border-gray-200 rounded-md'
                    />
                </div>

                <div
                    className='box-border flex flex-col m-5'           
                >
                    <label className={dark? ' text-white text-lg font-medium font-mono':'text-lg font-medium font-mono'}>Last Name</label>
                    <input 
                        type='text'
                        title='Enter your Last name'
                        className='outline-none border-2 border-gray-200 rounded-md'
                    />
                </div>

                <div
                    className='box-border flex flex-col m-5'
                >
                    <label className={dark? ' text-white text-lg font-medium font-mono':'text-lg font-medium font-mono'}>Email</label>
                    <input 
                        type='email'
                        className='outline-none border-2 border-gray-200 rounded-md'
                        title='Enter your Email '
                    />
                </div>

                <div
                    className='box-border flex flex-col m-5'
                >
                    <label className={dark? ' text-white text-lg font-medium font-mono':'text-lg font-medium font-mono'}>Password</label>
                    <input 
                        type='password'
                        className='outline-none border-2 border-gray-200 rounded-md'
                        title='Enter your password '
                    />
                </div>
                <button 
                    className='text-lg font-mono font-semibold px-2 shadow-md bg-green-300 m-auto rounded-xl text-gray-800'
                >
                    Submit
                </button>
            </form>
        </>
    );
 }

 export default Signup;