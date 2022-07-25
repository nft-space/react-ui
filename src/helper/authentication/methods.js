import MyAlgoConnect from "@randlabs/myalgo-connect";

// Import utility functions
import { axiosPostCall } from "../util";

export const connectAlgoWallet = async () => {
  const myAlgoWallet = new MyAlgoConnect();
  try {
    const accounts = await myAlgoWallet.connect();
    const addresses = accounts.map((account) => account.address);
    return { addresses: addresses };
  } catch (err) {
    console.error(err);
  }
};

export const verifySignature = async (addresses) => {
  const myAlgoWallet = new MyAlgoConnect();
  try {
    const txn = {
      fee: 0,
      type: "pay",
      from: addresses[0],
      to: addresses[0],
      amount: 0, // 1 algo
      firstRound: 12449335,
      lastRound: 12450335,
      genesisHash: "SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=",
      genesisID: "mainnet-v1.0",
    };

    const signedTxn = await myAlgoWallet.signTransaction(txn);

    await postSignature(signedTxn, txn);
    return addresses[0];
  } catch (err) {
    console.error(err);
  }
};

export const postSignature = async (signedTxn, txn) => {
  if (
    "blob" in signedTxn &&
    "txID" in signedTxn &&
    typeof signedTxn == "object"
  ) {
    let blobJSON = {
      blob: signedTxn.blob,
      txn: txn,
    };
    // Send blob to flask backend using ajax POST
    axiosPostCall("/authenticate-signature", blobJSON).then((res) => {
      console.log(res);
    });
  } else {
    alert(
      "Signature authentication failure. Please check entered details and try again. "
    );
  }
};
