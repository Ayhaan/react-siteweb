import React from 'react'

export default function ServiceCard() {
    const data = [
        {icon : "fas fa-camera-retro", titre:"Camera", prix:"$29"},
        {icon : "fas fa-photo-video", titre:"Wedding Photo", prix:"$29"},
        {icon : "fas fa-horse-head", titre:"Animal", prix:"$29"},
        {icon : "fas fa-portrait", titre:"Portrait", prix:"$29"},
        {icon : "fas fa-plane-departure", titre:"Travel", prix:"$29"},
        {icon : "fas fa-film", titre:"Video Editing", prix:"$29"},
    ]
    return (
        <div className="service-card">
            {data.map( (el,i) => {
                return(
                    <div key={i} className="card">
                        <i className={el.icon}></i>
                        <h2>{el.titre}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquid, fuga necessitatibus quae?</p>
                        <span>{el.prix}</span>
                    </div>
                )
            })}
        </div>
    )
}
