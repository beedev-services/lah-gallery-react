import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import './css/core.css'

import Home from './components/Home'
import Family from './components/family/Family'
import Senior from './components/Senior'
import Baby from './components/Baby'
import Wedding from './components/Wedding'
import Toy from './components/Toy'
import Easter from './components/Easter'
import Valentines from './components/Valentines'
import Sports from './components/Sports'

import Sep2919a from './components/family/2019/Sep2919a'
import Oct0519a from './components/family/2019/Oct0519a'
import Nov0319a from './components/family/2019/Nov0319a'
import Dec2219c from './components/family/2019/Dec2219c'

export default function App() {

  return (
    <div className="App">
      <div className='header'>
        <img src="https://images.lah-photography.com/logo.jpg" alt="lah" />
        <nav>
          <a href="https://lah-photography.com">Home</a>
          <Link to="/">Gallery Home</Link>
          <a href="https://archive.lah-photography.com">Archives</a>
          <a href="https://lah-photography.com/contact">Contact</a>
        </nav>
      </div>
      <div className='main'>
      <Switch>
          <Route exact path="/family" component={Family} />
          <Route path="/family/sep2919a">
            <Sep2919a />
          </Route>
          <Route path="/family/oct0519a">
            <Oct0519a />
          </Route>
          <Route path='/family/nov0319a'>
            <Nov0319a />
          </Route>
          <Route path='/family/dec2219c'>
            <Dec2219c />
          </Route>
          <Route path="/senior" component={Senior} />
          <Route path="/baby" component={Baby} />
          <Route path="/wedding" component={Wedding} />
          <Route path="/toy">
            <Toy />
          </Route>
          <Route path="/easter">
            <Easter />
          </Route>
          <Route path="/valentines">
            <Valentines />
          </Route>
          <Route path="/sports">
            <Sports />
          </Route>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
      <div className='footer center'>
        <p>(c) Copyright 2020</p>
        <p><a href="https://beedev-itservices.com">Made by BeeDev Services</a> <img src="https://images.craftsnherbs.com/beedev/beelogo.jpg" alt="beedev logo" /></p>
        <p><a href="mailto:webmaster@lah-photography.com">webmaster@lah-photography.com</a></p>
      </div>
    </div>
  )
}