import React from 'react';
import {
  NavDropdown,
  Nav,
  Navbar
} from 'react-bootstrap/';
import {
  NavLink
} from 'react-router-dom'
import '../App.css';

class Header extends React.Component {

  render() {
    return (

      <
      Navbar bg = "dark"
      variant = "dark" >
      <
      Nav className = "ms-auto" > {
        this.props.loggedInStatus === "LOGGED_IN" ?
        <
        > < NavLink to = "/gamepage"
        className = "btn " > < i className = "categories" > Game Categories < /i></NavLink >
        <
        NavDropdown.Divider / >
        <
        NavLink to = "/tps"
        className = "btn " > < i className = "tps" > TPS < /i></NavLink >
        <
        NavDropdown.Divider / >
        <
        NavLink to = "/rts"
        className = "btn " > < i className = "rts" > RTS < /i></NavLink >
        <
        NavDropdown.Divider / >
        <
        NavLink to = "/openworld"
        className = "btn " > < i className = "openw" > Open World < /i></NavLink >
        <
        NavDropdown.Divider / >
        <
        NavLink to = "/battlearena"
        className = "btn " > < i className = "moba" > MOBA < /i></NavLink >
        <
        NavDropdown.Divider / >
        <
        NavLink to = "/battleroyale"
        className = "btn " > < i className = "battleroyale" > Battle Royale < /i></NavLink >
        <
        NavDropdown.Divider / >
        <
        NavLink to = "/fps"
        className = "btn " > < i className = "fps" > FPS < /i></NavLink >
        <
        NavDropdown.Divider / >
        <
        /> :
        null
      } {
        this.props.loggedInStatus === "NOT_LOGGED_IN" ?
          <
          > < NavLink to = "/home"
        className = "btn brand" > < i className = "home" > FUVU < /i></NavLink >
          <
          NavLink to = "/sign-in"
        className = "btn" > < i className = "sign-in" > Sign In < /i></NavLink >
          <
          NavLink to = "/sign-up"
        className = "btn" > < i className = "sign-up" > Sign Up < /i></NavLink > < />: null
      } <
      /Nav> < /
      Navbar >
    );
  }
}

export default Header;
