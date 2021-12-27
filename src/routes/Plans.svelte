<script>
  import { collection, getDocs } from "firebase/firestore";
  import { db } from "../firebase";
  import { Router, Link, Route } from "svelte-routing";

  const productos = collection(db, "planes");
  let productDocs = [];

  getDocs(productos).then((snap) => {
    snap.docs.forEach((doc) => {
      const data = doc.data();
      // console.log("data: ", data);
      productDocs = [...productDocs, data];
    });
  });
</script>

<section class="section-planes">
  <h1 class="titulo">Planes de Apoyo</h1>

  <div class="planes">
    {#if productDocs.length > 0}
      {#each productDocs as producto}
        <div class="plan">
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <h3><span>$</span>{producto.precio}<span>.00 Dólares</span></h3>
          <Link to="/producto/{producto.nombre}">
            <input class="btn" type="button" value="Donar" />
          </Link>
        </div>
      {/each}
    {/if}
  </div>
</section>

<style>
  .titulo {
    font-size: 40px;
    color: #420504;
  }
  h2 {
    color: black;
  }
  .section-planes {
    padding: 20px 0px 60px 0px;
    background-color: rgb(243, 243, 243);
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .planes {
    margin-top: 40px;

    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-content: center;
  }
  .plan {
    width: 20%;
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
  }
  .btn {
    margin-top: 20px;
    width: 200px;
    background-color: #420504;
    color: white;
    padding: 10px 0px 10px 0px;
    font-size: 18px;
    border-radius: 5px;
    transition: transform 0.2s;
  }
  .btn:hover {
    transform: scale(1.2);
  }
</style>
