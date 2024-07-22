const promise = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        reslove("Successful")
        reject("Rejected")
        },2000)
})
promise.then((response)=>{
    console.log("response",response)
})
.catch((error)=>{
    console.log("error",error)
})
console.log('Hello')