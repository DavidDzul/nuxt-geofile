<template>
  <header class="masthead">
    <div class="container-fluid px-4 px-lg-5 h-100">
      <div
        class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center"
      >
        <div class="col-lg-12 align-self-end">
          <div class="is-desk">
            <h1 class="text-white font-weight-bold">
              Revolucionando la manera de
            </h1>
          </div>
          <div class="is-mobil">
            <h1 class="text-white font-weight-bold">Revolucionando</h1>
          </div>
          <h2 class="is-mobil text-white fw-bold">
            la manera de administrar tus terrenos
          </h2>
          <h2 class="is-desk text-white">administrar tus terrenos</h2>
          <hr class="divider" />
        </div>
        <div class="col-lg-12 align-self-baseline">
          <h4 class="text-white">
            Controla tus terrenos desde cualquier dispositivo.
          </h4>
        </div>
        <div class="col-lg-12 align-self-baseline is-mobil">
          <a
            type="button"
            class="btn btn-navbar bg-secondary me-3"
            href="https://panel.geofile.mx/auth/login"
            target="_blank"
          >
            <span class="text-white">¡Quiero una <b> demo!</b></span>
          </a>
          <a
            type="button"
            class="btn btn-navbar bg-secondary"
            href="https://panel.geofile.mx"
          >
            <span class="text-white">Ingresar</span>
            <span class="mdi mdi-account-outline pl-1 text-white"></span>
          </a>
        </div>

        <div class="col-lg-12 align-self-baseline">
          <img
            src="/img/DevicesGeofileMockup.png"
            class="img-header img-fluid"
            alt="Image"
          />
        </div>
        <div class="col-lg-12 align-self-baseline col-aligner">
          <a
            class="btn btn-outline-warning rounded-pill btn-more"
            href="#about"
          >
            <p
              class="ms-2 me-2 txt-gray"
              style="display: inline; font-weight: 500"
            >
              ¡Conoce más!
            </p>
          </a>
          <br />
          <span
            class="mdi mdi-arrow-down col-aligner-item"
            style="margin-top: 5rem"
          ></span>
        </div>
      </div>
    </div>
  </header>

  <section class="page-carousel bg-primary mt-5" id="about">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center align-self-baseline reveal">
          <h2 class="text-white mt-0">
            <strong class="txt-gray">¿Por qué </strong>
            <strong class="txt-normal">utilizar </strong>
            <strong class="txt-orange">GeoFile?</strong>
          </h2>
        </div>
        <div class="col-lg-12 text-center align-self-baseline reveal">
          <p style="display: inline">
            Geofile te ayudará a eficientar la administración, organización y
            comercialización de tus
          </p>
          <p>
            terrenos en una sola plataforma a la que puedes acceder desde
            cualquier dispositivo.
          </p>
        </div>
      </div>
    </div>
    <div class="container mt-2 mb-5">
      <div class="row justify-content-center">
        <div class="text-center">
          <iframe
            class="col-lg-8 col-md-8 col-sm-12"
            src="https://www.youtube.com/embed/hKyZ-pJTKco"
            title="GEOFILE"
            height="400"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div id="carouselData" class="carousel slide" data-bs-ride="carousel">
      <div class="container slide-container">
        <div class="row is-desk">
          <div class="carousel-indicators">
            <div class="col text-center">
              <div
                class="card active"
                data-bs-target="#carouselData"
                aria-current="true"
                data-bs-slide-to="0"
                aria-label="Slide 1"
              >
                <div class="card-body">
                  <img
                    src="/img/icon-administra.png"
                    class="icon-slide p"
                    style="text-align: center; padding-left: 4px; padding-right;: 4px"
                  />
                  <p class="pb-0 pt-2">Administra</p>
                  <hr class="progress-active" />
                </div>
              </div>
            </div>
            <div class="col text-center me-5 ms-5">
              <div
                class="card"
                id="slide-2"
                data-bs-target="#carouselData"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              >
                <div class="card-body">
                  <img src="/img/comparte.png" class="icon-slide" />
                  <p class="pb-0 pt-2">Comparte</p>
                  <hr class="progress-active" />
                </div>
              </div>
            </div>
            <div class="col text-center">
              <div
                class="card"
                id="slide-3"
                data-bs-target="#carouselData"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              >
                <div class="card-body">
                  <img src="/img/monitorea.png" class="icon-slide" />
                  <p class="pb-0 pt-2">Monitorea</p>
                  <hr class="progress-active" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row item-slide col-aligner g-0">
            <div class="col is-info-mobil">
              <img
                src="/img/administra-mobil.png"
                alt="Administra"
                style="max-width: 3.5rem"
              />
            </div>
            <div class="col-9 is-info-mobil">
              <h5 style="float: right">
                Organiza tus terrenos y gestiona su información
                <strong class="txt-white"> en cualquier momento. </strong>
              </h5>
            </div>
            <p class="p-2 is-info-mobil"></p>

            <div class="col-md-6">
              <img
                src="/img/sd-administra.png"
                class="img-fluid img-data-0"
                alt="Administra"
              />
            </div>
            <div class="col-md-6 col-aligner-item">
              <h5>
                Organiza tus terrenos y gestiona su información
                <strong class="txt-white"> en cualquier momento. </strong>
              </h5>
              <p>
                Accede a tu cuenta desde cualquier dispositivo; laptop, tablet o
                smartphone y agrega hasta 300 terrenos.
              </p>
              <p>
                Añade toda su información, carga sus documentos, fotografías y
                crea etiquetas para organizarlos y administrarlos fácilmente.
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row item-slide col-aligner">
            <div class="col is-info-mobil">
              <img
                src="/img/comparte-mobil.png"
                alt="Comparte"
                style="max-width: 3.5rem"
              />
            </div>
            <div class="col-9 is-info-mobil">
              <h5>
                <strong>Comparte</strong> la información que quieras, con quien
                tu quieras.
              </h5>
            </div>
            <p class="p-2 is-info-mobil"></p>
            <div class="col-md-6 col-aligner-item is-info-desk">
              <h5>
                <strong>Comparte</strong> la información que quieras, con quien
                tu quieras.
              </h5>
              <br class="is-info-mobil" />
              <p class="is-info-desk">
                Comparte el acceso y la información de tus terrenos de manera
                temporal con los demás miembros de tu equipo o con tus clientes
                potenciales.
              </p>
            </div>
            <div class="col-md-6">
              <img
                src="/img/sd-comparte.png"
                class="img-fluid img-data-1"
                alt="Comparte"
              />
            </div>
            <div class="col-md-6 is-info-mobil">
              <p>
                Comparte el acceso y la información de tus terrenos de manera
                temporal con los demás miembros de tu equipo o con tus clientes
                potenciales.
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row item-slide col-aligner">
            <div class="col is-info-mobil">
              <img
                src="/img/monitorea-mobil.png"
                alt="Monitoreo"
                style="max-width: 3.5rem"
              />
            </div>
            <div class="col-9 is-info-mobil">
              <h5>
                <strong class="txt-white">Monitoreo satelital</strong> y
                reportes de tus terrenos.
              </h5>
            </div>
            <p class="p-2 is-info-mobil"></p>

            <div class="col-md-6">
              <img
                src="/img/sd-monitorea.png"
                class="img-fluid img-data-2"
                alt="Monitorea"
                style="max-height: 25rem; max-width: 25rem"
              />
            </div>
            <div class="col-md-6 col-aligner-item">
              <h5 class="is-info-desk">
                <strong class="txt-white">Monitoreo satelital</strong> y
                reportes de tus terrenos.
              </h5>
              <p>
                Solicita fotografías satelitales o con drone para conocer el
                estado de tus terrenos y sus alrededores, ayudándote a tomar
                decisiones informadas y más claras sobre tus inversiones.
              </p>
              <p>
                Además, recibe reportes en caso de detectar anomalías o signos
                de alerta, como posibles invasiones.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselData"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselData"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
  <section class="masthead" style="position: relative; width: 100%">
    <div class="container-fluid px-4 px-lg-5 h-100">
      <div
        class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center"
      >
        <img class="img-satelite" src="/img/satelite.png" alt="Satélite" />

        <div class="col-lg-12 align-self-center reveal">
          <h1 class="text-white fw-normal">La única plataforma</h1>
          <h1 class="fw-bold txt-orange">de administración de terrenos</h1>
          <h1 class="text-white fw-normal">
            creada por expertos y para expertos
          </h1>
        </div>

        <img class="img-locacion" src="/img/locacion.png" alt="Locación" />
      </div>
    </div>
  </section>
  <section class="page-section bg-secondary is-desk" id="business">
    <div class="container-fluid px-4 px-lg-5">
      <h2 class="text-center text-white">
        Ellos ya tienen <br class="is-mobil" />
        <strong class="txt-white">el control de sus terrenos.</strong>
      </h2>
      <hr class="divider-white" />
      <div class="row gx-4 gx-lg-5 image reveal">
        <div class="col-lg-3 text-center">
          <div class="mt-5">
            <img class="img-business" src="/img/logos/lg-desur.png" />
          </div>
        </div>
        <div class="col-lg-3 text-center">
          <div class="mt-5">
            <img class="img-business" src="/img/logos/lg-ordaz.png" />
          </div>
        </div>
        <div class="col-lg-3 text-center">
          <div class="mt-5">
            <img class="img-business" src="/img/logos/lg-haciendas.png" />
          </div>
        </div>
        <div class="col-lg-3 text-center">
          <div class="mt-5">
            <img class="img-business" src="/img/logos/lg-simca.png" />
          </div>
        </div>
        <div class="row gx-4 gx-lg-5 image">
          <div class="col-lg-6 text-center">
            <div class="mt-3">
              <img class="img-business-second" src="/img/logos/lg-orrisa.png" />
            </div>
          </div>
          <div class="col-lg-6 text-center">
            <div class="mt-3">
              <img
                class="img-business-second"
                src="/img/logos/lg-geoland.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="page-section bg-secondary is-mobil">
    <div class="container-fluid px-4 px-lg-5">
      <h2 class="text-center text-white">
        Ellos ya tienen <br class="is-mobil" />
        <strong class="txt-white">el control de sus terrenos.</strong>
      </h2>
      <hr class="divider-white" />
      <div class="row">
        <div class="col-md-12 align-self-center">
          <div
            class="owl-carousel owl-theme owl-loaded owl-drag"
            id="owl-carouse-logos"
          >
            <div class="item">
              <img
                class="align-self-center"
                src="/img/logos/lg-desur.png"
                width="100%"
              />
            </div>
            <div class="item">
              <img
                class="align-self-center"
                src="/img/logos/lg-ordaz.png"
                width="100%"
              />
            </div>
            <div class="item">
              <img
                class="align-self-center"
                src="/img/logos/lg-haciendas.png"
                width="100%"
              />
            </div>
            <div class="item">
              <img
                class="align-self-center"
                src="/img/logos/lg-simca.png"
                width="100%"
              />
            </div>
            <div class="item">
              <img
                class="align-self-center"
                src="/img/logos/lg-orrisa.png"
                width="100%"
              />
            </div>
            <div class="item">
              <img
                class="align-self-center"
                src="/img/logos/lg-geoland.png"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="page-section" id="prices">
    <div class="container-fluid px-4 px-lg-5">
      <div class="row">
        <div class="col text-center">
          <h2 class="txt-orange count-digit" style="font-weight: 600">+1000</h2>
          <h4 class="fw-norma">Lotes registrados y</h4>
          <h4 class="fw-norma">protegidos.</h4>
        </div>
        <div class="col text-center">
          <h1 class="txt-orange count-digit" style="font-weight: 600">+700</h1>
          <h4 class="fw-norma">Invasiones</h4>
          <h4 class="fw-norma">detectadas.</h4>
        </div>
      </div>
      <div class="row mt-5 mb-3">
        <div class="col text-center">
          <h2 class="has-text-weight-medium">
            <strong class="txt-orange">Planes</strong> que se ajustan
          </h2>
          <h2 class="has-text-weight-medium title-price">a tus necesidades</h2>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-10 offset-md-1">
          <div class="owl-carousel owl-theme" id="owl-carouse-prices">
            <div class="item item-state">
              <div class="card text-bg-light rounded-4">
                <div class="card-body">
                  <h3 class="card-title text-center fw-bold txt-gray">
                    Básico
                  </h3>
                  <h1 class="text-center fw-bolder txt-orange">$0.00</h1>
                  <h6 class="text-center">Mensuales</h6>
                  <hr />
                  <p class="text-center">
                    Crea hasta 8 terrenos <br />
                    1 GB de almacenamiento.
                  </p>
                  <span class="mdi mdi-close-circle txt-gray"></span>
                  <small class="txt-orange"
                    >No incluye verificaciones de terreno</small
                  >
                  <br />
                  <small>Precio por verificación de terreno: $600</small>
                  <br />
                  <span class="mdi mdi-close-circle txt-gray"></span>
                  <small class="txt-orange">No incluye monitoreos</small> <br />
                  <small>Precio por monitoreo básico: $3,500</small>
                  <br />
                  <hr />
                  <p>Características del software</p>
                  <ul>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Eliminar terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Solicitar verificaciones
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Solicitar monitoreos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Editar atributos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Cargar imágenes
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Cargar documentos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Compartir datos del terreno
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar por nombre
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Ver en google maps
                    </li>
                  </ul>
                  <div class="text-center d-grid gap-2 col-8 mx-auto">
                    <a
                      type="button"
                      class="btn btn-primary rounded-3 float text-decoration-none"
                      href="https://panel.geofile.mx/auth/registro"
                      target="_blank"
                    >
                      <span class="">COMENZAR</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="item item-state">
              <div class="card text-bg-light rounded-4">
                <div class="card-body">
                  <h3 class="card-title text-center fw-bold txt-gray">
                    Profesional 15
                  </h3>
                  <h1 class="text-center fw-bolder txt-orange">$66.67</h1>
                  <h6 class="text-center">Mensuales</h6>
                  <hr />
                  <p class="text-center">
                    Crea hasta 15 terrenos <br />
                    2 GB de almacenamiento.
                  </p>
                  <span class="mdi mdi-close-circle txt-gray"></span>
                  <small class="txt-orange"
                    >No incluye verificaciones de terreno</small
                  >
                  <br />
                  <small>Precio por verificación de terreno: $600</small>
                  <br />
                  <span class="mdi mdi-close-circle txt-gray"></span>
                  <small class="txt-orange">No incluye monitoreos</small> <br />
                  <small>Precio por monitoreo básico: $3,300</small>
                  <br />
                  <hr />
                  <p>Características del software</p>
                  <ul>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span
                      >Crear terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span
                      >Eliminar terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span
                      >Solicitar verificaciones
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span
                      >Solicitar monitoreos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span
                      >Editar atributos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span
                      >Cargar imágenes
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span
                      >Cargar documentos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span
                      >Compartir datos del terreno
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span
                      >Filtrar por nombre
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span
                      >Ver en google maps
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span
                      >Crear y editar etiquetas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span
                      >Asignar color a terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span
                      >Filtrar por etiquetas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span
                      >Filtrar por atributos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span
                      >Agregar etiquetas de terreno masivo
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span
                      >Crear reporte PDF
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span
                      >Mapas múltiples
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span
                      >Atributos privados
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span
                      >Filtrar resultados de búsqueda en el mapa
                    </li>
                  </ul>
                  <div class="text-center d-grid gap-2 col-8 mx-auto">
                    <a
                      type="button"
                      class="btn btn-primary rounded-3 float text-decoration-none"
                      href="https://api.whatsapp.com/send?phone=+529811186022&amp;text=Hola, me interesa contratar el Paquete Profesional 15."
                      target="_blank"
                    >
                      <span class="">CONTRATAR</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="item item-state">
              <div class="card text-bg-light rounded-4">
                <div class="card-body">
                  <h3 class="card-title text-center fw-bold txt-gray">
                    Profesional 30
                  </h3>
                  <h1 class="text-center fw-bolder txt-orange">$125.00</h1>
                  <h6 class="text-center">Mensuales</h6>
                  <hr />
                  <p class="text-center">
                    Crea hasta 30 terrenos <br />
                    3 GB de almacenamiento.
                  </p>
                  <span
                    class="mdi mdi-checkbox-marked-circle txt-orange"
                  ></span>
                  <small class="txt-orange"
                    >Incluye 1 verificación de terreno</small
                  >
                  <br />
                  <small>Precio por verificación de terreno: $600</small>
                  <br />
                  <span class="mdi mdi-close-circle txt-gray"></span>
                  <small class="txt-orange">No incluye monitoreos</small> <br />
                  <small>Precio por monitoreo básico: $3,300</small>
                  <br />
                  <hr />
                  <p>Características del software</p>
                  <ul>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Eliminar terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Solicitar verificaciones
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Solicitar monitoreos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Editar atributos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Cargar imágenes
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Cargar documentos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Compartir datos del terreno
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar por nombre
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Ver en google maps
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear y editar etiquetas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Asignar color a terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar por etiquetas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar por atributos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Agregar etiquetas de terreno masivo
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear reporte PDF
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Mapas múltiples
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Atributos privados
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar resultados de búsqueda en el mapa
                    </li>
                  </ul>
                  <div class="text-center d-grid gap-2 col-8 mx-auto">
                    <a
                      type="button"
                      class="btn btn-primary rounded-3 float text-decoration-none"
                      href="https://api.whatsapp.com/send?phone=+529811186022&amp;text=Hola, me interesa contratar el Paquete Profesional 30."
                      target="_blank"
                    >
                      <span class="">CONTRATAR</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="item item-state">
              <div class="card text-bg-light rounded-4">
                <div class="card-body">
                  <h3 class="card-title text-center fw-bold txt-gray">
                    Empresarial 30
                  </h3>
                  <h1 class="text-center fw-bolder txt-orange">$1,500.00</h1>
                  <h6 class="text-center">Mensuales</h6>
                  <hr />
                  <p class="text-center">
                    Crea hasta 30 terrenos <br />
                    20 GB de almacenamiento.
                  </p>
                  <span
                    class="mdi mdi-checkbox-marked-circle txt-orange"
                  ></span>
                  <small class="txt-orange"
                    >Incluye 20 verificaciones de terreno</small
                  >
                  <br />
                  <small>Precio por verificación de terreno: $500</small>
                  <br />
                  <span
                    class="mdi mdi-checkbox-marked-circle txt-orange"
                  ></span>
                  <small class="txt-orange"
                    >Incluye 1 monitoreo satelital al mes</small
                  >
                  <br />
                  <small>Precio por monitoreo extra: $2,600</small>
                  <br />
                  <hr />
                  <p>Características del software</p>
                  <ul>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Eliminar terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Solicitar verificaciones
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Solicitar monitoreos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Editar atributos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Cargar imágenes
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Cargar documentos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Compartir datos del terreno
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar por nombre
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Ver en google maps
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear y editar etiquetas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Asignar color a terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar por etiquetas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar por atributos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Agregar etiquetas de terreno masivo
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear reporte PDF
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Mapas múltiples
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Atributos privados
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar resultados de búsqueda en el mapa
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear subcuentas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Etiquetar subcuentas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Vincular con Google Drive
                    </li>
                  </ul>
                  <div class="text-center d-grid gap-2 col-8 mx-auto">
                    <a
                      type="button"
                      class="btn btn-primary rounded-3 float text-decoration-none"
                      href="https://api.whatsapp.com/send?phone=+529811186022&amp;text=Hola, me interesa contratar el Paquete Empresarial 30."
                      target="_blank"
                    >
                      <span class="">CONTRATAR</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="item item-state">
              <div class="card text-bg-light rounded-4">
                <div class="card-body">
                  <h3 class="card-title text-center fw-bold txt-gray">
                    Empresarial 50
                  </h3>
                  <h1 class="text-center fw-bolder txt-orange">$2,250.00</h1>
                  <h6 class="text-center">Mensuales</h6>
                  <hr />
                  <p class="text-center">
                    Crea hasta 50 terrenos <br />
                    35 GB de almacenamiento.
                  </p>
                  <span
                    class="mdi mdi-checkbox-marked-circle txt-orange"
                  ></span>
                  <small class="txt-orange"
                    >Incluye 40 verificaciones de terreno</small
                  >
                  <br />
                  <small>Precio por verificación de terreno: $500</small>
                  <br />
                  <span
                    class="mdi mdi-checkbox-marked-circle txt-orange"
                  ></span>
                  <small class="txt-orange"
                    >Incluye 2 monitoreos satelitales al mes</small
                  >
                  <br />
                  <small>Precio por monitoreo extra: $2,500</small>
                  <br />
                  <hr />
                  <p>Características del software</p>
                  <ul>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Eliminar terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Solicitar verificaciones
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Solicitar monitoreos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Editar atributos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Cargar imágenes
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Cargar documentos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Compartir datos del terreno
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar por nombre
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Ver en google maps
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear y editar etiquetas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Asignar color a terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar por etiquetas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar por atributos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Agregar etiquetas de terreno masivo
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear reporte PDF
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Mapas múltiples
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Atributos privados
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar resultados de búsqueda en el mapa
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear subcuentas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Etiquetar subcuentas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Vincular con Google Drive
                    </li>
                  </ul>
                  <div class="text-center d-grid gap-2 col-8 mx-auto">
                    <a
                      type="button"
                      class="btn btn-primary rounded-3 float text-decoration-none"
                      href="https://api.whatsapp.com/send?phone=+529811186022&amp;text=Hola, me interesa contratar el Paquete Empresarial 50."
                      target="_blank"
                    >
                      <span class="">CONTRATAR</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="item item-state">
              <div class="card text-bg-light rounded-4">
                <div class="card-body">
                  <h3 class="card-title text-center fw-bold txt-gray">
                    Empresarial 100
                  </h3>
                  <h1 class="text-center fw-bolder txt-orange">$3,500.00</h1>
                  <h6 class="text-center">Mensuales</h6>
                  <hr />
                  <p class="text-center">
                    Crea hasta 100 terrenos <br />
                    66 GB de almacenamiento.
                  </p>
                  <span
                    class="mdi mdi-checkbox-marked-circle txt-orange"
                  ></span>
                  <small class="txt-orange"
                    >Incluye 70 verificaciones de terreno</small
                  >
                  <br />
                  <small>Precio por verificación de terreno: $500</small>
                  <br />
                  <span
                    class="mdi mdi-checkbox-marked-circle txt-orange"
                  ></span>
                  <small class="txt-orange"
                    >Incluye 2 monitoreos satelitales al mes</small
                  >
                  <br />
                  <small>Precio por monitoreo básico: $2,400</small>
                  <br />
                  <hr />
                  <p>Características del software</p>
                  <ul>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Eliminar terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Solicitar verificaciones
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Solicitar monitoreos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Editar atributos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Cargar imágenes
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Cargar documentos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Compartir datos del terreno
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar por nombre
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Ver en google maps
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear y editar etiquetas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Asignar color a terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar por etiquetas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar por atributos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Agregar etiquetas de terreno masivo
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear reporte PDF
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Mapas múltiples
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Atributos privados
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar resultados de búsqueda en el mapa
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear subcuentas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Etiquetar subcuentas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Vincular con Google Drive
                    </li>
                  </ul>
                  <div class="text-center d-grid gap-2 col-8 mx-auto">
                    <a
                      type="button"
                      class="btn btn-primary rounded-3 float text-decoration-none"
                      href="https://api.whatsapp.com/send?phone=+529811186022&amp;text=Hola, me interesa contratar el Paquete Empresarial 100."
                      target="_blank"
                    >
                      <span class="">CONTRATAR</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="item item-state">
              <div class="card text-bg-light rounded-4">
                <div class="card-body">
                  <h3 class="card-title text-center fw-bold txt-gray">
                    Empresarial 200
                  </h3>
                  <h1 class="text-center fw-bolder txt-orange">$6,500.00</h1>
                  <h6 class="text-center">Mensuales</h6>
                  <hr />
                  <p class="text-center">
                    Crea hasta 200 terrenos <br />
                    135 GB de almacenamiento.
                  </p>
                  <span
                    class="mdi mdi-checkbox-marked-circle txt-orange"
                  ></span>
                  <small class="txt-orange"
                    >Incluye 150 verificaciones de terreno</small
                  >
                  <br />
                  <small>Precio por verificación de terreno: $500</small>
                  <br />
                  <span
                    class="mdi mdi-checkbox-marked-circle txt-orange"
                  ></span>
                  <small class="txt-orange"
                    >Incluye 4 monitoreos satelitales al mes</small
                  >
                  <br />
                  <small>Precio por monitoreo básico: $2,200</small>
                  <br />
                  <hr />
                  <p>Características del software</p>
                  <ul>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Eliminar terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Solicitar verificaciones
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Solicitar monitoreos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Editar atributos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Cargar imágenes
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Cargar documentos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Compartir datos del terreno
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar por nombre
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Ver en google maps
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear y editar etiquetas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Asignar color a terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar por etiquetas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar por atributos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Agregar etiquetas de terreno masivo
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear reporte PDF
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Mapas múltiples
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Atributos privados
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar resultados de búsqueda en el mapa
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear subcuentas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Etiquetar subcuentas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Vincular con Google Drive
                    </li>
                  </ul>
                  <div class="text-center d-grid gap-2 col-8 mx-auto">
                    <a
                      type="button"
                      class="btn btn-primary rounded-3 float text-decoration-none"
                      href="https://api.whatsapp.com/send?phone=+529811186022&amp;text=Hola, me interesa contratar el Paquete Empresarial 200."
                      target="_blank"
                    >
                      <span class="">CONTRATAR</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="item item-state">
              <div class="card text-bg-light rounded-4">
                <div class="card-body">
                  <h3 class="card-title text-center fw-bold txt-gray">
                    Empresarial 300
                  </h3>
                  <h1 class="text-center fw-bolder txt-orange">$9,000.00</h1>
                  <h6 class="text-center">Mensuales</h6>
                  <hr />
                  <p class="text-center">
                    Crea hasta 300 terrenos <br />
                    200 GB de almacenamiento.
                  </p>
                  <span
                    class="mdi mdi-checkbox-marked-circle txt-orange"
                  ></span>
                  <small class="txt-orange"
                    >Incluye 250 verificaciones de terreno</small
                  >
                  <br />
                  <small>Precio por verificación de terreno: $500</small>
                  <br />
                  <span
                    class="mdi mdi-checkbox-marked-circle txt-orange"
                  ></span>
                  <small class="txt-orange"
                    >Incluye 5 monitoreos satelitales al mes</small
                  >
                  <br />
                  <small>Precio por monitoreo básico: $2,000</small>
                  <br />
                  <hr />
                  <p>Características del software</p>
                  <ul>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Eliminar terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Solicitar verificaciones
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Solicitar monitoreos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Editar atributos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Cargar imágenes
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Cargar documentos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Compartir datos del terreno
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar por nombre
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Ver en google maps
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear y editar etiquetas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Asignar color a terrenos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar por etiquetas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar por atributos
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Agregar etiquetas de terreno masivo
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear reporte PDF
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Mapas múltiples
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Atributos privados
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Filtrar resultados de búsqueda en el mapa
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Crear subcuentas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Etiquetar subcuentas
                    </li>
                    <li>
                      <span
                        class="mdi mdi-checkbox-marked-circle txt-orange"
                      ></span>
                      Vincular con Google Drive
                    </li>
                  </ul>
                  <div class="text-center d-grid gap-2 col-8 mx-auto">
                    <a
                      type="button"
                      class="btn btn-primary rounded-3 float text-decoration-none"
                      href="https://api.whatsapp.com/send?phone=+529811186022&amp;text=Hola, me interesa contratar el Paquete Empresarial 300."
                      target="_blank"
                    >
                      <span class="">CONTRATAR</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="page-carousel bg-primary">
    <div class="container-fluid px-4 px-lg-5">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="row p-3">
            <div class="col-lg-12 mb-5">
              <img
                class="footer-image"
                src="/img/logos/lg-geofile.png"
                width="20%"
              />
            </div>
            <div class="col-lg-12">
              <h3>Contacto</h3>
            </div>
            <div class="col-lg-12">
              <p><span class="mdi mdi-orange mdi-phone"></span> 981 118 6022</p>
            </div>
            <div class="col-lg-12">
              <p>
                <span class="mdi mdi-orange mdi-email"></span>
                contacto@geofile.com
              </p>
            </div>
            <div class="col col-md-2 col-lg-2 mb-3">
              <button
                class="btn"
                onClick="javascript:window.open('https://www.facebook.com/GEOFILEMX', '_blank');"
              >
                <span class="mdi mdi-facebook"></span>
              </button>
            </div>
            <div class="col col-md-2 col-lg-2 mb-3">
              <button
                class="btn"
                onClick="javascript:window.open('https://www.instagram.com/geofilemx/', '_blank');"
              >
                <span class="mdi mdi-instagram"></span>
              </button>
            </div>
            <div class="col col-md-2 col-lg-2 mb-3">
              <button
                class="btn"
                onClick="javascript:window.open('https://www.youtube.com/channel/UCnVtHzVVOkUElA6en_PXeRA', '_blank');"
              >
                <span class="mdi mdi-youtube"></span>
              </button>
            </div>
            <div class="col-lg-12">
              <p>
                Geofile es parte de Grupo ORRISA. Todos los derechos reservados.
                Geofile es una marca registrada. La información de nuestros
                clientes es 100% confidencial.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="row p-3">
            <div class="col-lg-12 mb-4" id="msj-required" style="display: none">
              <div
                class="alert alert-warning alert-dismissible fade show"
                role="alert"
              >
                <strong>Completar los campos vacios.</strong>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div class="col-lg-12 mb-4">
              <h3><strong>¿Tienes una duda?</strong> Escríbenos</h3>
            </div>
            <div class="col-lg-12 mb-3">
              <input
                type="text"
                class="form-control form-input"
                id="name"
                name="name"
                placeholder="Nombre"
                required
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control form-input"
                maxlength="10"
                id="phone"
                name="phone"
                placeholder="Teléfono"
                required
              />
            </div>
            <div class="col">
              <input
                type="email"
                class="form-control form-input"
                id="email"
                name="email"
                placeholder="Correo electrónico"
                required
              />
            </div>
            <div class="col-lg-12 mt-3 mb-3">
              <textarea
                class="form-control form-input"
                id="message"
                name="message"
                placeholder="Escribe un mensaje"
                required
                rows="5"
              ></textarea>
            </div>
            <div class="col-lg-12">
              <div class="d-grid gap-2 col-12 mx-auto">
                <button id="btnContact" class="btn btn-secondary" type="button">
                  Enviar mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: "",
});
</script>
