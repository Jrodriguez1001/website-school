<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Login from "./routes/Login.svelte";
  import Plans from "./routes/Plans.svelte";
  import SingleProduct from "./routes/SingleProduct.svelte";
  import Header from "./components/Header.svelte";
  import Thankyou from "./routes/Thankyou.svelte";
  import Gallery from "./routes/Gallery.svelte";

  export let url = "";
</script>

<Router {url}>
  <Header />

  <Route path="/">
    <Home />
    <Plans />
    <Gallery />
  </Route>

  <Route path="login">
    <Login />
  </Route>

  <Route path="producto/:id" let:params>
    <SingleProduct id={params.id} />
  </Route>
  <Route path="Thankyou">
    <Thankyou />
  </Route>
</Router>

<section class="footer" />

<style>
  :global(body) {
    color: #424242;
  }

  :global(:root) {
    --theme-color-main: #470205;
    --theme-color-secondary: #424242;
  }

  .footer {
    height: 50px;
  }
</style>
