import React, {Component} from 'react';

class Question15 extends Component {

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
            <p> Combien de nouveaux clients par mois votre client souhaiterait-il signer ?  </p>
            <div className="reponse">
            <input type="radio" name="radio" value="1 à 50" /> 
            <label > 1 à 50</label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value="50 à 100" /> 
            <label >50 à 100 </label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value="100 à 200" /> 
            <label >100 à 200</label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value="200 à 500" /> 
            <label >200 à 500</label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value="Plus de 500" /> 
            <label >Plus de 500</label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value="Je ne sais pas " /> 
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
export default Question15;