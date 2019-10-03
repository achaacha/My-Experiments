var layers = document.querySelectorAll("[data-type='parallax']");

anime({ 
  targets: '.layer.deer',
  opacity: [0,1],
  translateY: [350, 0],
  duration: 2500,
  delay: (el, i) => 800 * i,
  easing: 'easeOutBack'
});

anime({
  targets: '.background',
  opacity:[0.1, 1],
  duration: 2700,
  easing: 'linear'
})

const parallax = () => {
  
  var depth, i, layer, len, movement, topDistance, translate3d;
  window.addEventListener('scroll', function (event) {
    
    topDistance = window.scrollY;    
    
    for (i = 0, len = layers.length; i < len; i++) {if (window.CP.shouldStopExecution(0)) break;
                                                    
      layer = layers[i];
      depth = layer.getAttribute('data-depth');
      movement = -(topDistance * depth);
      translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    }window.CP.exitedLoop(0);
  });

}


parallax(layers);


//L2 Animation
anime({
  targets: '#shadow2',    
  opacity: [0.3,1],  
  direction: 'alternate',
  loop: true, 
  duration: 2000, 
  easing: 'easeInOutSine'
});

var aniL2Once = false;

window.addEventListener("scroll", function() {
  
  //Gather y position for testing
  console.log('y scroll pixels are currently at ' + window.pageYOffset);
  
  if (window.pageYOffset >= 1000 && !aniL2Once )  {
    aniL2Once = true;
    anime({
      targets: '#deer2, #bg2',  
      opacity: [0,1],
      duration: 6500,
      delay: (el, i) => 2000 * i,
      easing: 'easeOutQuad'
   });
  } 
});