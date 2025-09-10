document.addEventListener('DOMContentLoaded', () => {
    let companyNameDom = document.getElementById('company-Name');
    companyNameDom.innerText = data.companyName;
    companyNameDom.classList.remove('noValue');


    
    let companyAddressDom = document.getElementById('company-Address');
    companyAddressDom.innerHTML = data.companyAddress;
    companyAddressDom.classList.remove('noValue');



    let companyContactDom = document.getElementById('company-Contact');
    companyContactDom.innerHTML = data.companyContact;
    companyContactDom.classList.remove('noValue');



    let statementDom = document.getElementById('statement');
    statementDom.innerHTML = data.statement;
    statementDom.classList.remove('noValue');



    let billDom = document.getElementById('bill-Address');
    billDom.innerHTML = data.billAddress;
    billDom.classList.remove('noValue');



    let companyPeymentDom = document.getElementById('payment');
    companyPeymentDom.innerHTML = data.paymentInfo;
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