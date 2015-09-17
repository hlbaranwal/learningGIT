(function () {
  var app = angular.module('RtmaApp.Theme', ['ngMaterial']);
  app.config(function ($mdThemingProvider) {
    // Extend the red theme with a few different colors
    var customColorMap = $mdThemingProvider.extendPalette('blue', {
      '500': '004d40'
    });
    $mdThemingProvider.definePalette('customColor', customColorMap);
    $mdThemingProvider.theme('default')
    .primaryPalette('customColor')
    .backgroundPalette('grey')
    .accentPalette('green', {'default': '200'})});

})();