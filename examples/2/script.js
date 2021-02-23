var TLParamsInheritance = anime.timeline({
  targets: '#bird2',
  //delay: function(el, i) { return i * 2000 },
  duration: 400,
  //easing: 'easeOutExpo',
  //direction: 'alternate',
  loop: true,
});

TLParamsInheritance
  .add({
  //  translateX: 600,
  })
  .add({
    //opacity: .5,
    delay:2000,
 translateX: 500,
 
  //translateY:50,
  //scaleX: -1,
   scale: 1,
  })
  .add({
  translateX: 1700,  
    scaleX: -1,
    scale: 1,
    delay:1000,
  })
.add({
  translateX: 1200,  
    scaleX: -1,
    //scale: 1,
    //delay:500,
  })


//Leaf

var lineDrawing = anime({

  targets: '.leaf path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
  delay: function(el, i) { return i * 0 },
  direction: 'alternate',
  loop: true,
  delay:2000,
});


var lineDrawing = anime({
  targets: '.leaf path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
  delay: function(el, i) { return i * 0 },
  direction: 'alternate',
  loop: true,
   delay:1000,
});
