const ethers = require('ethers');

async function claimNFT(contractAddress, privateKey) {
  // Connect to the Ethereum network
  const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');
  
  // Load the private key
  const wallet = new ethers.Wallet(privateKey, provider);
  
  // Load the NFT contract
  const contract = new ethers.Contract(contractAddress, abi, wallet);
  
  try {
    // Call the claim function on the contract
    const tx = await contract.claim();
  
    // Wait for the transaction to be mined
    const receipt = await tx.wait();
  
    console.log('NFT claimed successfully.');
    console.log('Transaction Hash:', receipt.transactionHash);
  } catch (error) {
    console.error('Error claiming NFT:', error);
  }
}

// Usage: Call the function with the contract address and private key
claimNFT('YOUR_NFT_CONTRACT_ADDRESS', 'YOUR_PRIVATE_KEY');
