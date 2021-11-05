<template>
  <div class="notification bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: ['message'],
};
</script>