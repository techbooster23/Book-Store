import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthProvider'

function Logout() {

    const [authUser, setAutUser] = useAuth()

    const handleLogout = async () => {
        try {
            await setAutUser({
                ...authUser,
                user : null
            })
            await localStorage.removeItem("user")
            toast.success("Logged out successfully")
            window.location.reload()
           
        } catch (error) {
            toast.error("error : ", error)
        }
      
   }

   

  return (
    <div>
        <button className='px-3 py-2 bg-red-500 rounded-md cursor-pointer' onClick={handleLogout}>Logut</button>
    </div>
  )
}

export default Logout