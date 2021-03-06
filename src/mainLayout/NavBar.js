import React, { Component } from 'react';
import { Link, IndexLink } from "react-router";

import { StyleSheet, Text, View, ListView } from 'react-native';
import cookie from 'react-cookies';

class Logo extends Component {
  render() {
    return (
      <IndexLink className="navbar-brand js-scroll-trigger" to="/">Bici-UN</IndexLink>
    );
  }
}

function NavBarLink(props) {

  let session = cookie.load("session");

  if (session && props.requireSession) {
    return (<Link className={props.className} to={props.to}>{props.value}</Link>)
  } else if (!session && props.requireNoSession) {
    return (<Link className={props.className} to={props.to}>{props.value}</Link>)
  } else {
    return "";
  }
}

class LinksCollapse extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View className="collapse navbar-collapse" id="navbarResponsive">
        <ListView className="navbar-nav ml-auto">
          <ListView className="nav-item mx-0 mx-lg-1">
            <NavBarLink requireNoSession className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" value="Login" to="/login"/>
          </ListView>
          <ListView className="nav-item mx-0 mx-lg-1">
            <NavBarLink requireSession className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/perfil" value="Perfil"/>
          </ListView>
          <ListView className="nav-item mx-0 mx-lg-1">
            <NavBarLink requireSession className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/" value="Logout"/>
          </ListView>
        </ListView>
      </View>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded"
        type="button" data-toggle="collapse" data-target="#navbarResponsive"
        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
      <i className="fa fa-bars"></i>
      </button>
    );
  }
}

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
        <View className="container">
          <Logo />
          <Menu />
          <LinksCollapse />
        </View>
      </nav>
    );
  }
}

export default NavBar;
