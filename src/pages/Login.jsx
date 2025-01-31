import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../components/Authprovider';
import { createClient } from '@supabase/supabase-js';
import { useSupabase } from '../components/SupabaseProvider';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const Login = () => {
  const { supabase } = useSupabase();
  const { loginData, setLoginData } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async ({ username, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: username,
      password,
    });
    if (error) {
      console.error("Error logging in:", error);
    } else {
      console.log("Logged in:", data);
      sessionStorage.setItem("supabase.auth.token", JSON.stringify(data));
      setLoginData(data);
      // console.log(loginData);
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      setLoginData("");
      sessionStorage.removeItem("supabase.auth.token");
      if (error) throw error;
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div>
      <form className='h-screen max-w-7xl mx-auto px-20 md:px-26 lg:px-48 xl:px-48 border border-gray-300 rounded-lg bg-white space-y-8' onSubmit={handleSubmit(handleLogin)}>
        <h1 className='text-3xl py-24'><strong>Log ind</strong></h1>
        <div>
          <label className='text-xs' htmlFor="username">Brugernavn:</label>
          <br />
          <input
            className='w-full p-2 border-2 border-red-600'
            type="text"
            id="username"
            {...register("username", { required: true })}
          />
        </div>
        <div>
          <label className='text-xs' htmlFor="password">Password:</label>
          <br />
          <input
            className='w-full p-2 border-2 border-red-600'
            type="password"
            id="password"
            {...register("password", { required: true })}
          />
        </div>
        {errors.username && <div className="error">Username is required</div>}
        {errors.password && <div className="error">Password is required</div>}
        <button className='border-2 border-red-600 px-16 py-4' type="submit">Log ind</button>
      </form>
      {loginData && (
        <div>
          <p>Du er logget ind som {`${loginData.firstname} ${loginData.lastname} `}</p>
          <button onClick={handleLogout}>Log ud</button>
        </div>
      )}
    </div>
  );
};

export default Login;
