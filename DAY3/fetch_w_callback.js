const DEMO_URL = "https://course-api.com/react-store-products";
function fetchData(url, callBack){
    fetch(url)
    .then (response => response.json())
    .then(data => callBack(data))
    .catch(error =>console.log("Error occured",error))
}
function handleData(data){
    console.log("Received data",data)
    data.forEach(product => {
    console.log(`Product: ${product.name}, Price: $${product.price}`);
  });
}

fetchData(DEMO_URL, handleData)