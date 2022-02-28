import { IObserver } from "../interfaces/IObserver";
import { Caisse } from "./Caisse";

export class TransactionParUser implements IObserver{
    
    private htmlContainer : HTMLTableElement
    
    constructor(){
        this.htmlContainer = document.querySelector("#transactions-par-user")!
        
    }
    
    getNotification(caisse: Caisse): void {
        let transactions = caisse.getTransactions()
        let result = []
        for (const tr of transactions){
           let nb =  result.filter(e=>e.name === tr.getByWhome()).length
           if(nb === 0){
               let user = {
                   name : tr.getByWhome(),
                   debit : (tr.getType()==="debit")?tr.getAmount():0,
                   credit : (tr.getType()==="credit")?tr.getAmount():0
               }
               result.push(user)
           }
           else {
               let idx = result.findIndex(elm => elm.name === tr.getByWhome())
               if (tr.getType() === 'debit'){
                result[idx].debit += tr.getAmount()
               }else{
                result[idx].credit += tr.getAmount()
               }
           }
        }
        
        this.htmlContainer.innerHTML = `<tr>
                                            <td>Personnel</td>
                                            <td>Crédit</td>
                                            <td>Débit</td>
                                        </tr>`
        for (const res of result){
            let nameTd = document.createElement('td')
            let creditTd = document.createElement('td')
            let debitTd = document.createElement('td')
            nameTd.innerText = res.name
            debitTd.innerText = res.debit.toString()
            creditTd.innerText = res.credit.toString()
            let tr = document.createElement('tr')
            tr.append(nameTd)
            tr.append(creditTd)
            tr.append(debitTd)
            this.htmlContainer.append(tr)
        }
        
    }
    
}