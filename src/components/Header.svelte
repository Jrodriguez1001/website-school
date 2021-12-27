<script>
  import { Link } from "svelte-routing";
  import Email from "./icons/Email.svelte";
  import Phone from "./icons/Phone.svelte";
  import Facebook from "./icons/iconFacebook.svelte";
  import Whatsapp from "./icons/iconWhatsapp.svelte";

  /*import { isLogged } from "../store/isLogged";
  /*import { useAuthUser } from "../hooks/useAuthUser";
  useAuthUser();*/
  /*let isLoggedUser = false;

  isLogged.suscribe((data) => {
    isLoggedUser = data;
  });*/
</script>

<section class="Header">
  <div class="menu-header">
    <div class="contactos">
      <div class="contacto">
        <div class="icon"><Email /></div>
        <div>tramites@ievs.edu.pe</div>
      </div>
      <div class="contacto">
        <div class="icon"><Phone /></div>
        <div>+51992964415</div>
      </div>
    </div>
    <nav>
      <ul class="menu">
        <a href="https://www.facebook.com/I.E.VeritatisSplendor" target="_blank"
          ><Facebook /></a
        >

        <a href="https://wa.me/51992964415" target="_blank"> <Whatsapp /></a>

        <!--  <Link to="login">login</Link>
       {#if isLoggedUser}
          <Link to="Transacciones">Transacciones</Link>
        {/if}*/-->
      </ul>
    </nav>
  </div>
</section>

<style>
  .menu-header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .contactos {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .contacto {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 20px;
  }

  .menu {
    display: flex;
    flex-direction: row;
  }
  ul {
    list-style-type: none;
  }
  .icon {
    margin: 0px 5px 0px 5px;
  }
  /*li {
    margin: 0px 10px 0px 10px;
  }*/
</style>
