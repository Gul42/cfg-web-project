
let places = [
  ['Cable & co.','NW',51.534833, -0.219437, 'good coffee, kensal rise high street'],
  ['Minkies deli','NW',51.534452, -0.219372, 'good coffee, beautiful place, kensal rise high street'],
  ['Gracelands','NW',51.535745, -0.226393, 'nice staff, cute place, quiet'],
  ['Bijou London','NW',51.549396, -0.220303, 'acrross willsden green station, outdoor sitting'],
  ['Java U','W',51.516193, -0.174384],
  ['Google for Startups Campus','EC',51.522674, -0.085634],
  ['Nest Cafe','NW',51.549195, -0.221108,'not the best place to work from but great location fot tube'],
  ['Look mum no hands!','EC', 51.524185, -0.096886,'great place'],
  ['Chief coffee','W',51.493975, -0.254802],
  ['The British Library','NW',51.529985, -0.127675,'different style'],
  ['Ginger & White London','NW',51.546806, -0.161054]]

  function initMap() {
    // The location
    var London = {lat: 51.515944, lng: -0.173316};
    // The map, centered at ... ,
    var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 11, center: London});
      // The marker, positioned at ..

      var marker = new google.maps.Marker({
       position: map.getCenter(),
       url: 'http://www.google.com/',
       map: map
     });

     google.maps.event.addListener(marker, 'click', function() {
       window.location.href = marker.url;
     });

      for (let i =0; i <places.length; i++){
        let Marker = new google.maps.Marker(
          {position: {
            lat: places[i][2],
            lng: places[i][3]
          },
          map: map,
          title: places[i][0]});


        }}
