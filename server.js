//Following are the synchronous way

const fs=require('fs'); // file syatem

// fs.writeFileSync('data.txt' ," Hey welcome guys howz the josh"); // to write file

// const data=fs.readFileSync('data.txt', 'utf-8'); // to read the file
// console.log(data); // We will get buffer data type as a output use specifications to get the language of your requried


// fs.appendFileSync('data.txt' , " Author is Node js ")

// fs.unlinkSync('data.txt')

// Following 

// fs.writeFile('datas.txt' ," Hey its async way of writing" ,()=>{
// console.log('error')
// })

fs.readFile('datas.txt', 'utf-8' ,(err,data)=>{
    console.log(data)
})