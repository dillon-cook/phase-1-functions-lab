function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks - 42);
    //returns the number of blocks given a value
  }
  function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
  }
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
    //returns the number of feet traveled
  }
    function calculatesFarePrice(start, destination) {
    let distance = Math.abs(start - destination) * 264;
}

    //converts blocks into feet
    if (distance <= 400){
        return 0;
    } 
    else if(distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02;
     } 
     else if(distance > 2000 && distance <= 2500){
        return 25;
    }
      else {
        return "cannot travel that far";
    }
    