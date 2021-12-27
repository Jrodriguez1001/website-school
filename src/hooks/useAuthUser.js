/*import { onMount } from "svelte";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { isLogged } from "../store/isLogged";

export const useAuthUser = () => {
  onMount(() => {
    onAuthStateChanged(auth, (user) => {
      let userLogged = user == null ? false : true;
      if (userLogged) {
        navigate("/Transacciones");
        isLogged.set(true);
      }
    });
  });
};*/
