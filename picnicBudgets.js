function picnicBudget(people) {
    if (typeof people != 'number') {
        return 'Please give a number';
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

const cost = picnicBudget(250);
console.log(cost);