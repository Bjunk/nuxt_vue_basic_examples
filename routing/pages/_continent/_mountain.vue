<template>
  <div>
    <h1>Continent: {{ continent }}</h1>
    <h2>Mountain: {{ mountain }}</h2>
    <p>Description: {{ description }}</p>
    <NuxtLink to="/mountains">Back to Mountains Menu</NuxtLink>
  </div>
</template>
<script>
export default {
  async asyncData({ params, redirect }) {
    const mountains = await fetch("https://api.nuxtjs.dev/mountains").then(
      (res) => res.json()
    );

    const filteredMountain = mountains.find(
      (el) =>
        el.continent.toLowerCase() === params.continent &&
        el.slug === params.mountain
    );
    if (filteredMountain) {
      return {
        continent: filteredMountain.continent,
        mountain: filteredMountain.title,
        description: filteredMountain.description,
      };
    } else {
      redirect("/");
    }
  },
};
</script>
