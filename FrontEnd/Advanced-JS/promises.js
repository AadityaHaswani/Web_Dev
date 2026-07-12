//Promises Example
function fetchdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success = true;
            if(success){
                resolve("Data Fetched Successfully")
            }
            else{
                reject("Error Fetching Data")
            }
        },3000)
  })    
}
fetchdata()
   .then((data)=>console.log(data))
   .catch((error)=>console.error(error))

