var element = document.getElementById("mojGraf1").getContext("2d");
var mojGraf1 = new Chart(element, {
    type: "bar",
    data: {
        labels: ["1.1.2021", "2.1.2021", "3.1.2021", "4.1.2021", "5.1.2021", "12.1.2021", "18.1.2021", "21.1.2021", "25.1.2021", "31.1.2021"],
        datasets: [{
            label: ["príjem"],
            data: [10, 15, 50, 20, 15, 35, 60, 10, 10, 18],
            backgroundColor: [
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)"
            ],
            borderColor: [
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)"
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var element2 = document.getElementById("mojGraf2").getContext("2d");
var mojGraf2 = new Chart(element2, {
    type: "bar",
    data: {
        labels: ["1.1.2021", "2.1.2021", "3.1.2021", "4.1.2021", "5.1.2021", "12.1.2021", "18.1.2021", "21.1.2021", "25.1.2021", "31.1.2021"],
        datasets: [{
            label: ["príjem"],
            data: [10, 15, 50, 20, 15, 35, 60, 10, 10, 18],
            backgroundColor: [
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)"
            ],
            borderColor: [
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)"
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var element3 = document.getElementById("mojGraf3").getContext("2d");
var mojGraf3 = new Chart(element3, {
    type: "bar",
    data: {
        labels: ["1.1.2021", "2.1.2021", "3.1.2021", "4.1.2021", "5.1.2021", "12.1.2021", "18.1.2021", "21.1.2021", "25.1.2021", "31.1.2021"],
        datasets: [{
            label: ["príjem"],
            data: [10, 15, 50, 20, 15, 35, 60, 10, 10, 18],
            backgroundColor: [
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)"
            ],
            borderColor: [
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)"
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var element4 = document.getElementById("mojGraf4").getContext("2d");
var mojGraf4 = new Chart(element4, {
    type: "bar",
    data: {
        labels: ["1.1.2021", "2.1.2021", "3.1.2021", "4.1.2021", "5.1.2021", "12.1.2021", "18.1.2021", "21.1.2021", "25.1.2021", "31.1.2021"],
        datasets: [{
            label: ["príjem"],
            data: [10, 15, 50, 20, 15, 35, 60, 10, 10, 18],
            backgroundColor: [
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)"
            ],
            borderColor: [
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)",
                "rgba(139, 4, 4, 0.3)"
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});