import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class PageHome extends Component {
    render() {
        return (
            <header className="masthead bg-info text-white text-center">
                <View className="container">
                    <img className="img-fluid mb-5 d-block mx-auto" src="assets/images/bike-white.png" style={{ width: "40%" }} alt="" />
                    <h1 className="text-uppercase mb-0">Bici-UN</h1>
                    <hr className="star-light" />
                    <h2 className="font-weight-light mb-0">Sabemos que llegar a tiempo no es tarea facil. Nosotros te ayudamos.</h2>
                </View>
            </header>
        );
    }
}

export default PageHome;
