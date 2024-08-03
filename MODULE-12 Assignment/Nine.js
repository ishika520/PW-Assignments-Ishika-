const array = [1, 2, 'hello', 4, 'world'];

function findFirstString(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            document.getElementById('result').innerText = `Found the First String: ${arr[i]}`;
            break;
        }
    }
}

findFirstString(array);
