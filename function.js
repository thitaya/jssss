
const print = function(student){
    console.log('my name is'+student.name)
    console.log('my tall is'+student.tall)
}

const people ={
    name: 'thitaya',
    tall: 160

}

print(people)


const sumfunction = function(a=0,b=0){
    const sum = a+b
    return sum
}
const result =sumfunction (20,10)
console.log(result)




const sumfunction1 = (a=0,b=0) => {
    const sum = a-b
    return sum
}
const result1 =sumfunction1(15,10)
console.log(result1)


const sumfunction2 = (a=0,b=0) => {
    const sum = a*b
    return sum
}
const result2 =sumfunction2(10,10)
console.log(result2)



