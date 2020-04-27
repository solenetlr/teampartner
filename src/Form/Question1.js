import React, {Component} from 'react';

class Question1 extends Component {

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
            <p> Comment souhaitez-vous gérer ce projet ?</p>
            <div className="reponse">
            <input type="radio" name="radio" value="Je souhaite gérer le projet en marque blanche" /> 
            <label >Je souhaite gérer le projet en marque blanche </label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value="Je souhaite gérer le projet en tant qu’apporteur d’affaire" /> 
            <label >Je souhaite gérer le projet en tant qu’apporteur d’affaire </label>
            </div>
            <div className="bouton">
            <button onClick={this.continue}> Question suivante </button>
            </div>
            </div>
            

        )
    }
}
export default Question1;