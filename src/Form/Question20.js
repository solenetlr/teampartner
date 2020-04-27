import React, {Component} from 'react';

class Question20 extends Component {

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
            <p> En moyenne, quel est le chiffre d’affaires généré par un client sur un an ?</p>
           
            <input onChange={inputChange("name")} type="text" name="name" value={values.name}/>
            <div className ="bouton">
            <button onClick={this.back}> Question précédente </button>
            <button onClick={this.continue}> Question suivante </button>
            </div>
            </div>
            

        )
    }
}
export default Question20;