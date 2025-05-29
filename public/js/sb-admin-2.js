(function($) {
  "use strict"; // Start of use strict

  let seconds = 60;

  function countdownAndRefresh() {
    seconds --;

    let plural = 's';
    if (seconds == 1) {
      plural = '';
    }

    $('#seconds').text(`${seconds} second${plural}`);
    
    if (seconds <= 0) {
      location.reload();
    }
  }

  window.setInterval(countdownAndRefresh, 1000);
})(jQuery); // End of use strict
