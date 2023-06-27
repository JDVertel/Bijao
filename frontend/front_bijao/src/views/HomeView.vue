<script setup>
</script>

<template>
  <div class="app">
    <div class="card text-center">
      <div class="row">
        <div class="col-12 col-md-6">
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="@/components/images/slide1.png"
                  class="d-block w-100 carrusel"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="@/components/images/slide2.png"
                  class="d-block w-100 carrusel"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="@/components/images/slide3.png"
                  class="d-block w-100 carrusel"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="@/components/images/slide4.png"
                  class="d-block w-100 carrusel"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="@/components/images/slide5.png"
                  class="d-block w-100 carrusel"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="@/components/images/slide6.png"
                  class="d-block w-100 carrusel"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="@/components/images/slide7.png"
                  class="d-block w-100 carrusel"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="card-body">
            <h6 class="card-title">Fundación Bijao</h6>
            <p class="card-text-local">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Quienes Somos
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">

              <h6>quienes somos</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo similique
                dolore veniam aut praesentium pariatur quidem, maxime incidunt voluptas.
                Recusandae eum fugit commodi libero minima. Aspernatur cumque voluptates
                adipisci magnam!
              </p>
            
              <h6>nuestro equipo</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius similique sit
                ab distinctio, accusamus expedita possimus esse illo rem quibusdam eos
                dolorem dolore sint maxime eligendi iusto sed, quos consectetur?
              </p>
            
              <router-link to="/">Home</router-link>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Vitrina
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div class="container">
                <h6>Eventos Actuales</h6>
                <br />
                <div class="container">
                  <table class="table table-sm table-hover">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Fecha</th>
                        <th>Opciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Tamales FDS</td>
                        <td>05/05/2023</td>
                        <td>
                          <router-link to="/ordenes"
                            ><v-icon
                              name="ri-home-heart-fill"
                              animation="pulse"
                            />Ordenar</router-link
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="container">
                  <div class="row">
                    <div class="col-6 col-sm-3">
                      <div class="card mb-3" style="max-width: 540px">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img
                              src="./../components/images/tamal1.png"
                              class="img-fluid rounded-start"
                              alt="..."
                            />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">Tamal de Carne</h5>
                              <p class="card-text">
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                              </p>
                              <p class="card-text">
                                <small class="text-body-secondary"
                                  >Last updated 3 mins ago</small
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--  -->
                    <div class="col-6 col-sm-3">
                      <div class="card mb-3" style="max-width: 540px">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img
                              src="./../components/images/tamal2.png"
                              class="img-fluid rounded-start"
                              alt="..."
                            />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">Tamal de Pollo</h5>
                              <p class="card-text">
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                              </p>
                              <p class="card-text">
                                <small class="text-body-secondary"
                                  >Last updated 3 mins ago</small
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--  -->
                    <div class="col-6 col-sm-3">
                      <div class="card mb-3" style="max-width: 540px">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img
                              src="./../components/images/tamal3.png"
                              class="img-fluid rounded-start"
                              alt="..."
                            />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">Tamal Mixto</h5>
                              <p class="card-text">
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                              </p>
                              <p class="card-text">
                                <small class="text-body-secondary"
                                  >Last updated 3 mins ago</small
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--  -->
                    <div class="col-6 col-sm-3">
                      <div class="card mb-3" style="max-width: 540px">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img
                              src="./../components/images/tamal4.png"
                              class="img-fluid rounded-start"
                              alt="..."
                            />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">Tamal de Costillitas</h5>
                              <p class="card-text">
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                              </p>
                              <p class="card-text">
                                <small class="text-body-secondary"
                                  >Last updated 3 mins ago</small
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Proximos Eventos
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <li class="list-group-item">
                <div class="container">
                  <h6>Proximos Eventos</h6>
                  <br />
                  <div class="container">
                    <table class="table table-sm table-hover">
                      <thead>
                        <tr>
                          <th>Nombre</th>
                          <th>Fecha</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Festival del tamal</td>
                          <td>05/05/2023</td>
                        </tr>
                        <tr>
                          <td>Tamalada Decembrinos</td>
                          <td>24/12/2023</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>

      <!--  -->
    </div>
  </div>
</template>

<style>
.app {
  font-size: 0.9em;
}
.carrusel {
  height: 300px;
}

.centrado {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
}

.app {
  background-image: linear-gradient(to bottom right, #ffffff, #297811);
  min-height: 100vh;
  width: 100%;
  padding-bottom: 3em;
}
</style>
