import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/HomePage';
import Cart from './pages/CartPage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import Product from './pages/ProductsPage';
import SingleProduct from './pages/SingleProductPage';
import Default from './pages/DefaultPage';
import { Switch, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Sidecart from './components/Sidecart';

class App extends React.Component {
  render() {
  return (
    <>
    <Navbar />
    <Sidebar />
    <Sidecart />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/products" exact component={Product} />
      <Route path="/singleproduct/:id" exact component={SingleProduct} />
      <Route component={Default} />
       />
    </Switch>
    <Footer />
    </>
  );
}
}

export default App;
