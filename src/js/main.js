// main.js
document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript loaded successfully!');
    // Tambahkan kode JavaScript Anda di sini
    new kursor({
        type: 1,
        color: 'rgb(236, 106, 52)'
    })
    AOS.init();
    AOS.init({
        delay: 300,
        duration: 1000,
    })
  });