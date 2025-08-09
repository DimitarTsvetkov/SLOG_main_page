async function fetchPrices() {
    const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple&vs_currencies=usd"
    );
    return response.json();
}

let cryptoChart;

async function renderChart() {
    const prices = await fetchPrices();

    const chartData = [
        prices.bitcoin.usd,
        prices.ethereum.usd,
        prices.ripple.usd
    ];

    const ctx = document.getElementById("cryptoChart").getContext("2d");

    const gradientBTC = ctx.createLinearGradient(0, 0, 0, 400);
    gradientBTC.addColorStop(0, "#f7931a");
    gradientBTC.addColorStop(1, "#ffcc80");

    const gradientETH = ctx.createLinearGradient(0, 0, 0, 400);
    gradientETH.addColorStop(0, "#3c3c3d");
    gradientETH.addColorStop(1, "#b3b3b3");

    const gradientXRP = ctx.createLinearGradient(0, 0, 0, 400);
    gradientXRP.addColorStop(0, "#00aae4");
    gradientXRP.addColorStop(1, "#80eaff");

    const datasetColors = [gradientBTC, gradientETH, gradientXRP];

    if (cryptoChart) {
        cryptoChart.data.datasets[0].data = chartData;
        cryptoChart.update();
    } else {
        cryptoChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Bitcoin (BTC)", "Ethereum (ETH)", "XRP", "SLOG"],
                datasets: [{
                    label: "Price (USD)",
                    data: chartData,
                    backgroundColor: datasetColors,
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: { color: "#fff", font: { size: 14, weight: "bold" } }
                    },
                    tooltip: {
                        backgroundColor: "#222",
                        titleColor: "#fec016",
                        bodyColor: "#fff",
                        borderColor: "#fec016",
                        borderWidth: 1
                    }
                },
                scales: {
                    x: {
                        ticks: { color: "#fff", font: { size: 14, weight: "bold" } },
                        grid: { color: "rgba(255,255,255,0.1)" }
                    },
                    y: {
                        ticks: { color: "#fff", font: { size: 14, weight: "bold" } },
                        grid: { color: "rgba(255,255,255,0.1)" }
                    }
                }
            }
        });
    }
}

// Run chart logic
renderChart();
setInterval(renderChart, 60000);
