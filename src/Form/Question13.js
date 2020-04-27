import React, {Component} from 'react';

class Question13 extends Component {

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
            <p> Est-ce pour un site internet vitrine ou E-Commerce ? </p>
            <div className="reponse">
            <input type="radio" name="radio" value="Site internet vitrine " /> 
            <label > Site internet vitrine</label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value=" Site internet E-commerce" /> 
            <label >Site internet E-commerce </label>
            </div>
        
            <div className ="bouton">
            <button onClick={this.back}> Question précédente </button>
            <button onClick={this.continue}> Question suivante </button>
            </div>
            </div>
            

        )
    }
}
export default Question13;