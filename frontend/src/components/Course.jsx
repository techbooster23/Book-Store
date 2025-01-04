import React , {useState , useEffect} from 'react'
import Card from "./Card.jsx"
import { Link } from 'react-router-dom'
import axios from 'axios'   
import dotenv from 'dotenv'



function Course() {
   const [books, setBooks] = useState([])
   useEffect(() => {
    const getBooks = async () => {
        const { data } = await axios.get('http://localhost:4001/books');
        setBooks(data);
    }
    getBooks()
   }, [])
  
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28 justify-center text-center dark:bg-slate-900 dark:text-white'>
                <h1 className='text-2xl md:text-4xls'>We're delighted to have you <span className='text-pink-500'>here :) </span></h1>
                <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore possimus rem pariatur optio accusamus consequatur, voluptas nobis necessitatibus! Iste, quisquam! Et molestias dignissimos labore atque aperiam iure qui molestiae? Quasi.</p>
                <Link to="/">
                    <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 duration-200 mt-6'>Back</button>
                </Link>

            </div>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {books.map((book) => {
                    return (
                        <Card key={book.id} book={book} />
                    )
                })}
            </div>
        </>
    )
}

export default Course