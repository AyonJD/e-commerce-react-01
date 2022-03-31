import { addToDb, getStoredCart } from '../../fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    //Custom hook-- To fetch data
    const [products, setProducts] = useProducts();
    //Custom hook-- To getting data from local storage
    const [cart, setCart] = useCart()
    
    //Creacting function to handle the button in product.js
    const handleAdToCart = props => {
        //Solve, cart was not updating quantity
        let newCart = [];
        const exists = cart.find(product => product.id === props.id);
        //exists = undefined
        //or
        //exists = {props};
        if (!exists) {
            props.quantity = 1;
            newCart = [...cart, props];
        } else {
            const rest = cart.filter(product => product.id !== props.id);
            //rest = [{},{}]
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(props.id)
    }
    
    return (
        <div className='shop-section'>
            <div className="products-section">
                {
                    products.map(product => <Product key={product.id} product={product} handleAdToCart={handleAdToCart}></Product>)
                }
            </div>
            <div className="cart-section">
                    <Cart cart={ cart }></Cart>
            </div>
        </div>
    );
};

export default Shop;