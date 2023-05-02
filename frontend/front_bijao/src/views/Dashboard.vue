<template>

<div>
<h4>dashboard</h4>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">

  <a class="navbar-brand" href="#">
      <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      AppBijao
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Gestor
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Pedidos</a></li>
            <li><a class="dropdown-item" href="#">Ordenes</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Envios</a></li>
         

          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tamalero
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Home</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Informes</a></li>
     
 
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Administrador
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Eventos</a></li>
            <li><a class="dropdown-item" href="#">Tamaler@s</a></li>
            <li><a class="dropdown-item" href="#">Informes</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Parametros</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestion de Contenido
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Inicio</a></li>
            <li><a class="dropdown-item" href="#">Quienes somos</a></li>
            <li><a class="dropdown-item" href="#">Nuestro Equipo</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Cerrar sesion</a>
        </li>
   
      </ul>

    </div>
  </div>
</nav>
</div>
</template>

<script>

</script>

<style>

</style>

<!-- 


      <router-link to="/ordenes">Ordenes</router-link>
        <br>
        <router-link to="/ordenes">Ordenes</router-link>
        <br>
        <router-link to="/ordenes">Ordenes</router-link>
 -->