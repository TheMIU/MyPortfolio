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
    var orderQty = parseInt(orderQtyInput.val());

    if (!isNaN(price) && !isNaN(orderQty) && isValidOrderItemQty) {
        var total = price * orderQty;
        totalOfItem.val(total.toFixed(2));

    } else {
        totalOfItem.val("");
    }

});


////////////////////////////////////////////////
let cart = [];

$('#addToCart').click(function () {
    // Get the item details
    let itemCode = $('#selectCode').val();
    let itemName = $('#OrderItemName').val();
    let price = $('#OrderItemPrice').val();
    let quantity = parseInt($('#OrderItemQty').val()); // Convert to number
    let total = parseFloat(price) * quantity; // Convert to number

    // Check if the item already exists in the cart
    let existingItem = cart.find(function (item) {
        return item.itemCode === itemCode;
    });

    if (existingItem && isValidOrderItemQty) {
        // Update the quantity and total of the existing item
        existingItem.quantity += quantity;
        existingItem.total += total;
    } else {
        // Create a new cart item object
        let cartItem = {
            itemCode: itemCode,
            itemName: itemName,
            price: price,
            quantity: quantity,
            total: total
        };

        // Add the cart item to the cart array
        if (isValidOrderItemQty) {
            cart.push(cartItem);
        } else {
            $('#OrderItemQty').focus();
            return; // Exit the function without displaying the cart items
        }
    }

    // Display the cart items in the table
    displayCartItems();

    // clear qty and total
    $('#OrderItemQty').val("");
    $('#TotalOfItem').val("");

    isValidOrderItemQty = false;

});

//add to table
function displayCartItems() {
    let cartTable = $('#cart');

    // Clear the table body
    cartTable.find('tbody').empty();

    // Iterate over the cart items and add rows to the table
    cart.forEach(function (item) {
        let row = '<tr>' +
            '<td>' + item.itemCode + '</td>' +
            '<td>' + item.itemName + '</td>' +
            '<td>' + item.price + '</td>' +
            '<td>' + item.quantity + '</td>' +
            '<td>' + item.total + '</td>' +
            '</tr>';

        cartTable.find('tbody').append(row);
    });

    calculateTotal();
    updateGrandTotal();
}

// load selected row to fields
$('#cart tbody').on('click', 'tr', function () {
    // Get the data from the clicked row
    let itemCode = $(this).find('td:eq(0)').text();
    let itemName = $(this).find('td:eq(1)').text();
    let price = $(this).find('td:eq(2)').text();
    let quantity = $(this).find('td:eq(3)').text();

    // Populate the input fields with the data
    $('#selectCode').val(itemCode);
    $('#OrderItemName').val(itemName);
    $('#OrderItemPrice').val(price);
    $('#OrderItemQty').val(quantity);
});

// Row selection
$('#cart tbody').on('click', 'tr', function () {
    $(this).toggleClass('selected');
});

// Remove selected row
$('#RemoveSelected').click(function () {
    // Get the selected row
    let selectedRow = $('#cart tbody tr.selected');

    if (selectedRow.length > 0) {
        // Get the index of the selected row within the table
        let selectedRowIndex = selectedRow.index();

        // Remove the selected row from the table
        selectedRow.remove();

        // Remove the corresponding item from the cart array
        cart.splice(selectedRowIndex, 1);
        calculateTotal();
        updateGrandTotal();
    }
});

// get total
calculateTotal();

function calculateTotal() {
    var tot = 0;

    // Iterate over each row in the table
    $('#cart tbody tr').each(function () {
        // Get the value of the "Total" column in the current row
        let rowTotal = parseFloat($(this).find('td:eq(4)').text());

        // Add the row total to the overall total
        tot += rowTotal;
    });

    // Update the total input field with the calculated total
    $('#total').val(tot.toFixed(2));
}

// grand total
// Keyup event handlers for cash and discount inputs
$('#cash, #discount').on('keyup', function () {
    updateGrandTotal();
});

function updateGrandTotal() {
    // Get the values of cash, total, and discount
    let cash = parseFloat($('#cash').val()) || 0;
    let total = parseFloat($('#total').val()) || 0;
    let discount = parseFloat($('#discount').val()) || 0;

    // Calculate the grand total
    let grandTotal = total - total * (discount / 100);
    let rest = cash - grandTotal;

    // Update the grand total input field
    $('#grandTotal').val(grandTotal.toFixed(2));
    $('#rest').val(rest.toFixed(2));
}