function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity) {
    if (typeof singaraQuantity != 'number' || typeof somuchaQuantity != 'number' || typeof jilapiQuantity != 'number') {
        return 'Please give a number';
    }

    const perSingraPrice = 7;
    const perSomuchaPrice = 10;
    const perJilapiPrice = 15;
    // Price calculation
    const singaraTotalPrice = singaraQuantity * perSingraPrice;
    const somuchaTotalPrice = somuchaQuantity * perSomuchaPrice;
    const jilapiTotalPrice = jilapiQuantity * perJilapiPrice;
    //Total Price
    const totalPrice = singaraTotalPrice + somuchaTotalPrice + jilapiTotalPrice;
    return totalPrice;
}

const allPrice = pandaCost(1, 1, 1);
console.log(allPrice);