let isEditingExpenses = false;
document.getElementById('container').addEventListener('submit', addExpense);

// initial array of expenses, reading from localStorage
const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
const newf = JSON.parse(localStorage.getItem('newf')) || [];


//add new friend
let newfriendeg=document.getElementById('newfriend');
newfriendeg.addEventListener('click',(e)=>
    {
    let egcont=prompt("Enter the friend's name");
    var select = document.getElementById("add-friend"),
    newOp = document.createElement("OPTION"),
    newOpV = document.createTextNode(egcont);
    if(egcont != "")
    {
        newOp.appendChild(newOpV);
        select.insertBefore(newOp,select.firstChildNode);    
        newf.push(egcont);  
    }
    else
    {   
        alert("Please enter a valid name, do not submit blank");
        return false;
    }

    // localStorage 
    localStorage.setItem('newf', JSON.stringify(newf));
    showFriends();
    }
    )

//display the newfriends added
const showFriends = () => {
    const friendsTable = document.getElementById('add-friend');//top multi select
    friendsTable.innerHTML = '';
    if(newf.length > 0)
        {
            for(let i = 0; i < newf.length; i++)
            {
                friendsTable.innerHTML += `<option value=${newf[i]}>${newf[i]}</option>`;
            }
        }

    const friendsTable2 = document.getElementById('createfriend2');//bottom friends filter
    friendsTable2.innerHTML = '';
    if(newf.length > 0)
        {
            for(let i = 0; i < newf.length; i++)
            {
                friendsTable2.innerHTML += `<option value=${newf[i]}>${newf[i]}</option>`;
            }
        }
}

//storing and validating values
function addExpense(e){
    e.preventDefault();
    
    // get type, name, date, currency, amount and newfriend
    let type = document.getElementById('type').value;
    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let currency = document.getElementById('currency').value;
    let amount = document.getElementById('amount').value;
    let newfriend = document.getElementById('add-friend').value;

    //validation
    if (type == "") {document.querySelector(".err-type").style.opacity = 1;return false;} 
    else {document.querySelector(".err-type").style.opacity = 0;}

    if (name == "") {document.querySelector(".err-name").style.opacity = 1;return false;} 
    else {document.querySelector(".err-name").style.opacity = 0;}

    if (currency == "") {document.querySelector(".err-currency").style.opacity = 1;return false;} 
    else {document.querySelector(".err-currency").style.opacity = 0;}

    if (newfriend == "") {document.querySelector(".err-newfriend").style.opacity = 1;return false;} 
    else {document.querySelector(".err-newfriend").style.opacity = 0;}

    if (date == "") {document.querySelector(".err-date").style.opacity = 1;return false;} 
    else {document.querySelector(".err-date").style.opacity = 0;}

    if (amount == "") {document.querySelector(".err-amount").style.opacity = 1;return false;} 
    else {document.querySelector(".err-amount").style.opacity = 0;}

    //storing the data to localstorage
    if( name.length > 0 && date != 0 && amount > 0){
        const expense = {
            type, 
            name, 
            date,
            amount, 
            newfriend,
            currency,
            id: expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1,
        }
        console.log(expense.id);

        expenses.push(expense);
        // localStorage 
        localStorage.setItem('expenses', JSON.stringify(expenses));
        // document.getElementById('expForm').reset();
    }

    showExpenses();
}   

//display stored contents in table
const showExpenses = () => {

    let sign;
    const expenseTable = document.getElementById('expenseTable');

    expenseTable.innerHTML = '';
    if(expenses.length > 0)
    {
    for(let i = 0; i < expenses.length; i++)
    {
        if(expenses[i].currency==="USD")
        {
            sign = "$";
        }

        expenseTable.innerHTML += `
            <tr id="${i}_index">
                <td id="${i}_type" class="data" style="text-align:center">${expenses[i].type}</td>
                <td id="${i}_name" class="data" style="text-align:center">${expenses[i].name}</td>
                <td id="${i}_newfriend" class="data" style="text-align:center">${expenses[i].newfriend}</td>
                <td id="${i}_date" class="data" style="text-align:center">${expenses[i].date}</td>
                <td id="${i}_amount" class="data" style="text-align:center">${sign} ${expenses[i].amount}</td>
                <td style="text-align:center"><a id="${i}_editBtn" class="edit" style="cursor: pointer;" onclick="edit(${i});">Edit</a></td>
                <td style="text-align:center"><a class="delete" style="cursor: pointer;" onclick="deleteExpense(${expenses[i].id})">Delete</a></td>
            </tr>
        `;
    }
    }
    else 
    {
        // expenses count is 0
        expenseTable.appendChild(createEmptyRow());           
    }
}

//in case the table is empty
function createEmptyRow(){
    const expenseRow = document.createElement('tr');       
    const expenseTdType = document.createElement('td');
    expenseTdType.setAttribute('colspan', 7);
    expenseTdType.textContent = 'Your added items will show up here!';
    expenseTdType.style.textAlign = 'center';
    expenseRow.appendChild(expenseTdType);
    return expenseRow;
}

//delete functionality
const deleteExpense = (id) => {
    for(let i = 0; i < expenses.length; i++){
        if(expenses[i].id == id){
            expenses.splice(i, 1);
        }
    }
    // localStorage
    localStorage.setItem('expenses', JSON.stringify(expenses));
    showExpenses();
    }   


//edit functionality within the display table
function edit(i) {
    if(!isEditingExpenses) 
    {
        const editBtn = document.getElementById(`${i}_editBtn`);
        editBtn.innerText = "Save";
        let e = document.getElementById(i + "_index");
        e.contentEditable = "true";
        isEditingExpenses = true;
    } 
    else 
    {
        const editBtn = document.getElementById(`${i}_editBtn`);
        editBtn.innerText = "Edit";
        let e = document.getElementById(i + "_index");
        e.contentEditable = "false";
        isEditingExpenses = false;

        const typeValue = document.getElementById(`${i}_type`).innerText;
        const nameValue = document.getElementById(`${i}_name`).innerText;
        const newfriendValue = document.getElementById(`${i}_newfriend`).innerText;
        const dateValue = document.getElementById(`${i}_date`).innerText;
        const amountValue = document.getElementById(`${i}_amount`).innerText.replace(/\D/g,'');;

        expenses[i].type = typeValue;
        expenses[i].name = nameValue;
        expenses[i].newfriend = newfriendValue;
        expenses[i].date = dateValue;
        expenses[i].amount = amountValue;

        localStorage.setItem('expenses', JSON.stringify(expenses));
        showExpenses();
    }
}

//filter function by name
function filternameFunction() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("createfriend2");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

//filter function by currency
function filtercurrencyFunction() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("currency2");
    filter = input.value;
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            if (td.innerHTML.indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


showExpenses();
showFriends();