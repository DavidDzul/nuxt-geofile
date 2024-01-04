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
          <nuxt-link
            class="small text-white"
            to="/terms-and-conditions"
            rel="noopener"
          >
            AVISO DE PRIVACIDAD</nuxt-link
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getUTCFullYear();
if (typeof window !== "undefined") {
  window.addEventListener("popstate", function (event) {
    // Se ejecutará cuando el usuario haga clic en el botón "Atrás" del navegador
    console.log('Se hizo clic en el botón "Atrás"');
    // Puedes realizar acciones adicionales aquí según tus necesidades
  });
}
</script>

<style scoped>
/* footer {
  position: absolute;
  bottom: 0;
  width: 100%;
} */
</style>
