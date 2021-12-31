
$(function() {
    consoleInit(main)
      });

const GOBLIN_CHEF_ABI = [[{"inputs": [{"internalType": "contract GoblinToken","name": "_goblin","type": "address"},{"internalType": "uint256","name": "_startTime","type": "uint256"},{"internalType": "address","name": "_devAddress","type": "address"},{"internalType": "address","name": "_feeAddress","type": "address"}],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "user","type": "address"},{"indexed": true,"internalType": "uint256","name": "pid","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "amount","type": "uint256"}],"name": "Deposit","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "user","type": "address"},{"indexed": true,"internalType": "uint256","name": "pid","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "amount","type": "uint256"}],"name": "EmergencyWithdraw","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "previousOwner","type": "address"},{"indexed": true,"internalType": "address","name": "newOwner","type": "address"}],"name": "OwnershipTransferred","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "user","type": "address"},{"indexed": false,"internalType": "contract IERC20","name": "lpToken","type": "address"},{"indexed": false,"internalType": "uint256","name": "allocPoint","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "lastRewardTime","type": "uint256"},{"indexed": false,"internalType": "uint16","name": "depositFeeBP","type": "uint16"}],"name": "PoolAdd","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "user","type": "address"},{"indexed": false,"internalType": "contract IERC20","name": "lpToken","type": "address"},{"indexed": false,"internalType": "uint256","name": "allocPoint","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "lastRewardTime","type": "uint256"},{"indexed": false,"internalType": "uint16","name": "depositFeeBP","type": "uint16"}],"name": "PoolSet","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "user","type": "address"},{"indexed": true,"internalType": "address","name": "referrer","type": "address"},{"indexed": false,"internalType": "uint256","name": "commissionAmount","type": "uint256"}],"name": "ReferralCommissionPaid","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "user","type": "address"},{"indexed": true,"internalType": "address","name": "newAddress","type": "address"}],"name": "SetDevAddress","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "user","type": "address"},{"indexed": true,"internalType": "address","name": "newAddress","type": "address"}],"name": "SetFeeAddress","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "user","type": "address"},{"indexed": true,"internalType": "contract IReferral","name": "newAddress","type": "address"}],"name": "SetReferralAddress","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "user","type": "address"},{"indexed": false,"internalType": "uint16","name": "referralCommmissionRate","type": "uint16"}],"name": "SetReferralCommissionRate","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "user","type": "address"},{"indexed": false,"internalType": "uint256","name": "goblinPerSecond","type": "uint256"}],"name": "UpdateEmissionRate","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "user","type": "address"},{"indexed": false,"internalType": "uint256","name": "startTime","type": "uint256"}],"name": "UpdatestartTime","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "user","type": "address"},{"indexed": true,"internalType": "uint256","name": "pid","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "amount","type": "uint256"}],"name": "Withdraw","type": "event"},{"inputs": [],"name": "MAXIMUM_EMISSION_RATE","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "MAXIMUM_REFERRAL_COMMISSION_RATE","outputs": [{"internalType": "uint16","name": "","type": "uint16"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_allocPoint","type": "uint256"},{"internalType": "contract IERC20","name": "_lpToken","type": "address"},{"internalType": "uint16","name": "_depositFeeBP","type": "uint16"}],"name": "add","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_pid","type": "uint256"},{"internalType": "uint256","name": "_amount","type": "uint256"},{"internalType": "address","name": "_referrer","type": "address"}],"name": "deposit","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "devAddress","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_pid","type": "uint256"}],"name": "emergencyWithdraw","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "feeAddress","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_from","type": "uint256"},{"internalType": "uint256","name": "_to","type": "uint256"}],"name": "getMultiplier","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "goblin","outputs": [{"internalType": "contract GoblinToken","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "goblinPerSecond","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "massUpdatePools","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "owner","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_pid","type": "uint256"},{"internalType": "address","name": "_user","type": "address"}],"name": "pendinggoblin","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "contract IERC20","name": "","type": "address"}],"name": "poolExistence","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "","type": "uint256"}],"name": "poolInfo","outputs": [{"internalType": "contract IERC20","name": "lpToken","type": "address"},{"internalType": "uint256","name": "allocPoint","type": "uint256"},{"internalType": "uint256","name": "lastRewardTime","type": "uint256"},{"internalType": "uint256","name": "accgoblinPerShare","type": "uint256"},{"internalType": "uint16","name": "depositFeeBP","type": "uint16"},{"internalType": "uint256","name": "lpSupply","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "poolLength","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "referral","outputs": [{"internalType": "contract IReferral","name": "","type": "address"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "referralCommissionRate","outputs": [{"internalType": "uint16","name": "","type": "uint16"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "renounceOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_pid","type": "uint256"},{"internalType": "uint256","name": "_allocPoint","type": "uint256"},{"internalType": "uint16","name": "_depositFeeBP","type": "uint16"}],"name": "set","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_devAddress","type": "address"}],"name": "setDevAddress","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "_feeAddress","type": "address"}],"name": "setFeeAddress","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "contract IReferral","name": "_referral","type": "address"}],"name": "setReferralAddress","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint16","name": "_referralCommissionRate","type": "uint16"}],"name": "setReferralCommissionRate","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "startTime","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "totalAllocPoint","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "newOwner","type": "address"}],"name": "transferOwnership","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_goblinPerSecond","type": "uint256"}],"name": "updateEmissionRate","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_pid","type": "uint256"}],"name": "updatePool","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "_startTime","type": "uint256"}],"name": "updatestartTime","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "","type": "uint256"},{"internalType": "address","name": "","type": "address"}],"name": "userInfo","outputs": [{"internalType": "uint256","name": "amount","type": "uint256"},{"internalType": "uint256","name": "rewardDebt","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_pid","type": "uint256"},{"internalType": "uint256","name": "_amount","type": "uint256"}],"name": "withdraw","outputs": [],"stateMutability": "nonpayable","type": "function"}]]

async function main() {
    const App = await init_ethers();

    _print(`Initialized ${App.YOUR_ADDRESS}\n`);
    _print("Reading smart contracts...\n");

    const GOBLIN_CHEF_ADDR = "0x0a05f6022D6e051539b190Bff7E484068A7dd0a4";

    const rewardTokenTicker = "GOBLIN";
    const GOBLIN_CHEF = new ethers.Contract(GOBLIN_CHEF_ADDR, GOBLIN_CHEF_ABI, App.provider);

    let rewardsPerWeek = 0
    const startBlock = await GOBLIN_CHEF.startBlock();
    const currentBlock = await App.provider.getBlockNumber();

    const multiplier = await GOBLIN_CHEF.getMultiplier(currentBlock, currentBlock + 1);
 
    if(currentBlock < startBlock){
     _print(`Rewards start at block ${startBlock}\n`)
    }else{
        rewardsPerWeek = await GOBLIN_CHEF.GenesisPerBlock() / 1e18 * multiplier * 604800 / 5.6;
    }

    const tokens = {};
    const prices = await getCronosPrices();

    await loadCronosChefContract(App, tokens, prices, GOBLIN_CHEF, GOBLIN_CHEF_ADDR, GOBLIN_CHEF_ABI, rewardTokenTicker,
        "Genesis", null, rewardsPerWeek, "pendingGenesis", [7]);

    hideLoading();
}