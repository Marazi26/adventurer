document.addEventListener('DOMContentLoaded', function() {
    let aboutCartNames = document.querySelectorAll('.about-cart-name');
    
    aboutCartNames.forEach(name => {
      name.addEventListener('click', function() {
        let info = name.nextElementSibling;
        info.style.display = info.style.display === 'block'  ? 'none' : 'block';

        if(info.style.display === 'block') {
            name.style.backgroundColor === 'red'
        }else if(info.style.display === 'none')  {
            name.style.backgroundColor === 'black'
        }
    });
    });

});


function colorChange(){
    let nav = document.querySelector('nav')
    let scrollValue = window.scrollY

    if(scrollValue > 5){
        nav.style.backgroundColor = "#dddddd"
        nav.style.paddingTop = "1.2rem"
        nav.style.paddingBottom = ".9rem"
    } else{
        nav.style.backgroundColor = "#ffffff"
        nav.style.paddingTop = "2rem"
        nav.style.paddingBottom = "1.2rem"
    }
}

window.addEventListener('scroll', colorChange)