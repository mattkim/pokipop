'use strict';

// TODO: change module name
angular.module('seedlyApp')
  .factory('Pitch', function($resource){
  	return $resource ('/api/pitches/:id/:controller/:id2',{
      id: '@_id'
    },{
    	update: {
    		method: 'PUT'
    	},
        findByUser: {
          method: 'GET',
          isArray: true,
          params: {
            controller: 'findByUser'
          }
        }
    });
  });
