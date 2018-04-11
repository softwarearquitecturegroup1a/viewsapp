import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Request extends Component{
    constructor(props){
        super(props);
        this.state = {
            start: '',
            end:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleStartChange(event){
        this.setState({start: event.target.value});
                
    }

    handleEndChange(event){
        this.setState({end: event.target.value});
                
    }

    handleSubmit(event){
        event.preventDefault();
        const start = this.state.start;
        const end = this.state.end;
    }
}
class PageRequest extends Component {
    render() {
        return (
            <section id="request">
                <View class="container">
                    <h2 class="text-center text-uppercase text-secondary mb-0">Inicia tu viaje</h2>
                    <hr class="star-dark mb-5" />
                    <View class="row">
                    <View class="col-lg-8 mx-auto">
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                        <View class="control-group">
                            <View class="form-group floating-label-form-group controls mb-0 pb-2 text-center">
                            <h5 class="text-center">Estacion de inicio</h5>
                            <select class="form-control text-center" id="start" required="required">
                                <option>Edificio CyT</option>
                                <option>Entrada Calle 26</option>
                                <option>Entrada Edificio Uriel Gutierrez</option>
                                <option>Entrada Calle 53</option>
                                <option>Entrada Calle 45</option>
                            </select>
                            <Text class="help-block text-danger"></Text>
                            </View>
                        </View>
                        <View class="control-group">
                            <View class="form-group floating-label-form-group controls mb-0 pb-2 text-center">
                            <h5 class="text-center">Estacion de destino</h5>
                            <select class="form-control text-center" id="end" required="required">
                                <option>Edificio CyT</option>
                                <option>Entrada Calle 26</option>
                                <option>Entrada Edificio Uriel Gutierrez</option>
                                <option>Entrada Calle 53</option>
                                <option>Entrada Calle 45</option>
                            </select>
                            <Text class="help-block text-danger"></Text>
                            </View>
                        </View>
                        <br />
                        <View id="success"></View>
                        <View class="form-group text-center">
                            <button type="submit" class="btn btn-primary btn-xl" id="sendMessageButton">Solicitar</button>
                        </View>
                        </form>
                    </View>
                    </View>
                </View>
            </section>



        );
    }
}

export default PageRequest;
