// var ko = require('knockout');

// var styles = require('./styles.js').styles;
var mapStyles = {
    styles : [
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [
          { color: '#F67503'}
          ]
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.stroke',
        stylers: [
          { color: '#ffffff'},
          { weight: 6 }
        ]
      },
      {
        featureType: 'administrative.neighborhood',
        elementType: 'labels.text.fill',
        stylers: [
          { color: '#1B63C0'}
        ]
      },
      {
        featureType: 'administrative.province',
        elementType: 'labels.text.fill',
        stylers: [
          { color: '#27ACF9'}
        ]
      },
      {
        featureType: 'administrative.province',
        elementType: 'labels.text.stroke',
        stylers: [
          {weight: 3}
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          {color: '#FDDC06'}
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [
          {color: '#ECDAA1'}
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
          {color: '#FEDD02'}
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          {color: '#000000'},
          {weight: .5}
        ]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry.fill',
        stylers: [
          {color: '#D12E05'},
          {lightness: 30}
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {color: '#0598FA'},
          {saturation: 10 },
          {hue: -3},
          {lightness: -5}
        ]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {color: '#ffffff'}
        ]
      },
      {
        featureType: 'poi.attraction',
        elementType: 'labels.text.fill',
        stylers: [
          {color: '#ffffff'}
        ]
      },
      {
        featureType: 'poi.attraction',
        elementType: 'labels.text.stroke',
        stylers: [
          {color: '#845A1A'},
          {weight: 2}
        ]
      },
      {
        featureType: 'poi.medical',
        elementType: 'labels.text.fill',
        stylers: [
          {color: '#F30101'}
        ]
      },
      {
        featureType: 'poi.medical',
        elementType: 'labels.text.stroke',
        stylers: [
          {color: '#ffffff'},
          {weight: 3}
        ]
      },
      {
        featureType: 'poi.school',
        elementType: 'labels.text.fill',
        stylers: [
          {color: '#805F04'}
        ]
      },
      {
        featureType: 'poi.school',
        elementType: 'labels.text.stroke',
        stylers: [
          {color: '#ffffff'},
          {weight: 3}
        ]
      },
      {
        featureType: 'transit',
        elementType: 'labels.text.fill',
        stylers: [
          {color: '#ffffff'}
        ]
      },
      {
        featureType: 'transit',
        elementType: 'labels.text.stroke',
        stylers: [
          {color: '#01B2FE'},
          {weight: 3},
          {lightness: -10}
        ]
      }
  ]
}

function AppViewModel() {
  //this.header = ko.observable("Wilmington's Breweries");

  // List of breweries to select
  var self = this;
  self.shops = ko.observableArray([{
      title: "Front Street Brewery",
      locations: [{
          location: {
            lat: 34.235740679540505,
            lng: -77.94877022724364
          },
          foursquareId: '4b44d7daf964a520e3fd25e3'
        },
      ],
      showListing: ko.observable(true)
    },
    {
      title: "Wilmington Brewing Co.",
      locations: [{
          location: {
            lat: 34.22136150569059,
            lng: -77.8866036482147
          },
          foursquareId: '53cef136498edd62f5f091fd'
        },
      ],
      showListing: ko.observable(true)
    },
    {
      title: "Flytrap Brewing",
      locations: [{
        location: {
          lat: 34.24033086673391,
          lng: -77.94535875320435
        },
        foursquareId: '529e9bf311d266d68f5626c1'
      }],
      showListing: ko.observable(true)
    },
    {
      title: "Waterline Brewing Co.",
      locations: [{
        location: {
          lat: 34.22557767994479,
          lng: -77.9486084684903
        },
        foursquareId: '55f70a5f498e324dc4109320'
      }],
      showListing: ko.observable(true)
    },
    {
      title: "Broomtail Craft Brewery",
      locations: [{
        location: {
          lat: 34.25873666153001,
          lng: -77.84888581241525
        },
        foursquareId: '536e6958498ea2c77d5524d1'
      }],
      showListing: ko.observable(true)
    },
    {
      title: "Ironclad Brewery",
      locations: [{
        location: {
          lat: 34.23700035437736,
          lng: -77.94772982597351
        },
        foursquareId: '53dbd858498e33be781da324'
      }],
      showListing: ko.observable(true)
    },
    {
      title: "Prestige Brewing",
       locations: [{
        location: {
          lat: 34.2285269,
          lng: -77.94180949999998
        },
        foursquareId: '589ff18abbec664e9ec4cc33'
      }],
      showListing: ko.observable(true)
    },
    {
      title: "Bill\'s Front Porch",
      locations: [{
        location: {
          lat: 34.242523,
          lng: -77.89038
        },
        foursquareId: '57771d18498e0572191a418e'
      }],
      showListing: ko.observable(true)
    },
    {
      title: "New Anthem Brewing",
      locations: [{
        location: {
          lat: 34.234121,
          lng: -77.947813
        },
        foursquareId: '5802c2a838fa4fc40ee7a5f2'
      }],
      showListing: ko.observable(true)
    },
    {
      title: "Wrightsville Beach Brewery",
      locations: [{
        location: {
          lat: 34.21091491606973,
          lng: -77.83721208572388
        },
        foursquareId: '587c099c469aef4ebffcb066'
      }],
      showListing: ko.observable(true)
    },
    {
      title: "Good Hops Brewing",
      locations: [{
        location: {
           lat: 34.04202182516429,
           lng: -77.9048410762307
        },
        foursquareId: '5363bcde498e17304bd2234b'
      }],
      showListing: ko.observable(true)
    },
    {
      title: "Watermans Brewing",
      locations: [{
        location: {
          lat: 34.221096,
          lng: -77.820582
        },
        foursquareId: '595d01e3d1a40251f544f2fc'
      }],
      showListing: ko.observable(true)
    },
    {
      title: "Cape Fear Beer and Wine",
      locations: [{
        location: {
          lat: 34.237039,
          lng: -77.949046
        },
        foursquareId: '4b47e5d6f964a520334326e3',
      }],
      showListing: ko.observable(true)
    },
    {
      title: "Hey Beer Bottle Shop",
      locations: [{
        location: {
          lat: 34.214925,
          lng: -77.888006
        },
        foursquareId: '54b2e9e8498eb29e953de2ea',
      }],
      showListing: ko.observable(true)
    },
    {
      title: "Bombers Beverage Company",
      locations: [{
        location: {
          lat: 34.238758,
          lng: -77.948528
        },
        foursquareId: '53f10ac3498e3f089d10263e'
      }],
      showListing: ko.observable(true)
    },
    {
      title: "Fermental",
      locations: [{
        location: {
          lat: 34.273904,
          lng: -77.816622
        },
        foursquareId: '51325cdee4b0e80cdb6ed2f6'
      }],
      showListing: ko.observable(true)
    },
    {
      title: "The Sour Barn",
      locations: [{
        location: {
          lat: 34.273087,
          lng: -77.818830
        },
        foursquareId: '57c1d97d38fa48c7d5171a9e'
      }],
      showListing: ko.observable(true)
    }
  ]);

  // Appends the markers to the map with working infowindow
  this.google = ko.observable(false);
  this.google.subscribe(function(isLoadingFinished) {
    if (isLoadingFinished) {
      console.log("Google maps has finished loading");
      for (var i = 0; i < self.shops().length; i++) {
        var shop = self.shops()[i];
        shop.locations.forEach(function(location) {
          var marker = new google.maps.Marker({
            position: location.location,
            title: shop.title,
            animation: google.maps.Animation.DROP,
            map: map,
            id: location.foursquareId
          });
          location.marker = marker;
          shop.marker = marker;
          bounds.extend(marker.position);
          marker.addListener('click', function() {
            toggleBounce(marker);
            //Centers the map to the clicked marker
            window.setTimeout(function() {
              map.panTo(marker.getPosition());
            });
            populateInfoWindow(this, largeInfowindow);
          });
        });
      }
      map.fitBounds(bounds);
      console.log(self.shops());
    }
  });
  
  this.search = ko.observable('');

  //Makes the shops list clickable
  this.listItemClick = function(shop) {
    google.maps.event.trigger(shop.marker, 'click');
    console.log(shop);
  };

  this.resetMap = function() {
    location.reload();
  };

  var map, largeInfowindow;
  var bounds;
  var markers = [];

  function initMap() {

    self.infowindow = new google.maps.InfoWindow();

    bounds = new google.maps.LatLngBounds();

    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 34.2257,
        lng: -77.9447
      },
      styles: mapStyles.styles,
      mapTypeConrtol: false
    });

    appViewModel.google(true);

    //Keep the map centered on window resizing
    google.maps.event.addDomListener(window, 'resize', function() {
      map.fitBounds(bounds);
    });

    // Handles the searchbar
    this.searchFunction = ko.computed(function() {
      var filterInput = self.search().toLowerCase();
      self.shops().forEach(function(shop) {
        if (shop.title.toLowerCase().indexOf(filterInput) !== -1) {
          // show the location
          shop.showListing(true);
          // show the location's markers
          shop.locations.forEach(function(shopLocation) {
            shopLocation.marker.setVisible(true);
            return true;
          });
        } else {
          // hide the location
          shop.showListing(false);
          // hide the location's markers
          shop.locations.forEach(function(shopLocation) {
            shopLocation.marker.setVisible(false);
            return false;
          });
        }
      });
    });

    //Setting up Foursquare for infowindow
    var CLIENT_ID = '4TGGE0PWAWXOLLGK4LWQF4C1ZO3UPPR4IIK5U24QOCG0ISIQ';
    var CLIENT_SECRET = 'ZNHCHPVS0NEE0Q1X1LQA5PNE2ERHRMTAF04X2RCP1CAXRJTB';
    var VERSION = '20170101';

    //Populate the infowindow with Foursquare
    this.populateInfoWindow = function(marker, infowindow) {
      
      var url = 'https://api.foursquare.com/v2/venues/' + marker.id;
      
        $.ajax({
          url: url,
          dataType: 'json',
          data: {
            id: location.foursquareId,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            v: VERSION,
            async: true
          },//()
          success: function(data) {
            var venue = data.response.venue.name;
            var address = data.response.venue.location.address ? data.response.venue.location.address : " ";
            var city = data.response.venue.location.city ? data.response.venue.location.city : " ";
            var state = data.response.venue.location.state ? data.response.venue.location.state : " ";
            var zipCode = data.response.venue.location.postalCode ? data.response.venue.location.postalCode : " ";
            var phone = data.response.venue.contact.formattedPhone ? data.response.venue.contact.formattedPhone : " ";

            self.infowindow.setContent('<div>' + '<b>' + venue + '</b>' + '</div>' + '<div>' + address + '</div>' + '<div>' + city + ', ' + state + ' ' + zipCode + '<div>' + phone);
            self.infowindow.open(map, marker);
            console.log(data);
          }
        }).fail(function (e) {
          self.infowindow.setContent('<div><h4>Well this is embarrassing...</h4></div>' + '<div><h4>Foursquare could not be loaded.</h4></div>');
          self.infowindow.open(map, marker);
        });
    };

    //Bounces the marker when the marker is clicked
    this.toggleBounce = function(marker) {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
          marker.setAnimation(null);
        }, 1400);
      }
    };

  }
  window.initMap = initMap;

}
var appViewModel = new AppViewModel();
ko.applyBindings(appViewModel);