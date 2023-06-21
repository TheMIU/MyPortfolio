let isValidCusID = false;
let isValidName = false;
let isValidAddress = false;
let isValidSalary = false;

function checkValidCustomer() {
    isValidCusID = isValid(regexCusID, customerIDField.val());
    isValidName = isValid(regexName, customerNameField.val());
    isValidAddress = isValid(regexAddress, customerAddressField.val());
    isValidSalary = isValid(regexSalary, customerSalaryField.val());

    return isValidCusID && isValidName && isValidAddress && isValidSalary;
}

// text fields
let customerIDField = $('#txtCustomerID');
let customerNameField = $('#txtCustomerName');
let customerAddressField = $('#txtCustomerAddress');
let customerSalaryField = $('#txtCustomerSalary');

// regex patterns
let regexCusID = /^(C00-)[0-9]{3}$/;
let regexName = /^[A-Za-z ]{5,}$/;
let regexAddress = /^[A-Za-z0-9 ]{8,}$/;
let regexSalary = /^[0-9]{2,}([.][0-9]{2})?$/;

//error labels
let invalidIdMessage = $('#invalidIdMessage');
let invalidNameMessage = $('#invalidNameMessage');
let invalidAddressMessage = $('#invalidAddressMessage');
let invalidSalaryMessage = $('#invalidSalaryMessage');

//hide at beginning
hideErrorMessages()

function hideErrorMessages() {
    invalidIdMessage.hide();
    invalidNameMessage.hide();
    invalidAddressMessage.hide();
    invalidSalaryMessage.hide();
}


// keyup functions
// Validate ID
customerIDField.on('keyup', function () {
    isValidCusID = isValid(regexCusID, customerIDField.val());
    changeTextFieldColors(customerIDField,isValidCusID);
    displayErrorText(invalidIdMessage,isValidCusID);
});

// Validate Name
customerNameField.on('keyup', function () {
    isValidName = isValid(regexName, customerNameField.val());
    changeTextFieldColors(customerNameField,isValidName);
    displayErrorText(invalidNameMessage,isValidName);
});

// validate address
customerAddressField.on('keyup', function () {
    isValidAddress = isValid(regexAddress, customerAddressField.val());
    changeTextFieldColors(customerAddressField, isValidAddress);
    displayErrorText(invalidAddressMessage,isValidAddress);
});

// validate salary
customerSalaryField.on('keyup', function () {
    isValidSalary = isValid(regexSalary, customerSalaryField.val());
    changeTextFieldColors(customerSalaryField, isValidSalary);
    displayErrorText(invalidSalaryMessage,isValidSalary);
});

// check field value is matching to regex
function isValid(regexPattern, fieldValue) {
    return regexPattern.test(fieldValue);
}

// text field border color change
function changeTextFieldColors(field,condition) {
    if (condition) {
        field.removeClass('border-danger').addClass('border-success');
        field.css('border-width', '2px');
    } else {
        field.removeClass('border-success').addClass('border-danger');
        field.css('border-width', '2px');
    }
}

function displayErrorText(messageLabel, condition) {
    if(condition){
        messageLabel.hide();
    }else {
        messageLabel.show();
    }
}

///////////////////////////////////////////////

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


