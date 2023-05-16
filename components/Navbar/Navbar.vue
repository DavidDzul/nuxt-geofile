<template>
  <nav
    class="navbar navbar-expand-lg navbar-light fixed-top navbar-fix py-2"
    id="mainNav"
  >
    <div class="container-fluid px-4 px-lg-5 me-5 ms-5">
      <a href="#page-top">
        <img
          class="navbar-brand"
          id="imageNavbarWhite"
          src="img/geofile-logo-blanco.png"
        />
        <img
          class="navbar-brand"
          id="imageNavbarOrange"
          src="img/geofile-logo-naranja.png"
          style="display: none"
        />
      </a>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <div class="navbar-nav ms-auto my-2 my-lg-0">
          <a
            type="button"
            class="btn btn-lg-1 btn-navbar me-3"
            href="https://panel.geofile.mx/auth/login"
            target="_blank"
          >
            <span class="">¡Quiero una <b> demo!</b></span>
          </a>
          <a
            type="button"
            class="btn btn-lg-2 btn-navbar"
            href="https://panel.geofile.mx"
          >
            <span class="">Ingresar</span>
            <span class="mdi mdi-account-outline pl-1"></span>
          </a>
        </div>
      </div>
    </div>
  </nav>

  <nav
    class="navbar navbar-expand-lg bg-secondary navbar-static py-3"
    id="mainNavMobil"
  >
    <div
      class="container-fluid align-items-center justify-content-center text-center"
    >
      <a href="#page-top">
        <img
          class="navbar-brand"
          id="imageNavbarWhite"
          src="img/geofile-logo-blanco.png"
        />
      </a>
    </div>
  </nav>
</template>

<!-- Meta Pixel Code -->
<script>
export default {
  mounted() {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );
    fbq("init", "953496749122012");
    fbq("track", "PageView");
  },
};
</script>
<!-- End Meta Pixel Code -->
