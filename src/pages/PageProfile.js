import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class PageProfile extends Component {
    render() {
        return (

<section id="perfil" style={{ "paddingTop": "calc(6rem + 72px)" }}>
  <View class="container">
    <h2 class="text-center text-uppercase text-secondary mb-0">Perfil del Usuario</h2>
    <hr class="star-dark mb-5" />
    <View class="row">
      <View class="col-lg-8 mx-auto">
        <form name="sentMessage" id="contactForm" novalidate="novalidate">
          <View class="control-group">
            <View class="form-group floating-label-form-group controls mb-0 pb-2 text-center">
              <h5 class="text-center">Nombre</h5>
            </View>
          </View>
          
          <View class="control-group">
            <View class="form-group floating-label-form-group controls mb-0 pb-2 text-center">
              <h5 class="text-center">Apellido</h5>
            </View>
          </View>
          
          <View class="control-group">
            <View class="form-group floating-label-form-group controls mb-0 pb-2 text-center">
              <h5 class="text-center">Documento</h5>
            </View>
          </View>              
        </form>
      </View>
    </View>
  </View>
  
  <View class="container">
    <hr size="2px" color="black" />
    <h3 class="text-center text-uppercase text-secondary mb-0">Historial de Prestamos</h3>
    <View class="row">
      <View class="col-lg-8 mx-auto">
      </View>
    </View>
  </View>
  
</section>

        );
    }
}

export default PageProfile;
