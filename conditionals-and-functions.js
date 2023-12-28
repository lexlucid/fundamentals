// Conditionals, Functions, Scope, Loops

// Equals
let equals = 1 === 1
console.log(equals)

// Greater than
let greaterThan = 5 > 1

// Less than
let lessThan = 2 < 10

// Greater than Equals
let greaterThanEq = 5 >= 5

// Less than Equals
let lessThanEq = 4 <= 9

// Not Equals
let notEquals = 5 !== 2

let storeA = 3.10
let storeB = 4.40

let storeAIsLower = storeA < storeB
console.log(storeAIsLower)

function compareStorePRices (storeA, storeB) {
    if (storeAIsLower) {
        console.log("Store A has a lower price")
    } else if (storeB < storeA){
        console.log("Store B has a lower price")
    } else {
        console.log("Their prices are equal")
    }
}

compareStorePRices(10, 5)
compareStorePRices(7, 10)

function squareNum (number) {
    let squared = number * number
    return squared
}

let squaredNumber = squareNum(4)
console.log(squaredNumber)

// Scope

let x = 10

function addNumbers (n, m) {
    console.log(x)
    let b
    if (1 === 1) {
        let b = 8
    }
    console.log(b)
    return n + m
}

addNumbers(2, 3)


// Arrays

let ourArray = [1, 2, 3, 4, 5]
console.log(ourArray[3])

// Loops

let arrLen = ourArray.length

for (let i = 0; i < arrLen; i++) {
    // console.log(`i is equal to ${i}`)
    console.log(ourArray[i])
    for (let j = 0; j < 10; j++) {
        console.log(`j is equal to ${j}`)
    }
}

while (x < 10) {
    console.log("ran")
    x = x + 1
}