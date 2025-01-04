import React from 'react'
import books from "../assets/books.json"
import Slider from "react-slick";
import Card from "./Card.jsx";

function Freebook() {
    const freebooks = books.filter((book) => {
        return book.type === "Free";
    });

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
                        {freebooks.map((book , id)=>{
                            return (
                                <Card key ={id} book = {book}/>
                            )
                        })}
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Freebook