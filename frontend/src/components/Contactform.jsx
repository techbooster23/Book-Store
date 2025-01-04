import React from 'react'
import { useForm } from 'react-hook-form'
function Contactform() {
    
      const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm()
    
        const onSubmit = (data) => console.log(data)

    return (
        <div className='max-w-screen-2xl  container mx-auto md:px-20 px-4 pt-28 justify-center items-center flex'>
            <form  className='mt-4'  onSubmit={handleSubmit(onSubmit)}>
                <h1 className='font-bold text-4xl'>Contact Us</h1>

                {/* Email */}
                <label className=" flex  flex-col mt-4 gap-1">
                    Name
                    <input type="text" className="grow w-80 px-3 rounded-md border outline-none py-2" placeholder="Enter your name" {...register("name", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.name && <span className='text-red-500 text-sm'>This field is required</span>}
                </label>

                {/* Email */}
                <label className=" flex  flex-col mt-4 gap-1">
                    Email
                    <input type="email" className="grow w-80 px-3 rounded-md border outline-none py-2" placeholder="Enter your email" {...register("email", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
                </label>

                <label className=" flex  flex-col mt-4 gap-1">
                    Message
                    <textarea className="textarea textarea-bordered" placeholder="Type your message" {...register("message", { required: true })}></textarea>
                    {/* errors will return when field validation fails  */}
                    {errors.message && <span className='text-red-500 text-sm'>This field is required</span>}
                </label>
                <button className="btn bg-blue-500 text-white px-5 mt-4 rounded-md py-1 hover:bg-blue-700 duration-200" type='submit'>Submit</button>

                

            </form>
        </div>
    )
}

export default Contactform