// Navigation

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


//  set input field values to table

let customerArray = [];

$("#btnCustomer").click(function () {
    let id = $("#txtCustomerID").val();
    let name = $("#txtCustomerName").val();
    let address = $("#txtCustomerAddress").val();
    let salary = $("#txtCustomerSalary").val();

    let tBody = $("#tblCustomer");
    let tr = $("<tr> <td>" + id + "</td> <td>" + name + "</td> <td>" + address + "</td><td>" + salary + "</td> </tr>");
    customerArray.push({id, name, address, salary});
    tBody.append(tr);
});