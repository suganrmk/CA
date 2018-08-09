import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Text, ImageBackground, StyleSheet, View
} from 'react-native';

import Home from '../containers/home';
import Logo from './templates/Logo';
import SimpleForm from './pages/SimpleForm';
import bgSrc from '../../assets/images/wallpaper.png';



class Landing extends Component {
  render() {
    return (

      <ImageBackground style={styles.picture} source={bgSrc}>
        <Logo style={styles.logostyle} />
        <SimpleForm style={styles.loginform} />
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    flexDirection: 'column',
  },
  logostyle: {

  },
  loginform: {

  }
});
export default Landing;
