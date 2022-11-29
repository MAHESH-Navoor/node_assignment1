
const prom1 = new Promise((resolve,reject)=>{
       
        resolve('resoved suceffuly...')
        reject('rejected!!')
    
})

prom1.then(
    (res)=>{
        console.log(res)
    },
    (err)=>{
        console.log(err)
    }
)


