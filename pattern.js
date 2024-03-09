//  *  *  *  *  * 
//  *  *  *  *  * 
//  *  *  *  *  *
//  *  *  *  *  * 
//  *  *  *  *  *
for (let i = 0; i < 5; i++) {
    console.log("* * * * *")
}
// *
// **
// ***
// ****
// *****
for (let i = 0; i < 5; i++) {
    let a = "*".repeat(i + 1)
    console.log(a)
}
// 1
// 12
// 123
// 1234
// 12345
let element = ""
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        element += (j + 1).toString()
    }
    console.log(element)
    element = ""
}
// 1
// 22
// 333
// 4444
// 55555
for (let i = 0; i < 5; i++) {
    let a = (i + 1).toString().repeat(i + 1)
    console.log(a)
}
// *****
// ****
// ***
// **
// *
for (let i = 5; i > 0; i--) {
    let a = "*".repeat(i)
    console.log(a)
}
// 12345
// 1234
// 123
// 12
// 1
let element2 = ""
for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        element2 += (j + 1).toString()
    }
    console.log(element2)
    element2 = ""
}
//     *    
//    ***   
//   *****  
//  ******* 
// *********
let n = 5
let count = 1
for (let i = 0; i < n; i++) {
    let a = " ".repeat((n + (n - 1) - count) / 2) + "X".repeat(count) + " ".repeat((n + (n - 1) - count) / 2)
    console.log(a)
    count += 2
}
// XXXXXXXXX
//  XXXXXXX
//   XXXXX
//    XXX
//     X
let n1 = 5
let count2 = n1 + (n1 - 1)
for (let i = n1; i > 0; i--) {
    let a = " ".repeat((n1 + (n1 - 1) - count2) / 2) + "X".repeat(count2) + " ".repeat((n1 + (n1 - 1) - count2) / 2)
    console.log(a)
    count2 -= 2

}
// X
// XX
// XXX
// XXXX
// XXXXX
// XXXXX
// XXXX
// XXX
// XX
// X
let n3 = 5
for (let i = 0; i < n3; i++) {
    let a = "X".repeat(i + 1) + " ".repeat((n3 + (n3 - 1) - (i + 1)) / 2)
    console.log(a)
}
let n2 = 5
for (let i = n2; i > 0; i--) {
    let a = "X".repeat(i) + " ".repeat((n2 + (n2 - 1) - i) / 2)
    console.log(a)

}
