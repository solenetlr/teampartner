import React, {Component} from 'react';

class Question7 extends Component {

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
            <p> Quel est l’objectif du site de votre client ? </p>
            <div className="reponse">
            <input type="radio" name="radio" value=" Simplement présenter son entreprise et son offre sur le web. Il n’a pas besoin d’obtenir de nouveaux clients par internet et ne compte pas investir dans une stratégie d’acquisition de trafic ou de clients tel que le référencement, la publicité en ligne etc " /> 
            <label > Simplement présenter son entreprise et son offre sur le web. Il n’a pas besoin d’obtenir de nouveaux clients par internet et ne compte pas investir dans une stratégie d’acquisition de trafic ou de clients tel que le référencement, la publicité en ligne etc  </label>
           </div>
           <div className="reponse">
            <input type="radio" name="radio" value=" Présenter son entreprise et obtenir de nouveaux clients par internet. Son objectif est de gagner en visibilité pour attirer des visiteurs qualifiés.  " /> 
            <label > Présenter son entreprise et obtenir de nouveaux clients par internet. Son objectif est de gagner en visibilité pour attirer des visiteurs qualifiés.  </label>
           </div>
           <div className="reponse">
            <input type="radio" name="radio" value=" Vendre ses produits ou services directement en ligne à travers son site internet e-commerce (paiement en ligne) " /> 
            <label > Vendre ses produits ou services directement en ligne à travers son site internet e-commerce (paiement en ligne) </label>
           </div>
           <div className="reponse">
            <input type="radio" name="radio" value=" Je ne sais pas" /> 
            <label >Je ne sais pas </label>
            </div>
            <div className ="bouton">
            <button onClick={this.back}> Question précédente </button>
            <button onClick={this.continue}> Question suivante </button>
            </div>
            </div>
            

        )
    }
}
export default Question7;