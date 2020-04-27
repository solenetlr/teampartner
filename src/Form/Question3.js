import React, {Component} from 'react';

class Question3 extends Component {

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
            <p> Que vend votre client ?</p>
            <input onChange={inputChange("name")} type="text" name="name" value=""/>
            <div className ="bouton">
            <button onClick={this.back}> Question précédente </button>
            <button onClick={this.continue}> Question suivante </button>
            </div>
            </div>
            

        )
    }
}
export default Question3;