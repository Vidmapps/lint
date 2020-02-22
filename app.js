window.onload = function () {
                
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "dark2",
        backgroundColor: '#283040',
        title:{
        },
        axisY:{
            name: 'amount',
            includeZero: true,
            gridColor: "#67758d",
            gridThickness: 0.5,
            gridDashType: 'dot',        
            labelFontSize: '18px',
            labelFontColor: "#97a4ba",
            lineThickness: 0.5,
            lineColor: "#67758d",
            interval: 20000,
            valueFormatString: "$#k,.",
            tickLength: 15,
            tickColor: "#283040" ,
        },

        axisX:{
            name: 'date',
            includeZero: true,
            gridColor: "#67758d" ,
            gridThickness: 0.5,  
            gridDashType: 'dot',        
            labelFontColor: "#97a4ba",
            lineThickness: 0.5,
            lineColor: "#67758d",
            valueFormatString: "MMM DD",
            tickLength: 15,
            intervalType: "day",
            interval: 7,
            tickColor: "#283040" ,
            minimum: new Date(2019,01,01),
            maximum: new Date(2019,05,16),

            
            /* minimum: new Date(2019, 01, 1),
            maximum: new Date(2019, 04, 30) */
          },
        
        data: [{
            name: "Revenue",      
            type: "line",
            lineColor: "#3a96fd",  
            markerType: "circle",
            markerSize: 6,
            markerBorderColor : "#3794fc", //change color here
            markerBorderThickness: 2, 
            markerColor: "#ffffff",  
            dataPoints: [
                { x: new Date(2019,01,01), y: 50000 },
                { x: new Date(2019,01,08), y: 65000 },
                { x: new Date(2019,01,15), y: 60000, /* indexLabel: "highest",markerColor: "red", markerType: "triangle" */ },
                { x: new Date(2019,01,22), y: 85000 },
                { x: new Date(2019,02,01), y: 115000 },
                { x: new Date(2019,02,08), y: 110000 },
                { x: new Date(2019,02,15), y: 85000 },
                { x: new Date(2019,02,22), y: 75000 },
                { x: new Date(2019,03,01), y: 85000 , /* indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross" */ },
                { x: new Date(2019,03,08), y: 95000 },
                { x: new Date(2019,03,15), y: 119000 },
                { x: new Date(2019,03,22), y: 100000 },
                { x: new Date(2019,04,01), y: 65000 },
                { x: new Date(2019,04,08), y: 60000 },
                { x: new Date(2019,04,15), y: 85000 },
                { x: new Date(2019,04,22), y: 115000 },
                { x: new Date(2019,05,01), y: 110000 },
                { x: new Date(2019,05,15), y: 105000 }
            ]
        },
        {
            name: "Cost",      
            type: "line",
            lineColor: "#9d60fb",
            markerType: "circle",
            markerSize: 6,
            markerBorderColor : "#9d60fb", //change color here
            markerBorderThickness: 2, 
            markerColor: "#ffffff",        
            dataPoints: [
                { x: new Date(2019,01,01), y: 20000 },
                { x: new Date(2019,01,08), y: 15000 },
                { x: new Date(2019,01,15), y: 35000, /* indexLabel: "highest",markerColor: "red", markerType: "triangle" */ },
                { x: new Date(2019,01,22), y: 45000 },
                { x: new Date(2019,02,01), y: 75000 },
                { x: new Date(2019,02,08), y: 80000 },
                { x: new Date(2019,02,15), y: 60000 },
                { x: new Date(2019,02,22), y: 50000 },
                { x: new Date(2019,03,01), y: 58000 , /* indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross" */ },
                { x: new Date(2019,03,08), y: 62000 },
                { x: new Date(2019,03,15), y: 55000 },
                { x: new Date(2019,03,22), y: 60000 },
                { x: new Date(2019,04,01), y: 45000 },
                { x: new Date(2019,04,08), y: 40000 },
                { x: new Date(2019,04,15), y: 60000 },
                { x: new Date(2019,04,22), y: 60000 },
                { x: new Date(2019,05,01), y: 62000 },
                { x: new Date(2019,05,15), y: 80000 }
            ],
        }
    ]
    });
    chart.render();
    
    }