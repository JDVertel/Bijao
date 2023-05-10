<template>
  <div class="app">
    <h6>home tamalero</h6>

    <select
      class="form-select form-select-sm"
      aria-label="Default select example"
    >
      <option selected>Seleccione el evento</option>
      <option value="1">Festival del tamal</option>
      <option value="2">Tamales FDS</option>
      <option value="3">Tamales Decembrinos</option>
    </select>
    <br />

    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button
          class="nav-link active"
          id="nav-contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-contact"
          type="button"
          role="tab"
          aria-controls="nav-contact"
          aria-selected="false"
        >
          Estado
        </button>
        <button
          class="nav-link"
          id="nav-home-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-home"
          type="button"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
        >
          Vender
        </button>
        <button
          class="nav-link"
          id="nav-profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-profile"
          type="button"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false"
        >
          Aprovicionar
        </button>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="nav-home"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
       <p>Vender</p> 
       <br>
        <table class="table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Vendidos</th>
              <th>Disp</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>tamal de carne</td>
              <th>15</th>
              <td>3</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>tamal de pollo</td>
              <th>2</th>
              <td>10</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>tamal mmixto</td>
              <th>4</th>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="tab-pane fade"
        id="nav-profile"
        role="tabpanel"
        aria-labelledby="nav-profile-tab"
      >
      <p>aprovisionar</p>  
      
        <br />
        <div class="row">
          <div class="col-6">
            <select
              class="form-select form-select-sm"
              aria-label="Default select example"
            >
              <option selected>Seleccione el producto</option>
              <option value="1">tamal de carne</option>
              <option value="2">Tamal de pollo</option>
              <option value="3">Tamal mixto</option>
            </select>
          </div>
          <div class="col-4">campo</div>
          <div class="col-2">boton</div>
        </div>
<br>
        <table class="table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Venta</th>
              <th>Disp</th>
              <th></th>
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

        boton
      </div>
      <div
        class="tab-pane fade"
        id="nav-contact"
        role="tabpanel"
        aria-labelledby="nav-contact-tab"
      >
        <p>
          informacion del estado de cuentas actual vendidos , base disponible ,
          ganancia etc
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Vendidos</th>
              <th>Disp</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>tamal de carne</td>
              <th>15</th>
              <td>3</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>tamal de pollo</td>
              <th>2</th>
              <td>10</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>tamal mmixto</td>
              <th>4</th>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>