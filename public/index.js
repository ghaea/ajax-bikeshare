/*
  This function accepts a callback function as a parameter.

  It calls the callback function with an object containing the data about
    the station at 18th and M Street NW (which is ID "31221")
*/
var localStation = function(callback) {
  
  var ajaxSetting ={

    url: "/stations",
    method: "GET",
    success: function(data) {
      var foundStation = _.filter(data, function(station) {
        return station.id === "31221"
      })
      callback(foundStation[0])
    }

  }

  $.ajax(ajaxSetting)
}

/*
  This function accepts a callback function as a parameter.

  It calls the callback function with an object containing the data about 
    the northernmost station in the Capital Bikeshare system.
  (For simplicity's sake, the northernmost station is the one
    with the highest latitude.)
*/
var northernmostStation = function(callback) {

  var northernMost = {
    url: "/stations",
    method: "GET",
    success: function(data) {

      var foundNorthernMost = _.max(data, function(station) {
        return station.latitude
      })
      callback(foundNorthernMost)
    }   
  }
  $.ajax(northernMost)
}

/*
  This function accepts a callback function as a parameter.

  It calls the callback function with an object containing the data about 
    a single, random station in the Capital Bikeshare system.

  I'll code review this -- use something to get a random, different station
    each time.
*/
var randomStation = function(callback) {

  var ranStn = {

    url: "/stations",
    method: "GET",
    success: function(data) {

      var random = data[Math.floor(Math.random() * data.length)]
      callback(random)
    }    
  }

  $.ajax(ranStn)
}


/*
  This function accepts a callback function as a parameter.

  It calls the callback function with an array containing the data about
    any stations in the Capital Bikeshare system that currently have 0 bikes.
*/
var emptyStations = function(callback) {

  var noBikes = {

    url: "/stations",
    method: "GET",
    success: function(data) {

      var numBikes = _.filter(data, function(station){
        return station.bikes === 0
      })

      callback(numBikes)
    }

  }
  $.ajax(noBikes)
}

/*
  This function accepts a callback function as a parameter.

  It calls the callback function with an array containing the data about
    any stations in the Capital Bikeshare system that have been updated
    in the last 15 minutes.
*/
var recentStations = function(callback) {

  var update = {

    url: "/stations",
    method: "GET",
    success: function(data) {

      var last15sec = _.filter(data, function(station) {

        return station.lastUpdated < 900000
      })

      callback(last15sec)
    }

  }  
  $.ajax(update)
}




