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
          Articulos
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">Estado</th>
                <th scope="col">Nombre</th>
                <th>Categ</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>inicio</td>
                <td>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-primary">x</button>

                    <button type="button" class="btn btn-danger">edit</button>
                  </div>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td>Jacob</td>
                <td>equipo</td>
                <td>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-primary">x</button>

                    <button type="button" class="btn btn-danger">edit</button>
                  </div>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td>ok</td>
                <td>quienessomos</td>
                <td>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-primary">x</button>
                    <button type="button" class="btn btn-danger">edit</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
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
          Crear/editar
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <div class="container">
            <p><small>Crear/editar articulo</small></p>
            <form action="" class="row">
              <div class="col-8">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="producInput"
                  placeholder="Nombre "
                />
              </div>
              <div class="col-4">
                <select
                  class="form-select form-select-sm"
                  aria-label="Default select example"
                >
                  <option selected>Categoria</option>
                  <option value="1">Inicio</option>
                  <option value="2">Quienes somos</option>
                  <option value="3">Nuestro equipo</option>
                </select>
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
                <button type="button" class="btn btn-primary btn-sm">
                  Crear articulo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style></style>
