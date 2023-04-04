<template
  class="signuo-page"
  data-testid="signupPage"
>
  <form
    action="#"
    method="POST"
    @submit.prevent
  >
    <AppInput
      input-label="Name"
      input-type="text"
    />
    <AppInput
      input-label="Email"
      input-type="email"
    />
    <AppInput
      input-label="Password"
      input-type="password"
    />
  </form>
</template>

<script setup>

</script>