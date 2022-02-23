Chart.defaults.color = 'black';
Chart.defaults.plugins.title.font = {size: 18, weight: 'bold', family: 'Gothic'};

var ctx = $('#myChart');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            'Jan 2021', 
            'Feb 2021', 
            'Mar 2021', 
            'Apr 2021', 
            'May 2021', 
            'Jun 2021', 
            'Jul 2021', 
            'Aug 2021', 
            'Sep 2021', 
            'Oct 2021', 
            'Nov 2021', 
            'Dec 2021'
        ],
        datasets: [{
            label: '# of Resources Shared',
            data: [
                10, 
                43, 
                143, 
                12, 
                14, 
                25, 
                57, 
                38, 
                108, 
                82, 
                46, 
                3
            ],
            backgroundColor: '#DD6B1E',
            borderColor: '#DD6B1E',
            borderWidth: 1,
            hoverBorderColor: 'black',
            hoverBorderWidth: 1
        }]
    },
    options: {
        hitRadius: 20,
        plugins: {
            title: {
                display: true,
                text: 'Number of Resources Shared over Time',
                padding: {
                    bottom: 20
                }
            },
            legend: {
                display: false
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            y: {
                grid: {
                    display: false,
                    borderColor: '#DD6B1E',
                }
            },
            x: {
                grid: {
                    display: false,
                    borderColor: '#DD6B1E',
                }
            },
        }
    }
});

var ctx_1 = $('#myChart_1');

var myChart = new Chart(ctx_1, {
    type: 'pie',
    data: {
        labels: [
            'Ben Healy', 
            'Perry Smith', 
            'Emily Myers', 
            'Davis Rowan', 
            'Kai Sorensen', 
            'Nate Shaw', 
            'Sergio Rivera', 
            'Kaitlin Pelkey', 
            'Nich Mueller', 
            'Gregory Baldwin', 
            'Hilarie Spangler', 
            'Benny Woodard'
        ],
        datasets: [{
            data: [
                160, 
                149, 
                92, 
                59, 
                27, 
                25, 
                19, 
                16, 
                14, 
                14, 
                4, 
                2
            ],
            backgroundColor: [
                '#00ffd1',
                '#ed561b',
                '#dddf00',
                '#24cbe5',
                '#64e572',
                '#ff9655',
                '#fff263',
                '#6af9c4',
                '#2f7ed8',
                '#0d233a',
                '#8bbc21',
                '#910000',
            ],
            borderColor: 'white',
            borderWidth: 1,
            hoverBorderColor: 'black',
            hoverBorderWidth: 1,
            hoverOffset: 4
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Number of Resources Shared by Teachers',
                padding: {
                    top: 50,
                    bottom: 15
                }
            },
            legend: {
                position: 'bottom',
                maxHeight: 200
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx_2 = $('#myChart_2');

var myChart = new Chart(ctx_2, {
    type: 'bar',
    data: {
        labels: [
            'Melody Memory Maker', 
            'Rhythm Song Clap Back',
            'End of Season PL Songwriting Party', 
            'Intro to Tablature', 
            'Major Minor', 
            'Rhythm Song Scribe', 
            'Guitar Scales',
            'Major Scale Madness', 
            'Beat Detective', 
            'Boom Crack Beat', 
            'Wait a Second', 
            'FILL it Up!',
            'Tablature and Treble Clef',
            'Code Breakers',
            'Flux Capacitor',
            'BMF Guitar Book 1',
            'Advanced Build A Band',
            'Advanced Band Listening Exercise',
            'CRASH dummies!',
            'Body Count',
            'Ultimate Practice Pad SHED',
            'BMF Guitar Book 2',
            'Going Up',
            'Paint a Picture',
            'Chord Word Mystery',
            'Food Fill',
            'Big Beat Sheet',
            'Trolls',
            'Wait A Bluesy Second',
            'Chord Diagrams - Piano',
            'Piano Common Chord Progressions',
            'Song Birds',
            'Treasure Challenge',
            "Songwriter's Journey - INT Level 1",
            'BMF Guitar/Bass Fretboard',
            'Sea Creature Songs',
            'Complete the composition',
            '16 Bar Drum Shed',
            "Songwriter's Journey - INT Level 6",
            '8 On A Hand',
            'Chords Across America',
            'Sing by Sight',
            "Songwriter's Journey - BEG Level 2",
            'Count Count Count',
            'Melody Notation Story',
            'Cards',
            'Master of Tensions',
            "Songwriter's Journey - BEG Level 1",
            'Quarter Note High Hat Groove',
            'Inversion Challenge',
            'One Note Wonder',
            'Chord Diagrams - Guitar',
            'Chord Diagrams',
            "Songwriter's Journey - INT Level 5",
            "Songwriter's Journey - INT Level 3",
            "Songwriter's Journey - BEG Level 3",
        ],
        datasets: [{
            yAxisID: 'yAxis',
            label: '# of Times Shared',
            data: [
                74, 
                46, 
                45, 
                44, 
                39, 
                33, 
                19, 
                15, 
                15, 
                15, 
                15, 
                14, 
                9, 
                9,
                9,
                8,
                8,
                8,
                7,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                5,
                5,
                5,
                5,
                5,
                5,
                4,
                4,
                4,
                4,
                4,
                4,
                3,
                3,
                3,
                3,
                3,
                3,
                2,
                2,
                2,
                2,
                2,
                2,
                1,
                1,
                1,
                1,
                1,
            ],
            backgroundColor: '#DD6B1E',
            borderColor: '#DD6B1E',
            borderWidth: 1,
            hoverBorderColor: 'black',
            hoverBorderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Resources and Number of Times Shared',
                font: {size: 18},
            },
            legend: {
                display: false
            }
        },
        indexAxis: 'y',
        scales: {
            yAxis: {
                grid: {
                    display: false,
                    borderColor: '#DD6B1E',
                },
                ticks: {
                    autoSkip: false,
                }
            },
            xAxis: {
                grid: {
                    display: false,
                    drawBorder: false,
                },
                position: 'top',
            }
        },
    }
});