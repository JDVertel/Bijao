<script setup></script>

<template>
  <div class="app">
    <div class="card">
      <img
        src="@/components/images/portada.png"
        class="card-img-top"
        alt="..."
        style=""
      />
      <div class="card-body">
        <h6 class="card-title">Fundación Bijao</h6>
        <p class="card-text-local">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <a href="#" class="card-link"
            ><router-link to="/about">Quienes Somos?</router-link></a
          >
        </li>
        <li class="list-group-item">
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
                    <td><router-link to="/ordenes">Ordenar</router-link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </li>
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
      </ul>
      <div class="card-body">
        <nav></nav>
      </div>
    </div>

    <br />

    <br />
  </div>
</template>

<style>
.app {
  font-size: 0.6em;
}
</style>
