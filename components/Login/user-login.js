import React from 'react'
import {  useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { useContext } from 'react'
import Input from 'common/Input/index.tsx'
import Button from 'common/Button/but-ton'
import Spinner from 'common/icons/spinner'
import Layout from 'common/Layout'
import { signIn } from 'next-auth/react'
import { getSession } from 'next-auth/react'
import { useSession } from "next-auth/react"



const Login = ({providers}) => {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({})

  
  const [error, SetError] = React.useState('')
  const [loading, SetLoading] = React.useState(false)
  const router = useRouter()

  const onFormSubmit = async (data, event) => {
      event.preventDefault();
      SetLoading(true)
      const { username, password } = data
  

      const result = await signIn('credentials', {
        redirect:false,
          username: username,
          password: password
        })
        console.log(result)
      if(result.ok){
       SetLoading(false)
       router.push('/admin')
      }
      if(result.error !== null){
        SetLoading(false)
        console.log(result)
        SetError(result.error)
      }

  }


  return (
    <>

    <div className='w-full flex justify-center py-[5rem]'>
    <div className="max-w-sm w-full flex flex-col items-center">
        <h1 className="text-large-semi uppercase mb-6">Welcome back</h1>
        <p className="text-center text-base-regular text-gray-700 mb-8">
          Sign in to edit the website
        </p>
        <form className="w-full" onSubmit={handleSubmit(onFormSubmit)}>
          <div className="flex flex-col w-full gap-y-2">
            <Input
              label="username"
              {...register("username", { required: "username is required" })}
              autoComplete="Username"
              errors={errors}
            />
            <Input
              label="Password"
              {...register("password", { required: "Password is required" })}
              type="password"
              autoComplete="current-password"
              errors={errors}
            />
                        <Input
              label=""
              {...register("credentialsID")}
              type="hidden"
              autoComplete="credentialsID"
              errors={errors}
            />
          </div>
          {error && (
            <div>
              <span className="text-rose-500 w-full text-small-regular">
{error}              </span>
            </div>
          )}
          <Button type='submit' className="mt-6">{loading ? <Spinner/> : 'Login'}</Button>
        </form>
        <span className="text-center text-gray-700 text-small-regular mt-6">
          Not a member?{" "}
          <button
            onClick={() => setCurrentView('Register')}
            className="underline"
          >
            Join us
          </button>
          .
        </span>
      </div>

    </div>
 


    </>
  )
}



export default Login


