import React, {Component} from 'react';

class Question10 extends Component {

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
            <p> Votre client a-t-il une idée du nombre de pages que doit comporter son site internet ?</p>
            <div className="reponse">
            <input type="radio" name="radio" value=" 1 à 5 pages" /> 
            <label > 1 à 5 pages</label>
           </div>
           <div className="reponse">
            <input type="radio" name="radio" value=" 5 à 10 pages" /> 
            <label >5 à 10 pages</label>
           </div>
           <div className="reponse">
            <input type="radio" name="radio" value="Plus de 10 pages" /> 
            <label >Plus de 10 pages </label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value="Il ne sait pas et souhaite être conseillé par le chef de projet " /> 
            <label >Il ne sait pas et souhaite être conseillé par le chef de projet  </label>
           </div>
           <div className="reponse">
            <input type="radio" name="radio" value="Je ne sais pas " /> 
            <label > Je ne sais pas </label>
            </div>
            <div className ="bouton">
            <button onClick={this.back}> Question précédente </button>
            <button onClick={this.continue}> Question suivante </button>
            </div>
            </div>
            

        )
    }
}
export default Question10;