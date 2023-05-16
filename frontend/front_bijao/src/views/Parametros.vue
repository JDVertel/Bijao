<template>
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Productos y precios
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
   <div class="container">
    <p> <small>Crear nuevo producto tamal</small> </p>
    <form action="" class="row">
      <div class="col-6">
        <input type="text" class="form-control form-control-sm" id="producInput" placeholder="Nombre">
      </div>
      <div class="col-4">
        <input type="number" class="form-control form-control-sm" id="precioInput" placeholder="Precio">
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-primary btn-sm">Crear</button>
      </div>
    </form>
   </div>



      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     Usuarios
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
   
        <div class="container">
          <p> <small>Crear nuevo usuario</small> </p>
          <form action="" class="row">
            <div class="col-6">
              <input type="text" class="form-control form-control-sm" id="nameInput" placeholder="Nombres">
            </div>
            <div class="col-6">
              <input type="text" class="form-control form-control-sm" id="ApellInput" placeholder="Apellidos">
            </div>
            <div class="col-4">
              <input type="text" class="form-control form-control-sm" id="DocInput" placeholder="Documento">
            </div>
            <div class="col-4">
              <input type="number" class="form-control form-control-sm" id="celInput" placeholder="Celular">
            </div>
            <div class="col-4">
              <select class="form-select form-select-sm" aria-label="Default select example">
                <option selected>Rol</option>
                <option value="1">Gestor</option>
                <option value="2">Tamalero</option>
                <option value="3">Administrador</option>
              </select>
            </div>
            <div class="col-6">
              <input type="password" class="form-control form-control-sm" id="passw1Input" placeholder="Password">
            </div>
            <div class="col-6">
              <input type="password" class="form-control form-control-sm" id="passw2Input" placeholder="Repetir Passwword">
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-primary btn-sm">Crear</button>
            </div>
          </form>
         </div>
           </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Eventos
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div class="container">
          <p> <small>Crear nuevo evento</small> </p>
          <form action="" class="row">
            <div class="col-12">
              <input type="text" class="form-control form-control-sm" id="producInput" placeholder="Nombre del Evento">
            </div>
            <div class="col-12">
              <label for="formFileMultiple" class="form-label">Seleccione imagen max 500kb</label>
              <input class="form-control form-control-sm" type="file" id="formFileMultiple" multiple>
            </div>
            <div class="col-12">
              <textarea class="form-control form-control-sm" id="descrip_eventoInput" rows="3" placeholder="Descripcion del evento"></textarea>
            </div>
            <div class="col-6">
              <input type="date" class="form-control form-control-sm" id="producInput" placeholder="Fecha inicio">
            </div>
            <div class="col-6">
              <input type="date" class="form-control form-control-sm" id="producInput" placeholder="Fecha fin ">
            </div>
          
            <div class="col-6">
              <button type="button" class="btn btn-primary btn-sm">Crear evento</button>
            </div>
          </form>
         </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

</script>

<style>

</style>