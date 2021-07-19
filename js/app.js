//navbar
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mobile-navbar');

burger.onclick = ()=>{
    navbar.classList.toggle('active');
}

navbar.onclick = ()=>{
    navbar.classList.remove('active');
}

//counter 
const counterDiv = document.querySelector('.counter');
const slideObserverOptions = {};
const slideObserver = new IntersectionObserver((entries, slideObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            let output1 = 0;
            let output2 = 0;
            let output3 = 0;

            const enrolledTimer = setInterval(() => {
                document.querySelector('#experience').textContent = `${output1}+`;
                if (output1 === 15) {
                    clearInterval(enrolledTimer);
                } else {
                    output1+=1;
                }
            }, 100);

            const recommendedTimer = setInterval(() => {
                document.querySelector('#trades').textContent = `${output2}+`;
                if (output2 >= 1354) {
                    clearInterval(recommendedTimer);
                } else {
                    output2+=10;
                }
            }, 100);

            const partnersTimer = setInterval(() => {
                document.querySelector('#customers').textContent = `${output3}+`;
                if (output3 === 250) {
                    clearInterval(partnersTimer);
                } else {
                    output3++;
                }
            }, 100);
        }
    });
}, slideObserverOptions);

slideObserver.observe(counterDiv);

//rates code down here

let chart1 = document.querySelector('#chart-1').getContext('2d');
let chart2 = document.querySelector('#chart-2').getContext('2d');
let chart3 = document.querySelector('#chart-3').getContext('2d');
let chart4 = document.querySelector('#chart-4').getContext('2d');

let ratesChart = new Chart(chart1, {
    type:'bar',
    data:{
        labels:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets:[{
            label:'Week 1 Rates',
            data:[
                505,
                507
            ],
            backgroundColor: '#3d9e77'
        }]
    },
    options:{
        scales: {
            y: {
                beginAtZero: false,
                min: 495
            }
        },
        title: {
            display: true,
            text: 'Rates',
            fontSize: 25,
            color: 'white'
        }
    } 
});

// chart 2
let ratesChart2 = new Chart(chart2, {
    type:'bar',
    data:{
        labels:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets:[{
            label:'Week 2 Rates',
            data:[],
            backgroundColor: '#3d9e77'
        }]
    },
    options:{
        scales: {
            y: {
                beginAtZero: false,
                min: 495
            }
        },
        title: {
            display: true,
            text: 'Rates',
            fontSize: 25,
            color: 'white'
        }
    } 
});

// chart 3
let ratesChart3 = new Chart(chart3, {
    type:'bar',
    data:{
        labels:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets:[{
            label:'Week 3 Rates',
            data:[],
            backgroundColor: '#3d9e77'
        }]
    },
    options:{
        scales: {
            y: {
                beginAtZero: false,
                min: 495
            }
        },
        title: {
            display: true,
            text: 'Rates',
            fontSize: 25,
            color: 'white'
        }
    } 
});

// chart 4
let ratesChart4 = new Chart(chart4, {
    type:'bar',
    data:{
        labels:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets:[{
            label:'Week 4 Rates',
            data:[],
            backgroundColor: '#3d9e77'
        }]
    },
    options:{
        scales: {
            y: {
                beginAtZero: false,
                min: 495
            }
        },
        title: {
            display: true,
            text: 'Rates',
            fontSize: 25,
            color: 'white'
        }
    } 
});

// hide or show charts
const chartWindow1 = document.querySelector('#chart-1');
const chartWindow2 = document.querySelector('#chart-2');
const chartWindow3 = document.querySelector('#chart-3');
const chartWindow4 = document.querySelector('#chart-4');

const showChart1 = document.querySelector('#week-1-btn');
const showChart2 = document.querySelector('#week-2-btn');
const showChart3 = document.querySelector('#week-3-btn');
const showChart4 = document.querySelector('#week-4-btn');

const showChart = (activeChart)=>{
    document.querySelector('#rates').querySelectorAll('canvas').forEach(canvas =>{
        canvas.classList.add('d-none');
        activeChart.classList.remove('d-none');
    });
};

showChart1.onclick = ()=>{
    showChart(chartWindow1);
    console.log('works');
};

showChart2.onclick = ()=>{
    showChart(chartWindow2);
};

showChart3.onclick = ()=>{
    showChart(chartWindow3);
};

showChart4.onclick = ()=>{
    showChart(chartWindow4);
};