<template>
<div class="container mx-auto px-4 mt-5">
  <article class="text-justify">
    <h1 class="text-5xl subpixel-antialiased py-4">{{ article.title }}</h1>
    <p class="font-thin">{{ article.description }}</p>
    <img class="rounded-3xl" :src="article.img" :alt="article.alt" />
    <p class="text-base py-5">Article last updated: {{ formatDate(article.updatedAt) }}</p>

    <nuxt-content :document="article" />

    <p><author :author="article.author" /></p>

    <p class="mt-5"><prev-next :prev="prev" :next="next" /></p>
  </article>
</div>
</template>
<script>

  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return { article, prev, next }

    },
    methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
    }
  }
</script>
<style>
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }
</style>