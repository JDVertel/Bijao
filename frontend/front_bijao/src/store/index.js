import { createStore } from "vuex";

export default createStore({
  state: {
    carrito: [{ nombre: 'prueba1', precio:12000 }],
    item: [],
    sumatoria:'',
  },
  mutations: {
    addItem(state, item) {
      state.carrito = [state.item, ...state.carrito];
    },
  },

actions:{
    addItemAction (context){
        context.commit('addItem');
        this.sumatoria= state.item.precio+sumatoria
    }
}

});


