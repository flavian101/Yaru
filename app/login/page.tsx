"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/homepage");
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 ">
        <fieldset className="fieldset  rounded-box w-full border p-6">
          <h1 className="mx-auto text-4xl font-bold">Login</h1>

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
              Don&apos;t have an account{" "}
              <Link className="link" href="/signup">
                Sign Up
              </Link>
            </p>
          </div>

          <button
            className="btn btn-neutral mx-auto block w-25 mt-4"
            onClick={() => console.log("email login")}
          >
            Login
          </button>
          <p className="flex justify-center py-5 font-bold items-center">Or</p>
          <button
            type="button"
            className="btn btn-lg flex items-center justify-center"
            onClick={() => console.log("Google login triggered")}
          >
            {" "}
            <Image
              src={
                "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/google.svg"
              }
              alt="google logo"
              width={20}
              height={20}
            />
            <span className="ml-2">Continue with Google</span>{" "}
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
