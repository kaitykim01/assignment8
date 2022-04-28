let animatetext = function(){

    //Parameters of the Function//
    //// tickerText(contents, keep, seconds, delay = 20, iterations = 0, ratio, secondsout, dev = false, pausetarget, stoptarget);
    let $elements = $(".tt-holder .tt");
    $(".ttt").tickerText($elements,0, 2, 30, 1, 0.7, 3);
  }
  $(animatetext) ;