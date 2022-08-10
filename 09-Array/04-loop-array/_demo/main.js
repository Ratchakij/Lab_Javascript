// จงหาผลรวมของ element ใน array โดยใช้ forEach


const array = [29, 17, 13, 47, 23, 31];

let sum = 0;

function runEveryItems(item,index,array){

    sum += item;
}

// array.forEach(runEveryItems)


///// On yhe fly
array.forEach((item,index,array) => {
    sum+= item
})



console.log(sum)
