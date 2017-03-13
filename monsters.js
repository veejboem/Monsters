// $(document).ready(function() {
//   $('.summon-monsters').click(function() {
//     $.ajax({
//     method: 'GET',
//     url: '',
//     dataType:'JSON',
//     }).done(function (data) {
//
//       for(var i=0; i < data.mosters.length; i++) {
//         $('<img>')
//           .attr('src', data.monsters[i]['photo'])
//           .attr('alt', 'Photo of: ' + data.monsters[i]['name'])
//           .appendTo('#monster' + (i + 1) )
//       ;}
//     });
//   });
// });


$(function(){
  // Bind the swipeleftHandler callback function to the swipe event on div.box
  $( "button" ).on( "swipeleft", swipeleftHandler );

  // Callback function references the event target and adds the 'swipeleft' class to it
  function swipeleftHandler( event ){
    $( event.target ).addClass( "swipeleft" );
  }
});
