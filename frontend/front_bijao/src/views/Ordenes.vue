<template>
  <div class="container">
    <div class="app">
      <table class="table caption-top">
        <caption>
          Listado de disponidad de tamales
        </caption>
        <h6>Evento <strong>Tamales FDS</strong></h6>
        <thead  class="text-center">
          <tr>
            <th style="width: 20%;" >Tipo</th>
            <th style="width: 20%;">Valor</th>
            <th style="width: 20%;">Disp</th>
            <th style="width: 20%;">Compra</th>
            <th style="width: 20%;">Subtotal</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr>
            <td >Tamal de carne</td>
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
              <td>12</td>
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
            <td>12</td>
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
              <td>12</td>
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
      <div class="form">

      
      <div class="row">
        <div class="col-6">
          <!--  -->
          <div class="input-group input-group-sm mb-1">
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Nombre"
            />
          </div>
          <!--  -->
          <div class="input-group input-group-sm mb-1">
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Direccion"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="input-group input-group-sm mb-1">
            <input
              type="email"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Email"
            />
          </div>

          <div class="input-group input-group-sm mb-1">
            <input
              type="number"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Celular"
            />
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-outline-success btn-sm " style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">Realizar pedido</button>
    </div>
    </div>
  </div>
</template>

<script></script>

<style></style>
