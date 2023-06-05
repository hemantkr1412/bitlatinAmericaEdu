import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { paypalpaymentApi } from "../Scripts/apiCalls";
import { useContext } from "react";
import UserContext from "../../context/userContext/UserContext";

export default function Payment({ amount, close, certNumber, promocode }) {
  const user = useContext(UserContext);

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "Aa5J3mR3jlFHK_hdfAgLf27_6ipx92D_RGS_6o89-1xzU2lks4P5AIrLV_71XQZA_D4PmQJAaJfrkA3I",
      }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount.toString(),
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            console.log(details);
            const name = details.payer.name.given_name;
            console.log(user.userAccount);

            paypalpaymentApi({
              user_address: user.userAccount,
              payment_id: details.id,
              payer_id: details.payer.payer_id,
              promocode: promocode,
              cert_number: certNumber,
            })
              .then((res) => {
                user.poppulateUserData();
                close();
              })
              .catch((err) => {
                console.log(err);
                alert("Something went wrong. Please try again.");
              });
          });
        }}
      />
    </PayPalScriptProvider>
  );
}
