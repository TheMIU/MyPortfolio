let login = document.getElementById('login');
let navBar = document.getElementById('navigation-bar');
let home = document.getElementById('home');

let mng_cus = document.getElementById('manage-customer');
let mng_store = document.getElementById('mng-store');
let mng_orders = document.getElementById('mng-orders');
let place_order = document.getElementById('place-order');

{
    login.style.display = 'block';
    navBar.style.display = 'none';
    home.style.display = 'none';

    mng_cus.style.display = 'none';
    mng_store.style.display = 'none';
    mng_orders.style.display = 'none';
    place_order.style.display = 'none';
}

function loginBtn() {
    login.style.display = 'none';

    home.style.display = 'block';
    navBar.style.display = 'block';
}

function logoutBtn() {
    login.style.display = 'block';

    navBar.style.display = 'none';
    home.style.display = 'none';
    mng_cus.style.display = 'none';
    mng_store.style.display = 'none';
    mng_orders.style.display = 'none';
    place_order.style.display = 'none';
}

function placeOrder() {
    place_order.style.display = 'block';

    home.style.display = 'none';
    mng_cus.style.display = 'none';
    mng_store.style.display = 'none';
    mng_orders.style.display = 'none';
}

function mngOrder() {
    mng_orders.style.display = 'block';

    home.style.display = 'none';
    mng_cus.style.display = 'none';
    mng_store.style.display = 'none';
    place_order.style.display = 'none';
}

function mngStore() {
    mng_store.style.display = 'block';

    home.style.display = 'none';
    mng_cus.style.display = 'none';
    mng_orders.style.display = 'none';
    place_order.style.display = 'none';
}

function mngCustomer() {
    mng_cus.style.display = 'block';

    home.style.display = 'none';
    mng_store.style.display = 'none';
    mng_orders.style.display = 'none';
    place_order.style.display = 'none';
}

function goHome() {
    home.style.display = 'block';

    mng_cus.style.display = 'none';
    mng_store.style.display = 'none';
    mng_orders.style.display = 'none';
    place_order.style.display = 'none';
}

/*/////////////////////////////////////////*/
//select the button and add a event to it
document.getElementById("btnCustomer").addEventListener("click", function () {

    //get typed values of input fields
    let id = document.getElementById("txtCustomerID").value;
    let name = document.getElementById("txtCustomerName").value;
    let address = document.getElementById("txtCustomerAddress").value;
    let salary = document.getElementById("txtCustomerSalary").value;

    //let's print it
    console.log(id, name, address, salary);

    //catch the table body
    let tBody = document.getElementById("tblCustomer");

    // let's see how we should insert a table row using html format
    //<tr>
    // <td>id</td>
    // <td>name</td>
    // <td>address</td>
    // <td>salary</td>
    // </tr>

    //ok then, let's create the above row
    let tr = document.createElement("tr");

    //let's create another four columns
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");
    let col4 = document.createElement("td");

    //set input fields values to the above created columns
    col1.textContent = id;
    col2.textContent = name;
    col3.textContent = address;
    col4.textContent = salary;

    //set 4 columns to the row
    //set 4 columns to the previously created row
    tr.appendChild(col1);
    tr.appendChild(col2);
    tr.appendChild(col3);
    tr.appendChild(col4);

    //set the tr to the table body
    //set the row to the table body
    tBody.appendChild(tr);
});