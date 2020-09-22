$('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'left', // Displays dropdown with edge aligned to the left of button
    stopPropagation: false // Stops event propagation
});
$(document).ready(function() {
    $('select').material_select();
});

(function($){
    $(document).on('ready', function(){
      
      // toggle all nav menus
      $('[js-ui-menu-trigger]').on('click', function(){
        $(this).parents('[js-ui-menu]').toggleClass('state--expanded');
      });
      
      var $price = $("[js-price-slider]");
      
      $price.slider({
        range: true,
        min: 0,
        max: 300,
        values: [ 0, 250 ],
        slide: function( event, ui ) {
          $(ui.handle).attr('data-value', formatCurrency(ui.value));
        }
      });
      
      _.each( $('.ui-slider-handle'), function(item, itr){
        $(item).attr('data-value', formatCurrency($price.slider('values', itr)));
      });
      
      $('[js-item-fav]').on('click', function(){
        $(this).parents('.feed__itm').toggleClass('feed__itm--fav');
      });
      
    });
    
    var formatCurrency = function(num){
      return (num == 0) ? '$' + num : '$' + num + 'k';
    }
  })(jQuery);