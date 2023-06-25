let isValidOrderItemQty;
let orderItemQtyField = $('#OrderItemQty');
let orderItemQtyOnH = $('#OrderItemQtyOnH');

// regex pattern
let regexItemQty = /^\d+(\.\d{1,2})?$/;

orderItemQtyField.on('keyup', function () {
    let enteredQty = parseInt(orderItemQtyField.val());
    let availableQty = parseInt(orderItemQtyOnH.val());

    isValidOrderItemQty = isValid(regexItemQty, orderItemQtyField.val()) && (enteredQty <= availableQty);

    console.log(enteredQty <= availableQty);
    console.log(enteredQty);
    console.log(availableQty);
    console.log(isValidOrderItemQty);

    changeTextFieldColors(orderItemQtyField,isValidOrderItemQty);
});
