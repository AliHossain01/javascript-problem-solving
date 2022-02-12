const names = ['sokina', 'jorina', 'jorina', 'morjina', 'arjina', 'korjina'];

function removeDuplicate(names) {
    const unique = [];

    for (const element of names) {
        if (element.length % 2 != 0) {
            unique.push(element);
            break;
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);