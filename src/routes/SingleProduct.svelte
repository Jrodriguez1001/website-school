<script>
  import { collection, getDocs } from "firebase/firestore";
  import { db } from "../firebase";
  import { onMount } from "svelte";
  import { loadPaypal } from "../paypalsdk";
  const productos = collection(db, "planes");
  let productDocs = [];
  let aux = "0";

  getDocs(productos).then((snap) => {
    snap.docs.forEach((doc) => {
      const data = doc.data();
      // console.log("data: ", data);
      productDocs = [...productDocs, data];
    });
  });

  console.log(productDocs);
  export let id;

  onMount(async () => {
    let monto = "0.1";
    if (id === `Plan Agua es Vida`) {
      monto = `50`;
      aux = +3;
      console.log(aux);
    }
    if (id === `Plan Granito de Arena`) {
      monto = `30`;
      aux = +2;
      console.log(aux);
    }
    if (id === `Plan Desayuno`) {
      monto = `10`;
      aux = +1;
      console.log(aux);
    }

    await loadPaypal("#paypal-button-container", monto);
  });
</script>

<section class="contenedor">
  <div id="preplan">
    {#if productDocs.length > 0 && aux == 1}
      <h2>{productDocs[0].nombre}</h2>
      <p>{productDocs[0].descripcion}</p>
      <h3><span>$</span>{productDocs[0].precio}<span>.00 Dólares</span></h3>
    {/if}
    {#if productDocs.length > 0 && aux == 2}
      <h2>{productDocs[1].nombre}</h2>
      <p>{productDocs[1].descripcion}</p>
      <h3><span>$</span>{productDocs[1].precio}<span>.00 Dólares</span></h3>
    {/if}
    {#if productDocs.length > 0 && aux == 3}
      <h2>{productDocs[2].nombre}</h2>
      <p>{productDocs[2].descripcion}</p>
      <h3><span>$</span>{productDocs[2].precio}<span>.00 Dólares</span></h3>
    {/if}
  </div>

  <div id="paypal-button-container" />
  <form id="paypal-form" action="/success" method="POST">
    <input type="hidden" name="details" id="details-input" />
  </form>
</section>

<style>
  .contenedor {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  #preplan {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-color: rgb(148, 148, 148);
    border-radius: 10px;
    border-width: 2px;
    padding: 40px 20px 40px 20px;
    height: 400px;
    margin-right: 40px;
  }
  #paypal-button-container {
    width: 30%;
  }
</style>
