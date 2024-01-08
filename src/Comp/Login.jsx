import logo from '../pngegg.png'
import hero from '../screenshot2.png'
import { useState } from 'react';
import Signup from './Signup';

import { FaFacebookSquare } from "react-icons/fa";
function Login() {
  const [login,setLogin]= useState(true);
  
  if(login){
    return (
      
        <div className='h-[100vh] w-[100vw] box-border    flex justify-center py-[2rem]'>
        
         <div className='w-[30vw] h-[60vh]'>
           
         <div className="h-[600px] w-[380px]">
           <div className="h-[72%] w-[100%] border-[1px] rounded-md border-black px-6  flex flex-col justify-around">
             <div className="h-[20%] flex justify-center">
               <img src={logo} className='h-[6em]' />
             </div>
             <div className="h-[35%]  flex flex-col  box-border ">
     
               <div className="h-[70%] flex flex-col gap-y-2">
                 <input className="w-full border-[1px] px-2 outline-none border-black bg-gray-50  hover:border-blue-800 py-2 rounded-sm text-black" type="text" placeholder="Phone number,username or eamil" />
                 <input className="w-full border-[1px] px-2 outline-none border-black bg-gray-50  hover:border-blue-800 py-2 rounded-sm text-black" type="Password" placeholder="Password" />
               </div>
               <div className="h-[10%]">
                 <button className="w-full bg-sky-400 text-white py-2 rounded-lg">Login</button>
               </div>
             </div>
             <h1 className='text-center'>
               or</h1>
             <div className="h-[30%]  flex flex-col justify-evenly items-center">
     
               <h1 className='flex items-center gap-x-2'><FaFacebookSquare /> Login With Facebook</h1>
               <h1>Forgot Password ?</h1>
             </div>
           </div>
           <div className="h-[15%] w-[100%] border-[1px] rounded-md border-black my-6  flex justify-center items-center">
             <h1>Don't Have an Account ? </h1>
             <button className="text-blue-500 hover:cursor-pointer" onClick={()=>{
               setLogin(()=> false)
             }}>Sign up</button>
           </div>
         </div>
         </div>
        </div>
    )
  } else if(login==false){
    return (
     <Signup/>
    )
  }
}

export default Login;