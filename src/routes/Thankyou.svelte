<script>
  import Check from "../components/icons/iconCheck.svelte";
</script>

<section class="contenedor">
  <h1 class="titulo">¡Gracias por tu Donación!</h1>
  <p class="descripcion">
    Tu donación ha sido recibida. Muchas gracias por confiar en nuestro servicio
    sin fines de lucro. Los detalles de la transacción puedes ver en cuenta
    Paypal
  </p>
  <Check />
  <h1>Que Dios y la Virgen María lo bendiga</h1>
  <p class="descripcion-2">
    Si tiene alguna duda o consulta puede escribirnos a <a
      href="mailto:tramites@ievs.edu.pe"
      target="_blank">tramites@ievs.edu.pe</a
    >
  </p>
</section>

<style>
  .contenedor {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: space-around;
    align-items: center;
    justify-content: space-around;
  }
  .descripcion {
    font-size: 18px;
  }
  .titulo {
    color: #470205;
    font-size: 45px;
  }
</style>
