document.addEventListener('DOMContentLoaded', () => {
    let companyNameDom = document.getElementById('company-Name');
    companyNameDom.innerText = data.companyName;
    companyNameDom.classList.remove('noValue');


    
    let companyAddressDom = document.getElementById('company-Address');
    companyAddressDom.innerHTML = `
        ${data.companyAddress[0].Address}<br>
        ${data.companyAddress[0].Address2}<br>
        ${data.companyAddress[0].State} ${data.companyAddress[0].ZipCode}
    `;
    companyAddressDom.classList.remove('noValue');



    let companyContactDom = document.getElementById('company-Contact');
    companyContactDom.innerHTML = `
        Phone: ${data.companyContact[0].Phone}<br>
        Email: ${data.companyContact[0].Email}
    `;
    companyContactDom.classList.remove('noValue');



    let statementDom = document.getElementById('statement');
    statementDom.innerHTML = `
        Statement: ${data.statement[0].Statement}<br>
        Date: ${data.statement[0].Date}<br>
        Customer ID: ${data.statement[0].CustomerID}
    `;
    statementDom.classList.remove('noValue');



    let billDom = document.getElementById('bill-Address');
    billDom.innerHTML = `
        Bill To:<br>
        ${data.billAddress[0].Address}<br>
        ${data.billAddress[0].Address2}<br>
        ${data.billAddress[0].State} ${data.billAddress[0].ZipCode}
    `;
    billDom.classList.remove('noValue');



    let companyPeymentDom = document.getElementById('payment');
    companyPeymentDom.innerHTML = `
        Payment Method: ${data.paymentInfo[0].PaymentMethod}<br>
        Card Number: ${data.paymentInfo[0].CardNumber}<br>
        Expiration Date: ${data.paymentInfo[0].ExpirationDate}<br>
        CVV: ${data.paymentInfo[0].CVV}
    `;
    companyPeymentDom.classList.remove('noValue');



    let table = document.getElementById('tableList');
    let paymentTotal = 0

    for(let i = 1; i<=data.Items.length; i++){
    let newList = document.createElement('tr');

    paymentTotal += Number(data.Items[i-1].Payment);

    newList.innerHTML = `
        <td>${data.Items[i-1].Date}</td>
        <td>${data.Items[i-1].Type}</td>
        <td>${data.Items[i-1].Invoice}</td>
        <td>${data.Items[i-1].Description}</td>
        <td class="amount">${data.Items[i-1].Amount}</td>
        <td class="number">$${data.Items[i-1].Payment}</td>
    `;
    table.appendChild(newList);
    }

    let total = document.createElement('tr');
    total.innerHTML = `
        <td class="empty"></td>
        <td class="empty"></td>
        <td class="empty"></td>
        <td class="empty"></td>
        <th class="total">Total</th>
        <td class="total-pay number">$${paymentTotal.toFixed(2)}</td>
    `;
    table.appendChild(total);
    
    console.log(paymentTotal);
})