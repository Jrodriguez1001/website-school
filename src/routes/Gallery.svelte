<script>
  import Gallery from "svelte-image-gallery";
</script>

<section class="contenedor">
  <h1 class="titulo">Galería</h1>
  <div class="galeria">
    <Gallery gap="10" maxColumnWidth="300">
      <img src="../img/P1010721.png" alt="imagen1" />
      <img src="../img/P1010630.png" alt="imagen2" />
      <img src="../img/P1010633.png" alt="imagen3" />
      <img src="../img/P1010631.png" alt="imagen4" />
      <img src="../img/P1010646.png" alt="imagen5" />
      <img src="../img/P1010650.png" alt="imagen6" />
      <img src="../img/P1010654.png" alt="imagen7" />
      <img src="../img/P1010726.png" alt="imagen8" />
      <img src="../img/P1010664.png" alt="imagen9" />
      <img src="../img/P1010665.png" alt="imagen10" />
    </Gallery>
  </div>
</section>

<style>
  .contenedor {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .titulo {
    margin: 70px 0px 70px 0px;
    font-size: 40px;
    color: #420504;
  }
  .galeria {
    width: 80%;
  }

  :global(img) {
    opacity: 0.9;
    transition: all 0.2s;
  }
  :global(img):hover {
    opacity: 1;
    transform: scale(1.04);
  }
</style>
