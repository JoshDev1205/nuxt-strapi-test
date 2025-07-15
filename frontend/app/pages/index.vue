<template>
  <main class="container">
    <article data-theme="dark">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <fieldset class="grid">
          <input
            name="username"
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </fieldset>
        <router-link to="/register">Don't have an account? Register</router-link>
      </form>

      <code v-if="user">
        {{ user }}
      </code>
    </article>
  </main>
</template>

<script setup>
const user = useStrapiUser()
const { login } = useStrapiAuth()

const handleLogin = async (event) => {
  const formData = new FormData(event.target)
  const username = formData.get('username')
  const password = formData.get('password')
  try {
    await login({ identifier: username, password })
  } catch (error) {
    console.error('Login failed:', error)
  }
}
</script>

<style scoped></style>
