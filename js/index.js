let closeNav = document.getElementById('close-nav');
let navList = document.getElementById('nav-list');
let navtoggle = document.getElementById('nav-toggle');
let toggle= document.getElementsByClassName('.toggle');


// navbar start
$('.toggle').on('click', () => {
    $('#nav-list').slideToggle('slow');
    console.log('hi');
});
// navbar end

