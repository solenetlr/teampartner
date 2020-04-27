import React, {Component} from 'react';

class Question21 extends Component {

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
            inputChange,
            values
        } = this.props;

        return (
            <div className = "Question">
             <p> Quel chiffre d’affaires approximatif votre client a-t-il réalisé sur les douze derniers mois ? </p>
             <div className="reponse">
            <input type="radio" name="radio" value=" Aucun" /> 
            <label >Aucun </label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value="Moins de 100K" /> 
            <label >Moins de 100K</label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value="Moins de 200K" /> 
            <label >Moins de 200K</label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value="Moins de 500K" /> 
            <label >Moins de 500K</label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value="Plus de 500K" /> 
            <label >Plus de 500K</label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value="Je ne sais pas" /> 
            <label >Je ne sais pas</label>
            </div>
            <div className ="bouton">
            <button onClick={this.back}> Question précédente </button>
            <button onClick={this.continue}> Question suivante </button>
            </div>
            </div>
            

        )
    }
}
export default Question21;