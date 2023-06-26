<template>
  <div class="app">
    <h6 class="display-6">Gestor</h6>
    <h6>Gestion de Pedidos</h6>
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="pedidos-tab"
          data-bs-toggle="tab"
          data-bs-target="#pedidos"
          type="button"
          role="tab"
          aria-controls="pedidos"
          aria-selected="true"
        >
          Pedidos
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="ordenes-tab"
          data-bs-toggle="tab"
          data-bs-target="#ordenes"
          type="button"
          role="tab"
          aria-controls="ordenes"
          aria-selected="false"
        >
          Ordenes
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="envios-tab"
          data-bs-toggle="tab"
          data-bs-target="#envios"
          type="button"
          role="tab"
          aria-controls="envios"
          aria-selected="false"
        >
          Envios
        </button>
      </li>
    </ul>

    <!-- -------------------------------------------------------------Tab panes -->
    <div class="tab-content">
      <div
        class="tab-pane active"
        id="pedidos"
        role="tabpanel"
        aria-labelledby="pedidos-tab"
        tabindex="0"
      >
    
        <p>
          Listado de domicilios reportados que deben ser verificados para un
          posterior aprovionamiento y envio
        </p>

        <div class="container">
          <table class="table table-sm table-hover">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Celular</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>juan vertel</td>
                <td>3145522635</td>
                <td>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button type="button" class="btn btn-danger btn-sm">
                      eliminar
                    </button>
                    <!--     <button type="button" class="btn btn-warning btn-sm">Middle</button> -->
                    <button
                      type="button"
                      class="btn btn-success btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#modalPedidos"
                    >
                      ver
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>lina contreras</td>
                <td>3008341154</td>
                <td>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button type="button" class="btn btn-danger btn-sm">
                      eliminar
                    </button>
                    <!--     <button type="button" class="btn btn-warning btn-sm">Middle</button> -->
                    <button
                      type="button"
                      class="btn btn-success btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#modalPedidos"
                    >
                      ver
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        ver pedidos cancelados
      </div>
      <!-- ------------------------------------------------------------------------------------------------------------ -->
      <div
        class="tab-pane"
        id="ordenes"
        role="tabpanel"
        aria-labelledby="ordenes-tab"
        tabindex="0"
      >
     
        <p>
          listado de domicilios confirmados listos para aprovisionar y enviar
        </p>

        <div class="container">
          <table class="table table-sm table-hover">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Pedido</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>juan vertel</td>
                <td>
                  2 mixtos <br />
                  4 carne
                </td>
                <td>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button type="button" class="btn btn-success btn-sm">
                      terminar
                    </button>
                    <!--     <button type="button" class="btn btn-warning btn-sm">Middle</button> -->
                    <button
                      type="button"
                      class="btn btn-warning btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#modalOrdenes"
                    >
                      descartar
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>lina contreras</td>
                <td>
                  2 mixtos <br />
                  1 pollo <br />
                  3 carne
                </td>
                <td>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button type="button" class="btn btn-success btn-sm">
                      terminar
                    </button>
                    <!--     <button type="button" class="btn btn-warning btn-sm">Middle</button> -->
                    <button
                      type="button"
                      class="btn btn-warning btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#modalOrdenes"
                    >
                      descartar
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------- -->
      <div
        class="tab-pane"
        id="envios"
        role="tabpanel"
        aria-labelledby="envios-tab"
        tabindex="0"
      >
    
        <p>listado de pedidos listos para entregar a domiciliario</p>
        ver historial de envios

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
                <td>juan vertel</td>
                <td>3145522635</td>
                <td>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                  <button
                  type="button"
                  class="btn btn-success btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#modalEnvios"
                >
                  enviar
                </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>lina contreras</td>
                <td>3008341154</td>
                <td>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                
                    <!--     <button type="button" class="btn btn-warning btn-sm">Middle</button> -->
                    <button
                      type="button"
                      class="btn btn-success btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#modalEnvios"
                    >
                      enviar
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>


<!-- modales  -->
  <div
    class="modal fade"
    id="modalPedidos"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal Pedidos</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>

  <!--  -->

  <div
  class="modal fade"
  id="modalOrdenes"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal Ordenes</h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>

<!--  -->

<div
class="modal fade"
id="modalEnvios"
data-bs-backdrop="static"
data-bs-keyboard="false"
tabindex="-1"
aria-labelledby="staticBackdropLabel"
aria-hidden="true"
>
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal Envios</h1>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <div class="modal-body">...</div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
      >
        Close
      </button>
      <button type="button" class="btn btn-primary">Understood</button>
    </div>
  </div>
</div>
</div>
</template>

<script></script>

<style>
.btn_mini {
  --bs-btn-padding-y: 0.25rem;
  --bs-btn-padding-x: 0.5rem;
  --bs-btn-font-size: 0.75rem;
}
</style>
