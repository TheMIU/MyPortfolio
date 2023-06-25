// load all customer IDs
loadAllCusIDs();

var selectCusElement;

function loadAllCusIDs() {
    selectCusElement = document.getElementById("selectCusID");

    // Clear all existing options
    while (selectCusElement.firstChild) {
        selectCusElement.removeChild(selectCusElement.firstChild);
    }

    // Add data from the customerDB array
    customerDB.forEach(function (customer) {
        var optionElement = document.createElement("option");
        optionElement.value = customer.id;
        optionElement.textContent = customer.id;
        selectCusElement.appendChild(optionElement);
    });
}

// Add event listener to the select element
selectCusElement.addEventListener("change", function () {
    var selectedCustomerId = selectCusElement.value;
    var selectedCustomer = customerDB.find(function (customer) {
        return customer.id === selectedCustomerId;
    });

    if (selectedCustomer) {
        $('#OrderCusName').val(selectedCustomer.name);
        $('#OrderCusAddress').val(selectedCustomer.address);
    } else {
        $('#OrderCusName').val("");
        $('#OrderCusAddress').val("");
    }
});


/////////////////////////////////////////////
// Load all item codes
loadAllItemCodes();

var selectCodeElement;

function loadAllItemCodes() {
    selectCodeElement = document.getElementById("selectCode");

    // Clear all existing options
    while (selectCodeElement.firstChild) {
        selectCodeElement.removeChild(selectCodeElement.firstChild);
    }

    // Add data from the itemDB array
    itemDB.forEach(function (item) {
        var optionElement = document.createElement("option");
        optionElement.value = item.code;
        optionElement.textContent = item.code;
        selectCodeElement.appendChild(optionElement);
    });
}

// Add event listener to the select element
selectCodeElement.addEventListener("change", function () {
    var selectedCode = selectCodeElement.value;
    var selectedItem = itemDB.find(function (item) {
        return item.code === selectedCode;
    });

    if (selectedItem) {
        $('#OrderItemName').val(selectedItem.itemName);
        $('#OrderItemPrice').val(selectedItem.unitPrice);
        $('#OrderItemQtyOnH').val(selectedItem.qtyOnHand);

    } else {
        $('#OrderItemName').val("");
        $('#OrderItemPrice').val("");
        $('#OrderItemQtyOnH').val("");
    }
});

///////////////////////////////////////////////
// Calculate total
var orderQtyInput = $("#OrderItemQty");
var totalOfItem = $("#TotalOfItem");

orderQtyInput.on("keyup", function () {
    var price = parseFloat($('#OrderItemPrice').val());
    var orderQty = parseFloat(orderQtyInput.val());

    if (!isNaN(price) && !isNaN(orderQty)) {
        var total = price * orderQty;
        totalOfItem.val(total.toFixed(2));
    } else {
        totalOfItem.val("");
    }
});

