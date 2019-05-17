import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './normalize.css';
import './skeleton.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*
Notes
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––


Table of contents
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
- line charts
- bar charts
- radar charts
- donut charts
- donut charts
- polar charts

(ignore everything else below)
- Anatomy of function
- Line 6 / variables declared
- Step 1
- Step 2
- Step 3
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */

/*
- line charts
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
function chartLineCountry(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Make == "AUDI" || data[i].Make == "BMW" || data[i].Make == "MAY" || data[i].Make == "MB" || data[i].Make == "POR" || data[i].Make == "VW"){DE += 1;}
            else if(data[i].Make == "BUG"){FR += 1;}
            else if(data[i].Make == "ALFA" || data[i].Make == "FERR" || data[i].Make == "FIAT" || data[i].Make == "LAM" || data[i].Make == "MAS"){ITL += 1;}
            else if(data[i].Make == "ACU" || data[i].Make == "HON" || data[i].Make == "INF" || data[i].Make == "LEX" || data[i].Make == "MAZ" || data[i].Make == "MITS" || data[i].Make == "NIS" || data[i].Make == "SCI" || data[i].Make == "SUB" || data[i].Make == "SUZ" || data[i].Make == "TOY"){JPN += 1;}
            else if(data[i].Make == "GEN" || data[i].Make == "HYUN" || data[i].Make == "KIA"){KR += 1;}
            else if(data[i].Make == "SPY"){NL += 1;}
            else if(data[i].Make == "SAA" || data[i].Make == "VOL"){SE += 1;}
            else if(data[i].Make == "AM" || data[i].Make == "BEN" || data[i].Make == "LR" || data[i].Make == "LOT" || data[i].Make == "RR"){UK += 1;}
            else if(data[i].Make == "BUI" || data[i].Make == "CAD" || data[i].Make == "CHEV" || data[i].Make == "CHR" || data[i].Make == "DOD" || data[i].Make == "GMC" || data[i].Make == "HUM" || data[i].Make == "LIN" || data[i].Make == "OLDS" || data[i].Make == "PLY" || data[i].Make == "PON" || data[i].Make == "TSLA"){US += 1;}
        }
        console.log("Germany = ", DE);
        console.log("France = ", FR);
        console.log("Italy = ", ITL);
        console.log("Japan = ", JPN);
        console.log("South Korea = ", KR);
        console.log("Sweden = ", SE);
        console.log("Netherlands = ", NL);
        console.log("United Kingdom = ", UK);
        console.log("United States = ", US);
        var ctx = document.getElementById("chartLineCountry");
        var myChart = new Chart(ctx, {
            type: 'line',
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartLineCountry() */

function chartLineMake(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Make == "ACU"){ACU += 1;}
            else if(data[i].Make == "ALFA"){ALFA += 1;}
            else if(data[i].Make == "AM"){AM += 1;}
            else if(data[i].Make == "AUDI"){AUDI += 1;}
            else if(data[i].Make == "BEN"){BEN += 1;}
            else if(data[i].Make == "BMW"){BMW += 1;}
            else if(data[i].Make == "BUG"){BUG += 1;}
            else if(data[i].Make == "BUI"){BUI += 1;}
            else if(data[i].Make == "CAD"){CAD += 1;}
            else if(data[i].Make == "CHEV"){CHEV += 1;}
            else if(data[i].Make == "CHR"){CHR += 1;}
            else if(data[i].Make == "DOD"){DOD += 1;}
            else if(data[i].Make == "FERR"){FERR += 1;}
            else if(data[i].Make == "FIAT"){FIAT += 1;}
            else if(data[i].Make == "FORD"){FORD += 1;}
            else if(data[i].Make == "GEN"){GEN += 1;}
            else if(data[i].Make == "GMC"){GMC += 1;}
            else if(data[i].Make == "HON"){HON += 1;}
            else if(data[i].Make == "HUM"){HUM += 1;}
            else if(data[i].Make == "HYUN"){HYUN += 1;}
            else if(data[i].Make == "INF"){INF += 1;}
            else if(data[i].Make == "KIA"){KIA += 1;}
            else if(data[i].Make == "LAM"){LAM += 1;}
            else if(data[i].Make == "LR"){LR += 1;}
            else if(data[i].Make == "LEX"){LEX += 1;}
            else if(data[i].Make == "LIN"){LIN += 1;}
            else if(data[i].Make == "LOT"){LOT += 1;}
            else if(data[i].Make == "MAS"){MAS += 1;}
            else if(data[i].Make == "MAY"){MAY += 1;}
            else if(data[i].Make == "MAZ"){MAZ += 1;}
            else if(data[i].Make == "MCLA"){MCLA += 1;}
            else if(data[i].Make == "MB"){MB += 1;}
            else if(data[i].Make == "MITS"){MITS += 1;}
            else if(data[i].Make == "NIS"){NIS += 1;}
            else if(data[i].Make == "OLDS"){OLDS += 1;}
            else if(data[i].Make == "PLY"){PLY += 1;}
            else if(data[i].Make == "PON"){PON += 1;}
            else if(data[i].Make == "POR"){POR += 1;}
            else if(data[i].Make == "RR"){RR += 1;}
            else if(data[i].Make == "SAA"){SAA += 1;}
            else if(data[i].Make == "SCI"){SCI += 1;}
            else if(data[i].Make == "SPY"){SPY += 1;}
            else if(data[i].Make == "SUB"){SUB += 1;}
            else if(data[i].Make == "SUZ"){SUZ += 1;}
            else if(data[i].Make == "TSLA"){TSLA += 1;}
            else if(data[i].Make == "TOY"){TOY += 1;}
            else if(data[i].Make == "VW"){VW += 1;}
            else if(data[i].Make == "VOL"){VOL += 1;}
        }
        console.log("Acura = ", ACU);
        console.log("Alfa Romeo = ", ALFA);
        console.log("Aston Martin = ", AM);
        console.log("Audi = ", AUDI);
        console.log("Bentley = ", BEN);
        console.log("BMW = ", BMW);
        console.log("Bugatti = ", BUG);
        console.log("Buick = ", BUI);
        console.log("Cadillac = ", CAD);
        console.log("Chevrolet = ", CHEV);
        console.log("Chrysler = ", CHR);
        console.log("Dodge = ", DOD);
        console.log("Ferrari = ", FERR);
        console.log("Fiat = ", FIAT);
        console.log("Ford = ", FORD);
        console.log("Genesis = ", GEN);
        console.log("GMC = ", GMC);
        console.log("Honda = ", HON);
        console.log("Hummer = ", HUM);
        console.log("Hyundai = ", HYUN);
        console.log("Infiniti = ", INF);
        console.log("Kia = ", KIA);
        console.log("Lamborghini = ", LAM);
        console.log("Land Rover = ", LR);
        console.log("Lexus = ", LEX);
        console.log("Lincoln = ", LIN);
        console.log("Lotus = ", LOT);
        console.log("Maserati = ", MAS);
        console.log("Maybach = ", MAY);
        console.log("Mazda = ", MAZ);
        console.log("Mclaren = ", MCLA);
        console.log("Meredes-Benz = ", MB);
        console.log("Mitsubishi = ", MITS);
        console.log("Nissan = ", NIS);
        console.log("Oldsmobile = ", OLDS);
        console.log("Plymouth = ", PLY);
        console.log("Pontiac = ", PON);
        console.log("Porsche = ", POR);
        console.log("Rolls Royce = ", RR);
        console.log("Saab = ", SAA);
        console.log("Scion = ", SCI);
        console.log("Spyker = ", SPY);
        console.log("Subaru = ", SUB);
        console.log("Suzuki = ", SUZ);
        console.log("Tesla = ", TSLA);
        console.log("Toyota = ", TOY);
        console.log("Volkswagen = ", VW);
        console.log("Volvo = ", VOL);
        var ctx = document.getElementById("chartLineMake");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Bugatti', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Ferrari', 'Fiat', 'Ford', 'Genesis', 'GMC', 'Honda', 'Hummer', 'Hyundai', 'Infiniti', 'Kia', 'Lamborghini', 'Land Rover', 'Lexus', 'Lincoln', 'Lotus', 'Maserati', 'Maybach', 'Mazda', 'Mclaren', 'Mercedes-Benz', 'Mitsubishi', 'Nissan', 'Oldsmobile', 'Plymouth', 'Pontiac', 'Porsche', 'Rolls-Royce', 'Saab', 'Scion', 'Spyker', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'],
                datasets: [{
                    label: 'Make',
                    data: [ACU, ALFA, AM, AUDI, BEN, BMW, BUG, BUI, CAD, CHEV, CHR, DOD, FERR, FIAT, FORD, GEN, GMC, HON, HUM, HYUN, INF, KIA, LAM, LR, LEX, LIN, LOT, MAS, MAY, MAZ, MCLA, MB, MITS, NIS, OLDS, PLY, PON, POR, RR, SAA, SCI, SPY, SUB, SUZ, TSLA, TOY, VW, VOL],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartLineMake() */

function chartLineYear(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Year >= 1990 && data[i].Year <= 1999){NINETIES += 1;}
            else if(data[i].Year >= 2000 && data[i].Year <= 2009){TTNDS += 1;}
            else if(data[i].Year >= 2010 && data[i].Year <= 2019){TTNDTENS += 1;}
        }
        console.log("1990 - 1999 = ", NINETIES);
        console.log("2000 - 2009 = ", TTNDS);
        console.log("2010 - 2019 = ", TTNDTENS);
        var ctx = document.getElementById("chartLineYear");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1990 - 1999', '2000 - 2009', '2010 - 2019'],
                datasets: [{
                    label: 'Year',
                    data: [NINETIES, TTNDS, TTNDTENS],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartLineYear() */

function chartLineFuelType(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Fuel == "D"){D += 1;}
            else if(data[i].Fuel == "E"){E += 1;}
            else if(data[i].Fuel == "FPCE" || data[i].Fuel == "FRE"){FLEX += 1;}
            else if(data[i].Fuel == "PC" || data[i].Fuel == "PQ"){PREM += 1;}
            else if(data[i].Fuel == "R"){R += 1;}
        }
        console.log("Diesel = ", D);
        console.log("Electric = ", E);
        console.log("Flex fuel = ", FLEX);
        console.log("Premium = ", PREM);
        console.log("Regular = ", R);
        var ctx = document.getElementById("chartLineFuelType");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Diesel', 'Electric', 'Flex-fuel', 'Premium', 'Regular'],
                datasets: [{
                    label: 'Fuel Type',
                    data: [D, E, FLEX, PC, PQ, R],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartLineFuelType() */

function chartLineHorsePower(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].HP >= 0 && data[i].HP <= 99){ZERO += 1;}
            else if(data[i].HP >= 100 && data[i].HP <= 199){ONE += 1;}
            else if(data[i].HP >= 200 && data[i].HP <= 299){TWO += 1;}
            else if(data[i].HP >= 300 && data[i].HP <= 399){THREE += 1;}
            else if(data[i].HP >= 400 && data[i].HP <= 499){FOUR += 1;}
            else if(data[i].HP >= 500 && data[i].HP <= 599){FIVE += 1;}
            else if(data[i].HP >= 600 && data[i].HP <= 699){SIX += 1;}
            else if(data[i].HP >= 700 && data[i].HP <= 799){SEVEN += 1;}
            else if(data[i].HP >= 800 && data[i].HP <= 899){EIGHT += 1;}
            else if(data[i].HP >= 900 && data[i].HP <= 999){NINE += 1;}
            else if(data[i].HP >= 1000){TEN += 1;}
        }
        console.log("0 - 99 HP = ", ZERO);
        console.log("100 - 199 HP = ", ONE);
        console.log("200 - 299 HP = ", TWO);
        console.log("300 - 399 HP = ", THREE);
        console.log("400 - 499 HP = ", FOUR);
        console.log("500 - 599 HP = ", FIVE);
        console.log("600 - 699 HP = ", SIX);
        console.log("700 - 799 HP = ", SEVEN);
        console.log("800 - 899 HP = ", EIGHT);
        console.log("900 - 999 HP = ", NINE);
        console.log("1000+ HP = ", TEN);
        var ctx = document.getElementById("chartLineHorsePower");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['0 - 99', '100 - 199', '200 - 299', '300 - 399', '400 - 499', '500 - 599', '600 - 699', '700 - 799', '800 - 899', '900 - 999', '1000+'],
                datasets: [{
                    label: 'Horsepower',
                    data: [ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartLineHorsePower() */

function chartLineDrivetrain(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].DT == 4){WD += 1;}
            else if(data[i].DT == "A"){AWD += 1;}
            else if(data[i].DT == "F"){FWD += 1;}
            else if(data[i].DT == "R"){RWD += 1;}
        }
        console.log("4WD = ", WD);
        console.log("AWD = ", AWD);
        console.log("FWD = ", FWD);
        console.log("RWD = ", RWD);
        var ctx = document.getElementById("chartLineDrivetrain");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['4WD', 'AWD', 'FWD', 'RWD',],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartLineDrivetrain() */

function chartLineTransmission(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Trans == "AUTO"){AUTO += 1;}
            else if(data[i].Trans == "MAN"){MAN += 1;}
        }
        console.log("Automatic = ", AUTO);
        console.log("Manual = ", MAN);
        var ctx = document.getElementById("chartLineTransmission");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Automatic', 'Manual'],
                datasets: [{
                    label: 'Transmission',
                    data: [AUTO, MAN],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartLineTransmission() */

/*
- bar charts
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
function chartBarCountry(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Make == "AUDI" || data[i].Make == "BMW" || data[i].Make == "MAY" || data[i].Make == "MB" || data[i].Make == "POR" || data[i].Make == "VW"){DE += 1;}
            else if(data[i].Make == "BUG"){FR += 1;}
            else if(data[i].Make == "ALFA" || data[i].Make == "FERR" || data[i].Make == "FIAT" || data[i].Make == "LAM" || data[i].Make == "MAS"){ITL += 1;}
            else if(data[i].Make == "ACU" || data[i].Make == "HON" || data[i].Make == "INF" || data[i].Make == "LEX" || data[i].Make == "MAZ" || data[i].Make == "MITS" || data[i].Make == "NIS" || data[i].Make == "SCI" || data[i].Make == "SUB" || data[i].Make == "SUZ" || data[i].Make == "TOY"){JPN += 1;}
            else if(data[i].Make == "GEN" || data[i].Make == "HYUN" || data[i].Make == "KIA"){KR += 1;}
            else if(data[i].Make == "SPY"){NL += 1;}
            else if(data[i].Make == "SAA" || data[i].Make == "VOL"){SE += 1;}
            else if(data[i].Make == "AM" || data[i].Make == "BEN" || data[i].Make == "LR" || data[i].Make == "LOT" || data[i].Make == "RR"){UK += 1;}
            else if(data[i].Make == "BUI" || data[i].Make == "CAD" || data[i].Make == "CHEV" || data[i].Make == "CHR" || data[i].Make == "DOD" || data[i].Make == "GMC" || data[i].Make == "HUM" || data[i].Make == "LIN" || data[i].Make == "OLDS" || data[i].Make == "PLY" || data[i].Make == "PON" || data[i].Make == "TSLA"){US += 1;}
        }
        console.log("Germany = ", DE);
        console.log("France = ", FR);
        console.log("Italy = ", ITL);
        console.log("Japan = ", JPN);
        console.log("South Korea = ", KR);
        console.log("Sweden = ", SE);
        console.log("Netherlands = ", NL);
        console.log("United Kingdom = ", UK);
        console.log("United States = ", US);
        var ctx = document.getElementById("chartBarCountry");
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartBarCountry() */

function chartBarMake(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Make == "ACU"){ACU += 1;}
            else if(data[i].Make == "ALFA"){ALFA += 1;}
            else if(data[i].Make == "AM"){AM += 1;}
            else if(data[i].Make == "AUDI"){AUDI += 1;}
            else if(data[i].Make == "BEN"){BEN += 1;}
            else if(data[i].Make == "BMW"){BMW += 1;}
            else if(data[i].Make == "BUG"){BUG += 1;}
            else if(data[i].Make == "BUI"){BUI += 1;}
            else if(data[i].Make == "CAD"){CAD += 1;}
            else if(data[i].Make == "CHEV"){CHEV += 1;}
            else if(data[i].Make == "CHR"){CHR += 1;}
            else if(data[i].Make == "DOD"){DOD += 1;}
            else if(data[i].Make == "FERR"){FERR += 1;}
            else if(data[i].Make == "FIAT"){FIAT += 1;}
            else if(data[i].Make == "FORD"){FORD += 1;}
            else if(data[i].Make == "GEN"){GEN += 1;}
            else if(data[i].Make == "GMC"){GMC += 1;}
            else if(data[i].Make == "HON"){HON += 1;}
            else if(data[i].Make == "HUM"){HUM += 1;}
            else if(data[i].Make == "HYUN"){HYUN += 1;}
            else if(data[i].Make == "INF"){INF += 1;}
            else if(data[i].Make == "KIA"){KIA += 1;}
            else if(data[i].Make == "LAM"){LAM += 1;}
            else if(data[i].Make == "LR"){LR += 1;}
            else if(data[i].Make == "LEX"){LEX += 1;}
            else if(data[i].Make == "LIN"){LIN += 1;}
            else if(data[i].Make == "LOT"){LOT += 1;}
            else if(data[i].Make == "MAS"){MAS += 1;}
            else if(data[i].Make == "MAY"){MAY += 1;}
            else if(data[i].Make == "MAZ"){MAZ += 1;}
            else if(data[i].Make == "MCLA"){MCLA += 1;}
            else if(data[i].Make == "MB"){MB += 1;}
            else if(data[i].Make == "MITS"){MITS += 1;}
            else if(data[i].Make == "NIS"){NIS += 1;}
            else if(data[i].Make == "OLDS"){OLDS += 1;}
            else if(data[i].Make == "PLY"){PLY += 1;}
            else if(data[i].Make == "PON"){PON += 1;}
            else if(data[i].Make == "POR"){POR += 1;}
            else if(data[i].Make == "RR"){RR += 1;}
            else if(data[i].Make == "SAA"){SAA += 1;}
            else if(data[i].Make == "SCI"){SCI += 1;}
            else if(data[i].Make == "SPY"){SPY += 1;}
            else if(data[i].Make == "SUB"){SUB += 1;}
            else if(data[i].Make == "SUZ"){SUZ += 1;}
            else if(data[i].Make == "TSLA"){TSLA += 1;}
            else if(data[i].Make == "TOY"){TOY += 1;}
            else if(data[i].Make == "VW"){VW += 1;}
            else if(data[i].Make == "VOL"){VOL += 1;}
        }
        console.log("Acura = ", ACU);
        console.log("Alfa Romeo = ", ALFA);
        console.log("Aston Martin = ", AM);
        console.log("Audi = ", AUDI);
        console.log("Bentley = ", BEN);
        console.log("BMW = ", BMW);
        console.log("Bugatti = ", BUG);
        console.log("Buick = ", BUI);
        console.log("Cadillac = ", CAD);
        console.log("Chevrolet = ", CHEV);
        console.log("Chrysler = ", CHR);
        console.log("Dodge = ", DOD);
        console.log("Ferrari = ", FERR);
        console.log("Fiat = ", FIAT);
        console.log("Ford = ", FORD);
        console.log("Genesis = ", GEN);
        console.log("GMC = ", GMC);
        console.log("Honda = ", HON);
        console.log("Hummer = ", HUM);
        console.log("Hyundai = ", HYUN);
        console.log("Infiniti = ", INF);
        console.log("Kia = ", KIA);
        console.log("Lamborghini = ", LAM);
        console.log("Land Rover = ", LR);
        console.log("Lexus = ", LEX);
        console.log("Lincoln = ", LIN);
        console.log("Lotus = ", LOT);
        console.log("Maserati = ", MAS);
        console.log("Maybach = ", MAY);
        console.log("Mazda = ", MAZ);
        console.log("Mclaren = ", MCLA);
        console.log("Meredes-Benz = ", MB);
        console.log("Mitsubishi = ", MITS);
        console.log("Nissan = ", NIS);
        console.log("Oldsmobile = ", OLDS);
        console.log("Plymouth = ", PLY);
        console.log("Pontiac = ", PON);
        console.log("Porsche = ", POR);
        console.log("Rolls Royce = ", RR);
        console.log("Saab = ", SAA);
        console.log("Scion = ", SCI);
        console.log("Spyker = ", SPY);
        console.log("Subaru = ", SUB);
        console.log("Suzuki = ", SUZ);
        console.log("Tesla = ", TSLA);
        console.log("Toyota = ", TOY);
        console.log("Volkswagen = ", VW);
        console.log("Volvo = ", VOL);
        var ctx = document.getElementById("chartBarMake");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Bugatti', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Ferrari', 'Fiat', 'Ford', 'Genesis', 'GMC', 'Honda', 'Hummer', 'Hyundai', 'Infiniti', 'Kia', 'Lamborghini', 'Land Rover', 'Lexus', 'Lincoln', 'Lotus', 'Maserati', 'Maybach', 'Mazda', 'Mclaren', 'Mercedes-Benz', 'Mitsubishi', 'Nissan', 'Oldsmobile', 'Plymouth', 'Pontiac', 'Porsche', 'Rolls-Royce', 'Saab', 'Scion', 'Spyker', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'],
                datasets: [{
                    label: 'Make',
                    data: [ACU, ALFA, AM, AUDI, BEN, BMW, BUG, BUI, CAD, CHEV, CHR, DOD, FERR, FIAT, FORD, GEN, GMC, HON, HUM, HYUN, INF, KIA, LAM, LR, LEX, LIN, LOT, MAS, MAY, MAZ, MCLA, MB, MITS, NIS, OLDS, PLY, PON, POR, RR, SAA, SCI, SPY, SUB, SUZ, TSLA, TOY, VW, VOL],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartBarMake() */

function chartBarYear(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Year >= 1990 && data[i].Year <= 1999){NINETIES += 1;}
            else if(data[i].Year >= 2000 && data[i].Year <= 2009){TTNDS += 1;}
            else if(data[i].Year >= 2010 && data[i].Year <= 2019){TTNDTENS += 1;}
        }
        console.log("1990 - 1999 = ", NINETIES);
        console.log("2000 - 2009 = ", TTNDS);
        console.log("2010 - 2019 = ", TTNDTENS);
        var ctx = document.getElementById("chartBarYear");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['1990 - 1999', '2000 - 2009', '2010 - 2019'],
                datasets: [{
                    label: 'Year',
                    data: [NINETIES, TTNDS, TTNDTENS],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartBarYear() */

function chartBarFuelType(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Fuel == "D"){D += 1;}
            else if(data[i].Fuel == "E"){E += 1;}
            else if(data[i].Fuel == "FPCE" || data[i].Fuel == "FRE"){FLEX += 1;}
            else if(data[i].Fuel == "PC" || data[i].Fuel == "PQ"){PREM += 1;}
            else if(data[i].Fuel == "R"){R += 1;}
        }
        console.log("Diesel = ", D);
        console.log("Electric = ", E);
        console.log("Flex fuel = ", FLEX);
        console.log("Premium = ", PREM);
        console.log("Regular = ", R);
        var ctx = document.getElementById("chartBarFuelType");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Diesel', 'Electric', 'Flex-fuel', 'Premium', 'Regular'],
                datasets: [{
                    label: 'Fuel Type',
                    data: [D, E, FLEX, PC, PQ, R],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartBarFuelType() */

function chartBarHorsePower(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].HP >= 0 && data[i].HP <= 99){ZERO += 1;}
            else if(data[i].HP >= 100 && data[i].HP <= 199){ONE += 1;}
            else if(data[i].HP >= 200 && data[i].HP <= 299){TWO += 1;}
            else if(data[i].HP >= 300 && data[i].HP <= 399){THREE += 1;}
            else if(data[i].HP >= 400 && data[i].HP <= 499){FOUR += 1;}
            else if(data[i].HP >= 500 && data[i].HP <= 599){FIVE += 1;}
            else if(data[i].HP >= 600 && data[i].HP <= 699){SIX += 1;}
            else if(data[i].HP >= 700 && data[i].HP <= 799){SEVEN += 1;}
            else if(data[i].HP >= 800 && data[i].HP <= 899){EIGHT += 1;}
            else if(data[i].HP >= 900 && data[i].HP <= 999){NINE += 1;}
            else if(data[i].HP >= 1000){TEN += 1;}
        }
        console.log("0 - 99 HP = ", ZERO);
        console.log("100 - 199 HP = ", ONE);
        console.log("200 - 299 HP = ", TWO);
        console.log("300 - 399 HP = ", THREE);
        console.log("400 - 499 HP = ", FOUR);
        console.log("500 - 599 HP = ", FIVE);
        console.log("600 - 699 HP = ", SIX);
        console.log("700 - 799 HP = ", SEVEN);
        console.log("800 - 899 HP = ", EIGHT);
        console.log("900 - 999 HP = ", NINE);
        console.log("1000+ HP = ", TEN);
        var ctx = document.getElementById("chartBarHorsePower");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['0 - 99', '100 - 199', '200 - 299', '300 - 399', '400 - 499', '500 - 599', '600 - 699', '700 - 799', '800 - 899', '900 - 999', '1000+'],
                datasets: [{
                    label: 'Horsepower',
                    data: [ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartBarHorsePower() */

function chartBarDrivetrain(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].DT == 4){WD += 1;}
            else if(data[i].DT == "A"){AWD += 1;}
            else if(data[i].DT == "F"){FWD += 1;}
            else if(data[i].DT == "R"){RWD += 1;}
        }
        console.log("4WD = ", WD);
        console.log("AWD = ", AWD);
        console.log("FWD = ", FWD);
        console.log("RWD = ", RWD);
        var ctx = document.getElementById("chartBarDrivetrain");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['4WD', 'AWD', 'FWD', 'RWD',],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartBarDrivetrain() */

function chartBarTransmission(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Trans == "AUTO"){AUTO += 1;}
            else if(data[i].Trans == "MAN"){MAN += 1;}
        }
        console.log("Automatic = ", AUTO);
        console.log("Manual = ", MAN);
        var ctx = document.getElementById("chartBarTransmission");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Automatic', 'Manual'],
                datasets: [{
                    label: 'Transmission',
                    data: [AUTO, MAN],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartBarTransmission() */

/*
- radar charts
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
function chartRadarCountry(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Make == "AUDI" || data[i].Make == "BMW" || data[i].Make == "MAY" || data[i].Make == "MB" || data[i].Make == "POR" || data[i].Make == "VW"){DE += 1;}
            else if(data[i].Make == "BUG"){FR += 1;}
            else if(data[i].Make == "ALFA" || data[i].Make == "FERR" || data[i].Make == "FIAT" || data[i].Make == "LAM" || data[i].Make == "MAS"){ITL += 1;}
            else if(data[i].Make == "ACU" || data[i].Make == "HON" || data[i].Make == "INF" || data[i].Make == "LEX" || data[i].Make == "MAZ" || data[i].Make == "MITS" || data[i].Make == "NIS" || data[i].Make == "SCI" || data[i].Make == "SUB" || data[i].Make == "SUZ" || data[i].Make == "TOY"){JPN += 1;}
            else if(data[i].Make == "GEN" || data[i].Make == "HYUN" || data[i].Make == "KIA"){KR += 1;}
            else if(data[i].Make == "SPY"){NL += 1;}
            else if(data[i].Make == "SAA" || data[i].Make == "VOL"){SE += 1;}
            else if(data[i].Make == "AM" || data[i].Make == "BEN" || data[i].Make == "LR" || data[i].Make == "LOT" || data[i].Make == "RR"){UK += 1;}
            else if(data[i].Make == "BUI" || data[i].Make == "CAD" || data[i].Make == "CHEV" || data[i].Make == "CHR" || data[i].Make == "DOD" || data[i].Make == "GMC" || data[i].Make == "HUM" || data[i].Make == "LIN" || data[i].Make == "OLDS" || data[i].Make == "PLY" || data[i].Make == "PON" || data[i].Make == "TSLA"){US += 1;}
        }
        console.log("Germany = ", DE);
        console.log("France = ", FR);
        console.log("Italy = ", ITL);
        console.log("Japan = ", JPN);
        console.log("South Korea = ", KR);
        console.log("Sweden = ", SE);
        console.log("Netherlands = ", NL);
        console.log("United Kingdom = ", UK);
        console.log("United States = ", US);
        var ctx = document.getElementById("chartRadarCountry");
        var myChart = new Chart(ctx, {
            type: 'radar',
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartRadarCountry() */

function chartRadarMake(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Make == "ACU"){ACU += 1;}
            else if(data[i].Make == "ALFA"){ALFA += 1;}
            else if(data[i].Make == "AM"){AM += 1;}
            else if(data[i].Make == "AUDI"){AUDI += 1;}
            else if(data[i].Make == "BEN"){BEN += 1;}
            else if(data[i].Make == "BMW"){BMW += 1;}
            else if(data[i].Make == "BUG"){BUG += 1;}
            else if(data[i].Make == "BUI"){BUI += 1;}
            else if(data[i].Make == "CAD"){CAD += 1;}
            else if(data[i].Make == "CHEV"){CHEV += 1;}
            else if(data[i].Make == "CHR"){CHR += 1;}
            else if(data[i].Make == "DOD"){DOD += 1;}
            else if(data[i].Make == "FERR"){FERR += 1;}
            else if(data[i].Make == "FIAT"){FIAT += 1;}
            else if(data[i].Make == "FORD"){FORD += 1;}
            else if(data[i].Make == "GEN"){GEN += 1;}
            else if(data[i].Make == "GMC"){GMC += 1;}
            else if(data[i].Make == "HON"){HON += 1;}
            else if(data[i].Make == "HUM"){HUM += 1;}
            else if(data[i].Make == "HYUN"){HYUN += 1;}
            else if(data[i].Make == "INF"){INF += 1;}
            else if(data[i].Make == "KIA"){KIA += 1;}
            else if(data[i].Make == "LAM"){LAM += 1;}
            else if(data[i].Make == "LR"){LR += 1;}
            else if(data[i].Make == "LEX"){LEX += 1;}
            else if(data[i].Make == "LIN"){LIN += 1;}
            else if(data[i].Make == "LOT"){LOT += 1;}
            else if(data[i].Make == "MAS"){MAS += 1;}
            else if(data[i].Make == "MAY"){MAY += 1;}
            else if(data[i].Make == "MAZ"){MAZ += 1;}
            else if(data[i].Make == "MCLA"){MCLA += 1;}
            else if(data[i].Make == "MB"){MB += 1;}
            else if(data[i].Make == "MITS"){MITS += 1;}
            else if(data[i].Make == "NIS"){NIS += 1;}
            else if(data[i].Make == "OLDS"){OLDS += 1;}
            else if(data[i].Make == "PLY"){PLY += 1;}
            else if(data[i].Make == "PON"){PON += 1;}
            else if(data[i].Make == "POR"){POR += 1;}
            else if(data[i].Make == "RR"){RR += 1;}
            else if(data[i].Make == "SAA"){SAA += 1;}
            else if(data[i].Make == "SCI"){SCI += 1;}
            else if(data[i].Make == "SPY"){SPY += 1;}
            else if(data[i].Make == "SUB"){SUB += 1;}
            else if(data[i].Make == "SUZ"){SUZ += 1;}
            else if(data[i].Make == "TSLA"){TSLA += 1;}
            else if(data[i].Make == "TOY"){TOY += 1;}
            else if(data[i].Make == "VW"){VW += 1;}
            else if(data[i].Make == "VOL"){VOL += 1;}
        }
        console.log("Acura = ", ACU);
        console.log("Alfa Romeo = ", ALFA);
        console.log("Aston Martin = ", AM);
        console.log("Audi = ", AUDI);
        console.log("Bentley = ", BEN);
        console.log("BMW = ", BMW);
        console.log("Bugatti = ", BUG);
        console.log("Buick = ", BUI);
        console.log("Cadillac = ", CAD);
        console.log("Chevrolet = ", CHEV);
        console.log("Chrysler = ", CHR);
        console.log("Dodge = ", DOD);
        console.log("Ferrari = ", FERR);
        console.log("Fiat = ", FIAT);
        console.log("Ford = ", FORD);
        console.log("Genesis = ", GEN);
        console.log("GMC = ", GMC);
        console.log("Honda = ", HON);
        console.log("Hummer = ", HUM);
        console.log("Hyundai = ", HYUN);
        console.log("Infiniti = ", INF);
        console.log("Kia = ", KIA);
        console.log("Lamborghini = ", LAM);
        console.log("Land Rover = ", LR);
        console.log("Lexus = ", LEX);
        console.log("Lincoln = ", LIN);
        console.log("Lotus = ", LOT);
        console.log("Maserati = ", MAS);
        console.log("Maybach = ", MAY);
        console.log("Mazda = ", MAZ);
        console.log("Mclaren = ", MCLA);
        console.log("Meredes-Benz = ", MB);
        console.log("Mitsubishi = ", MITS);
        console.log("Nissan = ", NIS);
        console.log("Oldsmobile = ", OLDS);
        console.log("Plymouth = ", PLY);
        console.log("Pontiac = ", PON);
        console.log("Porsche = ", POR);
        console.log("Rolls Royce = ", RR);
        console.log("Saab = ", SAA);
        console.log("Scion = ", SCI);
        console.log("Spyker = ", SPY);
        console.log("Subaru = ", SUB);
        console.log("Suzuki = ", SUZ);
        console.log("Tesla = ", TSLA);
        console.log("Toyota = ", TOY);
        console.log("Volkswagen = ", VW);
        console.log("Volvo = ", VOL);
        var ctx = document.getElementById("chartRadarMake");
        var myChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Bugatti', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Ferrari', 'Fiat', 'Ford', 'Genesis', 'GMC', 'Honda', 'Hummer', 'Hyundai', 'Infiniti', 'Kia', 'Lamborghini', 'Land Rover', 'Lexus', 'Lincoln', 'Lotus', 'Maserati', 'Maybach', 'Mazda', 'Mclaren', 'Mercedes-Benz', 'Mitsubishi', 'Nissan', 'Oldsmobile', 'Plymouth', 'Pontiac', 'Porsche', 'Rolls-Royce', 'Saab', 'Scion', 'Spyker', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'],
                datasets: [{
                    label: 'Make',
                    data: [ACU, ALFA, AM, AUDI, BEN, BMW, BUG, BUI, CAD, CHEV, CHR, DOD, FERR, FIAT, FORD, GEN, GMC, HON, HUM, HYUN, INF, KIA, LAM, LR, LEX, LIN, LOT, MAS, MAY, MAZ, MCLA, MB, MITS, NIS, OLDS, PLY, PON, POR, RR, SAA, SCI, SPY, SUB, SUZ, TSLA, TOY, VW, VOL],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartRadarMake() */

function chartRadarYear(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Year >= 1990 && data[i].Year <= 1999){NINETIES += 1;}
            else if(data[i].Year >= 2000 && data[i].Year <= 2009){TTNDS += 1;}
            else if(data[i].Year >= 2010 && data[i].Year <= 2019){TTNDTENS += 1;}
        }
        console.log("1990 - 1999 = ", NINETIES);
        console.log("2000 - 2009 = ", TTNDS);
        console.log("2010 - 2019 = ", TTNDTENS);
        var ctx = document.getElementById("chartRadarYear");
        var myChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['1990 - 1999', '2000 - 2009', '2010 - 2019'],
                datasets: [{
                    label: 'Year',
                    data: [NINETIES, TTNDS, TTNDTENS],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartRadarYear() */

function chartRadarFuelType(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Fuel == "D"){D += 1;}
            else if(data[i].Fuel == "E"){E += 1;}
            else if(data[i].Fuel == "FPCE" || data[i].Fuel == "FRE"){FLEX += 1;}
            else if(data[i].Fuel == "PC" || data[i].Fuel == "PQ"){PREM += 1;}
            else if(data[i].Fuel == "R"){R += 1;}
        }
        console.log("Diesel = ", D);
        console.log("Electric = ", E);
        console.log("Flex fuel = ", FLEX);
        console.log("Premium = ", PREM);
        console.log("Regular = ", R);
        var ctx = document.getElementById("chartRadarFuelType");
        var myChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Diesel', 'Electric', 'Flex-fuel', 'Premium', 'Regular'],
                datasets: [{
                    label: 'Fuel Type',
                    data: [D, E, FLEX, PC, PQ, R],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartRadarFuelType() */

function chartRadarHorsePower(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].HP >= 0 && data[i].HP <= 99){ZERO += 1;}
            else if(data[i].HP >= 100 && data[i].HP <= 199){ONE += 1;}
            else if(data[i].HP >= 200 && data[i].HP <= 299){TWO += 1;}
            else if(data[i].HP >= 300 && data[i].HP <= 399){THREE += 1;}
            else if(data[i].HP >= 400 && data[i].HP <= 499){FOUR += 1;}
            else if(data[i].HP >= 500 && data[i].HP <= 599){FIVE += 1;}
            else if(data[i].HP >= 600 && data[i].HP <= 699){SIX += 1;}
            else if(data[i].HP >= 700 && data[i].HP <= 799){SEVEN += 1;}
            else if(data[i].HP >= 800 && data[i].HP <= 899){EIGHT += 1;}
            else if(data[i].HP >= 900 && data[i].HP <= 999){NINE += 1;}
            else if(data[i].HP >= 1000){TEN += 1;}
        }
        console.log("0 - 99 HP = ", ZERO);
        console.log("100 - 199 HP = ", ONE);
        console.log("200 - 299 HP = ", TWO);
        console.log("300 - 399 HP = ", THREE);
        console.log("400 - 499 HP = ", FOUR);
        console.log("500 - 599 HP = ", FIVE);
        console.log("600 - 699 HP = ", SIX);
        console.log("700 - 799 HP = ", SEVEN);
        console.log("800 - 899 HP = ", EIGHT);
        console.log("900 - 999 HP = ", NINE);
        console.log("1000+ HP = ", TEN);
        var ctx = document.getElementById("chartRadarHorsePower");
        var myChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['0 - 99', '100 - 199', '200 - 299', '300 - 399', '400 - 499', '500 - 599', '600 - 699', '700 - 799', '800 - 899', '900 - 999', '1000+'],
                datasets: [{
                    label: 'Horsepower',
                    data: [ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartRadarHorsePower() */

function chartRadarDrivetrain(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].DT == 4){WD += 1;}
            else if(data[i].DT == "A"){AWD += 1;}
            else if(data[i].DT == "F"){FWD += 1;}
            else if(data[i].DT == "R"){RWD += 1;}
        }
        console.log("4WD = ", WD);
        console.log("AWD = ", AWD);
        console.log("FWD = ", FWD);
        console.log("RWD = ", RWD);
        var ctx = document.getElementById("chartRadarDrivetrain");
        var myChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['4WD', 'AWD', 'FWD', 'RWD',],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartRadarDrivetrain() */

function chartRadarTransmission(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Trans == "AUTO"){AUTO += 1;}
            else if(data[i].Trans == "MAN"){MAN += 1;}
        }
        console.log("Automatic = ", AUTO);
        console.log("Manual = ", MAN);
        var ctx = document.getElementById("chartRadarTransmission");
        var myChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Automatic', 'Manual'],
                datasets: [{
                    label: 'Transmission',
                    data: [AUTO, MAN],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartRadarTransmission() */

/*
- donut charts
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
function chartDonutCountry(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Make == "AUDI" || data[i].Make == "BMW" || data[i].Make == "MAY" || data[i].Make == "MB" || data[i].Make == "POR" || data[i].Make == "VW"){DE += 1;}
            else if(data[i].Make == "BUG"){FR += 1;}
            else if(data[i].Make == "ALFA" || data[i].Make == "FERR" || data[i].Make == "FIAT" || data[i].Make == "LAM" || data[i].Make == "MAS"){ITL += 1;}
            else if(data[i].Make == "ACU" || data[i].Make == "HON" || data[i].Make == "INF" || data[i].Make == "LEX" || data[i].Make == "MAZ" || data[i].Make == "MITS" || data[i].Make == "NIS" || data[i].Make == "SCI" || data[i].Make == "SUB" || data[i].Make == "SUZ" || data[i].Make == "TOY"){JPN += 1;}
            else if(data[i].Make == "GEN" || data[i].Make == "HYUN" || data[i].Make == "KIA"){KR += 1;}
            else if(data[i].Make == "SPY"){NL += 1;}
            else if(data[i].Make == "SAA" || data[i].Make == "VOL"){SE += 1;}
            else if(data[i].Make == "AM" || data[i].Make == "BEN" || data[i].Make == "LR" || data[i].Make == "LOT" || data[i].Make == "RR"){UK += 1;}
            else if(data[i].Make == "BUI" || data[i].Make == "CAD" || data[i].Make == "CHEV" || data[i].Make == "CHR" || data[i].Make == "DOD" || data[i].Make == "GMC" || data[i].Make == "HUM" || data[i].Make == "LIN" || data[i].Make == "OLDS" || data[i].Make == "PLY" || data[i].Make == "PON" || data[i].Make == "TSLA"){US += 1;}
        }
        console.log("Germany = ", DE);
        console.log("France = ", FR);
        console.log("Italy = ", ITL);
        console.log("Japan = ", JPN);
        console.log("South Korea = ", KR);
        console.log("Sweden = ", SE);
        console.log("Netherlands = ", NL);
        console.log("United Kingdom = ", UK);
        console.log("United States = ", US);
        var ctx = document.getElementById("chartDonutCountry");
        var myChart = new Chart(ctx, {
            type: 'radar',
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartDonutCountry() */

function chartDonutMake(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Make == "ACU"){ACU += 1;}
            else if(data[i].Make == "ALFA"){ALFA += 1;}
            else if(data[i].Make == "AM"){AM += 1;}
            else if(data[i].Make == "AUDI"){AUDI += 1;}
            else if(data[i].Make == "BEN"){BEN += 1;}
            else if(data[i].Make == "BMW"){BMW += 1;}
            else if(data[i].Make == "BUG"){BUG += 1;}
            else if(data[i].Make == "BUI"){BUI += 1;}
            else if(data[i].Make == "CAD"){CAD += 1;}
            else if(data[i].Make == "CHEV"){CHEV += 1;}
            else if(data[i].Make == "CHR"){CHR += 1;}
            else if(data[i].Make == "DOD"){DOD += 1;}
            else if(data[i].Make == "FERR"){FERR += 1;}
            else if(data[i].Make == "FIAT"){FIAT += 1;}
            else if(data[i].Make == "FORD"){FORD += 1;}
            else if(data[i].Make == "GEN"){GEN += 1;}
            else if(data[i].Make == "GMC"){GMC += 1;}
            else if(data[i].Make == "HON"){HON += 1;}
            else if(data[i].Make == "HUM"){HUM += 1;}
            else if(data[i].Make == "HYUN"){HYUN += 1;}
            else if(data[i].Make == "INF"){INF += 1;}
            else if(data[i].Make == "KIA"){KIA += 1;}
            else if(data[i].Make == "LAM"){LAM += 1;}
            else if(data[i].Make == "LR"){LR += 1;}
            else if(data[i].Make == "LEX"){LEX += 1;}
            else if(data[i].Make == "LIN"){LIN += 1;}
            else if(data[i].Make == "LOT"){LOT += 1;}
            else if(data[i].Make == "MAS"){MAS += 1;}
            else if(data[i].Make == "MAY"){MAY += 1;}
            else if(data[i].Make == "MAZ"){MAZ += 1;}
            else if(data[i].Make == "MCLA"){MCLA += 1;}
            else if(data[i].Make == "MB"){MB += 1;}
            else if(data[i].Make == "MITS"){MITS += 1;}
            else if(data[i].Make == "NIS"){NIS += 1;}
            else if(data[i].Make == "OLDS"){OLDS += 1;}
            else if(data[i].Make == "PLY"){PLY += 1;}
            else if(data[i].Make == "PON"){PON += 1;}
            else if(data[i].Make == "POR"){POR += 1;}
            else if(data[i].Make == "RR"){RR += 1;}
            else if(data[i].Make == "SAA"){SAA += 1;}
            else if(data[i].Make == "SCI"){SCI += 1;}
            else if(data[i].Make == "SPY"){SPY += 1;}
            else if(data[i].Make == "SUB"){SUB += 1;}
            else if(data[i].Make == "SUZ"){SUZ += 1;}
            else if(data[i].Make == "TSLA"){TSLA += 1;}
            else if(data[i].Make == "TOY"){TOY += 1;}
            else if(data[i].Make == "VW"){VW += 1;}
            else if(data[i].Make == "VOL"){VOL += 1;}
        }
        console.log("Acura = ", ACU);
        console.log("Alfa Romeo = ", ALFA);
        console.log("Aston Martin = ", AM);
        console.log("Audi = ", AUDI);
        console.log("Bentley = ", BEN);
        console.log("BMW = ", BMW);
        console.log("Bugatti = ", BUG);
        console.log("Buick = ", BUI);
        console.log("Cadillac = ", CAD);
        console.log("Chevrolet = ", CHEV);
        console.log("Chrysler = ", CHR);
        console.log("Dodge = ", DOD);
        console.log("Ferrari = ", FERR);
        console.log("Fiat = ", FIAT);
        console.log("Ford = ", FORD);
        console.log("Genesis = ", GEN);
        console.log("GMC = ", GMC);
        console.log("Honda = ", HON);
        console.log("Hummer = ", HUM);
        console.log("Hyundai = ", HYUN);
        console.log("Infiniti = ", INF);
        console.log("Kia = ", KIA);
        console.log("Lamborghini = ", LAM);
        console.log("Land Rover = ", LR);
        console.log("Lexus = ", LEX);
        console.log("Lincoln = ", LIN);
        console.log("Lotus = ", LOT);
        console.log("Maserati = ", MAS);
        console.log("Maybach = ", MAY);
        console.log("Mazda = ", MAZ);
        console.log("Mclaren = ", MCLA);
        console.log("Meredes-Benz = ", MB);
        console.log("Mitsubishi = ", MITS);
        console.log("Nissan = ", NIS);
        console.log("Oldsmobile = ", OLDS);
        console.log("Plymouth = ", PLY);
        console.log("Pontiac = ", PON);
        console.log("Porsche = ", POR);
        console.log("Rolls Royce = ", RR);
        console.log("Saab = ", SAA);
        console.log("Scion = ", SCI);
        console.log("Spyker = ", SPY);
        console.log("Subaru = ", SUB);
        console.log("Suzuki = ", SUZ);
        console.log("Tesla = ", TSLA);
        console.log("Toyota = ", TOY);
        console.log("Volkswagen = ", VW);
        console.log("Volvo = ", VOL);
        var ctx = document.getElementById("chartDonutMake");
        var myChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Bugatti', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Ferrari', 'Fiat', 'Ford', 'Genesis', 'GMC', 'Honda', 'Hummer', 'Hyundai', 'Infiniti', 'Kia', 'Lamborghini', 'Land Rover', 'Lexus', 'Lincoln', 'Lotus', 'Maserati', 'Maybach', 'Mazda', 'Mclaren', 'Mercedes-Benz', 'Mitsubishi', 'Nissan', 'Oldsmobile', 'Plymouth', 'Pontiac', 'Porsche', 'Rolls-Royce', 'Saab', 'Scion', 'Spyker', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'],
                datasets: [{
                    label: 'Make',
                    data: [ACU, ALFA, AM, AUDI, BEN, BMW, BUG, BUI, CAD, CHEV, CHR, DOD, FERR, FIAT, FORD, GEN, GMC, HON, HUM, HYUN, INF, KIA, LAM, LR, LEX, LIN, LOT, MAS, MAY, MAZ, MCLA, MB, MITS, NIS, OLDS, PLY, PON, POR, RR, SAA, SCI, SPY, SUB, SUZ, TSLA, TOY, VW, VOL],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartDonutMake() */

function chartDonutYear(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Year >= 1990 && data[i].Year <= 1999){NINETIES += 1;}
            else if(data[i].Year >= 2000 && data[i].Year <= 2009){TTNDS += 1;}
            else if(data[i].Year >= 2010 && data[i].Year <= 2019){TTNDTENS += 1;}
        }
        console.log("1990 - 1999 = ", NINETIES);
        console.log("2000 - 2009 = ", TTNDS);
        console.log("2010 - 2019 = ", TTNDTENS);
        var ctx = document.getElementById("chartDonutYear");
        var myChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['1990 - 1999', '2000 - 2009', '2010 - 2019'],
                datasets: [{
                    label: 'Year',
                    data: [NINETIES, TTNDS, TTNDTENS],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartDonutYear() */

function chartDonutFuelType(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Fuel == "D"){D += 1;}
            else if(data[i].Fuel == "E"){E += 1;}
            else if(data[i].Fuel == "FPCE" || data[i].Fuel == "FRE"){FLEX += 1;}
            else if(data[i].Fuel == "PC" || data[i].Fuel == "PQ"){PREM += 1;}
            else if(data[i].Fuel == "R"){R += 1;}
        }
        console.log("Diesel = ", D);
        console.log("Electric = ", E);
        console.log("Flex fuel = ", FLEX);
        console.log("Premium = ", PREM);
        console.log("Regular = ", R);
        var ctx = document.getElementById("chartDonutFuelType");
        var myChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Diesel', 'Electric', 'Flex-fuel', 'Premium', 'Regular'],
                datasets: [{
                    label: 'Fuel Type',
                    data: [D, E, FLEX, PC, PQ, R],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartDonutFuelType() */

function chartDonutHorsePower(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].HP >= 0 && data[i].HP <= 99){ZERO += 1;}
            else if(data[i].HP >= 100 && data[i].HP <= 199){ONE += 1;}
            else if(data[i].HP >= 200 && data[i].HP <= 299){TWO += 1;}
            else if(data[i].HP >= 300 && data[i].HP <= 399){THREE += 1;}
            else if(data[i].HP >= 400 && data[i].HP <= 499){FOUR += 1;}
            else if(data[i].HP >= 500 && data[i].HP <= 599){FIVE += 1;}
            else if(data[i].HP >= 600 && data[i].HP <= 699){SIX += 1;}
            else if(data[i].HP >= 700 && data[i].HP <= 799){SEVEN += 1;}
            else if(data[i].HP >= 800 && data[i].HP <= 899){EIGHT += 1;}
            else if(data[i].HP >= 900 && data[i].HP <= 999){NINE += 1;}
            else if(data[i].HP >= 1000){TEN += 1;}
        }
        console.log("0 - 99 HP = ", ZERO);
        console.log("100 - 199 HP = ", ONE);
        console.log("200 - 299 HP = ", TWO);
        console.log("300 - 399 HP = ", THREE);
        console.log("400 - 499 HP = ", FOUR);
        console.log("500 - 599 HP = ", FIVE);
        console.log("600 - 699 HP = ", SIX);
        console.log("700 - 799 HP = ", SEVEN);
        console.log("800 - 899 HP = ", EIGHT);
        console.log("900 - 999 HP = ", NINE);
        console.log("1000+ HP = ", TEN);
        var ctx = document.getElementById("chartDonutHorsePower");
        var myChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['0 - 99', '100 - 199', '200 - 299', '300 - 399', '400 - 499', '500 - 599', '600 - 699', '700 - 799', '800 - 899', '900 - 999', '1000+'],
                datasets: [{
                    label: 'Horsepower',
                    data: [ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartDonutHorsePower() */

function chartDonutDrivetrain(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].DT == 4){WD += 1;}
            else if(data[i].DT == "A"){AWD += 1;}
            else if(data[i].DT == "F"){FWD += 1;}
            else if(data[i].DT == "R"){RWD += 1;}
        }
        console.log("4WD = ", WD);
        console.log("AWD = ", AWD);
        console.log("FWD = ", FWD);
        console.log("RWD = ", RWD);
        var ctx = document.getElementById("chartDonutDrivetrain");
        var myChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['4WD', 'AWD', 'FWD', 'RWD',],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartDonutDrivetrain() */

function chartDonutTransmission(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Trans == "AUTO"){AUTO += 1;}
            else if(data[i].Trans == "MAN"){MAN += 1;}
        }
        console.log("Automatic = ", AUTO);
        console.log("Manual = ", MAN);
        var ctx = document.getElementById("chartDonutTransmission");
        var myChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Automatic', 'Manual'],
                datasets: [{
                    label: 'Transmission',
                    data: [AUTO, MAN],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartDonutTransmission() */

/*
- pie charts
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
function chartPieCountry(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Make == "AUDI" || data[i].Make == "BMW" || data[i].Make == "MAY" || data[i].Make == "MB" || data[i].Make == "POR" || data[i].Make == "VW"){DE += 1;}
            else if(data[i].Make == "BUG"){FR += 1;}
            else if(data[i].Make == "ALFA" || data[i].Make == "FERR" || data[i].Make == "FIAT" || data[i].Make == "LAM" || data[i].Make == "MAS"){ITL += 1;}
            else if(data[i].Make == "ACU" || data[i].Make == "HON" || data[i].Make == "INF" || data[i].Make == "LEX" || data[i].Make == "MAZ" || data[i].Make == "MITS" || data[i].Make == "NIS" || data[i].Make == "SCI" || data[i].Make == "SUB" || data[i].Make == "SUZ" || data[i].Make == "TOY"){JPN += 1;}
            else if(data[i].Make == "GEN" || data[i].Make == "HYUN" || data[i].Make == "KIA"){KR += 1;}
            else if(data[i].Make == "SPY"){NL += 1;}
            else if(data[i].Make == "SAA" || data[i].Make == "VOL"){SE += 1;}
            else if(data[i].Make == "AM" || data[i].Make == "BEN" || data[i].Make == "LR" || data[i].Make == "LOT" || data[i].Make == "RR"){UK += 1;}
            else if(data[i].Make == "BUI" || data[i].Make == "CAD" || data[i].Make == "CHEV" || data[i].Make == "CHR" || data[i].Make == "DOD" || data[i].Make == "GMC" || data[i].Make == "HUM" || data[i].Make == "LIN" || data[i].Make == "OLDS" || data[i].Make == "PLY" || data[i].Make == "PON" || data[i].Make == "TSLA"){US += 1;}
        }
        console.log("Germany = ", DE);
        console.log("France = ", FR);
        console.log("Italy = ", ITL);
        console.log("Japan = ", JPN);
        console.log("South Korea = ", KR);
        console.log("Sweden = ", SE);
        console.log("Netherlands = ", NL);
        console.log("United Kingdom = ", UK);
        console.log("United States = ", US);
        var ctx = document.getElementById("chartPieCountry");
        var myChart = new Chart(ctx, {
            type: 'donut',
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartPieCountry() */

function chartPieMake(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Make == "ACU"){ACU += 1;}
            else if(data[i].Make == "ALFA"){ALFA += 1;}
            else if(data[i].Make == "AM"){AM += 1;}
            else if(data[i].Make == "AUDI"){AUDI += 1;}
            else if(data[i].Make == "BEN"){BEN += 1;}
            else if(data[i].Make == "BMW"){BMW += 1;}
            else if(data[i].Make == "BUG"){BUG += 1;}
            else if(data[i].Make == "BUI"){BUI += 1;}
            else if(data[i].Make == "CAD"){CAD += 1;}
            else if(data[i].Make == "CHEV"){CHEV += 1;}
            else if(data[i].Make == "CHR"){CHR += 1;}
            else if(data[i].Make == "DOD"){DOD += 1;}
            else if(data[i].Make == "FERR"){FERR += 1;}
            else if(data[i].Make == "FIAT"){FIAT += 1;}
            else if(data[i].Make == "FORD"){FORD += 1;}
            else if(data[i].Make == "GEN"){GEN += 1;}
            else if(data[i].Make == "GMC"){GMC += 1;}
            else if(data[i].Make == "HON"){HON += 1;}
            else if(data[i].Make == "HUM"){HUM += 1;}
            else if(data[i].Make == "HYUN"){HYUN += 1;}
            else if(data[i].Make == "INF"){INF += 1;}
            else if(data[i].Make == "KIA"){KIA += 1;}
            else if(data[i].Make == "LAM"){LAM += 1;}
            else if(data[i].Make == "LR"){LR += 1;}
            else if(data[i].Make == "LEX"){LEX += 1;}
            else if(data[i].Make == "LIN"){LIN += 1;}
            else if(data[i].Make == "LOT"){LOT += 1;}
            else if(data[i].Make == "MAS"){MAS += 1;}
            else if(data[i].Make == "MAY"){MAY += 1;}
            else if(data[i].Make == "MAZ"){MAZ += 1;}
            else if(data[i].Make == "MCLA"){MCLA += 1;}
            else if(data[i].Make == "MB"){MB += 1;}
            else if(data[i].Make == "MITS"){MITS += 1;}
            else if(data[i].Make == "NIS"){NIS += 1;}
            else if(data[i].Make == "OLDS"){OLDS += 1;}
            else if(data[i].Make == "PLY"){PLY += 1;}
            else if(data[i].Make == "PON"){PON += 1;}
            else if(data[i].Make == "POR"){POR += 1;}
            else if(data[i].Make == "RR"){RR += 1;}
            else if(data[i].Make == "SAA"){SAA += 1;}
            else if(data[i].Make == "SCI"){SCI += 1;}
            else if(data[i].Make == "SPY"){SPY += 1;}
            else if(data[i].Make == "SUB"){SUB += 1;}
            else if(data[i].Make == "SUZ"){SUZ += 1;}
            else if(data[i].Make == "TSLA"){TSLA += 1;}
            else if(data[i].Make == "TOY"){TOY += 1;}
            else if(data[i].Make == "VW"){VW += 1;}
            else if(data[i].Make == "VOL"){VOL += 1;}
        }
        console.log("Acura = ", ACU);
        console.log("Alfa Romeo = ", ALFA);
        console.log("Aston Martin = ", AM);
        console.log("Audi = ", AUDI);
        console.log("Bentley = ", BEN);
        console.log("BMW = ", BMW);
        console.log("Bugatti = ", BUG);
        console.log("Buick = ", BUI);
        console.log("Cadillac = ", CAD);
        console.log("Chevrolet = ", CHEV);
        console.log("Chrysler = ", CHR);
        console.log("Dodge = ", DOD);
        console.log("Ferrari = ", FERR);
        console.log("Fiat = ", FIAT);
        console.log("Ford = ", FORD);
        console.log("Genesis = ", GEN);
        console.log("GMC = ", GMC);
        console.log("Honda = ", HON);
        console.log("Hummer = ", HUM);
        console.log("Hyundai = ", HYUN);
        console.log("Infiniti = ", INF);
        console.log("Kia = ", KIA);
        console.log("Lamborghini = ", LAM);
        console.log("Land Rover = ", LR);
        console.log("Lexus = ", LEX);
        console.log("Lincoln = ", LIN);
        console.log("Lotus = ", LOT);
        console.log("Maserati = ", MAS);
        console.log("Maybach = ", MAY);
        console.log("Mazda = ", MAZ);
        console.log("Mclaren = ", MCLA);
        console.log("Meredes-Benz = ", MB);
        console.log("Mitsubishi = ", MITS);
        console.log("Nissan = ", NIS);
        console.log("Oldsmobile = ", OLDS);
        console.log("Plymouth = ", PLY);
        console.log("Pontiac = ", PON);
        console.log("Porsche = ", POR);
        console.log("Rolls Royce = ", RR);
        console.log("Saab = ", SAA);
        console.log("Scion = ", SCI);
        console.log("Spyker = ", SPY);
        console.log("Subaru = ", SUB);
        console.log("Suzuki = ", SUZ);
        console.log("Tesla = ", TSLA);
        console.log("Toyota = ", TOY);
        console.log("Volkswagen = ", VW);
        console.log("Volvo = ", VOL);
        var ctx = document.getElementById("chartPieMake");
        var myChart = new Chart(ctx, {
            type: 'donut',
            data: {
                labels: ['Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Bugatti', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Ferrari', 'Fiat', 'Ford', 'Genesis', 'GMC', 'Honda', 'Hummer', 'Hyundai', 'Infiniti', 'Kia', 'Lamborghini', 'Land Rover', 'Lexus', 'Lincoln', 'Lotus', 'Maserati', 'Maybach', 'Mazda', 'Mclaren', 'Mercedes-Benz', 'Mitsubishi', 'Nissan', 'Oldsmobile', 'Plymouth', 'Pontiac', 'Porsche', 'Rolls-Royce', 'Saab', 'Scion', 'Spyker', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'],
                datasets: [{
                    label: 'Make',
                    data: [ACU, ALFA, AM, AUDI, BEN, BMW, BUG, BUI, CAD, CHEV, CHR, DOD, FERR, FIAT, FORD, GEN, GMC, HON, HUM, HYUN, INF, KIA, LAM, LR, LEX, LIN, LOT, MAS, MAY, MAZ, MCLA, MB, MITS, NIS, OLDS, PLY, PON, POR, RR, SAA, SCI, SPY, SUB, SUZ, TSLA, TOY, VW, VOL],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartPieMake() */

function chartPieYear(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Year >= 1990 && data[i].Year <= 1999){NINETIES += 1;}
            else if(data[i].Year >= 2000 && data[i].Year <= 2009){TTNDS += 1;}
            else if(data[i].Year >= 2010 && data[i].Year <= 2019){TTNDTENS += 1;}
        }
        console.log("1990 - 1999 = ", NINETIES);
        console.log("2000 - 2009 = ", TTNDS);
        console.log("2010 - 2019 = ", TTNDTENS);
        var ctx = document.getElementById("chartPieYear");
        var myChart = new Chart(ctx, {
            type: 'donut',
            data: {
                labels: ['1990 - 1999', '2000 - 2009', '2010 - 2019'],
                datasets: [{
                    label: 'Year',
                    data: [NINETIES, TTNDS, TTNDTENS],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartPieYear() */

function chartPieFuelType(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Fuel == "D"){D += 1;}
            else if(data[i].Fuel == "E"){E += 1;}
            else if(data[i].Fuel == "FPCE" || data[i].Fuel == "FRE"){FLEX += 1;}
            else if(data[i].Fuel == "PC" || data[i].Fuel == "PQ"){PREM += 1;}
            else if(data[i].Fuel == "R"){R += 1;}
        }
        console.log("Diesel = ", D);
        console.log("Electric = ", E);
        console.log("Flex fuel = ", FLEX);
        console.log("Premium = ", PREM);
        console.log("Regular = ", R);
        var ctx = document.getElementById("chartPieFuelType");
        var myChart = new Chart(ctx, {
            type: 'donut',
            data: {
                labels: ['Diesel', 'Electric', 'Flex-fuel', 'Premium', 'Regular'],
                datasets: [{
                    label: 'Fuel Type',
                    data: [D, E, FLEX, PC, PQ, R],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartPieFuelType() */

function chartPieHorsePower(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].HP >= 0 && data[i].HP <= 99){ZERO += 1;}
            else if(data[i].HP >= 100 && data[i].HP <= 199){ONE += 1;}
            else if(data[i].HP >= 200 && data[i].HP <= 299){TWO += 1;}
            else if(data[i].HP >= 300 && data[i].HP <= 399){THREE += 1;}
            else if(data[i].HP >= 400 && data[i].HP <= 499){FOUR += 1;}
            else if(data[i].HP >= 500 && data[i].HP <= 599){FIVE += 1;}
            else if(data[i].HP >= 600 && data[i].HP <= 699){SIX += 1;}
            else if(data[i].HP >= 700 && data[i].HP <= 799){SEVEN += 1;}
            else if(data[i].HP >= 800 && data[i].HP <= 899){EIGHT += 1;}
            else if(data[i].HP >= 900 && data[i].HP <= 999){NINE += 1;}
            else if(data[i].HP >= 1000){TEN += 1;}
        }
        console.log("0 - 99 HP = ", ZERO);
        console.log("100 - 199 HP = ", ONE);
        console.log("200 - 299 HP = ", TWO);
        console.log("300 - 399 HP = ", THREE);
        console.log("400 - 499 HP = ", FOUR);
        console.log("500 - 599 HP = ", FIVE);
        console.log("600 - 699 HP = ", SIX);
        console.log("700 - 799 HP = ", SEVEN);
        console.log("800 - 899 HP = ", EIGHT);
        console.log("900 - 999 HP = ", NINE);
        console.log("1000+ HP = ", TEN);
        var ctx = document.getElementById("chartPieHorsePower");
        var myChart = new Chart(ctx, {
            type: 'donut',
            data: {
                labels: ['0 - 99', '100 - 199', '200 - 299', '300 - 399', '400 - 499', '500 - 599', '600 - 699', '700 - 799', '800 - 899', '900 - 999', '1000+'],
                datasets: [{
                    label: 'Horsepower',
                    data: [ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartPieHorsePower() */

function chartPieDrivetrain(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].DT == 4){WD += 1;}
            else if(data[i].DT == "A"){AWD += 1;}
            else if(data[i].DT == "F"){FWD += 1;}
            else if(data[i].DT == "R"){RWD += 1;}
        }
        console.log("4WD = ", WD);
        console.log("AWD = ", AWD);
        console.log("FWD = ", FWD);
        console.log("RWD = ", RWD);
        var ctx = document.getElementById("chartPieDrivetrain");
        var myChart = new Chart(ctx, {
            type: 'donut',
            data: {
                labels: ['4WD', 'AWD', 'FWD', 'RWD',],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartPieDrivetrain() */

function chartPieTransmission(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Trans == "AUTO"){AUTO += 1;}
            else if(data[i].Trans == "MAN"){MAN += 1;}
        }
        console.log("Automatic = ", AUTO);
        console.log("Manual = ", MAN);
        var ctx = document.getElementById("chartPieTransmission");
        var myChart = new Chart(ctx, {
            type: 'donut',
            data: {
                labels: ['Automatic', 'Manual'],
                datasets: [{
                    label: 'Transmission',
                    data: [AUTO, MAN],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartPieTransmission() */

/*
- polar charts
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
function chartPolarCountry(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Make == "AUDI" || data[i].Make == "BMW" || data[i].Make == "MAY" || data[i].Make == "MB" || data[i].Make == "POR" || data[i].Make == "VW"){DE += 1;}
            else if(data[i].Make == "BUG"){FR += 1;}
            else if(data[i].Make == "ALFA" || data[i].Make == "FERR" || data[i].Make == "FIAT" || data[i].Make == "LAM" || data[i].Make == "MAS"){ITL += 1;}
            else if(data[i].Make == "ACU" || data[i].Make == "HON" || data[i].Make == "INF" || data[i].Make == "LEX" || data[i].Make == "MAZ" || data[i].Make == "MITS" || data[i].Make == "NIS" || data[i].Make == "SCI" || data[i].Make == "SUB" || data[i].Make == "SUZ" || data[i].Make == "TOY"){JPN += 1;}
            else if(data[i].Make == "GEN" || data[i].Make == "HYUN" || data[i].Make == "KIA"){KR += 1;}
            else if(data[i].Make == "SPY"){NL += 1;}
            else if(data[i].Make == "SAA" || data[i].Make == "VOL"){SE += 1;}
            else if(data[i].Make == "AM" || data[i].Make == "BEN" || data[i].Make == "LR" || data[i].Make == "LOT" || data[i].Make == "RR"){UK += 1;}
            else if(data[i].Make == "BUI" || data[i].Make == "CAD" || data[i].Make == "CHEV" || data[i].Make == "CHR" || data[i].Make == "DOD" || data[i].Make == "GMC" || data[i].Make == "HUM" || data[i].Make == "LIN" || data[i].Make == "OLDS" || data[i].Make == "PLY" || data[i].Make == "PON" || data[i].Make == "TSLA"){US += 1;}
        }
        console.log("Germany = ", DE);
        console.log("France = ", FR);
        console.log("Italy = ", ITL);
        console.log("Japan = ", JPN);
        console.log("South Korea = ", KR);
        console.log("Sweden = ", SE);
        console.log("Netherlands = ", NL);
        console.log("United Kingdom = ", UK);
        console.log("United States = ", US);
        var ctx = document.getElementById("chartPolarCountry");
        var myChart = new Chart(ctx, {
            type: 'polar',
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartPolarCountry() */

function chartPolarMake(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Make == "ACU"){ACU += 1;}
            else if(data[i].Make == "ALFA"){ALFA += 1;}
            else if(data[i].Make == "AM"){AM += 1;}
            else if(data[i].Make == "AUDI"){AUDI += 1;}
            else if(data[i].Make == "BEN"){BEN += 1;}
            else if(data[i].Make == "BMW"){BMW += 1;}
            else if(data[i].Make == "BUG"){BUG += 1;}
            else if(data[i].Make == "BUI"){BUI += 1;}
            else if(data[i].Make == "CAD"){CAD += 1;}
            else if(data[i].Make == "CHEV"){CHEV += 1;}
            else if(data[i].Make == "CHR"){CHR += 1;}
            else if(data[i].Make == "DOD"){DOD += 1;}
            else if(data[i].Make == "FERR"){FERR += 1;}
            else if(data[i].Make == "FIAT"){FIAT += 1;}
            else if(data[i].Make == "FORD"){FORD += 1;}
            else if(data[i].Make == "GEN"){GEN += 1;}
            else if(data[i].Make == "GMC"){GMC += 1;}
            else if(data[i].Make == "HON"){HON += 1;}
            else if(data[i].Make == "HUM"){HUM += 1;}
            else if(data[i].Make == "HYUN"){HYUN += 1;}
            else if(data[i].Make == "INF"){INF += 1;}
            else if(data[i].Make == "KIA"){KIA += 1;}
            else if(data[i].Make == "LAM"){LAM += 1;}
            else if(data[i].Make == "LR"){LR += 1;}
            else if(data[i].Make == "LEX"){LEX += 1;}
            else if(data[i].Make == "LIN"){LIN += 1;}
            else if(data[i].Make == "LOT"){LOT += 1;}
            else if(data[i].Make == "MAS"){MAS += 1;}
            else if(data[i].Make == "MAY"){MAY += 1;}
            else if(data[i].Make == "MAZ"){MAZ += 1;}
            else if(data[i].Make == "MCLA"){MCLA += 1;}
            else if(data[i].Make == "MB"){MB += 1;}
            else if(data[i].Make == "MITS"){MITS += 1;}
            else if(data[i].Make == "NIS"){NIS += 1;}
            else if(data[i].Make == "OLDS"){OLDS += 1;}
            else if(data[i].Make == "PLY"){PLY += 1;}
            else if(data[i].Make == "PON"){PON += 1;}
            else if(data[i].Make == "POR"){POR += 1;}
            else if(data[i].Make == "RR"){RR += 1;}
            else if(data[i].Make == "SAA"){SAA += 1;}
            else if(data[i].Make == "SCI"){SCI += 1;}
            else if(data[i].Make == "SPY"){SPY += 1;}
            else if(data[i].Make == "SUB"){SUB += 1;}
            else if(data[i].Make == "SUZ"){SUZ += 1;}
            else if(data[i].Make == "TSLA"){TSLA += 1;}
            else if(data[i].Make == "TOY"){TOY += 1;}
            else if(data[i].Make == "VW"){VW += 1;}
            else if(data[i].Make == "VOL"){VOL += 1;}
        }
        console.log("Acura = ", ACU);
        console.log("Alfa Romeo = ", ALFA);
        console.log("Aston Martin = ", AM);
        console.log("Audi = ", AUDI);
        console.log("Bentley = ", BEN);
        console.log("BMW = ", BMW);
        console.log("Bugatti = ", BUG);
        console.log("Buick = ", BUI);
        console.log("Cadillac = ", CAD);
        console.log("Chevrolet = ", CHEV);
        console.log("Chrysler = ", CHR);
        console.log("Dodge = ", DOD);
        console.log("Ferrari = ", FERR);
        console.log("Fiat = ", FIAT);
        console.log("Ford = ", FORD);
        console.log("Genesis = ", GEN);
        console.log("GMC = ", GMC);
        console.log("Honda = ", HON);
        console.log("Hummer = ", HUM);
        console.log("Hyundai = ", HYUN);
        console.log("Infiniti = ", INF);
        console.log("Kia = ", KIA);
        console.log("Lamborghini = ", LAM);
        console.log("Land Rover = ", LR);
        console.log("Lexus = ", LEX);
        console.log("Lincoln = ", LIN);
        console.log("Lotus = ", LOT);
        console.log("Maserati = ", MAS);
        console.log("Maybach = ", MAY);
        console.log("Mazda = ", MAZ);
        console.log("Mclaren = ", MCLA);
        console.log("Meredes-Benz = ", MB);
        console.log("Mitsubishi = ", MITS);
        console.log("Nissan = ", NIS);
        console.log("Oldsmobile = ", OLDS);
        console.log("Plymouth = ", PLY);
        console.log("Pontiac = ", PON);
        console.log("Porsche = ", POR);
        console.log("Rolls Royce = ", RR);
        console.log("Saab = ", SAA);
        console.log("Scion = ", SCI);
        console.log("Spyker = ", SPY);
        console.log("Subaru = ", SUB);
        console.log("Suzuki = ", SUZ);
        console.log("Tesla = ", TSLA);
        console.log("Toyota = ", TOY);
        console.log("Volkswagen = ", VW);
        console.log("Volvo = ", VOL);
        var ctx = document.getElementById("chartPolarMake");
        var myChart = new Chart(ctx, {
            type: 'polar',
            data: {
                labels: ['Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Bugatti', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Ferrari', 'Fiat', 'Ford', 'Genesis', 'GMC', 'Honda', 'Hummer', 'Hyundai', 'Infiniti', 'Kia', 'Lamborghini', 'Land Rover', 'Lexus', 'Lincoln', 'Lotus', 'Maserati', 'Maybach', 'Mazda', 'Mclaren', 'Mercedes-Benz', 'Mitsubishi', 'Nissan', 'Oldsmobile', 'Plymouth', 'Pontiac', 'Porsche', 'Rolls-Royce', 'Saab', 'Scion', 'Spyker', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'],
                datasets: [{
                    label: 'Make',
                    data: [ACU, ALFA, AM, AUDI, BEN, BMW, BUG, BUI, CAD, CHEV, CHR, DOD, FERR, FIAT, FORD, GEN, GMC, HON, HUM, HYUN, INF, KIA, LAM, LR, LEX, LIN, LOT, MAS, MAY, MAZ, MCLA, MB, MITS, NIS, OLDS, PLY, PON, POR, RR, SAA, SCI, SPY, SUB, SUZ, TSLA, TOY, VW, VOL],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartPolarMake() */

function chartPolarYear(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Year >= 1990 && data[i].Year <= 1999){NINETIES += 1;}
            else if(data[i].Year >= 2000 && data[i].Year <= 2009){TTNDS += 1;}
            else if(data[i].Year >= 2010 && data[i].Year <= 2019){TTNDTENS += 1;}
        }
        console.log("1990 - 1999 = ", NINETIES);
        console.log("2000 - 2009 = ", TTNDS);
        console.log("2010 - 2019 = ", TTNDTENS);
        var ctx = document.getElementById("chartPolarYear");
        var myChart = new Chart(ctx, {
            type: 'polar',
            data: {
                labels: ['1990 - 1999', '2000 - 2009', '2010 - 2019'],
                datasets: [{
                    label: 'Year',
                    data: [NINETIES, TTNDS, TTNDTENS],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartPolarYear() */

function chartPolarFuelType(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Fuel == "D"){D += 1;}
            else if(data[i].Fuel == "E"){E += 1;}
            else if(data[i].Fuel == "FPCE" || data[i].Fuel == "FRE"){FLEX += 1;}
            else if(data[i].Fuel == "PC" || data[i].Fuel == "PQ"){PREM += 1;}
            else if(data[i].Fuel == "R"){R += 1;}
        }
        console.log("Diesel = ", D);
        console.log("Electric = ", E);
        console.log("Flex fuel = ", FLEX);
        console.log("Premium = ", PREM);
        console.log("Regular = ", R);
        var ctx = document.getElementById("chartPolarFuelType");
        var myChart = new Chart(ctx, {
            type: 'polar',
            data: {
                labels: ['Diesel', 'Electric', 'Flex-fuel', 'Premium', 'Regular'],
                datasets: [{
                    label: 'Fuel Type',
                    data: [D, E, FLEX, PC, PQ, R],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartPolarFuelType() */

function chartPolarHorsePower(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].HP >= 0 && data[i].HP <= 99){ZERO += 1;}
            else if(data[i].HP >= 100 && data[i].HP <= 199){ONE += 1;}
            else if(data[i].HP >= 200 && data[i].HP <= 299){TWO += 1;}
            else if(data[i].HP >= 300 && data[i].HP <= 399){THREE += 1;}
            else if(data[i].HP >= 400 && data[i].HP <= 499){FOUR += 1;}
            else if(data[i].HP >= 500 && data[i].HP <= 599){FIVE += 1;}
            else if(data[i].HP >= 600 && data[i].HP <= 699){SIX += 1;}
            else if(data[i].HP >= 700 && data[i].HP <= 799){SEVEN += 1;}
            else if(data[i].HP >= 800 && data[i].HP <= 899){EIGHT += 1;}
            else if(data[i].HP >= 900 && data[i].HP <= 999){NINE += 1;}
            else if(data[i].HP >= 1000){TEN += 1;}
        }
        console.log("0 - 99 HP = ", ZERO);
        console.log("100 - 199 HP = ", ONE);
        console.log("200 - 299 HP = ", TWO);
        console.log("300 - 399 HP = ", THREE);
        console.log("400 - 499 HP = ", FOUR);
        console.log("500 - 599 HP = ", FIVE);
        console.log("600 - 699 HP = ", SIX);
        console.log("700 - 799 HP = ", SEVEN);
        console.log("800 - 899 HP = ", EIGHT);
        console.log("900 - 999 HP = ", NINE);
        console.log("1000+ HP = ", TEN);
        var ctx = document.getElementById("chartPolarHorsePower");
        var myChart = new Chart(ctx, {
            type: 'polar',
            data: {
                labels: ['0 - 99', '100 - 199', '200 - 299', '300 - 399', '400 - 499', '500 - 599', '600 - 699', '700 - 799', '800 - 899', '900 - 999', '1000+'],
                datasets: [{
                    label: 'Horsepower',
                    data: [ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartPolarHorsePower() */

function chartPolarDrivetrain(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].DT == 4){WD += 1;}
            else if(data[i].DT == "A"){AWD += 1;}
            else if(data[i].DT == "F"){FWD += 1;}
            else if(data[i].DT == "R"){RWD += 1;}
        }
        console.log("4WD = ", WD);
        console.log("AWD = ", AWD);
        console.log("FWD = ", FWD);
        console.log("RWD = ", RWD);
        var ctx = document.getElementById("chartPolarDrivetrain");
        var myChart = new Chart(ctx, {
            type: 'polar',
            data: {
                labels: ['4WD', 'AWD', 'FWD', 'RWD',],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartPolarDrivetrain() */

function chartPolarTransmission(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
        for(var i = 0; i < data.length; i++){
            if(data[i].Trans == "AUTO"){AUTO += 1;}
            else if(data[i].Trans == "MAN"){MAN += 1;}
        }
        console.log("Automatic = ", AUTO);
        console.log("Manual = ", MAN);
        var ctx = document.getElementById("chartPolarTransmission");
        var myChart = new Chart(ctx, {
            type: 'polar',
            data: {
                labels: ['Automatic', 'Manual'],
                datasets: [{
                    label: 'Transmission',
                    data: [AUTO, MAN],
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
        }
    };
    xhttp.open("GET", "js/data.json", true);
    xhttp.send();
} /* End of chartPolarTransmission() */


/*
- ignore everything below
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/*
1       function demoChart() {
2           var xhttp = new XMLHttpRequest();
3           xhttp.onreadystatechange = function() {
4               if(this.readyState == 4 && this.status == 200){
5                   var data = JSON.parse(this.responseText);
                    var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
7                                                                       // ^ All variables declared. ^
                    for(var i = 0; i < data.length; i++){
8                       if(data[i].xx == 4){                            Step 3 changes lines 8 - 10
9                           xx += 1;                                    depending on the boxes ticked
10                      }                                               by end-user.
11                  }
12                  console.log(xx);                                    Step 3 changes this line.
13                  var ctx = document.getElementById("demoChart");
14                  var myChart = new Chart(ctx, {
15                  type: 'bar',                                        Step 1 changes this line.
16                  data: {
17                      labels: ['xx', 'xx', 'xx', 'xx'],               Step 2 changes this line.
18                      datasets: [{
19                          label: 'Drivetrain',                        Step 2 changes this line.
20                          data: [xx, xx, xx, xx],                     Step 3 changes this line.
21                          borderWidth: 1
22                     }]
23                  },
24                  options: {
25                      scales: {
26                          yAxes: [{
27                              ticks: {
28                                  beginAtZero: true
29                              }
30                          }]
31                      }
32                  }
33              });
34          
35              }//else{
36              //alert("Sorry, we didn't find the file requested");}
37              };
38          xhttp.open("GET", "js/data.json", true);
39          xhttp.send();    
40      }
*/

/*
Line 6 / variables declared
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0;

ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0;

NINETIES = 0; TTNDS = 0; TTNDTENS = 0;

D = 0; E = 0; FLEX = 0; PREM = 0; R = 0; 

ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0;

WD = 0; AWD = 0; FWD = 0; RWD = 0;

AUTO = 0; MAN = 0;

Compressed:
var DE = 0; FR = 0; ITL = 0; JPN = 0; KR = 0; NL = 0; SE = 0; UK = 0; US = 0; ACU = 0; ALFA = 0; AM = 0; AUDI = 0; BEN = 0; BMW = 0; BUG = 0; BUI = 0; CAD = 0; CHEV = 0; CHR = 0; DOD = 0; FERR = 0; FIAT = 0; FORD = 0; GEN = 0; GMC = 0; HON = 0; HUM = 0; HYUN = 0; INF = 0; KIA = 0; LAM = 0; LR = 0; LEX = 0; LIN = 0; LOT = 0; MAS = 0; MAY = 0; MAZ = 0; MCLA = 0; MB = 0; MITS = 0; NIS = 0; OLDS = 0; PLY = 0; PON = 0; POR = 0; RR = 0; SAA = 0; SCI = 0; SPY = 0; SUB = 0; SUZ = 0; TSLA = 0; TOY = 0; VW = 0; VOL = 0; NINETIES = 0; TTNDS = 0;TTNDTENS = 0; D = 0; E = 0; FLEX = 0; PREM = 0; R = 0;  ZERO = 0; ONE = 0; TWO = 0; THREE = 0; FOUR = 0; FIVE = 0; SIX = 0; SEVEN = 0; EIGHT = 0; NINE = 0; TEN = 0; WD = 0; AWD = 0; FWD = 0; RWD = 0; AUTO = 0; MAN = 0;
*/

/*
Step 1
User select type of chart.
Changes only line 15 in demoChart().
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
Line chart:
    type: 'line',

Bar chart:
    type: 'bar',

Radar chart:
    type: 'radar',

Donut chart:
    type: 'donut',

Pie chart:
    type: 'pie',

Polar chart:
    type: 'polarArea',
*/


/*
Step 2
User select x-axis.
Changes lines 17 and 18 in demoChart().
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
Country:
    labels: ['Germany', 'France', 'Italy', 'Japan', 'South Korea', 'Netherlands', 'Sweden', 'United Kingdom', 'United States',],
    datasets: [{
        label: 'Country',

Make:
    labels: ['Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Bugatti', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Ferrari', 'Fiat', 'Ford', 'Genesis', 'GMC', 'Honda', 'Hummer', 'Hyundai', 'Infiniti', 'Kia', 'Lamborghini', 'Land Rover', 'Lexus', 'Lincoln', 'Lotus', 'Maserati', 'Maybach', 'Mazda', 'Mclaren', 'Mercedes-Benz', 'Mitsubishi', 'Nissan', 'Oldsmobile', 'Plymouth', 'Pontiac', 'Porsche', 'Rolls-Royce', 'Saab', 'Scion', 'Spyker', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'],
    datasets: [{
        label: 'Make',

Year:
    labels: ['1990 - 1999', '2000 - 2009', '2010 - 2019'],
    datasets: [{
        label: 'Year',

Fuel Type:
    labels: ['Diesel', 'Electric', 'Flex-fuel', 'Premium', 'Regular'],
    datasets: [{
        label: 'Fuel Type',

Horsepower:
    labels: ['0 - 99', '100 - 199', '200 - 299', '300 - 399', '400 - 499', '500 - 599', '600 - 699', '700 - 799', '800 - 899', '900 - 999', '1000+'],
    datasets: [{
        label: 'Horsepower',

Drivetrain:
    labels: ['4WD', 'AWD', 'FWD', 'RWD',],
    datasets: [{
        label: 'Drivetrain',

Transmission:
    labels: ['Automatic', 'Manual'],
    datasets: [{
        label: 'Transmission',
*/


/*
Step 3
User filter data.
Changes lines 8 - 10, 20.
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
If x-axis is Country:
        if(data[i].Make == "AUDI" || data[i].Make == "BMW" || data[i].Make == "MAY" || data[i].Make == "MB" || data[i].Make == "POR" || data[i].Make == "VW"){DE += 1;}
        else if(data[i].Make == "BUG"){FR += 1;}
        else if(data[i].Make == "ALFA" || data[i].Make == "FERR" || data[i].Make == "FIAT" || data[i].Make == "LAM" || data[i].Make == "MAS"){ITL += 1;}
        else if(data[i].Make == "ACU" || data[i].Make == "HON" || data[i].Make == "INF" || data[i].Make == "LEX" || data[i].Make == "MAZ" || data[i].Make == "MITS" || data[i].Make == "NIS" || data[i].Make == "SCI" || data[i].Make == "SUB" || data[i].Make == "SUZ" || data[i].Make == "TOY"){JPN += 1;}
        else if(data[i].Make == "GEN" || data[i].Make == "HYUN" || data[i].Make == "KIA"){KR += 1;}
        else if(data[i].Make == "SPY"){NL += 1;}
        else if(data[i].Make == "SAA" || data[i].Make == "VOL"){SE += 1;}
        else if(data[i].Make == "AM" || data[i].Make == "BEN" || data[i].Make == "LR" || data[i].Make == "LOT" || data[i].Make == "RR"){UK += 1;}
        else if(data[i].Make == "BUI" || data[i].Make == "CAD" || data[i].Make == "CHEV" || data[i].Make == "CHR" || data[i].Make == "DOD" || data[i].Make == "GMC" || data[i].Make == "HUM" || data[i].Make == "LIN" || data[i].Make == "OLDS" || data[i].Make == "PLY" || data[i].Make == "PON" || data[i].Make == "TSLA"){US += 1;}
    }
    console.log("Germany = ", DE);
    console.log("France = ", FR);
    console.log("Italy = ", ITL);
    console.log("Japan = ", JPN);
    console.log("South Korea = ", KR);
    console.log("Sweden = ", SE);
    console.log("Netherlands = ", NL);
    console.log("United Kingdom = ", UK);
    console.log("United States = ", US);

                data: [DE, FR, ITL, JPN, KR, NL, SE, UK, US],

If x-axis is Make:
        if(data[i].Make == "ACU"){ACU += 1;}
        else if(data[i].Make == "ALFA"){ALFA += 1;}
        else if(data[i].Make == "AM"){AM += 1;}
        else if(data[i].Make == "AUDI"){AUDI += 1;}
        else if(data[i].Make == "BEN"){BEN += 1;}
        else if(data[i].Make == "BMW"){BMW += 1;}
        else if(data[i].Make == "BUG"){BUG += 1;}
        else if(data[i].Make == "BUI"){BUI += 1;}
        else if(data[i].Make == "CAD"){CAD += 1;}
        else if(data[i].Make == "CHEV"){CHEV += 1;}
        else if(data[i].Make == "CHR"){CHR += 1;}
        else if(data[i].Make == "DOD"){DOD += 1;}
        else if(data[i].Make == "FERR"){FERR += 1;}
        else if(data[i].Make == "FIAT"){FIAT += 1;}
        else if(data[i].Make == "FORD"){FORD += 1;}
        else if(data[i].Make == "GEN"){GEN += 1;}
        else if(data[i].Make == "GMC"){GMC += 1;}
        else if(data[i].Make == "HON"){HON += 1;}
        else if(data[i].Make == "HUM"){HUM += 1;}
        else if(data[i].Make == "HYUN"){HYUN += 1;}
        else if(data[i].Make == "INF"){INF += 1;}
        else if(data[i].Make == "KIA"){KIA += 1;}
        else if(data[i].Make == "LAM"){LAM += 1;}
        else if(data[i].Make == "LR"){LR += 1;}
        else if(data[i].Make == "LEX"){LEX += 1;}
        else if(data[i].Make == "LIN"){LIN += 1;}
        else if(data[i].Make == "LOT"){LOT += 1;}
        else if(data[i].Make == "MAS"){MAS += 1;}
        else if(data[i].Make == "MAY"){MAY += 1;}
        else if(data[i].Make == "MAZ"){MAZ += 1;}
        else if(data[i].Make == "MCLA"){MCLA += 1;}
        else if(data[i].Make == "MB"){MB += 1;}
        else if(data[i].Make == "MITS"){MITS += 1;}
        else if(data[i].Make == "NIS"){NIS += 1;}
        else if(data[i].Make == "OLDS"){OLDS += 1;}
        else if(data[i].Make == "PLY"){PLY += 1;}
        else if(data[i].Make == "PON"){PON += 1;}
        else if(data[i].Make == "POR"){POR += 1;}
        else if(data[i].Make == "RR"){RR += 1;}
        else if(data[i].Make == "SAA"){SAA += 1;}
        else if(data[i].Make == "SCI"){SCI += 1;}
        else if(data[i].Make == "SPY"){SPY += 1;}
        else if(data[i].Make == "SUB"){SUB += 1;}
        else if(data[i].Make == "SUZ"){SUZ += 1;}
        else if(data[i].Make == "TSLA"){TSLA += 1;}
        else if(data[i].Make == "TOY"){TOY += 1;}
        else if(data[i].Make == "VW"){VW += 1;}
        else if(data[i].Make == "VOL"){VOL += 1;}
    }
    console.log("Acura = ", ACU);
    console.log("Alfa Romeo = ", ALFA);
    console.log("Aston Martin = ", AM);
    console.log("Audi = ", AUDI);
    console.log("Bentley = ", BEN);
    console.log("BMW = ", BMW);
    console.log("Bugatti = ", BUG);
    console.log("Buick = ", BUI);
    console.log("Cadillac = ", CAD);
    console.log("Chevrolet = ", CHEV);
    console.log("Chrysler = ", CHR);
    console.log("Dodge = ", DOD);
    console.log("Ferrari = ", FERR);
    console.log("Fiat = ", FIAT);
    console.log("Ford = ", FORD);
    console.log("Genesis = ", GEN);
    console.log("GMC = ", GMC);
    console.log("Honda = ", HON);
    console.log("Hummer = ", HUM);
    console.log("Hyundai = ", HYUN);
    console.log("Infiniti = ", INF);
    console.log("Kia = ", KIA);
    console.log("Lamborghini = ", LAM);
    console.log("Land Rover = ", LR);
    console.log("Lexus = ", LEX);
    console.log("Lincoln = ", LIN);
    console.log("Lotus = ", LOT);
    console.log("Maserati = ", MAS);
    console.log("Maybach = ", MAY);
    console.log("Mazda = ", MAZ);
    console.log("Mclaren = ", MCLA);
    console.log("Meredes-Benz = ", MB);
    console.log("Mitsubishi = ", MITS);
    console.log("Nissan = ", NIS);
    console.log("Oldsmobile = ", OLDS);
    console.log("Plymouth = ", PLY);
    console.log("Pontiac = ", PON);
    console.log("Porsche = ", POR);
    console.log("Rolls Royce = ", RR);
    console.log("Saab = ", SAA);
    console.log("Scion = ", SCI);
    console.log("Spyker = ", SPY);
    console.log("Subaru = ", SUB);
    console.log("Suzuki = ", SUZ);
    console.log("Tesla = ", TSLA);
    console.log("Toyota = ", TOY);
    console.log("Volkswagen = ", VW);
    console.log("Volvo = ", VOL);

                data: [ACU, ALFA, AM, AUDI, BEN, BMW, BUG, BUI, CAD, CHEV, CHR, DOD, FERR, FIAT, FORD, GEN, GMC, HON, HUM, HYUN, INF, KIA, LAM, LR, LEX, LIN, LOT, MAS, MAY, MAZ, MCLA, MB, MITS, NIS, OLDS, PLY, PON, POR, RR, SAA, SCI, SPY, SUB, SUZ, TSLA, TOY, VW, VOL],

If x-axis is Year:
        if(data[i].Year >= 1990 && data[i].Year <= 1999){NINETIES += 1;}
        else if(data[i].Year >= 2000 && data[i].Year <= 2009){TTNDS += 1;}
        else if(data[i].Year >= 2010 && data[i].Year <= 2019){TTNDTENS += 1;}
    }
    console.log("1990 - 1999 = ", NINETIES);
    console.log("2000 - 2009 = ", TTNDS);
    console.log("2010 - 2019 = ", TTNDTENS);

                data: [NINETIES, TTNDS, TTNDTENS],

If x-axis is Fuel Type:
        if(data[i].Fuel == "D"){D += 1;}
        else if(data[i].Fuel == "E"){E += 1;}
        else if(data[i].Fuel == "FPCE" || data[i].Fuel == "FRE"){FLEX += 1;}
        else if(data[i].Fuel == "PC" || data[i].Fuel == "PQ"){PREM += 1;}
        else if(data[i].Fuel == "R"){R += 1;}
    }
    console.log("Diesel = ", D);
    console.log("Electric = ", E);
    console.log("Flex fuel = ", FLEX);
    console.log("Premium = ", PREM);
    console.log("Regular = ", R);

                data: [D, E, FLEX, PC, PQ, R],

If x-axis is Horsepower:
        if(data[i].HP >= 0 && data[i].HP <= 99){ZERO += 1;}
        else if(data[i].HP >= 100 && data[i].HP <= 199){ONE += 1;}
        else if(data[i].HP >= 200 && data[i].HP <= 299){TWO += 1;}
        else if(data[i].HP >= 300 && data[i].HP <= 399){THREE += 1;}
        else if(data[i].HP >= 400 && data[i].HP <= 499){FOUR += 1;}
        else if(data[i].HP >= 500 && data[i].HP <= 599){FIVE += 1;}
        else if(data[i].HP >= 600 && data[i].HP <= 699){SIX += 1;}
        else if(data[i].HP >= 700 && data[i].HP <= 799){SEVEN += 1;}
        else if(data[i].HP >= 800 && data[i].HP <= 899){EIGHT += 1;}
        else if(data[i].HP >= 900 && data[i].HP <= 999){NINE += 1;}
        else if(data[i].HP >= 1000){TEN += 1;}
    }
    console.log("0 - 99 HP = ", ZERO);
    console.log("100 - 199 HP = ", ONE);
    console.log("200 - 299 HP = ", TWO);
    console.log("300 - 399 HP = ", THREE);
    console.log("400 - 499 HP = ", FOUR);
    console.log("500 - 599 HP = ", FIVE);
    console.log("600 - 699 HP = ", SIX);
    console.log("700 - 799 HP = ", SEVEN);
    console.log("800 - 899 HP = ", EIGHT);
    console.log("900 - 999 HP = ", NINE);
    console.log("1000+ HP = ", TEN);

                data: [ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN],

If x-axis is Drivetrain:
        if(data[i].DT == 4){WD += 1;}
        else if(data[i].DT == "A"){AWD += 1;}
        else if(data[i].DT == "F"){FWD += 1;}
        else if(data[i].DT == "R"){RWD += 1;}
    }
    console.log("4WD = ", WD);
    console.log("AWD = ", AWD);
    console.log("FWD = ", FWD);
    console.log("RWD = ", RWD);

                data: [WD, AWD, FWD, RWD],

If x-axis is Transmission:
        if(data[i].Trans == "AUTO"){AUTO += 1;}
        else if(data[i].Trans == "MAN"){MAN += 1;}
    }
    console.log("Automatic = ", AUTO);
    console.log("Manual = ", MAN);

                data: [AUTO, MAN],
*/

ReactDOM.render(<App />, document.getElementsByTagName('html'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
