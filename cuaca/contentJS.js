// url dan pemagilan dari luar !!!!!!!
const url =
    'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain&timezone=Europe%2FLondon&past_days=92&forecast_days=1';
const urlzs =
    'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain&timezone=Europe%2FLondon&past_days=92&forecast_days=1';

const clockArea = document.getElementById('clock-area');
const boxWeather = document.getElementById('boxWeather');
const box = document.getElementById('box');
const textcloud = document.getElementById('textcloud');

// big clock ============ = = = = = = = = = = = = = = = = = = 

function updateClock() {

    const londonTime = new Date().toLocaleString('en-US', {
        timeZone: 'Europe/London'
    }); //sebenarnya itu saja cukup namun jika ingin lebih lengkap bisa seperti di bawah

    // Mendapatkan jam, menit, dan detik dengan format dua angka ,jika mau saja
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const formattedTime = new Date(londonTime).toLocaleTimeString('en-US', options);

    // Menampilkan waktu di elemen dengan id "clock"
    document.getElementById('clock').textContent = formattedTime;
}

// Memperbarui waktu setiap detik
setInterval(updateClock, 1000);
// Memanggil fungsi pertama kali untuk menampilkan waktu awal
updateClock();

// weather data ==========  = = = = = = = = = = = = = = = = = = 
fetch(url).then(response => response.json()).then(data => {

    const weatherNow = document.createElement('div')
    weatherNow.classList.add('weather-c-now')

    const textWeatherNow = document.createElement('p')
    textWeatherNow.textContent = data.current.apparent_temperature

    boxWeather.append(weatherNow)
    weatherNow.append(textWeatherNow)
})

// cuaca, dan content(relative,interval) ==========  = = = = = = = = = = = = = = = = = = 

fetch(urlzs).then(response => response.json()).then(data => {
    const interval = document.createElement('p')
    interval.textContent = data.current.interval

    const cloud = document.createElement('p')
    cloud.textContent = data.current.relative_humidity_2m;
    
    box.append(interval)
    boxs.append(cloud)
})

// tanggal besar ============  = = = = = = = = = = = = = = = = = = 

function getTodayDateTime() {
    // Mendapatkan tanggal saat ini
    const today = new Date();

    // Array dengan nama hari
    const daysOfWeek = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

    // Mendapatkan indeks hari (0 untuk Minggu, 1 untuk Senin, ..., 6 untuk Sabtu)
    const dayIndex = today.getDay();

    // Mendapatkan nama hari menggunakan indeks
    const dayName = daysOfWeek[dayIndex];

    // Mendapatkan tanggal, bulan, dan tahun
    const date = today.getDate();
    const month = today.toLocaleDateString('id-ID', {
        month: 'long'
    });
    const year = today.getFullYear();

    // Menampilkan informasi hari dan tanggal di elemen dengan id "datetime"
    // document.getElementById('datetime').textContent = `Hari ini: ${dayName}, ${date} ${month} ${year}`;
    document.getElementById('date').textContent = `${date}`;
    document.getElementById('moon').textContent = `${month}`;
}
// Memanggil fungsi untuk menampilkan informasi hari dan tanggal saat halaman dimuat
getTodayDateTime();

// spash screenn dan loading =========  = = = = = = = = = = = = = = = = = = 

document.addEventListener("DOMContentLoaded", function () {
    
    document.body.classList.add("loading");

    // Simulate a delay (you can replace this with actual loading logic)
    setTimeout(function () {
        // hilangkan saat tidak digunakan
        document.getElementById("splash-screen").style.display = "none";

        
        document.getElementById("main-content").style.display = "block";

        // Remove 'loading' class from the body
        document.body.classList.remove("loading");
    }, 3000); // 3s
});

