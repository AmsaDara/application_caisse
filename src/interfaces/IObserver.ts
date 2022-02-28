import { Caisse } from "../classes/Caisse";

export interface IObserver{
    getNotification(state:Caisse) : void
}