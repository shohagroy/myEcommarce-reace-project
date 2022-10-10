

 



  const fetchData = (url) =>{
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        return data
    })
  }

// const getData = (url) =>{


//     fetch(url)
//     .then(res => res.json())
//     .then data =>  allData(data)
// }


// const allData = (d)=>{
//     return d

// }



export { fetchData};