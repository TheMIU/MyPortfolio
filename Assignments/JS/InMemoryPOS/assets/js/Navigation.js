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
//  Save customer
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

    if (!checkExistCustomer(customerObject.customerId)) {
        customerArray.push(customerObject);
    } else {
        alert("Same ID !");
    }

    getAllCustomers();
    clearAll();

    $("#txtCustomerID").focus();
});


// update customer
$('#btnUpdateCustomer').click(function () {
    // Get data
    let id = $("#txtCustomerID").val();
    let name = $("#txtCustomerName").val();
    let address = $("#txtCustomerAddress").val();
    let salary = $("#txtCustomerSalary").val();

    // Set new data to existing object (using id)
    for (let i = 0; i < customerArray.length; i++) {
        if (id === customerArray[i].customerId) {
            // Confirm update
            let confirmUpdate = confirm("Do you want to update?");

            if (confirmUpdate) {
                // Update the object in the array
                customerArray[i].customerName = name;
                customerArray[i].customerAddress = address;
                customerArray[i].customerSalary = salary;

                // Exit the loop
                break;
            }
        }
    }

    // Update table
    getAllCustomers();
});


function getAllCustomers() {
    let tBody = $("#tblCustomer");

    // Clear table
    tBody.empty();

    // Load all values
    for (let i = 0; i < customerArray.length; i++) {
        let tr = $(`<tr>
                        <td>${customerArray[i].customerId}</td>
                        <td>${customerArray[i].customerName}</td>
                        <td>${customerArray[i].customerAddress}</td>
                        <td>${customerArray[i].customerSalary}</td>
                   </tr>`);
        tBody.append(tr);
    }
}

// search
$('#btnSearchCustomer').click(function () {
    let searchTxt = $("#txtSearchCus").val();
    if (searchTxt !== "") {
        getSearchCustomer(searchTxt);
    } else {
        alert("Input id to search");
        getAllCustomers();
    }
});

function getSearchCustomer(searchTxt) {
    console.log("clicked");
    let tBody = $("#tblCustomer");

    // Clear table
    tBody.empty();

    // Load matching values
    for (let i = 0; i < customerArray.length; i++) {
        if (searchTxt === customerArray[i].customerId) {
            let tr = $(`<tr>
                            <td>${customerArray[i].customerId}</td>
                            <td>${customerArray[i].customerName}</td>
                            <td>${customerArray[i].customerAddress}</td>
                            <td>${customerArray[i].customerSalary}</td>
                        </tr>`);
            tBody.append(tr);
        }
    }
}


// get data from selected raw
$('#tblCustomer').on('click', 'tr', function () {
    // Get the data from the selected row
    let customerId = $(this).find('td:eq(0)').text();
    let customerName = $(this).find('td:eq(1)').text();
    let customerAddress = $(this).find('td:eq(2)').text();
    let customerSalary = $(this).find('td:eq(3)').text();

    // Set the values to the fields
    $("#txtCustomerID").val(customerId);
    $("#txtCustomerName").val(customerName);
    $("#txtCustomerAddress").val(customerAddress);
    $("#txtCustomerSalary").val(customerSalary);
});

// button cancel , clear fields
$('#btnCancelCustomer').click(function () {
    clearAll();
});

function clearAll() {
    $("#txtCustomerID").val("");
    $("#txtCustomerName").val("");
    $("#txtCustomerAddress").val("");
    $("#txtCustomerSalary").val("");
}


// button delete ,
$('#btnDeleteCustomer').click(function () {
    let selectedID = $("#txtCustomerID").val();

    // search matching ID from arraylist, and delete the object with that id
    for (let i = 0; i < customerArray.length; i++) {
        if (selectedID === customerArray[i].customerId) {
            // Delete the object from the array
            let b = confirm("Do you want to delete?");
            if (b) {
                customerArray.splice(i, 1);
                break; // Exit the loop
            }
            break; // Exit the loop
        }
    }
    // update table
    getAllCustomers();
    clearAll()
});

// check customer is exists
function checkExistCustomer(id) {
    for (let i = 0; i < customerArray.length; i++) {
        if (id === customerArray[i].customerId) {
            return true;
        }
    }
    return false;
}

// disable tab
$("#txtCustomerID,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary").keydown(function (e) {
    if (e.key === "Tab") {
        e.preventDefault();
    }
});

// press enter to go next text fields (simulate tab)
$("#txtCustomerID").keydown(function (e){
    if(e.key === "Enter"){
        $('#txtCustomerName').focus();
    }
});

$("#txtCustomerName").keydown(function (e){
    if(e.key === "Enter"){
        $('#txtCustomerAddress').focus();
    }
});

$("#txtCustomerAddress").keydown(function (e){
    if(e.key === "Enter"){
        $('#txtCustomerSalary').focus();
    }
});

// validate Customer
var customerIDField = $('#txtCustomerID');
var regexCusID = /^C\d{2}-\d{3}$/;

customerIDField.on('keyup', function() {
    var customerID = customerIDField.val();

    if (regexCusID.test(customerID)) {
        customerIDField.removeClass('bg-danger').addClass('bg-success');
    } else {
        customerIDField.removeClass('bg-success').addClass('bg-danger');
    }
});

// Validate Name
var customerNameField = $('#txtCustomerName');
var regexName = /^[a-zA-Z\s]*$/;

customerNameField.on('keyup', function() {
    var customerName = customerNameField.val();

    if (regexName.test(customerName)) {
        customerNameField.removeClass('bg-danger').addClass('bg-success');
    } else {
        customerNameField.removeClass('bg-success').addClass('bg-danger');
    }
});

// validate address
var customerAddressField = $('#txtCustomerAddress');
var regexAddress = /^[a-zA-Z0-9\s\-,\.]+$/;

customerAddressField.on('keyup', function() {
    var customerAddress = customerAddressField.val();

    if (regexAddress.test(customerAddress)) {
        customerAddressField.removeClass('bg-danger').addClass('bg-success');
    } else {
        customerAddressField.removeClass('bg-success').addClass('bg-danger');
    }
});

// validate salary
var customerSalaryField = $('#txtCustomerSalary');
var regexSalary = /^(?:[5-9]\d{4}|[1-9]\d{4,})(,\d{3})*(\.\d+)?$/;

customerSalaryField.on('keyup', function() {
    var customerSalary = customerSalaryField.val();

    if (regexSalary.test(customerSalary)) {
        customerSalaryField.removeClass('bg-danger').addClass('bg-success');
    } else {
        customerSalaryField.removeClass('bg-success').addClass('bg-danger');
    }
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

// get data from selected raw
$('#tblItem').on('click', 'tr', function () {
    // Get the data from the selected row
    let code = $(this).find('td:eq(0)').text();
    let name = $(this).find('td:eq(1)').text();
    let price = $(this).find('td:eq(2)').text();
    let qty = $(this).find('td:eq(3)').text();

    // Set the values to the fields
    $("#txtItemCode").val(code);
    $("#txtItemName").val(name);
    $("#txtItemPrice").val(price);
    $("#txtItemQTY").val(qty);
});

//////////// Orders ////////////
//  set input field values to table
let ordersArray = [];

$('#btnSaveOrders').click(function () {
    let orderID = $('#txtOrderID').val();
    let date = $('#txtData').val();
    let cusID = $('#txtCusID').val();
    let itemPrice = $('#txtItemPrice2').val();

    let ordersObject = {
        orderID: orderID,
        orderDate: date,
        customerID: cusID,
        itemPrice: itemPrice
    }

    console.log(ordersObject);

    let tBody = $('#tblOrders');
    let tr = $(`<tr> <td> ${orderID} </td> <td> ${date} </td> <td> ${cusID} </td><td> ${itemPrice}</td> </tr>`);
    ordersArray.push(ordersObject);
    tBody.append(tr);
});


// get data from selected raw
$('#tblOrders').on('click', 'tr', function () {
    // Get the data from the selected row
    let orderID = $(this).find('td:eq(0)').text();
    let date = $(this).find('td:eq(1)').text();
    let cusID = $(this).find('td:eq(2)').text();
    let itemPrice = $(this).find('td:eq(3)').text();

    // Set the values to the fields
    $("#txtOrderID").val(orderID);
    $("#txtData").val(date);
    $("#txtCusID").val(cusID);
    $("#txtItemPrice").val(itemPrice);
});

