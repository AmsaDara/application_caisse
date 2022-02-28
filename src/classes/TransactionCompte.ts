import { IObserver } from "../interfaces/IObserver";
import { Caisse } from "./Caisse";

export class TransationCompte implements IObserver{
    
    private htmlDebitCompteView : HTMLTableCellElement
    private htmlCreditCompteView : HTMLTableCellElement
    
    constructor(){
       this.htmlDebitCompteView = document.querySelector("#debit-compte")!
       this.htmlCreditCompteView = document.querySelector("#credit-compte")!
    }
    
    getNotification(caisse: Caisse): void {
        
        let transactionArray = caisse.getTransactions()
        let DC = 0
        let CC = 0
        for (const tr of transactionArray){
            if (tr.getType() === 'debit'){
                DC++
            }else {
                CC++
            }
        }
        
        this.htmlDebitCompteView.innerText = DC.toString()
        this.htmlCreditCompteView.innerText = CC.toString()
    }
}