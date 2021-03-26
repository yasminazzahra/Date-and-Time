let day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

function setTime(){
    let tanggal = new Date()
    let jam = tanggal.getHours()
    let menit = tanggal.getMinutes()
    let detik = tanggal.getSeconds()
    let ampm = 'am'
        if(jam == 12){
            ampm = "PM";
        }else if(jam > 12){
            jam = '0' + jam % 12;
            ampm = 'pm'
        }else if(jam == 0){
            jam = 12
        }
    let tgl = tanggal.getDate().toLocaleString('en-US',{minimumIntegerDigits: 2})
    let bulan = tanggal.toLocaleString('en-US', { month : 'long' })
    let tahun = tanggal.getFullYear()

    let setJam = jam + " : " +menit+" : "+detik+" "+ampm
    const setTanggal = day[tanggal.getDay()]+', '+ tgl+" "+bulan+" "+tahun

    document.getElementById('clock').innerHTML = setJam
    document.getElementById('date').innerHTML = setTanggal

    setTimeout('setTime()',1000)
}

setTime()