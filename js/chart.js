google.charts.load('current', { 'packages': ['corechart'] });
//google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {

  food = parseFloat(document.getElementById('foodvar').value);
  beauty = parseFloat(document.getElementById('beautyvar').value);
  transport = parseFloat(document.getElementById('transportvar').value);
  entertainment = parseFloat(document.getElementById('entertainmentvar').value);
  other = parseFloat(document.getElementById('othervar').value);

  var data = google.visualization.arrayToDataTable([
    ['Expenses', 'Amount spent per day'],
    ['Food', food],
    ['Beauty', beauty],
    ['Transportation', transport],
    ['Entertainment', entertainment],
    ['Others', other]
  ]);


  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data);
}