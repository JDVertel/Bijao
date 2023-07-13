<template>
  <div class="container carrito">
    <h6 class="display-6">carrito  </h6>
    <div class="table-responsive-sm">
    <table class="table table-sm">
      <thead>
        <tr>
          <th>Cant</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>subtotal</th>
          <th>Opc</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in $store.state.carrito" :key="index">
          <td></td>
          <td>{{ item.nombre }}</td>
          <td>${{ item.precio }}</td>
          <td></td>
          <td>
            <button class="btn btn-danger btn-sm" @click="removeItem(index)">
              x
            </button>
          </td>
        </tr>
      </tbody>
    </table>
<h1>{{$store.state.total}}</h1>
    
  </div>

  </div>
</template>

<script>

</script>
<style scoped>
.carrito{
  background-color: #DBEE61;
  font-size: 0.7rem!important;
  border-radius: 25px!important;
}
.btn{
margin: 0px!important;
border: none;
text-align: center;
border-radius: 50%!important;
height: 20px!important;
width:  20px!important;
padding: 1px!important;
font-size: 0.7rem!important;
}
table {
  text-align: center;
}
</style>




