// let days = document.getElementById("days") ;
// let hours = document.getElementById("hours") ;
// let min = document.getElementById("min") ;
// let sec = document.getElementById("sec") ;




// // Converting Milliseconds into days hours min and seconds. through calculation.

// function timer() {
//     setInterval(()=> {

// let till = new Date("jan 30, 2023 12:00:00").getTime() ;
// let from = new Date().getTime() ;
// let diff = till - from ;

// let rdays = Math.floor(diff / (1000 * 60 * 60 * 24)) ;
// let rhours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) ;
// let rmin = Math.floor((diff % (1000 * 60 * 60 )) / (1000 * 60));
// let rsec = Math.floor((diff % (1000 * 60 )) / 1000) ;

//     days.innerHTML = rdays ;
//     hours.innerHTML = rhours ;
//     min.innerHTML = rmin ;
//     sec.innerHTML = rsec ;
// },1000) ;
// } ;

// timer() ;


//🔸2nd Method to solve the same problem


const timer = () => {
  const till = new Date("jan 30, 2023 11:00:00").getTime() ;
  const from = new Date().getTime() ;
  const diff = till - from ;

  //how the time works :
 const sec = 1000 ;
 const min = sec * 60 ;
 const hour = min * 60 ;
 const day = hour * 24 ;

 //calculating the time conversion from milliseconds to actual time :
 const rday = Math.floor(diff / day) ;
 const rhour = Math.floor((diff % day) / hour) ; 
 const rmin = Math.floor((diff % hour) / min) ;
 const rsec = Math.floor((diff % min) / sec) ;

  console.log(rday, rhour, rmin, rsec) ;
 //assign the results to the actual element: 
 document.getElementById('days').innerHTML = rday ;
 document.getElementById('hours').innerHTML = rhour ;
 document.getElementById('min').innerHTML = rmin ;
 document.getElementById('sec').innerHTML = rsec ;

} ;

setInterval(timer, 1000) ;