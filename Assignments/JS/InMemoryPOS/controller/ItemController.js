
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

