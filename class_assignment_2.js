class bank {
    bankName;
    location;
    AccountNo;
    ifsc;
    interestRate;

    constructor(bankName, location, AccountNo, ifsc, interestRate) {
        this.bankName = bankName;
        this.location = location;
        this.AccountNo = AccountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }
    showDetails(){
        console.log(`bank details are => Bank NAme ${this.bankName}, Location${this.location} , Account no.${this.AccountNo}, IFSC code${this.ifsc}, Interest ${this.interestRate}`)
    }

}
let axisBank=new bank("Axis Bank","Pune","54848248572232","Ax1534","5%");
let sbiBank=new bank ("SBI","Sangli","574964846545698654","SBId2833","10%");
let icicBank=new bank("ICIC","Atpadi","454848848887448","IC15302","7%");
let kotakBank=new bank("Kotak","Solapur","64946476965","KT6598","3%")
let hdfc=new bank("HDFC","Sangola","5679487984976","HF4565","8%");
let punjabBank=new bank("Punjab Bank","Satara","569584797988","Pb5454","6%");

axisBank.showDetails();
sbiBank.showDetails();
icicBank.showDetails();
kotakBank.showDetails();
hdfc.showDetails();
punjabBank.showDetails();




const bankArray=[];
bankArray.push(axisBank,sbiBank,icicBank,kotakBank,hdfc,punjabBank)

console.warn(`all  object element added in array and just log on console bank name and location`)
for (let index = 0; index < bankArray.length; index++) {
    console.log(`${bankArray[index].bankName} ${bankArray[index].location}`)
    
}


console.warn("add all object in set and log on console bank name with ifsc code")
const setOFBank=new Set();
setOFBank.add(axisBank);
setOFBank.add(sbiBank);
setOFBank.add(icicBank);
setOFBank.add(kotakBank);
setOFBank.add(hdfc);
setOFBank.add(punjabBank);
console.log(setOFBank)
for (const iterator of setOFBank) {
    console.log(`${iterator.bankName},${iterator.ifsc}`)
}

console.warn("create a map key should be bank name and value is object that is created in step c,add all banks")
const mapOfBank=new Map();
mapOfBank.set("axisBank",axisBank);
mapOfBank.set("sbiBank",sbiBank);
mapOfBank.set("icicBank",icicBank);
mapOfBank.set("kotakBank",kotakBank);
mapOfBank.set("hdfc",hdfc);
mapOfBank.set("punjabBank",punjabBank);
console.log(mapOfBank)
const allKeys=mapOfBank.keys
for (const iterator of setOFBank) {
    console.log(iterator)
}