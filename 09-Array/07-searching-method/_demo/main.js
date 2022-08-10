// const arr = ["H","E","L","L","O","E","E",]

// let result = arr.find(function (item,index,array){

//     // console.log(item,index)

//     if(item === "E") {

//         return true
//     }
// })

// // let result = arr.find(item => item === "E")

// console.log(result)

const arr = [
    
    {species : 'cat', name : 'cha-nom'},
    {species : 'dog', name : 'o-leang'},
    {species : 'bird', name : 'jib'},
    {species : 'cat', name : 'cha-chak'},
    {species : 'bird', name : 'mali'},
]

// const result = arr.find(item => item.species = "bird")
// console.log(result)

// const result = arr.filter(function(item,index,array){

//     // return item.species === 'bird'    
// })

const result = arr.filter(item => item.species === "bird")
console.log(result)

const num = [2,4,6,8]
const square = num.map(item => item **2) 