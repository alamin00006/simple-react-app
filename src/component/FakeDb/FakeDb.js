const FakeDb = (id) =>{
let shopingcart;
 
// get Data
const storedCart = localStorage.getItem('shoping-cart');
if(storedCart){
    shopingcart = JSON.parse(storedCart);
}
else{
    shopingcart = {};
}
// added local Storage
 const quantity = shopingcart[id];

 if(quantity){
     const newQuantity = quantity + 1;
    shopingcart[id] = newQuantity;
    
 }
 else{
    shopingcart[id] = 1;
 }
 localStorage.setItem('shoping-cart', JSON.stringify(shopingcart))

}

const RemoveData = (id)=>{
    const storedCart = localStorage.getItem('shoping-cart');
    if(storedCart){
     const shopingcart = JSON.parse(storedCart); 
     if(id in shopingcart){
        delete shopingcart[id];
        localStorage.setItem('shoping-cart', JSON.stringify(shopingcart))
     }
    }
}

export {FakeDb, RemoveData};