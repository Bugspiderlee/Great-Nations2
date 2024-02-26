'use strict';

(function( $ ) {

	$( document ).ready(function() {
			
			if ( $( "img" ).parent( "a" ).length > 0 ) {
				$( "img" ).parent( "a" ).addClass('bt-link-with-img');
			}
			
	});

})( jQuery );