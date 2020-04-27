import React, {Component} from 'react';
import './Form.css';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';
import Question6 from './Question6';
import Question7 from './Question7';
import Question8 from './Question8';
import Question9 from './Question9';
import Question10 from './Question10';
import Question11 from './Question11';
import Question12 from './Question12';
import Question13 from './Question13';
import Question14 from './Question14';
import Question15 from './Question15';
import Question16 from './Question16';
import Question17 from './Question17';
import Question18 from './Question18';
import Question19 from './Question19';
import Question20 from './Question20';
import Question21 from './Question21';

class Form extends Component { 
    state = {
        step:1,
        reponse:'',
        name:'',
        radio:'',

       

    };

    nextStep = () => {
        const {step} = this.state;

        if(this.state.step == 2 && this.state.name == 'oui'){
            this.setState({step: 12})
        } else {
        this.setState({step: step + 1});
        }
    };

    prevStep= () => {
        const {step} = this.state;
        this.setState({step: step - 1});
    };

    inputChange = input => e => {
        this.setState({
            [input]:e.target.value
        });
    };

    render () {
        const { step } = this.state;
        const {name, email, phone, password, reponse, radio} = this.state;
        const values = { name, email, reponse, radio};

        switch (step) {
            case 1:
                return (
                    <Question1
                    nextStep={this.nextStep}
                    inputChange = {this.inputChange}
                    values = {values}
                    />
                );
            case 2: 
                return ( 
                    <Question2
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange = {this.inputChange}
                    values = {values}
                    />
                );
                case 3: 
                return ( 
                    <Question3
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange = {this.inputChange}
                    values = {values}
                    />
                );

                case 4: 
                return ( 
                    <Question4
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange = {this.inputChange}
                    values = {values}
                    />
                );

                case 5: 
                return ( 
                    <Question5
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange = {this.inputChange}
                    values = {values}
                    />
                );
                case 6: 
                return ( 
                    <Question6
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange = {this.inputChange}
                    values = {values}
                    />
                );

                case 7: 
                return ( 
                    <Question7
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange = {this.inputChange}
                    values = {values}
                    />
                );

                case 8: 
                return ( 
                    <Question8
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange = {this.inputChange}
                    values = {values}
                    />
                );

                case 9: 
                return ( 
                    <Question9
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange = {this.inputChange}
                    values = {values}
                    />
                );

                case 10: 
                return ( 
                    <Question10
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange = {this.inputChange}
                    values = {values}
                    />
                );

                case 11: 
                return ( 
                    <Question11
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange = {this.inputChange}
                    values = {values}
                    />
                );
                case 12: 
                return ( 
                    <Question12
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange = {this.inputChange}
                    values = {values}
                    />
                );
                case 13: 
                return ( 
                    <Question13
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange = {this.inputChange}
                    values = {values}
                    />
                );
                case 14: 
                return ( 
                    <Question14
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange = {this.inputChange}
                    values = {values}
                    />
                );
                case 15: 
                return ( 
                    <Question15
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange = {this.inputChange}
                    values = {values}
                    />
                );
                case 16: 
                return ( 
                    <Question16
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange = {this.inputChange}
                    values = {values}
                    />
                );
                case 17: 
                return ( 
                    <Question17
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange = {this.inputChange}
                    values = {values}
                    />
                );
                case 18: 
                return ( 
                    <Question18
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange = {this.inputChange}
                    values = {values}
                    />
                );
                case 19: 
                return ( 
                    <Question19
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange = {this.inputChange}
                    values = {values}
                    />
                );
                case 20: 
                return ( 
                    <Question20
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange = {this.inputChange}
                    values = {values}
                    />
                );
                case 21: 
                return ( 
                    <Question21
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputChange = {this.inputChange}
                    values = {values}
                    />
                );
        }


    }

}


export default Form;
