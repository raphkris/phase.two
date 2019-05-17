import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './normalize.css';
import './skeleton.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*
    Comment syntax

    type of graph | specific data used
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */

/*
    Bar graph | Count of how many cars there are from each make, assigns make to their home country
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
function myChart1(){
    /*
        Make the connection to external server
    –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

        /*
            Typical action to be performed when the document is ready
        –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
        var data = JSON.parse(this.responseText);

        /*
            Looping structure that counts how many of each make there are in data.json and assigns that sum to the home country of each make
        –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; /* Germany, France, Italy, Japan, South Korea, Netherlands, Sweden, United Kingdom, United States */
        for(var i = 0; i < data.length; i++){
            if(data[i].Make == "AUDI" || data[i].Make == "BMW" || data[i].Make == "MAY" || data[i].Make == "MB" || data[i].Make == "POR" || data[i].Make == "VW"){
                DE += 1;}
            else if(data[i].Make == "BUG"){
                FR += 1;}
            else if(data[i].Make == "ALFA" || data[i].Make == "FERR" || data[i].Make == "FIAT" || data[i].Make == "LAM" || data[i].Make == "MAS"){
                ITL += 1;}
            else if(data[i].Make == "ACU" || data[i].Make == "HON" || data[i].Make == "INF" || data[i].Make == "LEX" || data[i].Make == "MAZ" || data[i].Make == "MITS" || data[i].Make == "NIS" || data[i].Make == "SCI" || data[i].Make == "SUB" || data[i].Make == "SUZ" || data[i].Make == "TOY"){
                JPN += 1;}
            else if(data[i].Make == "GEN" || data[i].Make == "HYUN" || data[i].Make == "KIA"){
                KR += 1;}
            else if(data[i].Make == "SPY"){
                NL += 1;}
            else if(data[i].Make == "SAA" || data[i].Make == "VOL"){
                SE += 1;}
            else if(data[i].Make == "AM" || data[i].Make == "BEN" || data[i].Make == "LR" || data[i].Make == "LOT" || data[i].Make == "RR"){
                UK += 1;}
            else if(data[i].Make == "BUI" || data[i].Make == "CAD" || data[i].Make == "CHEV" || data[i].Make == "CHR" || data[i].Make == "DOD" || data[i].Make == "GMC" || data[i].Make == "HUM" || data[i].Make == "LIN" || data[i].Make == "OLDS" || data[i].Make == "PLY" || data[i].Make == "PON" || data[i].Make == "TSLA"){
                US += 1;}
        }
        /*
            Log to console to check for errors
        –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
        console.log("Germany = ", DE);
        console.log("France = ", FR);
        console.log("Italy = ", ITL);
        console.log("Japan = ", JPN);
        console.log("South Korea = ", KR);
        console.log("Sweden = ", SE);
        console.log("Netherlands = ", NL);
        console.log("United Kingdom = ", UK);
        console.log("United States = ", US);
        
        /*
            Create chart after looping structure
        –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
        var ctx = document.getElementById("myChart1");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Germany', 'France', 'Italy', 'Japan', 'South Korea', 'Netherlands', 'Sweden', 'United Kingdom', 'United States'],
                datasets: [{
                    label: '# of cars',
                    data: [DE, FR, ITL, JPN, KR, NL, SE, UK, US],
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
        }//else{ /* if(this.readyState != 4 && this.status != 200) display the following message to the end user */
        //alert("Sorry, we didn't find the file requested");}
    };
    
    /*
        Send data to the web page
    –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of myChart1() */

/*
    Bar graph | Count of how many cars have a certain drivetrain
    –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
function myChart2() {
    /*
        Make the connection to external server
    –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    
    if(this.readyState == 4 && this.status == 200){
        
        /*
            Typical action to be performed when the document is ready
        –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
        var data = JSON.parse(this.responseText);

        /*
            Looping structure that counts how many cars have a certain drivetrain
        –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
        var WD = 0; AWD = 0; FWD = 0; RWD = 0; /* 4WD, AWD, FWD, RWD */
        for(var i = 0; i < data.length; i++){
            if(data[i].DT == 4){
                WD += 1;
            }
            else if(data[i].DT == "A"){
                AWD += 1;
            }
            else if(data[i].DT == "F"){
                FWD += 1;
            }
            else if(data[i].DT == "R"){
                RWD += 1;
            }
        }
        /*
            Log to console to check for errors
        –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
        console.log("4WD = ", WD);
        console.log("AWD = ", AWD);
        console.log("FWD = ", FWD);
        console.log("RWD = ", RWD);
        /*
            Create chart after looping structure
        –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
        var ctx = document.getElementById("myChart2");
        var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['4WD', 'AWD', 'FWD', 'RWD'],
            datasets: [{
                label: 'Drivetrain',
                data: [WD, AWD, FWD, RWD],
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
        }//else{ /* if(this.readyState != 4 && this.status != 200) display the following message to the end user */
        //alert("Sorry, we didn't find the file requested");}
    };

    /*
        Send data to the web page
    –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of myChart2() */

ReactDOM.render(<App />, document.getElementsByTagName('html'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
