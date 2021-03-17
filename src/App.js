import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Gallery1 from './pages/Gallery1'
import Gallery2 from './pages/Gallery2'
import Service from './pages/Service'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/gallery1' component={Gallery1}/>
        <Route exact path='/gallery2' component={Gallery2}/>
        <Route exact path='/service' component={Service}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  )
}


