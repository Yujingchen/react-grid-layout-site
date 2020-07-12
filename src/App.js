import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header'
import QuickStart from './QuickStart'
import Example from './Example'
import Footer from './Footer'
import Notfound from './Notfound'
import EFML from './EFML'
import './App.css';

function App() {
  // const routes = [
  //   {
  //     path: "/",
  //     component: Home,
  //     routes: [
  //       {
  //         path: "/home",
  //         component: Home,
  //       }
  //     ]
  //   },
  //   {
  //     path: "/guide",
  //     component: Guide,
  //     routes: [
  //       {
  //         path: "/guide/quick-start",
  //         component: Guide
  //       },
  //       {
  //         path: "/guide/efml",
  //         component: Guide
  //       }
  //     ]
  //   }
  // ];

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home" component={Home}>
        </Route>
        <Route exact path="/guide" component={QuickStart}>
        </Route>
        <Route exact path="/guide/quick-start" component={QuickStart}>
        </Route>
        <Route exact path="/guide/efml" component={EFML}>
        </Route>
        <Route exact path="/example" component={Example}>
        </Route>
        <Route component={Notfound} />
      </Switch>
      <Footer></Footer>
    </Router >
  )

}

export default App;
