import { useEffect, useState } from "react";
import { getStoredCart } from "../../fakedb";
import useProducts from "./useProducts";


//useEffect for getting data from local storage
//Aikhane useEffect er dependency products na dile uporer products load hobar age e nicar useEffect exicute hoschilo j jonno addededProducts undifined hoschilo cause products er vitor kichu paschilo na.
const useCart = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useProducts()
    useEffect(() => {
        const storedCart = getStoredCart();
        //making an impty array to put the filtered product with new quantity
        const storedCartArr = [];
        for (const id in storedCart) {
            const addededProduct = products.find(product => product.id === id);
            //setting the quantity
            if (addededProduct) {
                addededProduct.quantity = storedCart[id];
                storedCartArr.push(addededProduct);
            }
        }
        setCart(storedCartArr)
    }, [products])
    return [cart, setCart];
};

export default useCart;