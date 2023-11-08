google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {

    var data = google.visualization.arrayToDataTable([
    ['Genre', 'PP', 'PSOE', 'VOX', 'Sumar',
     'EH-Bildu', 'ERC', 'Junts', 'PNV', 'UPN', 'BNG', 'CoalicionCanaria',{ role: 'annotation' } ],
    ['2023', 136, 122, 33, 31, 6, 7, 7, 5, 1, 1, 1,'']
    ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0,1,2,3,4,5,6,7,8,9,10,11]);

  var options = {
  width: 600,
  height: 400,
  legend: { position: 'top', maxLines: 3 },
  bar: { groupWidth: '75%' },
  isStacked: true,
  colors: ['blue', 'red', 'green', '#E61455', '#96C219', '#FFB232', '#00C3B2', '#0E9775', '#2A8343', '#66A90F', '#E6AC00']
};

var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
chart.draw(view, options);

}

google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Partidos', 'Escaños'],
    ['PP', 136], ['PSOE', 122], ['VOX', 33],
    ['Sumar', 31], ['EH-Bildu', 6], ['ERC', 7],
    ['Junts', 7], ['PNV', 5], ['UPN', 1],
    ['BNG', 1], ['CoalicionCanaria', 1]
  ]);

  var options = {
    title: 'Elecciones Generales 23J España',
    legend: 'none',
    pieSliceText: 'label',
    slices: {
        0: { offset: 0.2, color: 'blue' },  // PP
        1: { offset: 0.1,color: 'red' },  // PSOE
        2: { offset: 0.08,color: 'green' },  // VOX
        3: { offset: 0.08,color: '#E61455' },  // Sumar
        4: { offset: 0.05,color: '#6B295E' },  // EH-Bildu
        5: { offset: 0.05,color: '#FF3333' },  // ERC
        6: { offset: 0.05,color: '#FFAE00' },  // Junts
        7: { offset: 0.05,color: '#0073A6' },  // PNV
        8: { offset: 0.05,color: '#50A900' },  // UPN
        9: { offset: 0.05,color: '#00A65A' },  // BNG
        10: { offset: 0.05,color: '#6B8E23' },  // CoalicionCanaria
      },
      is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}