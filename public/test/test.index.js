describe("Capital Bikeshare System Data", function(){

  describe("Nearest Station", function(){
    it("should be able to retrieve the nearest station", function(testDone){
      localStation(function(data){
        expect(data.name).to.equal("18th & M St NW")
        testDone()
      })
    })
  })
  
  describe("Northernmost Station", function(){
    it("should be able to retrieve the northernmost station", function(testDone){

      northernmostStation(function(data){
        expect(data.id).to.equal("32018")
        testDone()
      })

    })
  })
  
  describe("Random Station", function(){
    it("should be able to retrieve a random station", function(testDone){

      randomStation(function(data){
        expect(data).to.have.property("docks")
        testDone()
      })

    })
  })

  describe("Empty Stations", function(){
    it("should be able to retrieve all empty stations", function(testDone){

      emptyStations(function(data){
        expect(data).to.be.an("array")
        expect(data.length).to.equal(7)

        _.each(data, function(station){
          expect(station.bikes).to.equal(0)
        })

        testDone()
      })

    })
  })

  describe("Recent Stations", function(){
    it("should be able to retrieve all recently-used stations", function(testDone){

      recentStations(function(data){
        expect(data).to.be.an("array")
        expect(data.length).to.equal(21)

        testDone()
      })

    })
  })

})