import React, { Fragment } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Mission from '../components/Mission'
import Team from '../components/Team'

export default function About() {
    return (
        <Fragment>
            < Header />
            <section className='about'>
                <h1>About</h1>
                < Mission />
                < Team />
            </section>
            < Footer />
        </Fragment>
    )
}
