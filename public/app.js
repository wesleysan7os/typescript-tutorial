import { Invoice } from './classes/Invoice';
import { Payment } from './classes/Payment';
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
