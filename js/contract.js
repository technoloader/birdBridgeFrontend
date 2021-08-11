const forwarderOrigin = 'http://localhost:9010'

// eth token
const erc_contract_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
	
const erc_contract_address = '0x6Acf6987f25F0cD0FeA0F62fB049B31dF3227E0f';


// bsc token
const bsc_contract_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const bsc_contract_address = '0x7591B56aA403b4c6E6F7bfb2D53A915e8aDC93d3';



// bsc contract
const bsc_bridge_contract_abi = [{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"date","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nonce","type":"uint256"},{"indexed":true,"internalType":"enum BridgeBsc.Step","name":"step","type":"uint8"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feepayer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"otherChainNonce","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"processedNonces","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferTokenOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const bsc_bridge_contract_address = '0xab7094B03EC08461993aFA09a650fbd05881E40D';





	

const initialize = async() => {
    let accounts
	const isMetaMaskConnected = () => accounts && accounts.length > 0

	//Created check function to see if the MetaMask extension is installed
	const isMetaMaskInstalled = () => {
		//Have to check the ethereum binding on the window object to see if it's installed
		const { ethereum } = window;
		
		return Boolean(ethereum && ethereum.isMetaMask);
	};

	const MetamaskClientCheck = async() => {
	  //Now we check to see if Metmask is installed
	  if (!isMetaMaskInstalled()) {
		//If it isn't installed we ask the user to click to install it
		//onboardButton.innerText = 'Click here to install MetaMask!';
		onClickInstall();
	  } else if(!isMetaMaskConnected()) {
		//If MetaMask is installed we ask the user to connect to their wallet
		//onboardButton.innerText = 'Connect';
		onClickConnect();
		
	  }
	  else {
		//callRegister();
	  }
	};
	
	// const onboarding = new MetamaskOnboarding({ forwarderOrigin });
	MetamaskClientCheck();
	checkConnected();
	ethTokenBalance();
	bscTokenBalance();
	setInterval(function(){ bscTokenBalance(); },5000);
	setInterval(function(){ ethTokenBalance(); },5000);	
	
}

const checkConnected = async() => {
	/* web3.eth.getAccounts().then(function(result){
			$('.user_address').text(result[0]);
			const myAddress = result[0];
			return result[0]
			console.log(myAddress);
		}); */
	accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	var userAddr = accounts[0];	
}

//This will start the onboarding proccess
const onClickInstall = () => {
	onboardButton.innerText = 'Onboarding in progress';
	onboardButton.disabled = true;
	//On this object we have startOnboarding which will start the onboarding process for our end user
	onboarding.startOnboarding();
};

const ethTokenBalance = async()=>{
	try {
		
		
		//Will Start the MetaMask Extension
		accounts = await ethereum.request({ method: 'eth_requestAccounts' });
		
		var walletAddr = accounts[0];
	
		
		//var web3 = new Web3(Web3.givenProvider);
		var web3 = new Web3("https://rinkeby.infura.io/v3/e71dbab6e6a0441a8b112984b59a080e");
		
		
		var EthToken =  new web3.eth.Contract(erc_contract_abi,erc_contract_address);
		
			
		await EthToken.methods.balanceOf(walletAddr).call(function(err,result){
            
			   if(result){
				   var showBalance =  result/1000000000000000000;
				   showBalance =  showBalance.toFixed(2);
				   $("#eth_bal").html(showBalance);
				   
			   }
            });
		
	} catch (error) {
		console.error(error);
	}
}

const bscTokenBalance = async()=>{
	try {
		
		
		//Will Start the MetaMask Extension
		accounts = await ethereum.request({ method: 'eth_requestAccounts' });
		
		var walletAddr = accounts[0];
	
		
		//var web3 = new Web3(Web3.givenProvider);
		var web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");
		
		
		var EthToken =  new web3.eth.Contract(bsc_contract_abi,bsc_contract_address);
		
			
		await EthToken.methods.balanceOf(walletAddr).call(function(err,result){
            
			   if(result){
				   var showBalance =  result/1000000000000000000;
				   showBalance =  showBalance.toFixed(2);
				   $("#bsc_bal").html(showBalance);
				   
			   }
            });
		
	} catch (error) {
		console.error(error);
	}
}

const ethToBscTransfer = async()=>{
	try {
		
		//Will Start the MetaMask Extension
		accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	
		var walletAddr = accounts[0];
		
		var chainId = await ethereum.request({ method: 'eth_chainId' });

		chainId = parseInt(chainId, 16);
	
		if(chainId!=4){
			alert("Please select Rinkeby Ethereum Chain");
			return false;
			
		}
		
		let inputVal = document.getElementById("eth_to_bsc");
		let inputAmt = inputVal.value;
		
		var web3 = new Web3(Web3.givenProvider);
		
		var EthToken =  new web3.eth.Contract(erc_contract_abi,erc_contract_address);
		
		var weiAmt = 1000000000000000000*inputAmt;
		var hexaDecimal =  "0x"+weiAmt.toString(16);
		var toAddress = "0xe129D77Ec3bCDC7c6F51A87E4b8d0C068123470a";
		await EthToken.methods.transfer(toAddress,hexaDecimal).send({from:walletAddr},function(err,result){
            
			   if(err!==null){
                    console.log(err);
			   }
			   else {
				  var ethShowLink = "https://rinkeby.etherscan.io/tx/"+result;
				  
					console.log(ethShowLink);
			   }
			   console.log(result);
        }); 
		
		
		
	} catch (error) {
		console.log(error);
	
	}
}

const bscToEthTransfer = async() => {
	try {
		
		//Will Start the MetaMask Extension
		accounts = await ethereum.request({ method: 'eth_requestAccounts' });
		
		var chainId = await ethereum.request({ method: 'eth_chainId' });
		chainId = parseInt(chainId, 16);

		if(chainId!=97){
			alert("Please connect to Binance Smart Chain Testnet");
			return false;
		}
	
		var walletAddr = accounts[0];
		let inputVal = document.getElementById("bsc_to_eth_amt");
		let inputAmt = inputVal.value;
		
		var web3 = new Web3(Web3.givenProvider);
		
		var BscBridge =  new web3.eth.Contract(bsc_contract_abi, bsc_contract_address);
		
		var weiAmt = 1000000000000000000*inputAmt;
		var hexaDecimal =  "0x"+weiAmt.toString(16);
		
		await BscBridge.methods.burn(hexaDecimal).send({from:walletAddr},function(err,result){
            
			   if(err!==null){

			   }
			   else {
				    var ethShowLink = "https://bscscan.com/tx/"+result;
				    console.log(ethShowLink);
			   }
			   console.log(result);
        }); 
		
		
		
	} catch (error) {
		
		alert(error);
		console.log(error);
	}
}

const onClickConnect = async () => {
	try {
		
		//Will Start the MetaMask Extension
		accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	    var userAddr = accounts[0];
		//addrVal.innerHTML = accounts[0];
		//callRegister();
	} catch (error) {
		console.error(error);
	}
};
  
window.addEventListener('DOMContentLoaded', initialize)