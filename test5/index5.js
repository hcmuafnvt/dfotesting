$(function() {
   $('.item').resizable();

   $('.item').draggable({      
      revert: 'invalid',
      cursor: 'move'
   });
   
   $(".frame2").droppable({      
      accept: '.item' ,
      greedy: true,
      hoverClass: "dragover",
      drop: function(e, ui) {
         $(this).append(ui.draggable);
      }
   });

   $('#btnGetCSS').on('click', function(e) {
      e.preventDefault();
      var $cssContent = $('#cssContent');
      $cssContent.empty();
      $('.item').each(function(index, elem) {
         if(typeof $(elem).attr('style') !== 'undefined') {
            $cssContent.append('<div>' + $(elem).attr('id') + ' : ' + $(elem).attr('style') + '</div>');   
         }               
      });
   })
});