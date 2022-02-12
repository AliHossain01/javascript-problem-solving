function animalCount(miles) {
    const animalDensityFirst10Miles = 5000;
    const animalDensitySecond10Miles = 4000;
    const animalDensityRestMiles = 3000;
    if (miles <= 100) {
        const count = miles * animalDensityFirst10Miles;
        return count;
    }
    else if (miles <= 200) {
        const firstDenseAnimals = 100 * animalDensityFirst10Miles;
        const restMiles = miles - 100;
        const secondDenseAnimals = restMiles * animalDensitySecond10Miles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals;
        return totalAnimals;
    }
    else {
        const firstDenseAnimals = 100 * animalDensityFirst10Miles;
        const secondDenseAnimals = 100 * animalDensitySecond10Miles;
        const restMiles = miles - 200;
        const RestDenseAnimals = restMiles * animalDensityRestMiles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals + RestDenseAnimals;
        return totalAnimals;
    }
}

const animals = animalCount(20);
console.log(animals);