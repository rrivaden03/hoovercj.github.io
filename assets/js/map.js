google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  var data = google.visualization.arrayToDataTable([
    ['Country','Number of Visits'],
    ['Denmark',2],
    ['Sweden',2],
    ['Estonia',1],
    ['Lithuania',1],
    ['Germany',2],
    ['Austria',1],
    ['United Kingdom',1],
    ['France',1],
    ['Spain',1]
  ]);

  var options = {
        region: '150',
        displayMode: 'regions',
        colorAxis: {colors: ['#8CDECE','#1abc9c',]},
        legend: 'none',
        tooltip: {showColorCode: false}
      };
  
  var geochart = new google.visualization.GeoChart(
      document.getElementById('visualization'));
  geochart.draw(data, options);
}