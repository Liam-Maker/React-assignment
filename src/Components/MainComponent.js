import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './dishDetailComponent';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

  render(){

    const HomePage = () => {
      return(
        <Home />
      )
    }

    return (
      <div>
        <Header />
        <BrowserRouter>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home " />
        </Switch>
        </BrowserRouter>
        <Footer />
      </div>
       );
    }
  }
export default Main;