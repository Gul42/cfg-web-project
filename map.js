
let places = [
  ['Cable & co.','NW',51.534833, -0.219437, 'yes','good coffee, kensal rise high street'],
  ['Minkies deli','NW',51.534452, -0.219372, 'yes','good coffee, beautiful place, kensal rise high street'],
  ['Gracelands','NW',51.535745, -0.226393, 'yes','nice staff, cute place, quiet'],
  ['Bijou London','NW',51.549396, -0.220303, 'yes','acrross willsden green station, outdoor sitting'],
  ['Java U','W',51.516193, -0.174384,'yes'],
  ['Google for Startups Campus','EC',51.522674, -0.085634,'yes'],
  ['Nest Cafe','NW',51.549195, -0.221108,'yes','not the best place to work from but great location fot tube'],
  ['Look mum no hands!','EC', 51.524185, -0.096886,'yes','great place'],
  ['Chief coffee','W',51.493975, -0.254802,'yes'],
  ['The British Library','NW',51.529985, -0.127675,'yes','different style'],
  ['Ginger & White London','NW',51.546806, -0.161054,'yes']]

  function initMap() {
    // The location
    var London = {lat: 51.515944, lng: -0.173316};
    // The map, centered at ... ,
    var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 11, center: London});
      // The marker, positioned at ..

      for (let i =0; i <places.length; i++){
        //  Marker
        let Marker = new google.maps.Marker(
          {position: {
            lat: places[i][2],
            lng: places[i][3]
          },
          map: map,
          title: places[i][0]});
          let contentString = '<div >'+
            '<div>'  +
            '</div>'+
            '<h3 class="name-of-place">'+places[i][0]+'</h3>'+
              '<div >'+
                 '<p>'+ places[i][0] + '</p></br>'+
                 '<p>'+ places[i][1]+'</p></br>'+
                 '<p>free wifi: '+places[i][4]+'</p></br>' +
                  '<p>wifi speed?'+places[i][1]+'</p></br>' +
                  '<p>noisy'+places[i][1]+'</p></br>'+
                  '<p>amount of electrical sockets'+places[i][1]+'</p></br>'+
                  '<p>time limit'+places[i][1]+'<p></br>'+
              '</div>'+
            '</div>';
          var infowindow = new google.maps.InfoWindow({});
          google.maps.event.addListener(Marker, 'click', function() {
              infowindow.setContent(contentString);
              infowindow.open(map,Marker);
          });
        }}
