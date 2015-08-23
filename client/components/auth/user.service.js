'use strict';

angular.module('seedlyApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      forgotPassword: {
        method: 'GET',
        params: {
          controller:'forgotpw'
        }
      },
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      changePasswordWithToken: {
        method: 'PUT',
        params: {
          controller:'passwordwithtoken'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });
  });
