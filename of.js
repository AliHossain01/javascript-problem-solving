const names = ['sokina', 'jorina', 'morjina', 'arjina', 'korjina'];

function oddFriend(names) {
    for (const element of names) {
        if (element.length % 2 != 0) {
            return element;
        }
    }
}

const oddNames = oddFriend(names);
console.log(oddNames);