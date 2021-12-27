<script>
  import {
    getAuth,
    GoogleAuthProvider,
    signInWithRedirect,
  } from "firebase/auth";
  import { app } from "../firebase";

  const auth = getAuth(app);
  export { auth };
  let credentials = {
    email: "",
    password: "",
  };

  const changeUser = (e) => {
    credentials = {
      ...credentials,
      [e.target.name]: e.target.value,
    };
    console.log(credentials);
  };
  /* const provider = new GoogleAuthProvider();

  signInWithRedirect(auth, provider).then(async () => {
    const result = await getRedirectResult(auth);
    if (result) {
      console.log(result);
      // This is the signed-in user
      const user = result.user;
      // This gives you a Facebook Access Token.
      const credential = provider.credentialFromResult(auth, result);
      const token = credential.accessToken;
    }
  });*/
</script>

<div class="form-signin">
  <h1 class="text-center text-login">Inicia sesión en tu cuenta</h1>
  <div class="center">
    <input
      name="email"
      type="text"
      class="input-form"
      placeholder="Correo"
      on:input={(e) => changeUser(e)}
    />
  </div>
  <div class="center">
    <input
      name="password"
      type="password"
      class="input-form"
      placeholder="Contraseña"
      on:input={(e) => changeUser(e)}
    />
  </div>
  <br />
  <div class="center">
    <button class="button-signup fondo-color-signup"> Iniciar sesión </button>
  </div>
</div>
