import React, {Component} from 'react';

class Question11 extends Component {

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
            <p> Votre client a-t-il une enveloppe budgétaire pour la création de son site ? </p>
            <div className="reponse">
            <input type="radio" name="radio" value=" Entre 1500€ et 3000€ " /> 
            <label > Entre 1500€ et 3000€</label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value=" Entre 3000€ et 5000€" /> 
            <label >Entre 3000€ et 5000€ </label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value="Entre 5000€ et 10 000€ " /> 
            <label >Entre 5000€ et 10 000€ </label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value="Plus de 10 000€ " /> 
            <label >Plus de 10 000€ </label>
            </div>
            <div className ="bouton">
            <button onClick={this.back}> Question précédente </button>
            <button onClick={this.continue}> Question suivante </button>
            </div>
            </div>
            

        )
    }
}
export default Question11;