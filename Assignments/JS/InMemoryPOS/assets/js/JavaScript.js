// Navigation
let login = document.getElementById('login');
let navBar = document.getElementById('navigation-bar');
let home = document.getElementById('home');

let mng_cus = document.getElementById('manage-customer');
let mng_store = document.getElementById('mng-store');
let mng_orders = document.getElementById('mng-orders');
let place_order = document.getElementById('place-order');

login.style.display = 'block';
navBar.style.display = 'none';
home.style.display = 'none';

mng_cus.style.display = 'none';
mng_store.style.display = 'none';
mng_orders.style.display = 'none';
place_order.style.display = 'none';

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

//////////// Customer ////////////
//  set input field values to table
let customerArray = [];

$("#btnSaveCustomer").click(function () {
    let id = $("#txtCustomerID").val();
    let name = $("#txtCustomerName").val();
    let address = $("#txtCustomerAddress").val();
    let salary = $("#txtCustomerSalary").val();

    let customerObject = {
        customerId: id,
        customerName: name,
        customerAddress: address,
        customerSalary: salary
    }

    let tBody = $("#tblCustomer");
    let tr = $(`<tr> <td> ${id} </td> <td> ${name} </td> <td> ${address} </td><td> ${salary}</td> </tr>`);
    customerArray.push(customerObject);
    tBody.append(tr);
});

//////////// Item ////////////
//  set input field values to table
let itemArray = [];

$("#btnSaveItem").click(function () {
    let code = $("#txtItemCode").val();
    let name = $("#txtItemName").val();
    let price = $("#txtItemPrice").val();
    let qty = $("#txtItemQTY").val();

    let itemObject = {
        itemCode: code,
        itemName: name,
        itemPrice: price,
        itemQty: qty
    }

    let tBody = $("#tblItem");
    let tr = $(`<tr> <td> ${code} </td> <td> ${name} </td> <td> ${price} </td><td> ${qty}</td> </tr>`);
    itemArray.push(itemObject);
    tBody.append(tr);
});

//////////// Orders ////////////
//  set input field values to table
let ordersArray = [];

$('#btnSaveOrders').click(function (){
    let orderID = $('#txtOrderID').val();
    let date = $('#txtData').val();
    let cusID = $('#txtCusID').val();
    let itemPrice = $('#txtItemPrice2').val();

    let ordersObject = {
        orderID : orderID,
        orderDate : date,
        customerID : cusID,
        itemPrice : itemPrice
    }

    console.log(ordersObject);

    let tBody = $('#tblOrders');
    let tr = $(`<tr> <td> ${orderID} </td> <td> ${date} </td> <td> ${cusID} </td><td> ${itemPrice}</td> </tr>`);
    ordersArray.push(ordersObject);
    tBody.append(tr);
});

