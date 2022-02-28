import { IObserver } from "./IObserver";

export interface ISubject{
    subscribeObserver(obs:IObserver) : void
    unsubscribeObserver(obs:IObserver) : void
    notifyObservers() : void
    
}
