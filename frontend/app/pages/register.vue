<template>
  <main class="container">
    <article data-theme="dark">
      <h2>Register</h2>
      <form @submit.prevent="handleForm">
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
          <input
            name="email"
            type="email"
            placeholder="Email"
          />
          <button type="submit">Register</button>
        </fieldset>
        <router-link to="/">Already have an account?</router-link>
      </form>
    </article>
  </main>
</template>

<script setup>
const { register } = useStrapiAuth()
const router = useRouter()

const handleForm = async (event) => {
  const formData = new FormData(event.target)
  const username = formData.get('username')
  const password = formData.get('password')
  const email = formData.get('email')

  try {
    await register({ username, password, email })
    router.push('/')
  } catch (error) {
    console.error('Registration failed:', error)
  }
}
</script>

<style lang="scss" scoped></style>
