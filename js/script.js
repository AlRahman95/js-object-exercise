var gamingLaptop = {
  processor: "i7",
  graphicsCard: "GTX 670M",
  ram: "12GB",
  storage: "1TB",
  peripherals: ["mouse", "keyboard", "printer", "charger"],
  goodPerformance: true,
  monitor: {
    screenSize: "15.6 inches",
    resolution: "1920x1080",
    hd: true,
    adapter: "HDMI"
  },
  gamesItCanPlay: function(game) {
    console.log("It " + "can " + "play " + game);
  }
};

var hoverScooter = {
  speed: "20mph",
  dashboard: "LCD screen",
  batteryLife: "5 hours",
  foldableDesign: true,
  charge: ["250watts", "6.5 hours", "10.5 Ah"],
  accessories: ["lock", "keys", "bike stand", "cleaning cloth"],
  runMph: function(miles) {
    console.log("I " + "ride " + miles + " miles");
  }
};

gamingLaptop.gamesItCanPlay("Assassins Creed");
hoverScooter.runMph(15);

console.log(gamingLaptop.peripherals[2]);
console.log(hoverScooter.charge[1]);
