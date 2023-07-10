<template>
  <div>
    <h2>Carrito de compras</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item.name }} - {{ item.price }}
        <button @click="removeItem(index)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeItem(index) {
      this.$emit('remove', index);
    }
  }
}
</script>