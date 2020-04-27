import React, {Component} from 'react';

class Question17 extends Component {

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
            <p> Quelle est sa marge nette par produit / service vendu ?  </p>
            <div className="reponse">
            <input type="radio" name="radio" value="+ de 50% de marge" /> 
            <label > + de 50% de marge</label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value="40 à 50% de marge (1000€ HT de vente = 400 à 500€HT de marge)

" /> 
            <label >40 à 50% de marge (1000€ HT de vente = 400 à 500€HT de marge)

 </label></div>
 <div className="reponse">
            <input type="radio" name="radio" value="30 à 40% de marge (1000€ HT de vente = 300 à 400€HT de marge)

" /> 
            <label >30 à 40% de marge (1000€ HT de vente = 300 à 400€HT de marge)

</label></div>
<div className="reponse">
            <input type="radio" name="radio" value="20 à 30% de marge (1000€ HT de vente = 200 à 300€HT de marge)
" /> 
            <label >20 à 30% de marge (1000€ HT de vente = 200 à 300€HT de marge)
</label></div>
<div className="reponse">
<input type="radio" name="radio" value="- de 20% de marge (1000€ HT de vente = - de 200€HT de marge)
" /> 
            <label >- de 20% de marge (1000€ HT de vente = - de 200€HT de marge)
</label></div>
<div className="reponse">
<input type="radio" name="radio" value="Je ne sais pas
" /> 
            <label >Je ne sais pas
</label></div>
        
        
<div className ="bouton">
            <button onClick={this.back}> Question précédente </button>
            <button onClick={this.continue}> Question suivante </button>
            </div>
            </div>
            

        )
    }
}
export default Question17;