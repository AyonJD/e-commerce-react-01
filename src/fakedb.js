const getStoredCart = () => {
    let shoppingCart;
    //Get the shopping cart from local storage
    const getCart = localStorage.getItem('shopping-cart');
    if (getCart) {
        shoppingCart = JSON.parse(getCart);
    } else {
        shoppingCart = {}
    }
    return shoppingCart;
}

const addToDb = id => {
    const storedCart = getStoredCart();
    //Adding quantity----Here quantity is, the value of key(id)
    const quantity = storedCart[id];
    console.log(quantity);
    if (quantity) {
        const newQuantity = quantity + 1;
        storedCart[id] = newQuantity;
    } else {
        storedCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(storedCart))
}
export {addToDb, getStoredCart}