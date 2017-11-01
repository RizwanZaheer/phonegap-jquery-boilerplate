/* Custom Javascript for this PhoneGap APP */
$(document).ready(function() {
  console.log("ready!");
  // $("#tree").click(() => {
  //   alert("tree");
  // });
  // $("#gallery").click(() => {
  //   alert("gallery");
  // });
  // $("#calender").click(() => {
  //   alert("calender");
  // });
});

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */
          alert('left swipe');
        } else {
          /* right swipe */
          alert('right swipe');
        }                       
      } else {
        if ( yDiff > 0 ) {
          /* up swipe */ 
          alert('up swipe');
        } else { 
          /* down swipe */
          alert('down swipe');
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};
// document.addEventListener("deviceready",onDeviceReady,false);

// function onDeviceReady()
// {
//   //Phonegap is ready
//   console.log("Phonegap is ready");
// }

// $(document).on( "mobileinit", function() {
  
// 	console.log("Initialize jQuery Mobile Phonegap Enhancement Configurations")
//     // Make your jQuery Mobile framework configuration changes here!
//     $.mobile.allowCrossDomainPages = true;
//     $.support.cors = true;
//     $.mobile.buttonMarkup.hoverDelay = 0;
//     $.mobile.pushStateEnabled = false;
//     $.mobile.defaultPageTransition = "none";
    
// });