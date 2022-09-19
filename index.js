import { ethers } from "./ethers-5.6.esm.min.js";

const connectButton = document.getElementById("connectButton");

const fundButton = document.getElementById("fund");

connectButton.onclick = connect;
fundButton.onclick = fund;

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    document.getElementById("connectButton").innerHTML = "Connected!";
  } else {
    document.getElementById("connectButton").innerHTML =
      "Please install Metamask!";
  }
}

async function fund(ethAmount) {
  console.log(`Funding with ${ethAmount} ETH...`);
  if (typeof window.ethereum !== "undefined") {
  }
}
