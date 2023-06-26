<template>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
        Productos y precios
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <!-- Nav tabs -->
          <ul class="nav nav-tabs" id="myTab1" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home1"
                type="button"
                role="tab"
                aria-controls="home1"
                aria-selected="true"
              >
                <IconHome /> Activos
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile1"
                type="button"
                role="tab"
                aria-controls="profile1"
                aria-selected="false"
              >
                Gestionar
              </button>
            </li>
          </ul>

          <!-- Tab panes -->
          <div class="tab-content">
            <div
              class="tab-pane active"
              id="home1"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="tab-pane"
              id="profile1"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
            >
              <div class="container">
                <p><small>Crear nuevo producto tamal</small></p>
                <form action="" class="row">
                  <div class="col-6">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="producInput"
                      placeholder="Nombre"
                    />
                  </div>
                  <div class="col-4">
                    <input
                      type="number"
                      class="form-control form-control-sm"
                      id="precioInput"
                      placeholder="Precio"
                    />
                  </div>
                  <div class="col-2">
                    <button type="button" class="btn btn-primary btn-sm">
                      Guardar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <!--  -->
        </div>
      </div>
    </div>
    <!-- ----------------------------------------------------------------------------------------- -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Usuarios
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <!-- Nav tabs -->
          <ul class="nav nav-tabs" id="myTab2" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home2"
                type="button"
                role="tab"
                aria-controls="home2"
                aria-selected="true"
              >
                Activos
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile2"
                type="button"
                role="tab"
                aria-controls="profile2"
                aria-selected="false"
              >
                Gestionar
              </button>
            </li>
          </ul>
          <!--  -->
          <div class="tab-content">
            <div
              class="tab-pane fade show active"
              id="home2"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="tab-pane fade"
              id="profile2"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
            >
              <div class="container">
                <p><small>Gestionar usuario</small></p>
                <form action="" class="row">
                  <div class="col-6">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="nameInput"
                      placeholder="Nombres"
                    />
                  </div>
                  <div class="col-6">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="ApellInput"
                      placeholder="Apellidos"
                    />
                  </div>
                  <div class="col-4">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="DocInput"
                      placeholder="Documento"
                    />
                  </div>
                  <div class="col-4">
                    <input
                      type="number"
                      class="form-control form-control-sm"
                      id="celInput"
                      placeholder="Celular"
                    />
                  </div>
                  <div class="col-4">
                    <select
                      class="form-select form-select-sm"
                      aria-label="Default select example"
                    >
                      <option selected>Rol</option>
                      <option value="1">Gestor</option>
                      <option value="2">Tamalero</option>
                      <option value="3">Administrador</option>
                    </select>
                  </div>
                  <div class="col-6">
                    <input
                      type="password"
                      class="form-control form-control-sm"
                      id="passw1Input"
                      placeholder="Password"
                    />
                  </div>
                  <div class="col-6">
                    <input
                      type="password"
                      class="form-control form-control-sm"
                      id="passw2Input"
                      placeholder="Repetir Passwword"
                    />
                  </div>
                  <div class="col-2">
                    <button type="button" class="btn btn-primary btn-sm">
                      Guardar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
    <!-- ----------------------------------------------------------------------------------------- -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Eventos
        </button>
      </h2>
      <div
        id="collapseThree"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <!-- Nav tabs -->
          <ul class="nav nav-tabs" id="myTab3" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home3"
                type="button"
                role="tab"
                aria-controls="home3"
                aria-selected="true"
              >
                Home
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile3"
                type="button"
                role="tab"
                aria-controls="profile3"
                aria-selected="false"
              >
                Profile
              </button>
            </li>
          </ul>

          <!-- Tab panes -->
          <div class="tab-content">
            <div
              class="tab-pane active"
              id="home3"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="tab-pane"
              id="profile3"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
            >
              <div class="container">
                <p><small>Crear nuevo evento</small></p>
                <form action="" class="row">
                  <div class="col-12">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      id="producInput"
                      placeholder="Nombre del Evento"
                    />
                  </div>
                  <div class="col-12">
                    <label for="formFileMultiple" class="form-label"
                      >Seleccione imagen max 500kb</label
                    >
                    <input
                      class="form-control form-control-sm"
                      type="file"
                      id="formFileMultiple"
                      multiple
                    />
                  </div>
                  <div class="col-12">
                    <textarea
                      class="form-control form-control-sm"
                      id="descrip_eventoInput"
                      rows="3"
                      placeholder="Descripcion del evento"
                    ></textarea>
                  </div>
                  <div class="col-6">
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      id="producInput"
                      placeholder="Fecha inicio"
                    />
                  </div>
                  <div class="col-6">
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      id="producInput"
                      placeholder="Fecha fin "
                    />
                  </div>

                  <div class="col-6">
                    <button type="button" class="btn btn-primary btn-sm">
                      Guardar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style></style>
