'use client'
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const[name,setName] = useState<string>('');
  const[email,setEmail] = useState<string>('');
  const[password,setPassword] = useState<string>('');

    
  const handleSubmit  = async(e: React.FormEvent) =>{
    e.preventDefault();
  }
   
   return(
   <div className="flex justify-center items-center min-h-screen">
            <form onSubmit={handleSubmit} className="w-full max-w-md p-6 ">
              
                <fieldset className="fieldset  rounded-box w-full border p-6">
                    <h1 className=" flex p text-center text-lg font-bold">Sign Up</h1>

                    <label className="name">Email</label>
                    <input
                        type="name"
                        className="input w-full"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label className="label">Email</label>
                    <input
                        type="email"
                        className="input w-full"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className="label">Password</label>
                    <input
                        type="password"
                        className="input w-full"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div>
                        <p>
                            alreade have an account?{' '}
                            <Link className='link' 
                            href="/login">
                                 log in
                            </Link>
                        </p>
                    </div>

                    <button className="btn btn-neutral w-full mt-4">Login</button>
                </fieldset>
            </form>
        </div>
   )
}
