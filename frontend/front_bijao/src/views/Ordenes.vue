<template>
  <div class="container">
    <div class="app">
      <table class="table caption-top">
        <caption>
          Listado de disponidad de tamales
        </caption>
        <h6>Evento <strong>Tamales FDS</strong></h6>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Valor</th>
            <th>Disp</th>
            <th>Compra</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tamal de carne</td>
            <td>$2500</td>
            <td>50</td>
            <td>
              <div class="input-group input-group-sm mb-1">
                <input
                  type="number"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>Tamal mixto</td>
            <td>$3000</td>
            <td>12</td>
            <td>
              <div class="input-group input-group-sm mb-1">
                <input
                  type="number"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>Tamal de pescado</td>
            <td>$4500</td>
            <td>12</td>
            <td>
              <div class="input-group input-group-sm mb-1">
                <input
                  type="number"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <h6>Total de pedido: $45000</h6>

      <hr />
      <h6>Datos para realizar envio</h6>

      <p>
        Nota: su pedido será confirmado por una de nuestros encargados vía
        telefónica y deberá ser cancelado al momento de recibirlo
      </p>
      <div class="row">
        <div class="col-6">
          <div class="mb-1">
            <label for="exampleFormControlInput1" class="form-label"
              >Nombre</label
            >
            <input
              type="text"
              class="form-control form-control-sm"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-1">
            <label for="exampleFormControlInput1" class="form-label"
              >Telefono</label
            >
            <input
              type="number"
              class="form-control form-control-sm"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-1">
            <label for="exampleFormControlInput1" class="form-label"
              >Telefono</label
            >
            <input
              type="number"
              class="form-control form-control-sm"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-1">
            <label for="exampleFormControlInput1" class="form-label"
              >Email</label
            >
            <input
              type="email"
              class="form-control form-control-sm"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style></style>
