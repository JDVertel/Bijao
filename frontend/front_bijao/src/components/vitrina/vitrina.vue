<template>
  <div class="container principal">
    <div class="row">
      <div class="col-6 col-sm-3" v-for="(item, index) in productos" :key="index">
        <div class="card mb-3 transparente fija" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                :src="'/src/components/images/'+`${item.imglink}`"
                class="img-fluid rounded"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{item.nombre}}</h5>
                <div class="row">
                  <div class="col-8">
                    <p class="card-text">
                      <small class="text-body-secondary">${{item.precio}}</small>
                    </p>
                  </div>
                  <div class="col-4">
                    <button class="btn btn-success btn-sm" @click="agregar(item.nombre, item.precio)">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- fin container -->

    <div class="container">
      <h6 class="display-6">Orden</h6>
      <table class="table table-sm table-hover">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>cantidad</th>
            <th>subtotal</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="btn-group btn-group-sm" role="group">
                <button type="button" class="btn btn-danger" @click="restar()">-</button>
                <button type="button" class="btn btn-success" @click="sumar()">+</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <h6>Total $</h6>
    </div>
    {{ orden }}
    {{ ordenes }}
  </div>
</template>

<script setup>
import { ref } from "vue";

let orden = ref({});

let ordenes= ref([])

let productos=ref([
  {
    nombre:"Tamal de carne",
    precio:"2500",
    imglink:"tamal1.png",

  },
  {
    nombre:"Tamal de pollo",
    precio:"2600",
    imglink:"tamal2.png",
    
  },
  {
    nombre:"Tamal Mixto",
    precio:"3000",
    imglink:"tamal3.png",
    
  },
  {
    nombre:"Tamal de costillitas",
    precio:"3500",
    imglink:"tamal4.png",
    
  }
]);
const sumar =()=>{
alert("restar elemento");
}
const restar =()=>{
  alert("sumar elemento");
}

const agregar =(nom,prec)=>{
orden.nombre=nom
orden.precio=prec

alert(`${orden.nombre}`+ " "+`${orden.precio}`)

ordenes.push(orden.value)

console.log(value.ordenes)








}

</script>

<style>
.transparente {
  padding: 5px;
  font-size: 0.7rem;
  background-color: transparent !important;
  border-color: transparent !important;
}
p.card-text {
  max-height: 50px;
}
h5 {
  font-size: 0.8rem !important;
}

img.img-fluid {
  margin-top: 5px;
  object-fit: cover !important;
  height: 100px;
  width: 100px;
}
.col-8 {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 2px !important;
}
div.card-body {
  padding: 5px;
}

.div.col-6.col-sm-3 {
  height: 150px !important;
  width: 150px !important;
}
.principal {
  padding: 0px !important;
  margin: 0px !important;
}
</style>
