// validate Customer
var customerIDField = $('#txtCustomerID');
var regexCusID = /^C\d{2}-\d{3}$/;

customerIDField.on('keyup', function () {
    if (isValid(regexCusID, customerIDField.val())) {
        customerIDField.removeClass('border-danger').addClass('border-success');
        customerIDField.css('border-width', '2px');
    } else {
        customerIDField.removeClass('border-success').addClass('border-danger');
        customerIDField.css('border-width', '2px');
    }
});

function isValid(regexPattern, fieldValue) {
    return regexPattern.test(fieldValue);
}

// Validate Name
var customerNameField = $('#txtCustomerName');
var regexName = /^[a-zA-Z\s]*$/;

customerNameField.on('keyup', function () {
    var customerName = customerNameField.val();

    if (regexName.test(customerName)) {
        customerNameField.removeClass('border-danger').addClass('border-success');
        customerNameField.css('border-width', '2px');
    } else {
        customerNameField.removeClass('border-success').addClass('border-danger');
        customerNameField.css('border-width', '2px');
    }
});


// validate address
var customerAddressField = $('#txtCustomerAddress');
var regexAddress = /^[a-zA-Z0-9\s\-,\.]+$/;

customerAddressField.on('keyup', function () {
    var customerAddress = customerAddressField.val();

    if (regexAddress.test(customerAddress)) {
        customerAddressField.removeClass('border-danger').addClass('border-success');
        customerAddressField.css('border-width', '2px');
    } else {
        customerAddressField.removeClass('border-success').addClass('border-danger');
        customerAddressField.css('border-width', '2px');
    }
});


// validate salary
var customerSalaryField = $('#txtCustomerSalary');
var regexSalary = /^(?:[5-9]\d{4}|[1-9]\d{4,})(,\d{3})*(\.\d+)?$/;

customerSalaryField.on('keyup', function () {
    var customerSalary = customerSalaryField.val();

    if (regexSalary.test(customerSalary)) {
        customerSalaryField.removeClass('border-danger').addClass('border-success');
        customerSalaryField.css('border-width', '2px');
    } else {
        customerSalaryField.removeClass('border-success').addClass('border-danger');
        customerSalaryField.css('border-width', '2px');
    }
});
