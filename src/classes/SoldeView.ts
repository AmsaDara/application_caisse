import { IObserver } from "../interfaces/IObserver";
import { Caisse } from "./Caisse";

export class SoldeView implements IObserver{
    
    private htmlSoldeView : HTMLHeadingElement
    
    constructor(){
        this.htmlSoldeView = document.querySelector('#solde-view')
    }
    
        
    getNotification(caisse: Caisse): void {
        console.log(`SoldeView notifié par le nouveau solde ${caisse.getSolde()}`);
        
        this.htmlSoldeView.innerText = caisse.getSolde().toString()
    }
}