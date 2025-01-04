import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Login from './Login'
function Signup() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div id="my_modal_4" className="h-screen flex items-center justify-center">
            <div className="modal-box dark:bg-slate-900 dark:text-white">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <Link to="/"><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>

                </form>

                <h3 className="font-bold text-lg">Sign up</h3>

                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    {/* Name */}
                    <label className=" flex  flex-col mt-4 gap-1">
                        Name
                        <input type="text" className="grow w-80 px-3 rounded-md border outline-none py-2" placeholder="name" {...register("name", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.text && <span className='text-red-500 text-sm'>This field is required</span>}
                    </label>

                    {/* Email */}
                    <label className=" flex  flex-col mt-4 gap-1">
                        Email
                        <input type="email" className="grow w-80 px-3 rounded-md border outline-none py-2" placeholder="Enter your email" {...register("email", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
                    </label>

                    {/* Password */}
                    <label className=" flex  flex-col mt-4 gap-1">
                        Password
                        <input type="password" className="grow w-80 px-3 rounded-md border outline-none py-2" placeholder="Enter your password here" {...register("password", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.password && <span className='text-red-500 text-sm'>This field is required</span>}
                    </label>

                    <div className='flex flex-row justify-around items-center'>
                        <button className="btn bg-pink-500 text-white px-5 mt-4 rounded-md py-1 hover:bg-pink-700 duration-200" type='submit'>Sign up</button>
                        <Link to="">Already have an account<span className='underline text-blue-500' onClick={() => document.getElementById('my_modal_3').showModal()}>Login </span></Link>
                    </div>
                </form>
                <Login />
            </div>
        </div>
    )
}

export default Signup