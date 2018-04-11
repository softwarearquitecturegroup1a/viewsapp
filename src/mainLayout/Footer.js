import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
class Localizacion extends Component {
    render() {
        return (
            <View className="col-md-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Localizacion</h4>
                <Text className="lead mb-0">Carrera 45 # 26-85, Edif. Uriel Gutiérrez.
                    <br />Bogotá D.C.,  Colombia</Text>
            </View>
        );
    }
}

class Eslogan extends Component {
    render() {
        return (
            <View className="col-md-4 mb-5 mb-lg-0">
                <h6 className="text-uppercase mb-4">El uso de bicicletas no es perjudicial para la salud. Fomentese la realizacion de actividades fisicas en los menores de edad.</h6>
                <img className="img-fluid mb-5 d-block mx-auto" src="img/bike-white.png" style={{ width: "50%" }} alt="" />
            </View>
        );
    }
}

class Info extends Component {
    render() {
        return (
            <View className="col-md-4">
                <h4 className="text-uppercase mb-4">Sobre Bici-UN</h4>
                <p className="lead mb-0">Es un proyecto de clase creado por el equipo 1A, para el curso
                    <a href="http://sa.javergarav.academy"> Arquitectura de software</a>.</p>
            </View>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <footer className="footer text-center">
                <View className="container">
                    <View className="row">
                        <Localizacion />
                        <Eslogan />
                        <Info />
                    </View>
                </View>
            </footer>
        );
    }
}

export default Footer;
