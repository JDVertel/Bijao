<template>
    <div>
      <product-list :products="products" @add="addToCart"></product-list>
      <cart :items="cartItems" @remove="removeFromCart"></cart>
    </div>
  </template>
  
  <script>
  import ProductList from './ProductList.vue';
  import Cart from './Cart.vue';
  
  export default {
    components: {
      ProductList,
      Cart
    },
    data() {
      return {
        products: [
          { name: 'Producto 1', price: 10 },
          { name: 'Producto 2', price: 20 },
          { name: 'Producto 3', price: 30 }
        ],
        cartItems: []
      }
    },
    methods: {
      addToCart(product) {
        this.cartItems.push(product);
      },
      removeFromCart(index) {
        this.cartItems.splice(index, 1);
      }
    }
  }
  </script>