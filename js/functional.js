function getInputValue( inputId ) {
    const inputField = document.getElementById( inputId );
    const inputFieldText = inputField.value;
    const inputValue = parseInt( inputFieldText );
    inputField.value = '';
    return inputValue;
}

function getInnerTextValue( fieldId ) {
    const fieldTag = document.getElementById( fieldId );
    const fieldText = fieldTag.innerText;
    const fieldValue = parseFloat( fieldText );
    return fieldValue;
}

function updateTotal( fieldId, inputAmount ) {
    const totalField = document.getElementById( fieldId );
    const totalFieldValue = parseFloat( totalField.innerText );
    totalField.innerHTML = totalFieldValue + inputAmount;
}

/* function updateBalance( inputAmount ) {
    const previousBalance = getInnerTextValue( 'balance-total' );
    const newBalance = previousBalance + inputAmount;
    document.getElementById( 'balance-total' ).innerText = newBalance;
} */

function updateBalance( depositId, withdrawId, initialBalance ) {
    const deposit = getInnerTextValue( depositId );
    const withdraw = getInnerTextValue( withdrawId );
    const newBalance = deposit - withdraw + initialBalance;
    document.getElementById( 'balance-total' ).innerText = newBalance;
}

//handle deposit
document.getElementById( 'deposit-button' ).addEventListener( 'click', function () {
    const inputAmount = getInputValue( 'deposit-input' );
    const initialBalance = 1240;
    if ( inputAmount > 0 ) {
        updateTotal( 'deposit-total', inputAmount );
        updateBalance( 'deposit-total', 'withdraw-total', initialBalance );
    }
} );

//handle withdraw
document.getElementById( 'withdraw-button' ).addEventListener( 'click', function () {
    const inputAmount = getInputValue( 'withdraw-input' );
    const initialBalance = 1240;
    const balance = getInnerTextValue( 'balance-total' );
    if ( inputAmount > 0 && inputAmount <= balance ) {
        updateTotal( 'withdraw-total', inputAmount );
        updateBalance( 'deposit-total', 'withdraw-total', initialBalance );
    }
} );