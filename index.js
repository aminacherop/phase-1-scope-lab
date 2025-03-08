// Write your solution in this file!
var customerName = `bob`
function upperCaseCustomerName(){
    customerName = customerName.toLocaleUpperCase();

}
console.log(customerName());
console.log(upperCaseCustomerName());


var bestCustomer 
function setBestCustomer (){
    bestCustomer = `not bob`

}
setBestCustomer();
console.log(bestCustomer());

var bestCustomer = `bob`
function overwriteBestCustomer(){
    bestCustomer = `maybe bob`

}
overwriteBestCustomer();
console.log(bestCustomer());


const leastFavoriteCustomer = "Amina"; 

function changeLeastFavoriteCustomer() {
    try {
        leastFavoriteCustomer = "Alice"; 
        return leastFavoriteCustomer;
    } catch (error) {
        throw new Error("Assignment to constant variable.");
    }
}

console.log(changeLeastFavoriteCustomer());


