import React from 'react';
import { linkData } from './linkData';
const ProductContext = React.createContext();

class ProductProvider extends React.Component {
    state={
        sidebarOpen:false,
        cartOpen:true,
        cartItems:110,
        links:linkData,
        cart:[]
    }
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
            

        }}>
            {this.props.children}
        </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };