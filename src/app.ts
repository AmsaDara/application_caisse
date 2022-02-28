import { Caisse } from "./classes/Caisse";
import { SoldeView } from "./classes/SoldeView";
import { Transaction } from "./classes/Transaction";
import { TransationCompte } from "./classes/TransactionCompte";
import { TransactionList } from "./classes/TransactionList";
import { TransactionParUser } from "./classes/transactionParUserView";

let caisse = new Caisse();

let soldeView = new SoldeView();
caisse.subscribeObserver(soldeView)

let transactionListView = new TransactionList();
caisse.subscribeObserver(transactionListView)

let transationCompte = new TransationCompte();
caisse.subscribeObserver(transationCompte)

let transactionParUser = new TransactionParUser();
caisse.subscribeObserver(transactionParUser)

const transactionForm = document.querySelector('#transaction-form')! as HTMLFormElement

transactionForm.addEventListener("submit", (e : Event) => {
    e.preventDefault();
    const type = document.querySelector("#type") as HTMLSelectElement
    const amount = document.querySelector("#amount") as HTMLInputElement
    const reason = document.querySelector("#reason") as HTMLInputElement
    const byWhome = document.querySelector("#who") as HTMLInputElement
    const uneTransaction = new Transaction(
        type.value,
        amount.valueAsNumber,
        reason.value,
        byWhome.value
    )
    
    caisse.addTransaction(uneTransaction)
    
})














// const from = document.querySelector(".transaction-form") as HTMLFormElement;

// //inputs
// const type = document.querySelector("#type") as HTMLInputElement;
// const who = document.querySelector("#who") as HTMLInputElement;
// const reason = document.querySelector("#reason") as HTMLInputElement;
// const amount = document.querySelector("#amount") as HTMLInputElement;


// // list template instance
// const ul = document.querySelector("ul")!;

// from.addEventListener("submit", (e: Event) => {
//     e.preventDefault();
    
//     const li = document.createElement("li");
//     li.className
// }) 

