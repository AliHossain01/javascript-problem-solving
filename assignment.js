// Problem-1-anaToVori
function anaToVori(ana) {
    if (typeof ana != 'number') {
        return 'Please give a number';
    }
    if (ana < 0) {
        return 'Please enter a positive number'
    }

    var vori = ana / 16;
    return vori;
}



// Problem-2-pandaCost
function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity) {
    if (typeof singaraQuantity != 'number' || typeof somuchaQuantity != 'number' || typeof jilapiQuantity != 'number') {
        return 'Please give a number';
    }

    if (singaraQuantity < 0 || somuchaQuantity < 0 || jilapiQuantity < 0) {
        return 'Please enter a positive number'
    }

    const perSingraPrice = 7;
    const perSomuchaPrice = 10;
    const perJilapiPrice = 15;

    const singaraTotalPrice = singaraQuantity * perSingraPrice;
    const somuchaTotalPrice = somuchaQuantity * perSomuchaPrice;
    const jilapiTotalPrice = jilapiQuantity * perJilapiPrice;

    const totalPrice = singaraTotalPrice + somuchaTotalPrice + jilapiTotalPrice;
    return totalPrice;
}



// Problem-3-picnicBudget
function picnicBudget(people) {
    if (typeof people != 'number') {
        return 'Please give a number';
    }
    if (people < 0) {
        return 'Please enter a positive number'
    }

    const budgetForFirst100people = 5000;
    const budgetForSecond100people = 4000;
    const budgetForRestpeople = 3000;
    if (people <= 100) {
        const count = people * budgetForFirst100people;
        return count;
    }
    else if (people <= 200) {
        const first100PeopleBudgets = 100 * budgetForFirst100people;
        const restpeople = people - 100;
        const second100PeopleBudgets = restpeople * budgetForSecond100people;
        const totalBudgets = first100PeopleBudgets + second100PeopleBudgets;
        return totalBudgets;
    }
    else {
        const first100PeopleBudgets = 100 * budgetForFirst100people;
        const second100PeopleBudgets = 100 * budgetForSecond100people;
        const restpeople = people - 200;
        const restPeopleBudgets = restpeople * budgetForRestpeople;
        const totalBudgets = first100PeopleBudgets + second100PeopleBudgets + restPeopleBudgets;
        return totalBudgets;
    }
}



// Problem-4-oddFriend
function oddFriend(names) {
    if (typeof names != 'object') {
        return 'Please give an array of string';
    }

    for (const element of names) {
        if (element.length % 2 != 0) {
            return element;
        }
    }
}


// var myAna = 64;
// var vori = anaToVori(64);
// console.log(vori);

// const allPrice = pandaCost(1, 1, 1);
// console.log(allPrice);

// const cost = picnicBudget(240);
// console.log(cost);

// const names = ['sokina', 'jorina', 'morjina', 'arjina', 'korjina'];
// const oddNames = oddFriend(names);
// console.log(oddNames);

