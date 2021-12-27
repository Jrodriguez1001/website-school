import { loadScript } from "@paypal/paypal-js";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import { navigate } from "svelte-routing";

export async function loadPaypal(elementId, value) {
  let paypal;

  try {
    paypal = await loadScript({
      "client-id":
        "AQ3KcrPxHEUbpkGOACFwlM8vVEnNg1dNioxho4FKJHJmtoe5ZeB-59_6c5Xpk0J_2QZHsiWgVZGv33nt",
      currency: "USD",
      vault: "true",
      locale: "es_PE",
    });
  } catch (error) {
    console.error("failed to load the PayPal JS SDK script", error);
  }

  if (paypal) {
    try {
      await paypal
        .Buttons({
          createOrder: function (data, actions) {
            // This function sets up the details of the transaction, including the amount and line item details.
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: value,
                  },
                },
              ],
            });
          },
          onApprove: function (data, actions) {
            return actions.order.capture().then(async function (details) {
              console.log(details);
              const docRef = await addDoc(collection(db, "transacciones"), {
                nombre: `${details.payer.name.given_name} ${details.payer.name.surname}`,
                "id-transaccion": details.id,
                monto: details.purchase_units[0].amount.value,
              });
              //Redirige al usuario
              navigate("/Thankyou", { replace: true });
            });
          },
        })
        .render(elementId);
    } catch (error) {
      console.error("failed to render the PayPal Buttons", error);
    }
  }
}
