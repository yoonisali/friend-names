window.addEventListener("load", function (event) {
  event.preventDefault;
  
  const array = ["Teddy", "Yoonis", "Jake", "Daves", "Hunter Gilbert", "Michael Sammuel"];
  for (let i = 0; i < array.length; i++) {
    console.log("Hello, " + (array[i]) );
  }

  const arrayTwo = [0,1,2,3,4,5];
  arrayTwo.forEach(function(number) {
    console.log(number * 2);
  });
  
});