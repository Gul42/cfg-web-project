
let places = [
  ['Cable & co.','NW',51.534833, -0.219437, '103 Chamberlayne Road London NW10 3NS','Yes', 'Please let me know in the comments below!', ' Low background music',' Please let me know in the comments below!','','','Good coffee, kensal rise high street' ],
  ['Minkies deli','NW',51.534452, -0.219372, '87 Chamberlayne Rd, London NW10 5RQ','Yes','Fast connection',' Background music', ' Please let me know in the comments below!','','','Good coffee, beautiful place, kensal rise high street'],
  ['Gracelands','NW',51.535745, -0.226393, '118 College Rd, Kensal Green, London NW10 5HD','Yes','Please let me know in the comments below!',' Weekends- noisy and many kids, other days ok',' Please let me know in the comments below!','','','Nice staff, cute place, quiet'],
  ['Bijou London','NW',51.549396, -0.220303,'108 Walm Ln, London NW2 4RS', 'No','Please let me know in the comments below!',' On the high street',' Please let me know in the comments below!','','','Across willsden green station, outdoor sitting'],
  ['Java U','W',51.516193, -0.174384,'153 Praed St, Paddington, London W2 1RL','Yes',' Please let me know in the comments below!',' Please let me know in the comments below!',' Please let me know in the comments below!','','',''],
  ['Google for Startups Campus','EC',51.522674, -0.085634,'4-5 Bonhill St, Shoreditch, London EC2A 4BX','Yes', 'Fast connection','Please let me know in the comments below!',' Please let me know in the comments below!','','',''],
  ['Nest Cafe','NW',51.549195, -0.221108,'Willesden Green Station, Tube Station, Walm Ln, London NW2 4QT','Yes','Please let me know in the comments below!',' Backgound music',' Please let me know in the comments below!','','','Not the best place to work from but great location fot tube'],
  ['Look mum no hands!','EC', 51.524185, -0.096886,'49 Old St, London EC1V 9HX','Yes','Fast connection',' Low background music',' Please let me know in the comments below!','','','Great place'],
  ['Chief coffee','W',51.493975, -0.254802,'Turnham Green Terrace Mews, Chiswick, London W4 1QU','Yes','Please let me know in the comments below!',' Please let me know in the comments below!',' Please let me know in the comments below!','','',''],
  ['The British Library Cafe','NW',51.529985, -0.127675,'96 Euston Rd, London NW1 2DB','Yes','Fast connection',' Backgound music',' Please let me know in the comments below!','','','Different style'],
  ['Ginger & White London','NW',51.546806, -0.161054,'2 England Ln, London NW3 4TG ','Yes','Please let me know in the comments below!',' Please let me know in the comments below!',' Please let me know in the comments below!','','','']]

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
          let contentString = /*'<div >'+*/
          '<div>'  +
          /*'</div>'+*/
          '<h3 class="name-of-place">'+places[i][0]+'</h3>'+
          '<div>'+
          /* '<p>'+ places[i][0] + '</p></br>'+*/
          '<p>'+'Address: '+ places[i][4]+'</p>' +
          '<p>'+'Free wifi: '+places[i][5]+'</p>' +
          '<p>'+'Wifi speed: '+places[i][6]+'</p>' +
          '<p>'+'Noisy: '+places[i][7]+'</p>'+
          '<p>'+'Amount of electrical sockets: '+places[i][8]+'</p>'+
          '<p>'+'Time limit: '+places[i][9]+'<p>'+
          '<p>'+'Busiest hours: '+places[i][10]+'<p>'+
          '<p>'+'General info: '+places[i][11]+'<p>'+
          '</div>'+
          '</div>';
          var infowindow = new google.maps.InfoWindow({});
          google.maps.event.addListener(Marker, 'click', function() {
            infowindow.setContent(contentString);
            infowindow.open(map,Marker);
          });
        }}
