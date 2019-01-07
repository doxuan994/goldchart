// Our labels along the x-axis
var date = ["07-12-2018", "08-12-2018", "09-12-2018", "10-12-2018", "11-12-2018", "12-12-2018", "13-12-2018", "14-12-2018", "15-12-2018", "16-12-2018", "17-12-2018", "18-12-2018", "19-12-2018", "20-12-2018", "21-12-2018", "22-12-2018", "23-12-2018", "24-12-2018", "25-12-2018", "26-12-2018", "27-12-2018","28-12-2018","29-12-2018","30-12-2018", "31-12-2018", "01-01-2019", "02-01-2019", "03-01-2019", "04-01-2019","05-01-2019","06-01-2019",];
// For drawing the lines
var goldPrice = [54.9, 54.9, 54.9, 54.9, 54.8, 54.8, 54.7, 54.7, 54.7, 54.7, 54.9, 55, 54.7, 55.6, 55.4, 55.4, 55.4, 56, 55.9, 55.8, 56.2, 56.1, 56.1, 56.1, 56, 56, 56.2, 56.6, 56, 56.1, 56.1];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: date,
        datasets: [
            {
                data: goldPrice,
                label: "Gold Price per Gram",
                borderColor: "darkkhaki",
                backgroundColor: "cornsilk",
                fill: true

            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Daily Gold Price'
        },
        elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Gold Price (SGD)'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    // display: true,
                    // labelString: 'Date'
                }
            }]
        }
    }
});
