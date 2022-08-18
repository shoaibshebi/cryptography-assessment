const { keccack256, h2d } = require("../utils");

const getHash = async (req, res) => {
  try {
    let inputHex = req.body.inputHex;
    const firstDecimalNo = h2d("0x" + inputHex);

    let nounce = 0;
    let hash = "";
    for (; nounce < Infinity; nounce++) {
      let outRes = BigInt(firstDecimalNo) + BigInt(nounce);
      hash = keccack256(outRes.toString(16));
      if (hash < inputHex) {
        break;
      }
      //safe case
      // if (nounce == 1000000) {
      //   console.log("nounce is 1000000");
      //   break;
      // }
    }

    let resp = {
      code: 200,
      hash: hash,
      nounce: nounce,
    };
    res.status(200).json(resp);
  } catch (error) {
    let resp = {
      code: 500,
      hash: "Not Found",
      nounce: "Not Found",
    };
    console.error("Server side error: ", error);
    res.status(200).json(resp);
  }
};

module.exports = {
  getHash,
};
