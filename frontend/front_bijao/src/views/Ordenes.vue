<template>
  <div class="container">
    <div class="app">
      <CarritodeCompras/>
      <div class="row">
        <div class="col-7"> <h6>Total de pedido: $45000 </h6> </div>
        <div class="col-5" style="color:red
        "><small> <strong>*No incluye gastos de envio</strong></small></div>
       
      </div>
     

      <hr />
      <h6>Datos para realizar envio</h6>

      <p>
        Nota: su pedido será confirmado por uno de nuestros encargados vía
        telefónica y deberá ser cancelado al momento de recibirlo
      </p>
      <div class="form">

      
      <div class="row">
        <div class="col-6">
          <!--  -->
          <div class="input-group input-group-sm mb-1">
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Nombre"
            />
          </div>
          <!--  -->
          <div class="input-group input-group-sm mb-1">
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Direccion"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="input-group input-group-sm mb-1">
            <input
              type="email"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Email"
            />
          </div>

          <div class="input-group input-group-sm mb-1">
            <input
              type="number"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Celular"
            />
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-outline-success btn-sm " style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">Realizar pedido</button>
    </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";



export default{
  name:'App',
  components:{
    CarritodeCompras:defineAsyncComponent( ()=> import('./../components/carritodecompras/carrito.vue'))
  }
}
</script>

<style></style>
