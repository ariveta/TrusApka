var app = document.querySelector('#app')
app.classList.add('app-no')

var look = document.querySelector('#look')
var search = document.querySelector('#search')

var info = document.querySelector('#info')
var advice = document.querySelector('#advice')

var current_icon = document.querySelector('#current-icon')
var city_name = document.querySelector('#city-name')
var weather_description = document.querySelector('#weather-description')
var current_temperature = document.querySelector('#current-temperature')
var wind_speed = document.querySelector('#wind-speed')
var wind_direction = document.querySelector('#wind-direction')
var current_pressure = document.querySelector('#current-pressure')
var current_humidity = document.querySelector('#current-humidity')
var current_clouds = document.querySelector('#current-clouds')

var h1 = document.querySelector('#h1')
var ih1 = document.querySelector('#ih1')
var h1_temp = document.querySelector('#h1-temp')
var h2 = document.querySelector('#h2')
var ih2 = document.querySelector('#ih2')
var h2_temp = document.querySelector('#h2-temp')
var h3 = document.querySelector('#h3')
var ih3 = document.querySelector('#ih3')
var h3_temp = document.querySelector('#h3-temp')
var h4 = document.querySelector('#h4')
var ih4 = document.querySelector('#ih4')
var h4_temp = document.querySelector('#h4-temp')
var h5 = document.querySelector('#h5')
var ih5 = document.querySelector('#ih5')
var h5_temp = document.querySelector('#h5-temp')
var h6 = document.querySelector('#h6')
var ih6 = document.querySelector('#ih6')
var h6_temp = document.querySelector('#h6-temp')
var h7 = document.querySelector('#h7')
var ih7 = document.querySelector('#ih7')
var h7_temp = document.querySelector('#h7-temp')
var h8 = document.querySelector('#h8')
var ih8 = document.querySelector('#ih8')
var h8_temp = document.querySelector('#h8-temp')

var d0 = document.querySelector('#d0')
var id0 = document.querySelector('#id0')
var d0_temp = document.querySelector('#d0-temp')
var d1 = document.querySelector('#d1')
var id1 = document.querySelector('#id1')
var d1_temp = document.querySelector('#d1-temp')
var d2 = document.querySelector('#d2')
var id2 = document.querySelector('#id2')
var d2_temp = document.querySelector('#d2-temp')
var d3 = document.querySelector('#d3')
var id3 = document.querySelector('#id3')
var d3_temp = document.querySelector('#d3-temp')
var d4 = document.querySelector('#d4')
var id4 = document.querySelector('#id4')
var d4_temp = document.querySelector('#d4-temp')

var error = document.querySelector('#error')

//Pobieranie aktualnej daty i godziny
const now = new Date();

var date = document.querySelector('#date')
var day = now.getDate()
if(day<10)
{
    day = `0${day}`
}
var month = now.getMonth()+1
if(month<10)
{
    month = `0${month}`
}
var year = now.getFullYear()
//date.innerHTML = `${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}`
    
var time = document.querySelector('#time')
var hour = now.getHours()
if(hour<10)
{
    hour = `0${hour}`
}
var minutes = now.getMinutes()
if(minutes<10)
{
    minutes = `0${minutes}`
}
//time.innerHTML = `${now.getHours()}:${now.getMinutes()}`

apik = "3045dd712ffe6e702e3245525ac7fa38"

//Zamiana Kelvinów na celsius
function celsius(cel) {
    return(cel - 273).toFixed(1)
}

//Zmiana stopni na kierunek wiatru
function windDirection(x) {
    if(x>0 && x<=22.5 || x>337.5 && x<=360) {
        return "północny";
    } else if(x>22.5 && x<=67.5) {
        return "północno-wschodni";
    } else if(x>67.5 && x<=112.5) {
        return "wschodni";
    } else if(x>112.5 ** x<=157.5) {
        return "południowo-wschodni";
    } else if(x>157.5 && x<= 202.5) {
        return "południowy";
    } else if(x>202.5 && x<=247.5) {
        return "południowo-zachodni";
    } else if(x>247.5 && x<= 292.5) {
        return "zachodni";
    } else if(x>292.5 && x<=337.5) {
        return "północno-zachodni";
    } else {
        return "Brak danych";
    }
}

//Nasłuchiwanie na kliknięcie
search.addEventListener('click', function() {

    //Zerowanie wartości
    info.innerText = ``
    advice.innerHTML = ``


    //Łączenie z API
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+look.value+'&lang=pl&&appid=3045dd712ffe6e702e3245525ac7fa38&units=methric')
    .then(res => res.json())
    .then(data => {

        //Pobranie danych
        var icon = data['list']['0']['weather']['0']['icon']
        var name = data['city']['name']
        var description = data['list']['0']['weather']['0']['description']
        var windSpeed = data['list']['0']['wind']['speed']
        var windDeg = data['list']['0']['wind']['deg']
        var pressure = data['list']['0']['main']['pressure']
        var humidity = data['list']['0']['main']['humidity']
        var clouds = data['list']['0']['clouds']['all']

        var dt0 = data['list']['0']['dt_txt']
        var icon0 = data['list']['0']['weather']['0']['icon']
        var temp0 = data['list']['0']['main']['temp']
        temp0 = celsius(temp0)

        var dt1 = data['list']['1']['dt_txt']
        var icon1 = data['list']['1']['weather']['0']['icon']
        var temp1 = data['list']['1']['main']['temp']
        temp1 = celsius(temp1)
        var dt2 = data['list']['2']['dt_txt']
        var icon2 = data['list']['2']['weather']['0']['icon']
        var temp2 = data['list']['2']['main']['temp']
        temp2 = celsius(temp2)
        var dt3 = data['list']['3']['dt_txt']
        var icon3 = data['list']['3']['weather']['0']['icon']
        var temp3 = data['list']['3']['main']['temp']
        temp3 = celsius(temp3)
        var dt4 = data['list']['4']['dt_txt']
        var icon4 = data['list']['4']['weather']['0']['icon']
        var temp4 = data['list']['4']['main']['temp']
        temp4 = celsius(temp4)
        var dt5 = data['list']['5']['dt_txt']
        var icon5 = data['list']['5']['weather']['0']['icon']
        var temp5 = data['list']['5']['main']['temp']
        temp5 = celsius(temp5)
        var dt6 = data['list']['6']['dt_txt']
        var icon6 = data['list']['6']['weather']['0']['icon']
        var temp6 = data['list']['6']['main']['temp']
        temp6 = celsius(temp6)
        var dt7 = data['list']['7']['dt_txt']
        var icon7 = data['list']['7']['weather']['0']['icon']
        var temp7 = data['list']['7']['main']['temp']
        temp7 = celsius(temp7)
        var dt8 = data['list']['8']['dt_txt']
        var icon8 = data['list']['8']['weather']['0']['icon']
        var temp8 = data['list']['8']['main']['temp']
        temp8 = celsius(temp8)
        var humidity8 = data['list']['8']['main']['humidity']

        var dt16 = data['list']['16']['dt_txt']
        var icon16 = data['list']['16']['weather']['0']['icon']
        var temp16 = data['list']['16']['main']['temp']
        temp16 = celsius(temp16)
        var humidity16 = data['list']['16']['main']['humidity']
        var dt24 = data['list']['24']['dt_txt']
        var icon24 = data['list']['24']['weather']['0']['icon']
        var temp24 = data['list']['24']['main']['temp']
        temp24 = celsius(temp24)
        var humidity24 = data['list']['16']['main']['humidity']
        var dt32 = data['list']['32']['dt_txt']
        var icon32 = data['list']['32']['weather']['0']['icon']
        var temp32 = data['list']['32']['main']['temp']
        temp32 = celsius(temp32)
        var humidity32 = data['list']['16']['main']['humidity']

        //Wyświetlenie danych
        current_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png">`
        city_name.innerHTML = `${name}`
        date.innerHTML = `${year}-${month}-${day}`
        time.innerHTML = `${hour}:${minutes}`
        weather_description.innerHTML = `${description}`
        current_temperature.innerHTML = `${temp0}&#8451`
        wind_speed.innerHTML = `Prędkość wiatru: <span>${windSpeed} km/h</span>`
        wind_direction.innerHTML = `Kierunek wiatru: <span>${windDirection(windDeg)}</span>`
        current_pressure.innerHTML = `Ciśnienie: <span>${pressure} hPa</span>`
        current_humidity.innerHTML = `Wilgotność: <span>${humidity}%</span>`
        current_clouds.innerHTML = `Zachmurzenie: <span>${clouds}%</span>`

        h1.innerHTML = `${dt1}`
        ih1.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon1}.png">`
        h1_temp.innerHTML = `${temp1}&#8451`
        h2.innerHTML = `${dt2}`
        ih2.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon2}.png">`
        h2_temp.innerHTML = `${temp2}&#8451`
        h3.innerHTML = `${dt3}`
        ih3.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon3}.png">`
        h3_temp.innerHTML = `${temp3}&#8451`
        h4.innerHTML = `${dt4}`
        ih4.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon4}.png">`
        h4_temp.innerHTML = `${temp4}&#8451`
        h5.innerHTML = `${dt5}`
        ih5.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon5}.png">`
        h5_temp.innerHTML = `${temp5}&#8451`
        h6.innerHTML = `${dt6}`
        ih6.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon6}.png">`
        h6_temp.innerHTML = `${temp6}&#8451`
        h7.innerHTML = `${dt7}`
        ih7.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon7}.png">`
        h7_temp.innerHTML = `${temp7}&#8451`
        h8.innerHTML = `${dt8}`
        ih8.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon8}.png">`
        h8_temp.innerHTML = `${temp8}&#8451`

        d0.innerHTML = `${dt0}`
        id0.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon0}.png">`
        d0_temp.innerHTML = `${temp0}&#8451`
        d1.innerHTML = `${dt8}`
        id1.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon8}.png">`
        d1_temp.innerHTML = `${temp8}&#8451`
        d2.innerHTML = `${dt16}`
        id2.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon16}.png">`
        d2_temp.innerHTML = `${temp16}&#8451`
        d3.innerHTML = `${dt24}`
        id3.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon24}.png">`
        d3_temp.innerHTML = `${temp24}&#8451`
        d4.innerHTML = `${dt32}`
        id4.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon32}.png">`
        d4_temp.innerHTML = `${temp32}&#8451`

        if(month==1 || month==2 || month==11 || month==12)
        {
            info.innerText = info.innerText+`Aktualnie truskawki zimują.\n`
        }

        if(month==3)
        {
            info.innerText = info.innerText+`To jest dobry czas na pierwsze zabiegi pielęgnacyjne.\n`
            advice.innerHTML = advice.innerHTML+`<a href="abcplantatora.html#ochrona">Jakie zabiegi pielęgnacyjne wykonać wiosną?</a><br>`
            
            if((temp0>=15 || temp8>=15 || temp16>=15 || temp24>=15 || temp32>=15) && (humidity>=80 || humidity16>=80 || humidity24>=80 || humidity32>=80))
            {
                info.innerText = info.innerText+`Możliwość występowania szarej pleśni.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#s">Co to jest szara pleśń?</a><br>`
            }

            if(((temp0>=10 && temp0<=15) || (temp8>=10 && temp8<=15) || (temp16>=10 && temp16<=15) || (temp24>=10 && temp24<=15) || (temp32>=10 && temp32<=15)) && (humidity>=80 || humidity8>=80 || humidity16>=80 || humidity24>=80 || humidity32>=80))
            {
                info.innerText = info.innerText+`Możliwość występowania czerwonej zgnilizny korzeni.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#c">Co to jest czerwona zgnilizna korzeni?</a><br>`
            }

            if(((temp0>=10 && temp0<=12) || (temp8>=10 && temp8<=12) || (temp16>=10 && temp16<=12) || (temp24>=10 && temp24<=12) || (temp32>=10 && temp32<=12)) && ((humidity>=80 && humidity<=90) || (humidity8>=80 && humidity8<=90) || (humidity16>=80 && humidity16<=90) || (humidity24>=80 && humidity24<=90) || (humidity32>=80 && humidity32<=90)))
            {
                info.innerText = info.innerText+`Czas wylęgania roztoczy.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#r">Co to jest roztocz truskawkowiec?</a><br>`
            }

            if((temp0>=18 && temp0<=25) || (temp8>=18 && temp8<=25) || (temp16>=18 && temp16<=25) || (temp24>=18 && temp24<=25) || (temp32>=18 && temp32<=25))
            {
                info.innerText = info.innerText+`Możliwość pojawiania się mszyc.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#m">Co to są mszyce?</a><br>`
            }
        }

        if(month==4)
        {
            info.innerText = info.innerText+`To jest dobry czas na zabiegi pielęgnacyjne.\n`
            info.innerText = info.innerText+`Możliwość pojawienia się pędraków.\n`
            advice.innerHTML = advice.innerHTML+`<a href="abcplantatora.html#ochrona">Jakie zabiegi pielęgnacyjne wykonać wiosną?</a><br>`
            advice.innerHTML = advice.innerHTML+`<a href="katalog.html#p">Co to są pędraki?</a><br>`

            if((temp0>=15 || temp8>=15 || temp16>=15 || temp24>=15 || temp32>=15) && (humidity>=80 || humidity16>=80 || humidity24>=80 || humidity32>=80))
            {
                info.innerText = info.innerText+`Możliwość występowania szarej pleśni.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#s">Co to jest szara pleśń?</a><br>`
            }

            if(((temp0>=10 && temp0<=15) || (temp8>=10 && temp8<=15) || (temp16>=10 && temp16<=15) || (temp24>=10 && temp24<=15) || (temp32>=10 && temp32<=15)) && (humidity>=80 || humidity8>=80 || humidity16>=80 || humidity24>=80 || humidity32>=80))
            {
                info.innerText = info.innerText+`Możliwość występowania czerwonej zgnilizny korzeni.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#c">Co to jest czerwona zgnilizna korzeni?</a><br>`
            }

            if((temp0>=18 && temp0<=25) || (temp8>=18 && temp8<=25) || (temp16>=18 && temp16<=25) || (temp24>=18 && temp24<=25) || (temp32>=18 && temp32<=25))
            {
                info.innerText = info.innerText+`Możliwość pojawiania się mszyc.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.htmlm">Co to są mszyce?</a><br>`
            }

            if((temp0>=12 && temp0<=14) || (temp8>=12 && temp8<=14) || (temp16>=12 && temp16<=14) || (temp24>=12 && temp24<=14) || (temp32>=12 && temp32<=14))
            {
                info.innerText = info.innerText+`Możliwość pojawiania się kwieciaka malinowca.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#k">Co to jest kwieciak malinowiec?</a><br>`
            }
        }

        if(month==5)
        {
            info.innerText = info.innerText+`To jest dobry czas na zabiegi pielęgnacyjne.\n`
            info.innerText = info.innerText+`Rozważ przykrycie plantacji folią w celu przyśpierzenia zbiorów.\n`
            info.innerText = info.innerText+`Możliwość pojawienia się pędraków.\n`
            info.innerText = info.innerText+`Możliwość pojawienia się wciornastka.\n`
            info.innerText = info.innerText+`Możliwość pojawienia się przędziorka chmielowca.\n`
            advice.innerHTML = advice.innerHTML+`<a href="abcplantatora.html">Przykrywanie plantacji folią.</a><br>`
            advice.innerHTML = advice.innerHTML+`<a href="katalog.html#p">Co to są pędraki?</a><br>`
            advice.innerHTML = advice.innerHTML+`<a href="katalog.html#w">Co to jest wciornastek?</a><br>`
            advice.innerHTML = advice.innerHTML+`<a href="katalog.html#p">Co to jest przędziorek chmielowiec?</a><br>`

            if(temp0<=0 || temp1<=0 || temp2<=0 || temp3<=0 || temp4<=0 || temp5<=0 || temp6<=0 || temp7<=0 || temp8<=0)
            {
                info.innerText = info.innerText+`Uwaga przymrozki! Zabezpiecz swoją plantację.\n`
                advice.innerHTML = advice.innerHTML+`<a href="abcplantatora.html">Jak zabezpieczyć plantację przed mrozem?</a><br>`
            }

            if(temp0>=20 && temp8>=20 && temp16>=20 && temp24>=20 && temp32>=20 && humidity<=40 && humidity8<=40 && humidity16<=40 && humidity24<=40 && humidity32<=40)
            {
                info.innerText = info.innerText+`Uwaga na suszę zagrażającą plantacji!\n`
                advice.innerHTML = advice.innerHTML+`<a href="abcplantatora.html#podlewanie">Jak radzić sobie z suszą?</a><br>`
            }

            if((temp0>=15 || temp8>=15 || temp16>=15 || temp24>=15 || temp32>=15) && (humidity>=80 || humidity16>=80 || humidity24>=80 || humidity32>=80))
            {
                info.innerText = info.innerText+`Możliwość występowania szarej pleśni.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#s">Co to jest szara pleśń?</a><br>`
            }

            if((temp0>=15 || temp8>=15 || temp16>=15 || temp24>=15 || temp32>=15) && (humidity>=80 || humidity8>=80 || humidity16>=80 || humidity24>=80 || humidity32>=80))
            {
                info.innerText = info.innerText+`Możliwość pojawiania się mączniaka.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#m">Co to jest mączniak?</a><br>`
            }

            if(((temp0>=10 && temp0<=15) || (temp8>=10 && temp8<=15) || (temp16>=10 && temp16<=15) || (temp24>=10 && temp24<=15) || (temp32>=10 && temp32<=15)) && (humidity>=80 || humidity8>=80 || humidity16>=80 || humidity24>=80 || humidity32>=80))
            {
                info.innerText = info.innerText+`Możliwość występowania czerwonej zgnilizny korzeni.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#c">Co to jest czerwona zgnilizna korzeni?</a><br>`
            }

            if(((temp0>=19 && temp0<=23) || (temp8>=19 && temp8<=23) || (temp16>=19 && temp16<=23) || (temp24>=19 && temp24<=23) || (temp32>=19 && temp32<=23)) && (humidity>=80 || humidity8>=80 || humidity16>=80 || humidity24>=80 || humidity32>=80))
            {
                info.innerText = info.innerText+`Możliwość występowania skórzastej zgnilizny owoców.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#s">Co to jest skórzasta zgnilizna owoców?</a><br>`
            }

            if((temp0>=18 && temp0<=25) || (temp8>=18 && temp8<=25) || (temp16>=18 && temp16<=25) || (temp24>=18 && temp24<=25) || (temp32>=18 && temp32<=25))
            {
                info.innerText = info.innerText+`Możliwość występowania mszyc.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#m">Co to są mszyce?</a><br>`
            }

            if((temp0>=12 && temp0<=14) || (temp8>=12 && temp8<=14) || (temp16>=12 && temp16<=14) || (temp24>=12 && temp24<=14) || (temp32>=12 && temp32<=14))
            {
                info.innerText = info.innerText+`Możliwość występowania kwieciaka malinowca.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#k">Co to jest kwieciak malinowiec?</a><br>`
            }
        }

        if(month==6)
        {
            info.innerText = info.innerText+`Czas na zbiory.\n`
            info.innerText = info.innerText+`Możliwość pojawienia się pędraków.\n`
            info.innerText = info.innerText+`Możliwość pojawienia się wciornastka.\n`
            info.innerText = info.innerText+`Możliwość pojawienia się przędziorka chmielowca.\n`
            advice.innerHTML = advice.innerHTML+`<a href="katalog.html#p">Co to są pędraki?</a><br>`
            advice.innerHTML = advice.innerHTML+`<a href="katalog.html#w">Co to jest wciornastek?</a><br>`
            advice.innerHTML = advice.innerHTML+`<a href="katalog.html#p">Co to jest przędziorek chmielowiec?</a><br>`

            if(temp0>=20 && temp8>=20 && temp16>=20 && temp24>=20 && temp32>=20 && humidity<=40 && humidity8<=40 && humidity16<=40 && humidity24<=40 && humidity32<=40)
            {
                info.innerText = info.innerText+`Uwaga na suszę zagrażającą plantacji!\n`
                advice.innerHTML = advice.innerHTML+`<a href="abcplantatora.html">Jak radzić sobie z suszą?</a><br>`
            }

            if((temp0>=15 || temp8>=15 || temp16>=15 || temp24>=15 || temp32>=15) && (humidity>=80 || humidity16>=80 || humidity24>=80 || humidity32>=80))
            {
                info.innerText = info.innerText+`Możliwość występowania szarej pleśni.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#s">Co to jest szara pleśń?</a><br>`
            }

            if((temp0>=20 || temp8>=20 || temp16>=20 || temp24>=20 || temp32>=20) && (humidity>=80 || humidity8>=80 || humidity16>=80 || humidity24>=80 || humidity32>=80))
            {
                info.innerText = info.innerText+`Możliwość wystąpienia antraknozy.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#a">Co to jest antraknoza?</a><br>`
            }

            if((temp0>=15 || temp8>=15 || temp16>=15 || temp24>=15 || temp32>=15) && (humidity>=80 || humidity8>=80 || humidity16>=80 || humidity24>=80 || humidity32>=80))
            {
                info.innerText = info.innerText+`Możliwość pojawiania się mączniaka.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#m">Co to jest mączniak?</a><br>`
            }

            if(((temp0>=19 && temp0<=23) || (temp8>=19 && temp8<=23) || (temp16>=19 && temp16<=23) || (temp24>=19 && temp24<=23) || (temp32>=19 && temp32<=23)) && (humidity>=80 || humidity8>=80 || humidity16>=80 || humidity24>=80 || humidity32>=80))
            {
                info.innerText = info.innerText+`Możliwość występowania skórzastej zgnilizny owoców.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#s">Co to jest skórzasta zgnilizna owoców?</a><br>`
            }

            if((temp0>=18 && temp0<=25) || (temp8>=18 && temp8<=25) || (temp16>=18 && temp16<=25) || (temp24>=18 && temp24<=25) || (temp32>=18 && temp32<=25))
            {
                info.innerText = info.innerText+`Możliwość występowania mszyc.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#m">Co to są mszyce?</a><br>`
            }
        }

        if(month==7)
        {
            info.innerText = info.innerText+`Czas na zbiory.\n`
            info.innerText = info.innerText+`Możliwość pojawienia się pędraków.\n`
            info.innerText = info.innerText+`Możliwość pojawienia się białej plamistości liści.\n`
            info.innerText = info.innerText+`Możliwość pojawienia się muszki plamoskrzydłowej.\n`
            info.innerText = info.innerText+`Możliwość pojawienia się wciornastka.\n`
            info.innerText = info.innerText+`Możliwość pojawienia się przędziorka chmielowca.\n`
            advice.innerHTML = advice.innerHTML+`<a href="katalog.html#p">Co to są pędraki?</a><br>`
            advice.innerHTML = advice.innerHTML+`<a href="katalog.html#b">Co to jest biała plamistość liści?</a><br>`
            advice.innerHTML = advice.innerHTML+`<a href="katalog.html#m">Co to jest muszka plamoskrzydłowa?</a><br>`
            advice.innerHTML = advice.innerHTML+`<a href="katalog.html#w">Co to jest wciornastek?</a><br>`
            advice.innerHTML = advice.innerHTML+`<a href="katalog.html#p">Co to jest przędziorek chmielowiec?</a><br>`

            if(temp0>=20 && temp8>=20 && temp16>=20 && temp24>=20 && temp32>=20 && humidity<=40 && humidity8<=40 && humidity16<=40 && humidity24<=40 && humidity32<=40)
            {
                info.innerText = info.innerText+`Uwaga na suszę zagrażającą plantacji!\n`
                advice.innerHTML = advice.innerHTML+`<a href="abcplantatora.html">Jak radzić sobie z suszą?</a><br>`
            }

            if((temp0>=15 || temp8>=15 || temp16>=15 || temp24>=15 || temp32>=15) && (humidity>=80 || humidity16>=80 || humidity24>=80 || humidity32>=80))
            {
                info.innerText = info.innerText+`Możliwość występowania szarej pleśni.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#s">Co to jest szara pleśń?</a><br>`
            }

            if((temp0>=20 || temp8>=20 || temp16>=20 || temp24>=20 || temp32>=20) && (humidity>=80 || humidity8>=80 || humidity16>=80 || humidity24>=80 || humidity32>=80))
            {
                info.innerText = info.innerText+`Możliwość wystąpienia antraknozy.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#a">Co to jest antraknoza?</a><br>`
            }

            if((temp0>=20 && temp0<=25) || (temp8>=20 && temp8<=25) || (temp16>=20 && temp16<=25) || (temp24>=20 && temp24<=25) || (temp32>=20 && temp32<=25))
            {
                info.innerText = info.innerText+`Możliwość występowania czerwonej plamistości liści.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#c">Co to jest czerwona plamistość liści?</a><br>`
            }

            if((temp0>=20 || temp8>=20 || temp16>=20 || temp24>=20 || temp32>=20) && (humidity>=80 || humidity16>=80 || humidity24>=80 || humidity32>=80))
            {
                info.innerText = info.innerText+`Możliwość występowania werticiliozy.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#w">Co to jest werticilioza?</a><br>`
            }

            if(((temp0>=19 && temp0<=23) || (temp8>=19 && temp8<=23) || (temp16>=19 && temp16<=23) || (temp24>=19 && temp24<=23) || (temp32>=19 && temp32<=23)) && (humidity>=80 || humidity8>=80 || humidity16>=80 || humidity24>=80 || humidity32>=80))
            {
                info.innerText = info.innerText+`Możliwość występowania skórzastej zgnilizny owoców.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#s">Co to jest skórzasta zgnilizna owoców?</a><br>`
            }

            if((temp0>=18 && temp0<=25) || (temp8>=18 && temp8<=25) || (temp16>=18 && temp16<=25) || (temp24>=18 && temp24<=25) || (temp32>=18 && temp32<=25))
            {
                info.innerText = info.innerText+`Możliwość występowania mszyc.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#m">Co to są mszyce?</a><br>`
            }
        }

        if(month==8)
        {
            info.innerText = info.innerText+`Czas na ostatnie zbiory i pelęgnację po zbiorach.\n`
            info.innerText = info.innerText+`Możliwość pojawienia się pędraków.\n`
            info.innerText = info.innerText+`Możliwość pojawienia się białej plamistości liści.\n`
            info.innerText = info.innerText+`Pora na zwalczanie opuchlaka truskawkowca.\n`
            info.innerText = info.innerText+`Możliwość pojawienia się muszki plamoskrzydłowej.\n`
            info.innerText = info.innerText+`Możliwość pojawienia się przędziorka chmielowca.\n`
            advice.innerHTML = advice.innerHTML+`<a href="abcplantatora.html">Jak zadbać o plantację po zbiorach?</a><br>`
            advice.innerHTML = advice.innerHTML+`<a href="katalog.html#b">Co to jest biała plamistość liści?</a><br>`
            advice.innerHTML = advice.innerHTML+`<a href="katalog.html#o">Co to jest opuchlak truskawkowiec?</a><br>`
            advice.innerHTML = advice.innerHTML+`<a href="katalog.html#m">Co to jest muszka plamoskrzydłowa?</a><br>`
            advice.innerHTML = advice.innerHTML+`<a href="katalog.html#p">Co to jest przędziorek chmielowiec?</a><br>`

            if(temp0>=20 && temp8>=20 && temp16>=20 && temp24>=20 && temp32>=20 && humidity<=40 && humidity8<=40 && humidity16<=40 && humidity24<=40 && humidity32<=40)
            {
                info.innerText = info.innerText+`Uwaga na suszę zagrażającą plantacji!\n`
                advice.innerHTML = advice.innerHTML+`<a href="abcplantatora.html#podlewanie">Jak radzić sobie z suszą?</a><br>`
            }

            if((temp0>=15 || temp8>=15 || temp16>=15 || temp24>=15 || temp32>=15) && (humidity>=80 || humidity16>=80 || humidity24>=80 || humidity32>=80))
            {
                info.innerText = info.innerText+`Możliwość występowania szarej pleśni.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#s">Co to jest szara pleśń?</a><br>`
            }

            if((temp0>=20 || temp8>=20 || temp16>=20 || temp24>=20 || temp32>=20) && (humidity>=80 || humidity8>=80 || humidity16>=80 || humidity24>=80 || humidity32>=80))
            {
                info.innerText = info.innerText+`Możliwość wystąpienia antraknozy.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#a">Co to jest antraknoza?</a><br>`
            }

            if((temp0>=20 && temp0<=25) || (temp8>=20 && temp8<=25) || (temp16>=20 && temp16<=25) || (temp24>=20 && temp24<=25) || (temp32>=20 && temp32<=25))
            {
                info.innerText = info.innerText+`Możliwość występowania czerwonej plamistości liści.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#b">Co to jest czerwona plamistość liści?</a><br>`
            }

            if(((temp0>=19 && temp0<=23) || (temp8>=19 && temp8<=23) || (temp16>=19 && temp16<=23) || (temp24>=19 && temp24<=23) || (temp32>=19 && temp32<=23)) && (humidity>=80 || humidity8>=80 || humidity16>=80 || humidity24>=80 || humidity32>=80))
            {
                info.innerText = info.innerText+`Możliwość występowania skórzastej zgnilizny owoców.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#s">Co to jest skórzasta zgnilizna owoców?</a><br>`
            }
        }

        if(month==9)
        {
            info.innerText = info.innerText+`Czas przygotowywanie sadzonek.\n`
            info.innerText = info.innerText+`Pora na zwalczanie opuchlaka truskawkowca.\n`
            info.innerText = info.innerText+`Możliwość pojawienia się muszki plamoskrzydłowej.\n`
            advice.innerHTML = advice.innerHTML+`<a href="abcplantatora.html#sadzonki">Jak przygotować sadzonki?</a><br>`
            advice.innerHTML = advice.innerHTML+`<a href="katalog.html#o">Co to jest opuchlak truskawkowiec?</a><br>`
            advice.innerHTML = advice.innerHTML+`<a href="katalog.html#m">Co to jest muszka plamoskrzydłowa?</a><br>`

            if((temp0>=15 || temp8>=15 || temp16>=15 || temp24>=15 || temp32>=15) && (humidity>=80 || humidity16>=80 || humidity24>=80 || humidity32>=80))
            {
                info.innerText = info.innerText+`Możliwość występowania szarej pleśni.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#s">Co to jest szara pleśń?</a><br>`
            }

            if(((temp0>=10 && temp0<=15) || (temp8>=10 && temp8<=15) || (temp16>=10 && temp16<=15) || (temp24>=10 && temp24<=15) || (temp32>=10 && temp32<=15)) && (humidity>=80 || humidity8>=80 || humidity16>=80 || humidity24>=80 || humidity32>=80))
            {
                info.innerText = info.innerText+`Możliwość występowania czerwonej zgnilizny korzeni.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#c">Co to jest czerwona zgnilizna korzeni?</a><br>`
            }
        }

        if(month==10)
        {
            info.innerText = info.innerText+`Czas na ostatnie zabiegi pilęgncyjne i przygotowanie plancaji na zimę.\n`
            info.innerText = info.innerText+`Pora na zwalczanie opuchlaka truskawkowca.\n`
            advice.innerHTML = advice.innerHTML+`<a href="abcaplntatora.html">Jak przygotować plantację na zimę?</a><br>`
            advice.innerHTML = advice.innerHTML+`<a href="katalog.html#o">Co to jest opuchlak truskawkowiec?</a><br>`

            if(((temp0>=10 && temp0<=15) || (temp8>=10 && temp8<=15) || (temp16>=10 && temp16<=15) || (temp24>=10 && temp24<=15) || (temp32>=10 && temp32<=15)) && (humidity>=80 || humidity8>=80 || humidity16>=80 || humidity24>=80 || humidity32>=80))
            {
                info.innerText = info.innerText+`Możliwość występowania czerwonej zgnilizny korzeni.\n`
                advice.innerHTML = advice.innerHTML+`<a href="katalog.html#c">Co to jest czerwona zgnilizna korzeni?</a><br>`
            }
        }

        if(month==11)
        {
            info.innerText = info.innerText+`Aktualnie truskawki zimują.\n`
            advice.innerHTML = advice.innerHTML+`<a href="abcplantatora.html">Jak przygotować truskawki na zimę?</a><br>`
        }

        if(advice.innerHTML == "")
        {
            advice.innerHTML = advice.innerHTML+`<a href="abcplantatora.html">Sprawdź ABC plantatora</a><br>`
        }

        app.classList.remove('app-no')
		app.classList.add('app-yes')
    })

    //Obsługa błędnych danych
    .catch(err => {
        if(look.value == "") {
            alert('Wpisz miasto')
        } 
        else {
            location.reload()
            alert('Brak wyników dla '+ look.value)
            //error.innerHTML = `Brak wyników dla `+ look.value
        }
    })
})