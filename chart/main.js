function getRandom() {
  return Math.floor(10 + Math.random() * 90);
}
// line chart data
var buyerData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      fillColor: "rgba(172,194,132,0.4)",
      strokeColor: "#ACC26D",
      pointColor: "#fff",
      pointStrokeColor: "#9DB86D",
      data: [getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom()]
    }
  ]
}
// get line chart canvas
var buyers = document.getElementById('buyers').getContext('2d');
// draw line chart
new Chart(buyers).Line(buyerData);
// pie chart data
var pieData = [
  {
    value: getRandom(),
    color: "#878BB6"
  },
  {
    value: getRandom(),
    color: "#4ACAB4"
  },
  {
    value: getRandom(),
    color: "#FF8153"
  },
  {
    value: getRandom(),
    color: "#FFEA88"
  }
];
// pie chart options
var pieOptions = {
  segmentShowStroke: false,
  animateScale: true
}
// get pie chart canvas
var countries = document.getElementById("countries").getContext("2d");
// draw pie chart
new Chart(countries).Pie(pieData, pieOptions);
// bar chart data
var barData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      fillColor: "#48A497",
      strokeColor: "#48A4D1",
      data: [getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom()]
    },
    {
      fillColor: "rgba(73,188,170,0.4)",
      strokeColor: "rgba(72,174,209,0.4)",
      data: [getRandom(), getRandom(), getRandom(), getRandom(), getRandom(), getRandom()]
    }
  ]
}
// get bar chart canvas
var income = document.getElementById("income").getContext("2d");
// draw bar chart
new Chart(income).Bar(barData);