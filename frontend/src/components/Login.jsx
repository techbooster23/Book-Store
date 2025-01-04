import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <>
            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
                    <form method="dialog" >
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Login</h3>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
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
                            <button className="btn bg-pink-500 text-white px-5 mt-4 rounded-md py-1 hover:bg-pink-700 duration-200" type='submit'>Login</button>
                            <Link to="/register">Not registered? <span className='underline text-blue-500' >Sign up</span></Link>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default Login