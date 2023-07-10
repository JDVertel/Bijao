<template>
  <div class="container principal">
    <div class="row">
      <div
        class="col-6 col-sm-3"
        v-for="(producto, index) in productos"
        :key="index"
      >
        <div class="card mb-3 transparente fija" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                :src="'/src/components/images/' + `${producto.imglink}`"
                class="img-fluid rounded"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ producto.nombre }}</h5>
                <div class="row">
                  <div class="col-8">
                    <p class="card-text">
                      <small class="text-body-secondary"
                        >${{ producto.precio }}</small
                      >
                    </p>
                  </div>
                  <div class="col-4">
                    <button
                      class="btn btn-success btn-sm"
                      @click="addItem(producto)"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- fin container -->
  </div>
</template>

<script>
import Cart from "./../carritodecompras/carrito.vue";
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      productos: [
        {
          nombre: "Tamal de carne",
          precio: "2500",
          imglink: "tamal1.png",
        },
        {
          nombre: "Tamal de pollo",
          precio: "2600",
          imglink: "tamal2.png",
        },
        {
          nombre: "Tamal Mixto",
          precio: "3000",
          imglink: "tamal3.png",
        },
        {
          nombre: "Tamal de costillitas",
          precio: "3500",
          imglink: "tamal4.png",
        },
      ],
      cartItems: [],
    };
  },
  methods: {
    addItem(product) {
      this.$emit("add", product);
    },
    /*  */
    addToCart(product) {
      this.cartItems.push(product);
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
    },
  },
};
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
