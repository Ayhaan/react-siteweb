import React from 'react'

export default function Img() {
    const data = [
        {lien: "images/nature_small_1.jpg"},
        {lien: "images/nature_small_2.jpg"},
        {lien: "images/nature_small_3.jpg"},
        {lien: "images/nature_small_4.jpg"},
        {lien: "images/nature_small_5.jpg"},
        {lien: "images/nature_small_6.jpg"},
        {lien: "images/nature_small_7.jpg"},
        {lien: "images/nature_small_8.jpg"},
        {lien: "images/nature_small_9.jpg"},
        {lien: "images/nature_small_5.jpg"},
        {lien: "images/nature_small_4.jpg"},
        {lien: "images/nature_small_2.jpg"},
    ]
    return (
        <div className="row-img">
            {data.map( (el,i) => {
                return (
                    <div key={i} className="img">
                        <img src={el.lien}alt="naturel"/>
                    </div>
                )
            })}
        </div>
    )
}
