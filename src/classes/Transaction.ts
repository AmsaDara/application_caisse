export class Transaction {
    private type : string
    private amount : number
    private reason : string
    private byWhome :string
    
    constructor(
        _type : string,
        _amount : number,
        _reason : string,
        _byWhome : string,
    ){
        this.type = _type
        this.amount = _amount
        this.reason = _reason
        this.byWhome = _byWhome
    }
    
    getType(){
        return this.type
    }
      
    getAmount(){
        return this.amount
    }
      
    getReason(){
        return this.reason
    }
      
    getByWhome(){
        return this.byWhome
    }
    
    transactionText (){
        return `${this.amount} dinars ${(this.type === 'credit')?'déposés':'retirés'} par ${this.byWhome} suite à ${this.reason}`
    }
}