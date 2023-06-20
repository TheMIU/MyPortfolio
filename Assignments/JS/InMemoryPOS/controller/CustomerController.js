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



