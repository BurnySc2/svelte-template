<script lang="ts">
import Chart from "chart.js/auto"

// Sample data for line graph: temperature over days
const tempData = [
	{ day: "Mon", temp: 22, condition: "Sunny" },
	{ day: "Tue", temp: 25, condition: "Cloudy" },
	{ day: "Wed", temp: 20, condition: "Rainy" },
	{ day: "Thu", temp: 28, condition: "Sunny" },
	{ day: "Fri", temp: 24, condition: "Partly Cloudy" },
]

// Sample data for bar graph: fruit sales
const fruitData = [
	{ fruit: "Apple", sales: 120, note: "Popular choice" },
	{ fruit: "Banana", sales: 80, note: "Imported" },
	{ fruit: "Orange", sales: 150, note: "Seasonal peak" },
	{ fruit: "Grape", sales: 90, note: "Organic" },
	{ fruit: "Kiwi", sales: 60, note: "Exotic" },
]

let lineChart: Chart | null = null
let barChart: Chart | null = null

$effect(() => {
	// Line chart: Temperature over days
	const lineCtx = document.getElementById("lineCanvas") as HTMLCanvasElement
	if (lineCtx && !lineChart) {
		lineChart = new Chart(lineCtx, {
			type: "line",
			data: {
				labels: tempData.map((d) => d.day),
				datasets: [
					{
						label: "Temperature (°C)",
						data: tempData.map((d) => d.temp),
						borderColor: "red",
						backgroundColor: "rgba(255, 0, 0, 0.1)",
						borderWidth: 3,
						fill: false,
						pointRadius: 6,
						pointHoverRadius: 8,
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					tooltip: {
						callbacks: {
							title: (context) => {
								const point = tempData[context[0].dataIndex]
								return `Day: ${point.day}`
							},
							label: (context) => {
								const point = tempData[context.dataIndex]
								return [`Temperature: ${point.temp}°C`, `Condition: ${point.condition}`]
							},
						},
					},
				},
				scales: {
					y: {
						beginAtZero: false,
						min: 15,
						max: 30,
					},
				},
			},
		})
	}

	// Bar chart: Fruit sales
	const barCtx = document.getElementById("barCanvas") as HTMLCanvasElement
	if (barCtx && !barChart) {
		barChart = new Chart(barCtx, {
			type: "bar",
			data: {
				labels: fruitData.map((d) => d.fruit),
				datasets: [
					{
						label: "Sales",
						data: fruitData.map((d) => d.sales),
						backgroundColor: "orange",
						borderRadius: 3,
						borderSkipped: false,
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					tooltip: {
						callbacks: {
							title: (context) => {
								const item = fruitData[context[0].dataIndex]
								return `Fruit: ${item.fruit}`
							},
							label: (context) => {
								const item = fruitData[context.dataIndex]
								return [`Sales: ${item.sales}`, `Note: ${item.note}`]
							},
						},
					},
				},
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		})
	}

	// Cleanup function
	return () => {
		if (lineChart) {
			lineChart.destroy()
			lineChart = null
		}
		if (barChart) {
			barChart.destroy()
			barChart = null
		}
	}
})
</script>

<div class="mx-auto max-w-4xl p-8">
	<h1 class="mb-8 text-2xl font-bold">Charts Example</h1>
	<p class="mb-8 text-gray-600">
		Interactive charts using Chart.js. Hover over points or bars for extra information about weather conditions and
		fruit notes.
	</p>

	<!-- Line Graph Section -->
	<div class="mb-12">
		<h2 class="mb-4 text-xl font-semibold">Temperature Over Week (Line Graph)</h2>
		<div class="h-64">
			<canvas id="lineCanvas" class="h-full w-full rounded border border-gray-300 bg-white"></canvas>
		</div>
	</div>

	<!-- Bar Graph Section -->
	<div>
		<h2 class="mb-4 text-xl font-semibold">Fruit Sales (Bar Graph)</h2>
		<div class="h-64">
			<canvas id="barCanvas" class="h-full w-full rounded border border-gray-300 bg-white"></canvas>
		</div>
	</div>
</div>

<style>
	/* Minimal custom styles if needed, but using Tailwind classes */
</style>
