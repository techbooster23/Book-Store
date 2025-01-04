import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import Card from "./Card.jsx";
import axios from 'axios'

function Freebook() {
    const [books, setBooks] = useState([])
   useEffect(() => {
    const getBooks = async () => {
        const { data } = await axios.get('http://localhost:4001/books');
        const freebooks = data.filter(book => book.type === "Free");
         
        setBooks(freebooks);
    }
    getBooks()
   }, [])


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto mt-4 md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
                <h2 className='font-semibold text-xl pb2'>
                    Free offered Ebooks
                </h2>
                <div className=' mt-4'>
                    <Slider {...settings}>
                        {books.map((book , _id)=>{
                            return (
                                <Card key ={_id} book = {book}/>
                            )
                        })}
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Freebook