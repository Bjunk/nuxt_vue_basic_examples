<template>
  <div>
    <img class="rounded-full md:bg-gradient-to-r w-10" :src="author.image" />
    <div>
      <p>Author: {{ author.name }}</p>
      <p>{{ author.bio }}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      author: {
        type: Object,
        required: true
      }
    }
  }
</script>