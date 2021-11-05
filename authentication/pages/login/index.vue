<template>
  <section class="">
    <div class="lg:flex">
      <div class="lg:w-1/2 xl:max-w-screen-sm">
        <div class="py-12 gb-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
          <h2 class="title has-text-centered">Welcome back!</h2>

          <Notification :message="error" v-if="error"/>

          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="post" @submit.prevent="login">

            <div class="field">
              <label class="label">Email</label>

              <div class="control">
                <input
                  type="email"
                  class="shadow appearance-none border border-grey-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  v-model="email"
                required>
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>

              <div class="control">
                <input
                  type="password"
                  class="shadow appearance-none border border-grey-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                  v-model="password"
                required>
              </div>
            </div>

            <div class="control">
              <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Log In</button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">
            <p>
              Don't have an account? <nuxt-link to="/register">Register</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Notification from '~/components/Notification';
export default {
  middleware: 'guest',
  components: {
    Notification,
  },
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        this.$router.push('/');
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
};
</script>