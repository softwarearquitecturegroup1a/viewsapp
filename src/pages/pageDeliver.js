import React, { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';

class PageDeliver extends Component {
    render() {
        return (
            <section className="bg-info text-white mb-0" id="about" style={{ "paddingTop": "calc(6rem + 72px)" }}>
                <View className="container">
                    <h2 className="text-center text-uppercase text-white">Esperamos hayas disfrutado nuestro servicio.</h2>
                    <hr className="star-light mb-5"></hr>
        
                    <View className="text-center">
                        <Text className="lead text-center">Recuerda no exceder el tiempo de tu prestamo. El servicio es para todos.</Text>
                    </View>
        
                    <View className="text-center mt-4">
                        <a className="btn btn-xl btn-outline-light" style={{width: 200, height: 60}} href="/">
                        <i className="fa fa-download mr-2"></i>
                            Entregar
                        </a>
                    </View>
                </View>
            </section>
        );
    }
}

export default PageDeliver;