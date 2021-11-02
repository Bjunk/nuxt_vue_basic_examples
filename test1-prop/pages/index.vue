<template>
  <section>
    <Header :cartnum="update"></Header>
    <h1>Product View</h1>
    <p><span @click="cartNumber++">+</span><input v-model="cartNumber"><span @click="cartNumber--">-</span></p>
    <button @click="updateCart">Add to Cart</button>
  </section>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'index',
  components: { Header },
  data () {
    return {
      cartNumber: 0,
      update: 0
    }
  },
  methods: {
    updateCart () {
        return this.update = this.cartNumber;
    }
  }


}
</script>
