function vstrsnln_check_country_js() {
	(function($) {
		$.ajax( {
			type: 'POST',
			url: ajaxurl,
			async: false,
			data: { 
				'action': 'vstrsnln_check_country',
				vstrsnln_ajax_nonce_field: vstrsnln_ajax.vstrsnln_nonce
			}
		});
	})(jQuery);
}
( function( $ ) {
	$( document ).ready( function() {
		/* Add notice about changing in the settings page */
		$( '#vstrsnln_settings_form input' ).bind( 'change click select', function() {
			if ( $( this ).attr( 'type' ) != 'submit' ) {
				$( '.updated.fade' ).css( 'display', 'none' );
				$( '#vstrsnln_settings_notice' ).css( 'display', 'block' );
			};
		});
	});	
})(jQuery);