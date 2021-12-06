<script>
import Email from "./icons/Email.svelte";
import Phone from "./icons/Phone.svelte";

</script>
<style>
.menu-header{
      display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

}
.contactos{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.contacto{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 20px
}

.menu{
    display: flex;
    flex-direction: row;
}
ul {
  list-style-type: none;
}
.icon{
    margin: 0px 5px 0px 5px;
}
li{
    margin: 0px 10px 0px 10px;
}
</style>

<section class="Header">
    <div class="menu-header">
        <div class= "contactos">
            <div class="contacto">
                <div  class="icon"><Email></Email></div>
                <div>tramites@ievs.edu.pe</div>
            </div>
            <div  class="contacto">
                <div  class="icon"><Phone></Phone> </div>
                <div>+51992964415 </div>
            </div>
        </div>
        <nav >
            <ul class="menu">
                <li>Login</li>
                <li>Registro</li>
                <li>IconFB</li>
                <li>IconInsta</li>
                <li>IconYt</li>
            </ul>    
        </nav>
    </div>
    <div>
        <div>logo</div>
        <button>Donar Ahora</button>
        <div>menu</div>
    </div>

</section>