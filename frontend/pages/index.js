import Head from "next/head";
import { Form, useNotification, Widget } from "web3uikit";
import { useState } from "react";

import request from "../utils/apisauce";
import styles from "../styles/Home.module.css";

export default function Home() {
  const dispatch = useNotification();
  const [hash, setHash] = useState({
    hashValue: "",
    nounce: "",
  });
  const approveAndList = async ({ data }) => {
    const value = data[0].inputResult;
    const _data = await request("POST", `apiV1/getHash`, {
      inputHex: value,
    });
    setHash({
      hashValue: _data.hash,
      nounce: _data.nounce,
    });
    dispatch({
      type: "success",
      message: "Request Successful",
      position: "topR",
    });
  };
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <Head>
          <title>Cryptography</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Form
          buttonConfig={{
            disabled: false,
          }}
          onSubmit={approveAndList}
          data={[
            {
              name: "Enter 256-bit/64-Digit hex: i.e 54e604787cbf194841e7b68d7cd28786f6c9a0a3ab9f8b0a0e87cb4387ab0107 ",
              type: "text",
              validation: {
                regExp:
                  "^(?:[A-Za-z0-9+]{4})*(?:[A-Za-z0-9+]{2}==|[A-Za-z0-9+]{3}=)?$",
                required: true,
              },
              inputWidth: "950px",
              value: "",
              key: "hexValue",
            },
          ]}
          title="Get The Keccak256 Hash String"
          id="Main Form"
        />
        {hash.hashValue && (
          <div>
            <Widget
              info={`Hash: ${hash.hashValue}`}
              title={`Nounce: ${hash.nounce}`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
