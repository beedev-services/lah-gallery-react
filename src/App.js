import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import './css/core.css'

// Main imports
import Home from './components/Home'
import Family from './components/family/Family'
import Senior from './components/senior/Senior'
import Baby from './components/baby/Baby'
import Wedding from './components/wedding/Wedding'
// import Toy from './components/holidays/Toy'
// import Easter from './components/holidays/Easter'
// import Sports from './components/events/Sports'
// import Nature from './components/events/Nature'
// import Special from './components/events/Special'

// 2019 imports
import Sep2919a from './components/family/2019/Sep2919a'
import Oct0519a from './components/family/2019/Oct0519a'
import Nov0319a from './components/family/2019/Nov0319a'
import Dec2219c from './components/family/2019/Dec2219c'

// import Sep2819a from './components/senior/Sep2819a'
// import Oct0319a from './components/senior/Oct0319a'
// import Nov0619a from './components/senior/Nov0619a'

// import Sep2719a from './components/baby/Sep2719a'
// import Sep2719a from './components/baby/Sep2719a'
// import Sep2719a from './components/baby/Sep2719a'
// import Sep2719a from './components/baby/Sep2719a'
// import Sep2719a from './components/baby/Sep2719a'

// import Page2019a from './components/holidays/Page2019a'
// import Page2019b from './components/holidays/Page2019b'
// import Page2019c from './components/holidays/Page2019c'
// import Page2019d from './components/holidays/Page2019d'
// import Page2019e from './components/holidays/Page2019e'

// 2020 imports
import Jan1420a from './components/family/2020/Jan1420a'
import Jan1920a from './components/family/2020/Jan1920a'
import Jan2520a from './components/family/2020/Jan2520a'
import Feb2520b from './components/family/2020/Feb2520b'
import Mar2120a from './components/family/2020/Mar2120a'

// import Mar2720a from './components/senior/Mar2720a'

// import Sep2719a from './components/baby/Sep2719a'
// import Sep2719a from './components/baby/Sep2719a'
// import Sep2719a from './components/baby/Sep2719a'
// import Sep2719a from './components/baby/Sep2719a'
// import Sep2719a from './components/baby/Sep2719a'
// import Sep2719a from './components/baby/Sep2719a'
// import Sep2719a from './components/baby/Sep2719a'
// import Sep2719a from './components/baby/Sep2719a'
// import Sep2719a from './components/baby/Sep2719a'

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
          <Route path="/family/jan1420a">
            <Jan1420a />
          </Route>
          <Route path='/family/jan1920a'>
            <Jan1920a />
          </Route>
          <Route path='/family/jan2520a'>
            <Jan2520a />
          </Route>
          <Route path='/family/feb2520b'>
            <Feb2520b />
          </Route>
          <Route path='/family/mar2120a'>
            <Mar2120a />
          </Route>
          <Route exact path="/senior" component={Senior} />
          {/* <Route path='/senior/sep2819a'>
            <Sep2819a />
          </Route>
          <Route path='/senior/oct0319a'>
            <Oct0319a />
          </Route>
          <Route path='/senior/nov0619a'>
            <Nov0619a />
          </Route>
          <Route path='/senior/mar2720a'>
            <Mar2720a />
          </Route> */}
          <Route exact path="/baby" component={Baby} />

          <Route exact path="/wedding" component={Wedding} />

          {/* <Route exact path="/toy" component={Toy} /> */}
          {/* <Route path='toy/2019a'>
            <Page2019a />
          </Route>
          <Route path='toy/2019b'>
            <Page2019b />
          </Route>
          <Route path='toy/2019c'>
            <Page2019c />
          </Route>
          <Route path='toy/2019d'>
            <Page2019d />
          </Route>
          <Route path='toy/2019e'>
            <Page2019e />
          </Route> */}
          {/* <Route exact path="/easter" component={Easter} /> */}

          {/* <Route exact path="/sports" component={Sports} /> */}
          {/* <Route exact path="/nature" component={Nature} /> */}
          {/* <Route exact path="/specials" component={Special} /> */}
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