// dom elements
const customerLoadButton = document.getElementById("getCustomer");
const customersLoadButton = document.getElementById("getCustomers");
const customerList = document.getElementById("customerList");
const customersList = document.getElementById("customersList");
const clearCustomerBtn = document.getElementById("clearCustomer");
const clearCustomersBtn = document.getElementById("clearCustomers");

// event listeners
customerLoadButton.addEventListener('click', loadCustomer);
customersLoadButton.addEventListener('click', loadCustomers);
clearCustomerBtn.addEventListener('click', clearCustomer);
clearCustomersBtn.addEventListener('click', clearCustomers);

function loadCustomer() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customer.json', true);
  xhr.onload = function() {
    if(xhr.status === 200) {
      const customer = JSON.parse(xhr.responseText);
      let output = `
        <ul>
          <li>
            Name: ${customer.name}<br/>
            Company: ${customer.company}<br/>
            Phone: ${customer.phone}<br/>
          </li>
        </ul>
        `;
      customerList.innerHTML = output;
    }
  }
  xhr.send();
}

function loadCustomers() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customers.json', true);
  xhr.onload = function() {
    if(xhr.status === 200) {
      const customers = JSON.parse(xhr.responseText);
      let output = '';
      // iterate through customers array
      customers.forEach(customer => {
        output += `
          <li>
            Name: ${customer.name}<br/>
            Company: ${customer.company}<br/>
            Phone: ${customer.phone}<br/>
          </li>`;
        ;
      });
      // append customers to the div
      customersList.innerHTML = `<ul>${output}</ul>`;
    }
  }
  xhr.send();
}

function clearCustomer(){
  customerList.innerHTML = '';
}

function clearCustomers(){
  customersList.innerHTML = '';
}
