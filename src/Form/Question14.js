import React, {Component} from 'react';

class Question14 extends Component {

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
            <p> Combien de nouveaux clients par mois votre client souhaiterait-il signer ? </p>
            <div className="reponse">
            <input type="radio" name="radio" value="1 à 3" /> 
            <label >1 à 3 </label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value=" 3 à 5 " /> 
            <label >3 à 5</label>
            </div>
            <div className="reponse">
                <input type="radio" name="radio" value="5 à 10" /> 
            <label >5 à 10</label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value="10 à 25" /> 
            <label >10 à 25</label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value="Plus de 25" /> 
            <label >Plus de 25</label>
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
export default Question14;