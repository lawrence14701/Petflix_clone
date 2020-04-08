import React from "react";
import WelcomePage from "./welcome_page/welcome_page_container";
import Login from "./auth/login_form_container";
import SignUp from "./auth/signup_form_container";

import HomePage from './home/homePageContainer';
import PlayMovie from './play_movie/play_movie_container';
import NavBar from './nav_bar/nav_container'

import Genre from './showGenre/genre_container';


import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Link, Switch, Route } from "react-router-dom";



const app = () => {
  return (
    <div>
      <Route exact path="/" component={WelcomePage} />

      <ProtectedRoute exact path='/browse' component={NavBar} />
      <ProtectedRoute exact path="/browse" component={HomePage} />
      <ProtectedRoute exact path="/watch/:movieId" component={PlayMovie}/>
      <ProtectedRoute exact path='/genre/:genreId' component={Genre}/>


      <AuthRoute path="/signup" component={SignUp} />
      <AuthRoute path="/login" component={Login} />
    </div>
  );
};

export default app;
