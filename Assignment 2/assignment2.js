// Task # 1

function addNum(numToAdd) {
    return function (num) {
        return num + numToAdd;
    }
}

let addNumber = addNum(5);
console.log(addNumber(10));
console.log(addNumber(20));


// Task # 2

let arr = [1, 2, 3, 4, 5];

function searchArray(arr, val) {
    if (arr.length === 0) {
        return false;
    }
    if (arr[0] === val) {
        return true;
    }
    return searchArray(arr.slice(1), val);
}

console.log(searchArray(arr, 3));
console.log(searchArray(arr, 6));


// Task # 3

function addParagraph(text) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = text;
    document.body.appendChild(newParagraph);
}

addParagraph("My Name is Wajahat.");


// Task # 4

function addListItem(text) {
    const list = document.getElementById("list");
    const newListItem = document.createElement("li");
    newListItem.textContent = text;
    list.appendChild(newListItem);
}

addListItem("This is a new Item 4");


// Task # 5

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
}

const myElement = document.getElementById("bgColor");
changeBackgroundColor(myElement, "aqua");


// Task # 6

function saveToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
}

const myObject = { name: "Wajahat", age: 22 };
saveToLocalStorage("my-object", myObject);


// Task # 7

function getFromLocalStorage(key) {
    const storedObject = localStorage.getItem(key);
    return JSON.parse(storedObject);
}

const myReturnObject = getFromLocalStorage("my-object");
console.log(myObject);


// Task # 8

function saveObjectToLocalStorage(object) {
    for (const [key, value] of Object.entries(object)) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    const retrievedObject = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        retrievedObject[key] = JSON.parse(localStorage.getItem(key));
    }
    return retrievedObject;
}

const myReturningObject = { name: "Zohaib", age: 25 };
const retrievedObject = saveObjectToLocalStorage(myReturningObject);
console.log(retrievedObject);
