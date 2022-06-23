document.getElementById("myName").innerHTML = prompt("Lütfen Adınızı Yazınız");

setInterval(() => {
    let month = new Date().getMonth();
    let day = new Date().getDay();
    let date = new Date().getDate();
    let year = new Date().getFullYear();
    let hourMinute = new Date().toLocaleTimeString();


    switch (month) {
        case 0: month = "Ocak";
            break;
        case 1: month = "Şubat";
            break;
        case 2: month = "Mart";
            break;
        case 3: month = "Nisan";
            break;
        case 4: month = "Mayıs";
            break;
        case 5: month = "Haziran";
            break;
        case 6: month = "Temmuz";
            break;
        case 7: month = "Ağustos";
            break;
        case 8: month = "Eylül";
            break;
        case 9: month = "Ekim";
            break;
        case 10: month = "Kasım";
            break;
        case 11: month = "Aralık";
            break;
    }

    switch (day) {
        case 0: day = "Pazar";
            break;
        case 1: day = "Pazartesi";
            break;
        case 2: day = "Salı";
            break;
        case 3: day = "Çarşamba";
            break;
        case 4: day = "Perşembe";
            break;
        case 5: day = "Cuma";
            break;
        case 6: day = "Cumartesi";
            break;
    }

    let currentTime = `${date} ${month} ${year} ${day} günü saat ${hourMinute}
        <div class="text2 text-center"> 
        <strong>Kodluyoruz Frontend Web Development Patikası</strong>'nın
        Javascript bölümü 1. Ödevindesiniz.
         </div>`;

    document.getElementById("myClock").innerHTML = currentTime;

}, 500);

















