import React, {Component} from 'react';

class Question19 extends Component {

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
             <p> Un de vos client peut il vous acheter un produit/service plusieurs fois par ans ?  </p>
             <div className="reponse">
            <input type="radio" name="radio" value=" Oui " /> 
            <label >Oui </label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value=" Non " /> 
            <label >Non </label>
           </div>
            <div className ="bouton">
            <button onClick={this.back}> Question précédente </button>
            <button onClick={this.continue}> Question suivante </button>
            </div>
            </div>
            

        )
    }
}
export default Question19;