import React, {Component} from 'react';

class Question6 extends Component {

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
            values: {name, email, phone, reponse, radio}
        } = this.props;

        return (
            <div className = "Question">
            <p> Quel est le besoin de votre client ? </p>
            <div className="reponse">
            <input type="radio" name="radio" value=" Créer un nouveau site internet ou refondre son site actuel " /> 
            <label > Créer un nouveau site internet ou refondre son site actuel </label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value=" Mon client a déjà un site internet et souhaite mettre en place une stratégie d’acquisition de client/trafic (web marketing - référencement)  " /> 
            <label >Mon client a déjà un site internet et souhaite mettre en place une stratégie d’acquisition de client/trafic (web marketing - référencement)  </label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value=" Mon client souhaite créer/refondre un site internet ainsi que mettre en place une stratégie d’acquisition de client/trafic (web marketing - référencement) " /> 
            <label >Mon client souhaite créer/refondre un site internet ainsi que mettre en place une stratégie d’acquisition de client/trafic (web marketing - référencement) </label>
            </div>
            <div className ="bouton">
            <button onClick={this.back}> Question précédente </button>
            <button onClick={this.continue}> Question suivante </button>
            </div>
            </div>
            

        )
    }
}
export default Question6;