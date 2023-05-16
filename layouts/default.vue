<template>
  <Navbar></Navbar>
  <slot></slot>
  <Footer></Footer>
</template>

<script setup>
useHead({
  titleTemplate: "GEOFILE MX",
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css",
      integrity:
        "sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==",
      crossorigin: "anonymous",
      referrerpolicy: "no-referrer",
    },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css",
      integrity:
        "sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw==",
      crossorigin: "anonymous",
      referrerpolicy: "no-referrer",
    },
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/sweetalert2@7.28.11/dist/sweetalert2.min.css",
    },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css",
    },
    {
      href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      rel: "stylesheet",
    },
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
      integrity:
        "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p",
      crossorigin: "anonymous",
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
      integrity:
        "sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==",
      crossorigin: "anonymous",
      referrerpolicy: "no-referrer",
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",
      integrity:
        "sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==",
      crossorigin: "anonymous",
      referrerpolicy: "no-referrer",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/sweetalert2@7.28.11/dist/sweetalert2.min.js",
    },
    {
      src: "/js/scripts.js",
    },
    {
      src: "/js/swiper.js",
    },
    {
      src: "/js/email.js",
    },
    {
      src: "/js/counter.js",
    },
  ],
});
</script>
