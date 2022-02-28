import { IObserver } from "../interfaces/IObserver";
import { Caisse } from "./Caisse";

export class TransactionList implements IObserver{
    
    private ulContainer : HTMLUListElement
    constructor(){
        this.ulContainer = document.querySelector('#transaction-list')!
    }
    getNotification(caisse: Caisse): void {
        
        this.ulContainer.innerHTML= ""
        for (const tr of caisse.getTransactions()){
            let li = document.createElement("li")
            li.className = tr.getType()
            let title = document.createElement("h4")
            let description = document.createElement("p")
            title.innerText = (tr.getType() === 'credit')?'Crédit':'Débit'
            title.className =  tr.getType()
            description.innerText = tr.transactionText()
            li.append(title)
            li.append(description)
            this.ulContainer.append(li)
        }
        
    }
    
}