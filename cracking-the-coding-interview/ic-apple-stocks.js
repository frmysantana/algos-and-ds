const blackThursdayCrash = [300, 250, 100, 80, 70];
// const regularDayPrices = [300, 100, 250, 80, 70];

function getMaxProfit(prices) {
  let bestProfit = -Infinity;
  let min = prices[0];
  let currentProfit = -Infinity;

  for (let i = 1; i < prices.length; i += 1) {
    min = prices[i] < min ? prices[i] : min;
    currentProfit = prices[i] - min;

    bestProfit = currentProfit > bestProfit ? currentProfit : bestProfit;
  }

  return bestProfit;
}

console.log(getMaxProfit(blackThursdayCrash));
