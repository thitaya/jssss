const studenttall = [
    {
        name: 'tarn',
        tall: 155
    },
    {
        name: 'kwan',
        tall: 165
    },
    {
        name: 'chai',
        tall: 167
    },
    {
        name: 'noon',
        tall: 180
    }
]


const log = (message) => {
    console.log(message)
}
// log('hello world')
// log('hello world1')



// const exampleFunction = (callback) => {
// console.log('main function')
// callback('a')

// }

// const callback1 = () => {
// console.log('callback')
// }
// exampleFunction(callback1)




studenttall.forEach((student)=> {
    if (student.tall > 165) {
        log(student.name)

    }
})






