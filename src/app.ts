import { Caisse } from "./classes/Caisse";
import { SoldeView } from "./classes/SoldeView";
import { Transaction } from "./classes/Transaction";
import { TransactionList } from "./classes/TransactionList";

let caisse = new Caisse(10000);

let soldeView = new SoldeView();
caisse.subscribeObserver(soldeView)

let TransactionListView = new TransactionList();
caisse.subscribeObserver(TransactionListView)

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

