import React, {Component} from 'react';

class Question5 extends Component {

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
            values: {name, email, phone, }
        } = this.props;

        return (
            <div className = "Question">
            <p> Où se situent les clients qu’il cible ? </p>
            <div className="reponse">
            <input type="radio" name="radio" value=" Toute la France " /> 
            <label >Toute la France </label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value=" International (Europe) " /> 
            <label >International (Europe) </label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value=" International (Monde) " /> 
            <label >International (Monde) </label>
            </div>
            <div className="reponse">
            <input type="radio" name="radio" value=" Autre : précisez le secteur " /> 
            <label >Autres : Précisez le secteur</label>
            </div>
            <input onChange={inputChange("name")} type="text" name="name" value=""/>
            <div className ="bouton">
            <button onClick={this.back}> Question précédente </button>
            <button onClick={this.continue}> Question suivante </button>
            </div>
            </div>
            

        )
    }
}
export default Question5;