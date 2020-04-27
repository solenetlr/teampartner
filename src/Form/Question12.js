import React, {Component} from 'react';

class Question12 extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
            this.props.prevStep();      
    };

    render () {
        const {
            values: {name, email, phone, }
        } = this.props;

        return (
            <div className = "Question">
            <p> Votre client souhaite-t-il simuler le coût de sa stratégie d’acquisition de trafic/clients par internet ?  </p>
            <div className="reponse">
           <input type="radio" name="radio" value=" Oui " /> 
            <label >Oui </label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value="Non" /> 
            <label >Non </label>
            </div>
            <div className ="bouton">
            <button onClick={this.back}> Question précédente </button>
            <button onClick={this.continue}> Question suivante </button>
            </div>
            </div>
            

        )
    }
}
export default Question12;