<template>
  <div>
    <h4>dashboard</h4>

    <nav class="navbar navbar-expand-lg bg-body-tertiary app">
      <div class="container-fluid">
        <a class="navbar-brand">
          <img
            src="@/assets/logo.svg"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          AppBijao
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              <v-icon name="ri-home-heart-fill"  animation="pulse"/> Gestor
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item app">
                    <RouterLink to="/pedidos">  Pedidos</RouterLink></a
                  >
                </li>

                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item app"
                    ><RouterLink to="/informes">Informes</RouterLink></a
                  >
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              <v-icon name="ri-home-heart-fill"  animation="pulse"/> Tamalero
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item app"><RouterLink to="/tamalero">Home</RouterLink></a></li>
                <li><hr class="dropdown-divider" /></li>
                  <li>
                  <a class="dropdown-item app"
                    ><RouterLink to="/informes">Informes</RouterLink></a
                  >
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              <v-icon name="ri-home-heart-fill"  animation="pulse"/> Administrador
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item app"><RouterLink to="/parametros">Parametros</RouterLink></a></li>
                 <li><hr class="dropdown-divider" /></li>
                  <li>
                  <a class="dropdown-item app"
                    ><RouterLink to="/informes">Informes</RouterLink></a
                  >
                </li>
                 </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              <v-icon name="ri-home-heart-fill"  animation="pulse"/> Gestion de Contenido
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item app"><RouterLink to="/contenidos">Editar</RouterLink></a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page"><v-icon name="ri-home-heart-fill"  animation="pulse"/>Cerrar sesion</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script></script>

<style></style>

<!-- 


      <router-link to="/ordenes">Ordenes</router-link>
        <br>
        <router-link to="/ordenes">Ordenes</router-link>
        <br>
        <router-link to="/ordenes">Ordenes</router-link>
 -->
