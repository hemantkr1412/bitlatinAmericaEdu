import React, { useState } from "react";
import { Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Payment from "../../../payment/payment";
import { paypalpaymentApi, promoApi } from "../../../Scripts/apiCalls";

const BuyPopup = ({ certNumber, back }) => {
  const [isPaying, setIsPaying] = useState(false);
  const [discount, setDiscount] = useState(0);

  const tax = 0;

  const getCertValue = () => {
    if (certNumber <= 100) return 2;
    if (certNumber <= 500) return 1.75;
    if (certNumber >= 1000) return 1.5;
  };
  const getNetValue = () => {
    return (
      Math.floor(
        certNumber *
          getCertValue() *
          (1 + tax / 100) *
          100 *
          (1 - discount / 100)
      ) / 100
    );
  };

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <Box
        sx={{
          background: "var(--secondary)",
          color: "var(--primary)",
          padding: "20px",
          borderRadius: "20px",
          minWidth: "350px",
        }}
      >
        <Button
          variant="outlined"
          style={{ background: "var(--primary)", color: "var(--secondary)" }}
          onClick={back}
        >
          <h3 style={{ margin: "0px" }}>X</h3>
        </Button>

        {isPaying ? (
          <Payment
            amount={getNetValue()}
            certNumber={certNumber}
            promocode={document.getElementById("promo-input").value}
            close={() => {
              setIsPaying(false);
              back();
            }}
          />
        ) : (
          <>
            <h2> {certNumber} Certificates</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "3fr 1fr",
                width: "100%",
              }}
            >
              <div>
                <h4 style={{ margin: "0px" }}>Price per certificate:</h4>
              </div>
              <div style={{ textAlign: "right" }}>
                <h4 style={{ margin: "0px" }}>{getCertValue()}$</h4>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "3fr 1fr",
                width: "100%",
              }}
            >
              <div>
                <h4 style={{ margin: "0px" }}>Total Price:</h4>
              </div>
              <div style={{ textAlign: "right" }}>
                <h4 style={{ margin: "0px" }}>
                  {certNumber * getCertValue()}$
                </h4>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr 1fr",
                width: "100%",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <div>
                <h4 style={{ margin: "0px" }}>Promocode:</h4>
              </div>
              <div style={{ textAlign: "right" }}>
                <input
                  type="text"
                  style={{
                    margin: "0px 0px",
                    padding: "5px 0px",
                    color: "var(--primary)",
                    fontSize: "20px",
                    border: "1px solid var(--primary)",
                  }}
                  id="promo-input"
                />
              </div>
              <Button
                style={{
                  background: "var(--primary)",
                  color: "var(--secondary)",
                }}
                onClick={() => {
                  let code = document.getElementById("promo-input").value;
                  promoApi({
                    code: code,
                    request_type: "view",
                  })
                    .then((res) => {
                      if (res.is_active) {
                        setDiscount(res.discount);
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                      alert("Invalid promocode");
                    });
                }}
              >
                <h3 style={{ margin: "0px" }}>Apply</h3>
              </Button>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "3fr 1fr",
                width: "100%",
              }}
            >
              <div>
                <h4 style={{ margin: "0px" }}>Discount:</h4>
              </div>
              <div style={{ textAlign: "right" }}>
                <h4 style={{ margin: "0px" }}>{discount}%</h4>
              </div>
            </div>

            <br />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "3fr 1fr",
                width: "100%",
              }}
            >
              <div>
                <h4 style={{ margin: "0px" }}>Net Payable:</h4>
              </div>
              <div style={{ textAlign: "right" }}>
                <h4 style={{ margin: "0px" }}>{getNetValue()}$</h4>
              </div>
            </div>
            <div
              style={{
                margin: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="filled"
                style={{
                  background: "var(--primary)",
                  color: "var(--secondary)",
                }}
                onClick={() => {
                  setIsPaying(true);
                }}
              >
                <h3 style={{ margin: "0px" }}>
                  Pay {getNetValue()}$ {">"}{" "}
                </h3>
              </Button>
            </div>
          </>
        )}
      </Box>
    </Backdrop>
  );
};

export default BuyPopup;
