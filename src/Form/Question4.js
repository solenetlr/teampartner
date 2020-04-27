import React, {Component} from 'react';

class Question4 extends Component {

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
            <p> À qui vend votre client ? </p>
            <div className="reponse">
            <input type="radio" name="radio" value=" Aux particuliers " /> 
            <label >Aux particuliers </label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value=" Aux professionnels " /> 
            <label >Aux professionnels </label>
</div>
<div className="reponse">
            <input type="radio" name="radio" value=" Aux institutions " /> 
            <label >Aux institutions  </label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value=" Autres " /> 
            <label >Autres </label>
            </div>
            <div className ="bouton">
            <button onClick={this.back}> Question précédente </button>
            <button onClick={this.continue}> Question suivante </button>
            </div>
            </div>
            

        )
    }
}
export default Question4;