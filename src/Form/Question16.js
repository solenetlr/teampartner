import React, {Component} from 'react';

class Question16 extends Component {

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
            <p> Combien de temps votre client souhaite-il attendre avant de capter ses premières demandes entrantes une fois les opérations lancées ? </p>
            <div className="reponse">
            <input type="radio" name="radio" value="Le plus rapidement possible" /> 
            <label > Le plus rapidement possible</label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value="Plus de 6 mois, il n’est pas pressé et souhaite un résultat durable 
" /> 
            <label >Plus de 6 mois, il n’est pas pressé et souhaite un résultat durable 
 </label></div>
 <div className="reponse">
            <input type="radio" name="radio" value="Il souhaite des résultats à court terme mais également investir sur un résultat durable.
" /> 
            <label >Il souhaite des résultats à court terme mais également investir sur un résultat durable.
</label></div>
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
export default Question16;