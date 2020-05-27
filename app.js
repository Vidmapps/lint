const initializeMobileMenu = () => {
  const burger = document.querySelector('.nav-burger');
  const menu = document.querySelector('.nav-content-menu');
  const navigation = document.querySelector('.navigation');
  const navcontent = document.querySelector('.nav-content');
  const navcontentmobile = document.querySelector('.nav-content-mobile');
  const menucross = document.querySelector('.fa-times');
  const navburgerimg = document.querySelector('.nav-burger-img');
  const hiddenblock = document.querySelector('.nav-content-hidden-block');

  burger.addEventListener('click', () => {
    menu.classList.toggle('mobile-hide');
    menucross.classList.toggle('mobile-hide');
    hiddenblock.classList.toggle('mobile-hide');
    navburgerimg.classList.toggle('mobile-display');
    navburgerimg.classList.toggle('mobile-hide');
    menu.classList.toggle('flex-and-center');
    navigation.classList.toggle('navigation-active');
    navcontent.classList.toggle('flex-and-space-between');
    navcontentmobile.classList.toggle('nav-content-mobile');
  });
};

initializeMobileMenu();


// // CHART 1 ///////

window.onload = function () {
  const chart1 = new CanvasJS.Chart('chartContainer1', {
    animationEnabled: true,
    theme: 'dark2',
    backgroundColor: '#283040',
    title: {
    },
    axisY: {
      name: 'amount',
      includeZero: true,
      gridColor: '#67758d',
      gridThickness: 0.5,
      gridDashType: 'dot',
      labelFontSize: '18px',
      labelFontColor: '#97a4ba',
      lineThickness: 0.5,
      lineColor: '#67758d',
      interval: 20000,
      valueFormatString: '$#k,.',
      tickLength: 15,
      tickColor: '#283040',
    },

    axisX: {
      name: 'date',
      includeZero: true,
      gridColor: '#67758d',
      gridThickness: 0.5,
      gridDashType: 'dot',
      labelFontColor: '#97a4ba',
      lineThickness: 0.5,
      lineColor: '#67758d',
      valueFormatString: 'MMM DD',
      tickLength: 15,
      intervalType: 'day',
      interval: 14,
      tickColor: '#283040',
      minimum: new Date(2019, 1, 1),
      maximum: new Date(2019, 5, 16),


      /* minimum: new Date(2019, 01, 1),
            maximum: new Date(2019, 04, 30) */
    },

    data: [{
      name: 'Revenue',
      type: 'line',
      lineColor: '#3a96fd',
      markerType: 'circle',
      markerSize: 6,
      markerBorderColor: '#3794fc', // change color here
      markerBorderThickness: 2,
      markerColor: '#ffffff',
      dataPoints: [
        { x: new Date(2019, 1, 1), y: 50000 },
        { x: new Date(2019, 1, 8), y: 65000 },
        { x: new Date(2019, 1, 15), y: 60000 /* indexLabel: "highest",markerColor: "red", markerType: "triangle" */ },
        { x: new Date(2019, 1, 22), y: 85000 },
        { x: new Date(2019, 2, 1), y: 115000 },
        { x: new Date(2019, 2, 8), y: 110000 },
        { x: new Date(2019, 2, 15), y: 85000 },
        { x: new Date(2019, 2, 22), y: 75000 },
        { x: new Date(2019, 3, 1), y: 85000 /* indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross" */ },
        { x: new Date(2019, 3, 8), y: 95000 },
        { x: new Date(2019, 3, 15), y: 119000 },
        { x: new Date(2019, 3, 22), y: 100000 },
        { x: new Date(2019, 4, 1), y: 65000 },
        { x: new Date(2019, 4, 8), y: 60000 },
        { x: new Date(2019, 4, 15), y: 85000 },
        { x: new Date(2019, 4, 22), y: 115000 },
        { x: new Date(2019, 5, 1), y: 110000 },
        { x: new Date(2019, 5, 15), y: 105000 },
      ],
    },
    {
      name: 'Cost',
      type: 'line',
      lineColor: '#9d60fb',
      markerType: 'circle',
      markerSize: 6,
      markerBorderColor: '#9d60fb', // change color here
      markerBorderThickness: 2,
      markerColor: '#ffffff',
      dataPoints: [
        { x: new Date(2019, 1, 1), y: 20000 },
        { x: new Date(2019, 1, 8), y: 15000 },
        { x: new Date(2019, 1, 15), y: 35000 /* indexLabel: "highest",markerColor: "red", markerType: "triangle" */ },
        { x: new Date(2019, 1, 22), y: 45000 },
        { x: new Date(2019, 2, 1), y: 75000 },
        { x: new Date(2019, 2, 8), y: 80000 },
        { x: new Date(2019, 2, 15), y: 60000 },
        { x: new Date(2019, 2, 22), y: 50000 },
        { x: new Date(2019, 3, 1), y: 58000 /* indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross" */ },
        { x: new Date(2019, 3, 8), y: 62000 },
        { x: new Date(2019, 3, 15), y: 55000 },
        { x: new Date(2019, 3, 22), y: 60000 },
        { x: new Date(2019, 4, 1), y: 45000 },
        { x: new Date(2019, 4, 8), y: 40000 },
        { x: new Date(2019, 4, 15), y: 60000 },
        { x: new Date(2019, 4, 22), y: 60000 },
        { x: new Date(2019, 5, 1), y: 62000 },
        { x: new Date(2019, 5, 15), y: 80000 },
      ],
    },
    ],
  });

  const chart2 = new CanvasJS.Chart('chartContainer2', {
    animationEnabled: true,
    theme: 'dark2',
    backgroundColor: '#283040',
    title: {
    },
    dataPointWidth: 10,
    axisY: {
      name: 'amount',
      includeZero: true,
      gridColor: '#67758d',
      gridThickness: 0.5,
      gridDashType: 'dot',
      labelFontSize: '18px',
      labelFontColor: '#97a4ba',
      lineThickness: 0.5,
      lineColor: '#67758d',
      interval: 40000,
      valueFormatString: '#k,.',
      tickLength: 15,
      tickColor: '#283040',
    },

    axisX: {
      name: 'date',
      includeZero: false,
      gridColor: '#67758d',
      gridThickness: 0.5,
      gridDashType: 'dot',
      labelFontColor: '#97a4ba',
      lineThickness: 0.5,
      lineColor: '#67758d',
      valueFormatString: 'MMM DD',
      tickLength: 15,
      intervalType: 'week',
      interval: 4.5,
      tickColor: '#283040',
      minimum: new Date(2018, 11, 24),
      maximum: new Date(2019, 3, 24),


      /* minimum: new Date(2019, 01, 1),
            maximum: new Date(2019, 04, 30) */
    },

    data: [{
      name: 'Revenue',
      type: 'column',
      color: '#3a96fd',
      dataPoints: [
        { x: new Date(2019, 0, 1), y: 140000 },
        { x: new Date(2019, 0, 8), y: 120000 },
        { x: new Date(2019, 0, 15), y: 100000 /* indexLabel: "highest",markerColor: "red", markerType: "triangle" */ },
        { x: new Date(2019, 0, 22), y: 120000 },
        { x: new Date(2019, 1, 1), y: 90000 },
        { x: new Date(2019, 1, 8), y: 100000 },
        { x: new Date(2019, 1, 15), y: 110000 },
        { x: new Date(2019, 1, 22), y: 90000 },
        { x: new Date(2019, 2, 1), y: 130000 /* indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross" */ },
        { x: new Date(2019, 2, 8), y: 150000 },
        { x: new Date(2019, 2, 15), y: 140000 },
        { x: new Date(2019, 2, 22), y: 130000 },
        { x: new Date(2019, 3, 1), y: 110000 },
        { x: new Date(2019, 3, 8), y: 130000 },
        { x: new Date(2019, 3, 15), y: 170000 },
      ],
    },
    ],
  });

  const options = {
    series: [85],
    chart: {
      height: 180,
      type: 'radialBar',
      offsetY: 0,
      color: '#37c4fc',
    },
    plotOptions: {
      radialBar: {
        track: {
          background: '#283040',
        },
        startAngle: -100,
        endAngle: 100,
        dataLabels: {
          name: {
            fontSize: '16px',
            color: undefined,
            offsetY: 0,
          },
          value: {
            offsetY: -16,
            fontSize: '24px',
            color: '#37c4fc',
            formatter(val) {
              return `${val}%`;
            },
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: [''],
  };

  const chart3 = new ApexCharts(document.querySelector('#chart3'), options);

  chart1.render();
  chart2.render();
  chart3.render();
};
