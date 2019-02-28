$(document).ready(function () {

  // MAP BOX

  function setDim(){
    var h = $('.infos.show img').height();
    $('.image-magasin').css({'height': h+'px'});
  }
  setDim();
  $(window).resize(function(){
    setDim();
  });

  mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaW9uYjM1IiwiYSI6ImNqb2d4bjFscjBkdTEza29hN3V5M20yaHUifQ.KfRhB0mZhSyarCBcezGTjg';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/marionb35/cjogy0gnj7c8t2rmmqyqjqevj',
    center: [0.288596, 44.325436],
    zoom: 6
  });

  map.addControl(new mapboxgl.NavigationControl());

  map.on('click', function (e) {
    
    var features = map.queryRenderedFeatures(e.point, {
      layers: ['troc-en-stock'] // replace this with the name of the layer
    });

    if (!features.length) {
      return;
    }

    var feature = features[0];

 
    console.log(feature.properties.id);
    

    $(".infos").removeClass("show");
    $("#infos-"+feature.properties.id).addClass("show");
    

    var popup = new mapboxgl.Popup({
        offset: [0, -15]
      })
      .setLngLat(feature.geometry.coordinates)
      .setHTML('<h3>' + feature.properties.Ville + '</h3><p>' + feature.properties.Adresse + '</p><p>' + feature.properties.Telephone + '</p><p>' + feature.properties.Mail)
      .setLngLat(feature.geometry.coordinates)
      .addTo(map);
  });


  // OWL CAROUSEL
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        720:{
            items:1,
            nav:true
        },
        1600:{
            items:1,
            nav:true,
            loop:true
        }
    }
})

function owlInitialize() {
  if ($(window).width() > 720) {
    $('#carousel').owlCarousel({
      loop: true,
      margin: 15,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        720: {
          items: 1,
          nav: true
        },
        1600: {
          items: 1,
          nav: true,
          loop: true
        }
      }
    })}
    else {
      $('#carousel').owlCarousel('destroy');
    }
  }

  $(document).ready(function (e) {
    owlInitialize();
  });


  $(window).resize(function () {
    owlInitialize();
  });
});