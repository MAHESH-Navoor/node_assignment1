let ready=true
//let ready=false
//let ready='';

const prom1 = new Promise((resolve,reject)=>{
    if(ready){
        const markReady ="This is the ok"
        resolve(markReady)
    }

    else{
        const markNot='Still working'
        reject(markNot)
    }
})

console.log()

 
const check=()=>{
    prom1.then(val=>{
        console.log(`result:  ${val}`);
    })
    .catch(err=>{

        console.log(`error show: ${err}`)
    })
}

check();