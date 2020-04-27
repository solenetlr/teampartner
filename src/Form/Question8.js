import React, {Component} from 'react';

class Question8 extends Component {

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
            <p> Votre client a-t-il déjà essayé de créer un site avec des plateformes en ligne comme wix, hubside ou autre ? </p>
            <div className="reponse">
            <input type="radio" name="radio" value=" Oui" /> 
            <label >Oui </label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value=" Non " /> 
            <label >Non </label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value=" Je ne sais pas" /> 
            <label >Je ne sais pas </label>
            </div>
            <div className ="bouton">
            <button onClick={this.back}> Question précédente </button>
            <button onClick={this.continue}> Question suivante </button>
            </div>
            </div>
            

        )
    }
}
export default Question8;