import React from 'react'

export default function Team() {
    const data = [
        {img: "images/person_1.jpg"},
        {img: "images/person_2.jpg"},
        {img: "images/person_3.jpg"}
    ]
    return (
        <div className="team-row">

            {data.map( (el,i) => {
                return(
                <div key={i} className="card-team">
                    <div>
                        <img src={el.img} alt="equipe"/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos nobis labore vero corporis veritatis enim quasi nesciunt? Quo asperiores itaque molestiae repellat necessitatibus obcaecati eos, error repellendus maxime autem sequi!</p>
                    <i className="fab fa-twitter"></i>               
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook-f"></i>
                </div>
                )
            })}

        </div>
    )
}
