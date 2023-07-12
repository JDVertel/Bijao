<template>
  <div class="container carrito">
    <h2>Carrito de compras</h2>
    <div class="table-responsive-sm">
    <table class="table table-sm">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Opc</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in $store.state.carrito" :key="index">
          <td>{{ item.nombre }}</td>
          <td>{{ item.precio }}</td>
          <td>
            <button class="btn btn-danger btn-sm" @click="removeItem(index)">
              x
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {},
};
</script>
<style>
.carrito{
  background-color: #DBEE61;
}
</style>




