import { getCoinsMostValuable } from "@zoralabs/coins-sdk";

async function printMostValuableCoins() {
  try {
    const response = await getCoinsMostValuable({
      count: 20
    });

    const coins = response.data?.exploreList?.edges?.map((edge) => edge.node);
    
    console.log("20 Koin Paling Berharga:");
    console.log("------------------------");
    
    coins?.forEach((coin, index) => {
      console.log(`${index + 1}. ${coin.name} (${coin.symbol})`);
      console.log(`   Market Cap: ${coin.marketCap}`);
      console.log(`   Volume 24h: ${coin.volume24h}`);
      console.log(`   Creator Address: ${coin.creatorAddress}`);
      console.log(`   Dibuat pada: ${new Date(coin.createdAt).toLocaleString()}`);
    //   console.log(coin);
      console.log("------------------------");
    });

  } catch (error) {
    console.error("Error mengambil data koin:", error);
  }
}

// Menjalankan fungsi
printMostValuableCoins(); 