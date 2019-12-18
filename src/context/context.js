import React from 'react';
import { linkData } from './linkData';
import { socialData } from './socialData';
import { items } from '../productData';

const ProductContext = React.createContext();


class ProductProvider extends React.Component {
    state={
        sidebarOpen:false,
        cartOpen:false,
        cartItems:110,
        links:linkData,
        socialLinks:socialData,
        cart:[],
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
        storeProducts:[],
        filteredProducts:[],
        featuredProducts:[],
        singleProduct:{},
        loading:true
    }
    componentDidMount() {
        this.setProducts(items);
    }
     setProducts = (products) => {
        let storeProducts = products.map(item=> {
            const { id } = item.sys;
            const product ={id, ...item.fields }
            return product;
        })
        let featuredProducts= storeProducts.filter(product =>product.featured ===true);
        this.setState({ 
            storeProducts,
            filteredProducts:storeProducts,
            featuredProducts,
            cart:this.getStorageCart(),
            singleProduct:this.getStorageProduct(),
            loading:false
        })
    }
    getStorageCart=() => {
        return [];
    }
    getStorageProduct=() =>{
        return []
    }
    getTotals=()=> {};

    addTotals=(id)=> {
        console.log(id);
    };
    addToCart=id=>{
        console.log(`add to cart ${id}`);
    }
    setSingleProduct=(id) => {
        console.log(`set single product ${id}`);
    }
    syncStorage=()=> {};
    handleSidebar =()=> {
        this.setState({sidebarOpen:!this.state.sidebarOpen})
    };
    handleCart =()=> {
        this.setState({cartOpen:!this.state.sidebarOpen})
    }
    closeCart = () => {
        this.setState({ cartOpen:false})
    }
    openCart =()=> {
        this.setState({ cartOpen:true})
    }
    render() {
        return(
        <ProductContext.Provider value={{
            ...this.state,
            handleSidebar:this.handleSidebar,
            handleCart:this.handleCart,
            closeCart:this.closeCart,
            openCart:this.openCart,
            addToCart:this.addToCart,
            setSingleProduct:this.setSingleProduct
            

        }}>
            {this.props.children}
        </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };