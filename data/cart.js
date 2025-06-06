export let cart =[{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2,
}, 
{
    productId: 'id2',
    quantity: 1
}];


function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId){
    let matchingItem;

        cart.forEach((cartItem)=>{
            if(productId === cartItem.productId){
                matchingItem = cartItem;
            }
        });

        if (matchingItem){
            matchingItem.quantity +=1;
        }else{
            cart.push({
            productId,
            quantity: 1
        });
        }

        saveToStorage();
}

export function removeFromCart(productId) {
 const newCart = [];

 cart.forEach((cartItem) => {
    if(cartItem.productId !== productId) {
        newCart.push(cartItem)
    }
 });

 cart = newCart;

 saveToStorage();
}