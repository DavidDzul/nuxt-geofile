<template>
  <footer class="bg-secondary py-3 footer-mobil">
    <div class="container px-4 px-lg-5">
      <div class="row">
        <div class="col-6">
          <div class="small text-left text-white">
            Grupo ORRISA &copy; - {{ currentYear }}
          </div>
        </div>
        <div class="col-6 text-end">
          <nuxt-link class="small text-white" to="/terms-and-conditions">
            AVISO DE PRIVACIDAD</nuxt-link
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getUTCFullYear();
</script>

<style scoped>
/* footer {
  position: absolute;
  bottom: 0;
  width: 100%;
} */
</style>
