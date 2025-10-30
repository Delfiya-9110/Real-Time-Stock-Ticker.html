// ----------- Real-time Ticker Simulation ------------
const ticker = document.getElementById("stock-ticker");
if (ticker) {
  const stocks = [
    { symbol: "AAPL", price: 175.50, change: +1.25 },
    { symbol: "GOOGL", price: 2825.33, change: -0.45 },
    { symbol: "AMZN", price: 3450.12, change: +0.95 },
    { symbol: "TSLA", price: 960.45, change: +2.35 },
    { symbol: "MSFT", price: 310.88, change: -1.10 },
  ];

  function updateTicker() {
    ticker.innerHTML = stocks
      .map(
        (s) =>
          `<span class="stock-item">${s.symbol}: $${s.price.toFixed(2)} <span style="color:${s.change >= 0 ? 'lime' : 'red'};">(${s.change}%)</span></span>`
      )
      .join(" • ");
  }

  updateTicker();
  setInterval(() => {
    stocks.forEach((s) => {
      s.price += (Math.random() - 0.5) * 2;
      s.change = (Math.random() - 0.5).toFixed(2);
    });
    updateTicker();
  }, 3000);
}

// ----------- Chart Page Setup ------------
const ctx = document.getElementById("stockChart");
if (ctx) {
  const labels = Array.from({ length: 10 }, (_, i) => `T${i + 1}`);
  const data = labels.map(() => 150 + Math.random() * 10);

  new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "AAPL Price (USD)",
          data,
          borderColor: "#00ff88",
          borderWidth: 2,
          tension: 0.3,
        },
      ],
    },
    options: {
      scales: {
        x: { ticks: { color: "#fff" } },
        y: { ticks: { color: "#fff" } },
      },
      plugins: {
        legend: { labels: { color: "#00ff88" } },
      },
    },
  });
}