import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NavBar from './NavBar';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <View id="page-top" className="App">
                <NavBar />
                {this.props.children}
                <Footer />
            </View>
        );
    }
}

export default App;