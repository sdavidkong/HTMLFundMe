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
