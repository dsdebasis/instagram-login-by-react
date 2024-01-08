import logo from '../pngegg.png';
import { useState } from 'react';
import Login from './Login';
function Signup() {
  const [sign,setSign] = useState(true)
 
    
  if(sign){
    return (
      <div className='h-[100vh] w-[100vw] box-border    flex justify-center py-[2rem]'>
     
       <div className='w-[30vw] h-[60vh]'>
         
       <div className="h-[600px] w-[380px]">
         <div className="h-[80%] w-[100%] border-[1px] rounded-md border-black px-6  flex flex-col justify-around ">
           <div className="h-[10%] flex justify-center">
             <img src={logo} className='h-[6em]' />
           </div>
           <div className="h-[55%]  flex flex-col  box-border ">
   
             <div className="h-[100%] flex flex-col gap-y-2">
             <input className="w-full border-[1px] px-2 outline-none border-black bg-gray-50 hover:border-blue-700 py-2 rounded-sm" type="text" placeholder="Phone number or eamil"/>
             <input className="w-full border-[1px] px-2 outline-none border-black bg-gray-50 hover:border-blue-700 py-2 rounded-sm" type="text" placeholder="Fullname"/>
               <input className="w-full border-[1px] px-2 outline-none border-black bg-gray-50 hover:border-blue-700 py-2 rounded-sm" type="password" placeholder="Password" />
               <input className="w-full border-[1px] px-2 outline-none border-black bg-gray-50 hover:border-blue-700 py-2 rounded-sm" type="password" placeholder="Confirm Password" />
             </div>
             <div className="h-[10%]">
               <button className="w-full bg-sky-400 text-white py-2 rounded-lg">Sign Up</button>
             </div>
           </div>
         </div>
         <div className="h-[15%] w-[100%] border-[1px] rounded-md border-black my-6  flex justify-center items-center">
           <h1> Have an Account ? </h1>
           <button className='text-blue-700' onClick={()=>setSign(false)}>Login</button>
         </div>
       </div>
       </div>
      </div>
     )
  } else {
    return (
      <Login/>
    )
  }
  
}

export default  Signup;