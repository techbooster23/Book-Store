import React from 'react'

function Card({book}) {
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border-white border-[1px]">
                <figure>
                    <img
                    className=''
                        src={book.image}
                        alt="Shoes"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {book.name}
                        <div className="badge badge-secondary">{book.type}</div>
                    </h2>
                    <p>{book.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">${book.price}</div>
                        <div className="px-2  rounded-full border-[1px] border-black hover:bg-pink-500 duration-200 hover:text-white hover:border-white">buy now</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card