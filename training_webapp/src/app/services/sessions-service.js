'use strict';

angular.module('trng.services').factory('trng.services.SessionsService', [
	'trng.proxies.SessionsProxy',
	'trng.transformers.SessionsTransformer',
	function(sessionsProxy, sessionTrans) {
		
		var service = {
			getAllSessions: function() {
				var promise = sessionsProxy.getAllSessions();
				
				var sessionEntities = [];
				return promise.then(function(result) {
					for (var i = 0; i < result.data.length; i++) {
						var currentSessionEntity = sessionTrans.dtoToEntity(result.data[i]);
                        sessionEntities.push(currentSessionEntity);
					}
					return sessionEntities;
				});
			}
		};
		
		return service;
}]);