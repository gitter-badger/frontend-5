////////////////////////////////////////////////////////////////////////////////
// Example Controller
//
// This is an example of how a controller should be added.
////////////////////////////////////////////////////////////////////////////////

( function( $ ) {
  'use strict';

  Frontend.Controllers.CONTROLLERNAME = {
    init: function( callback ) {

      // Optional callback function
      Frontend.Services.callback( callback );
    }
  };

} ) ( jQuery );
