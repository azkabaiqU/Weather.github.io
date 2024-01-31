document.getElementById("malamIC").draggable = false;
document.getElementById("pagiIC").draggable = false;
document.getElementById("navIC").draggable = false;
document.getElementById("arrowIC").draggable = false;
document.getElementById("weatherIC").draggable = false;

// mode ============================================
// toglle ======
function lightModeFun() {
    // Apa yang akan diubah

    // Mengambil elemen-elemen yang ingin diubah warnanya
    const contentArea = document.getElementById('content'); // area konten
    const boxWeatherArea = document.getElementById('boxWeather'); // area cuaca
    const boxDateArea = document.getElementById('boxDate'); // area tanggal
    const boxs = document.getElementById('boxs'); // mode terang
    const box = document.getElementById('box'); // mode terang
    const maps = document.getElementById('maps'); // mode terang


    const navCityArea = document.getElementById('nav'); // area kota
    const navMode = document.getElementById('navMode'); // mode navigasi
    const toggleArea = document.getElementById('toggleArea'); // area toggle
    const theIcon = document.getElementById('theIcon'); // mode terang

    const img = document.getElementById('pagiIC');
    const imgs = document.getElementById('malamIC');


    


    // Menggunakan classList.toggle untuk beralih antara class 'lightMode'
    contentArea.style.backgroundColor = 'rgba(255, 255, 255, 0.20)';
    boxWeatherArea.style.backgroundColor = 'rgba(255, 255, 255, 0.20)';
    boxDateArea.style.backgroundColor = 'rgba(255, 255, 255, 0.20)';

    navCityArea.style.backgroundColor = 'rgba(255, 255, 255, 0.20)';
    navMode.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    toggleArea.style.backgroundColor = 'rgba(249, 246, 246, 0.4)';
    theIcon.style.backgroundColor = 'rgba(249, 246, 246, 0.4)';
    boxs.style.backgroundColor = '#3673B7';
    box.style.backgroundColor = '#3673B7';
    maps.style.backgroundColor = '#3673B7';

    // transisi

    contentArea.style.transition = '0.1s';
    boxWeatherArea.style.transition = '0.1s';
    boxDateArea.style.transition = '0.1s';
    // navCityArea.style.transition = '0.1s';
    navMode.style.transition = '0.1s';
    toggleArea.style.transition = '0.1s';
    theIcon.style.transition = '0.1s';
    boxs.style.transition = '0.1s';
    box.style.transition = '0.1s';
    maps.style.transition = '0.1s';

    // img 

    img.src = 'img/icon light-n.png';
    imgs.src = 'img/icon dark-f.png';


}
// dark===
function darkModeFun(){
    const contentArea = document.getElementById('content'); // area konten
    const boxWeatherArea = document.getElementById('boxWeather'); // area cuaca
    const boxDateArea = document.getElementById('boxDate'); // area tanggal
    const boxs = document.getElementById('boxs'); // mode terang
    const box = document.getElementById('box'); // mode terang
    const maps = document.getElementById('maps'); // mode terang


    const navCityArea = document.getElementById('nav'); // area kota
    const navMode = document.getElementById('navMode'); // mode navigasi
    const toggleArea = document.getElementById('toggleArea'); // area toggle
    const theIcon = document.getElementById('theIcon'); // mode terang
    const img = document.getElementById('pagiIC');
    const imgs = document.getElementById('malamIC');


    contentArea.style.backgroundColor = 'rgba(0, 0, 0, 0.30';
    boxWeatherArea.style.backgroundColor = 'rgba(0, 0, 0, 0.30';
    boxDateArea.style.backgroundColor = 'rgba(0, 0, 0, 0.30';

    navCityArea.style.backgroundColor = 'rgba(7, 6, 6, 0.3)';
    navMode.style.backgroundColor = 'rgba(0, 0, 0, 0.40)';
    toggleArea.style.backgroundColor = 'rgba(0, 0, 0, 0.40)';
    theIcon.style.backgroundColor = ' rgba(0, 0, 0, 0.30)';
    boxs.style.backgroundColor = 'rgba(0, 0, 0, 0.30)';
    box.style.backgroundColor = 'rgba(0, 0, 0, 0.30)';
    maps.style.backgroundColor = 'rgba(0, 0, 0, 0.30)';

    // img

    imgs.src = 'img/icon dark-n.png';
    img.src = 'img/icon light-f.png';

}

// arrow ========
function slideNav() {
    const nav = document.getElementById("nav");
    const mainContent = document.getElementById("arrow");

    // Jika lebar navigasi bukan 0, artinya sedang terbuka
    if (nav.style.width == "0px") {
        document.getElementById("nav").style.width = "320px";
    } else {
        document.getElementById("nav").style.width = "0px";
    }
}


// city =============================================
// function arrows(){
//     document.getElementById('nav-area').style.backgroundColor = 'yellow' ;
// }
// time =========
function getCityTime(timeZone) {
    return new Date().toLocaleString('en-US', { timeZone: timeZone }
    )
    ;   
}
// data =========

const cityPick = [
    { city: "London", continent: "/Inggris", clock: getCityTime("Europe/London") },
    { city: "Seoul", continent: "/Korea", clock: getCityTime("Asia/Seoul") },
    { city: "Jakarta", continent: "/Indonesia", clock: getCityTime("Asia/Jakarta") },
    { city: "Shanghai", continent: "/Tiongkok", clock: getCityTime("Asia/Shanghai") },
    { city: "Tokyo", continent: "/Japan", clock: getCityTime("Asia/Tokyo") }
];
//  show =========

cityPick.forEach(c => {
    const areaText = document.getElementById('areatext');

    const line = document.createElement('div');
    line.classList.add('line-area-city');

    const cityOf = document.createElement('div');
    cityOf.classList.add('cityOf');

    const cityName = document.createElement('h3');
    cityName.textContent = c.city;

    const benuaName = document.createElement('p');
    benuaName.textContent = c.continent;

    const clockOf = document.createElement('div');
    clockOf.classList.add('clockOf');

    const clockName = document.createElement('p');
    clockName.classList.add('clockName');
    
    // Dapatkan hanya jam dan menit dari waktu
    const timeComponents = new Date(c.clock).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });

    clockName.textContent = timeComponents;

    areaText.appendChild(line);
    line.appendChild(cityOf);
    cityOf.appendChild(cityName);
    cityOf.appendChild(benuaName);
    line.append(clockOf);
    clockOf.appendChild(clockName);
});

