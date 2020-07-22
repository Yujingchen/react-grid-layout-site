import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import QuickStart from './QuickStart'
import Example from './Example'
import Footer from './Footer'
import Notfound from './Notfound'
import ScrollToTop from './ScrollToTop'
import ResponsiveUsage from './ResponsiveUsage'
import GridLayoutProps from './GridLayoutProps'
import GridItemProps from './GridItemProps'
import Performance from "./Performance"
import EventHandle from './EventHandle'
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/home" component={Home}>
        </Route>
        <Route exact path="/guide" component={QuickStart} />
        <Route exact path="/guide/quick-start" component={QuickStart} />
        <Route exact path="/guide/responsive-usage" component={ResponsiveUsage} />
        <Route exact path="/guide/grid-layout-props" component={GridLayoutProps} />
        <Route exact path="/guide/performance" component={Performance} />
        <Route exact path="/guide/grid-item-props" component={GridItemProps} />
        <Route exact path="/guide/event-handling" component={EventHandle} />
        <Route exact path="/example" component={Example} />
        <Route component={Notfound} />
      </Switch>
      <Footer></Footer>
    </Router >
  )

}

export default App;
