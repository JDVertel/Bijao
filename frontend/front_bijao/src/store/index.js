import { createStore } from "vuex";

export default createStore({
  state: {
    carrito: [],
    item: [],
    subtotal:[],
    total:'',
  },
  mutations: {
    addItem(state, item) 
    {
      state.carrito = [state.item, ...state.carrito];
      state.subtotal= [state.item.precio, ...state.subtotal];
      state.total= state.subtotal.reduce((acc,el)=> acc+el,0)
    },
 
  },

actions:{
    addItemAction (item){
        item.commit('addItem');   
    },
 
}
});


