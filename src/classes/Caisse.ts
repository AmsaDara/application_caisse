import { IObserver } from "../interfaces/IObserver";
import { ISubject } from "../interfaces/ISubject";
import { Transaction } from "./Transaction";


export class Caisse implements ISubject{
    private solde : number = 0;
    private transactions : any[] = [];
    
    private observers : IObserver[] = [];
    
    
    subscribeObserver(obs: IObserver): void {
        this.observers.push(obs)
        obs.getNotification(this)
    }
    unsubscribeObserver(obs: IObserver): void {
        let idx = this.observers.indexOf(obs);
        if (idx !== -1){
            this.observers.splice(idx, 1);
        }
    }
    notifyObservers(): void {
        for(const element of this.observers){
            element.getNotification(this)
        }
    }
    public getSolde(){
        return this.solde
    }
    public getTransactions(){
        return this.transactions
    }
    public addTransaction(tr:Transaction){
        this.transactions.push(tr)
        if (tr.getType() === 'credit') {
            this.solde += tr.getAmount()
        } else {
            this.solde -= tr.getAmount()
        }
        this.notifyObservers()
    }
}