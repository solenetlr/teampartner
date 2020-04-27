import React, {Component} from 'react';

class Question9 extends Component {

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
            <p> Pourquoi n’a-t-il pas poursuivi son projet avec cette solution et a-t-il souhaité passer par un spécialiste ?</p>
            <div className="reponse">
            <input type="radio" name="radio" value=" Trop cher " /> 
            <label > Trop cher </label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value=" Trop compliqué" /> 
            <label >Trop compliqué </label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value="Trop limité pour ce qu’il souhaite faire " /> 
            <label >Trop limité pour ce qu’il souhaite faire </label>
            </div>
            <div className ="bouton">
            <button onClick={this.back}> Question précédente </button>
            <button onClick={this.continue}> Question suivante </button>
            </div>
            </div>
            

        )
    }
}
export default Question9;