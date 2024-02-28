// Code your solution in this file!

// 1. distanceFromHqInBlocks: Returns the number of blocks from Scuber's headquarters to the pickup location.
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - 42);
}

// 2. distanceFromHqInFeet: Returns the number of feet from Scuber's headquarters to the pickup location.
function distanceFromHqInFeet(someValue) {
  const blocks = distanceFromHqInBlocks(someValue);
  return blocks * 264;
}

// 3. distanceTravelledInFeet: Calculates the number of feet a passenger travels given a starting block and an ending block.
function distanceTravelledInFeet(start, destination) {
  const blocksTraveled = Math.abs(destination - start);
  return blocksTraveled * 264;
}

// 4. calculatesFarePrice: Returns the fare for the customer based on the distance traveled.
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}

// Sample tests
console.log(distanceFromHqInBlocks(43)); // Output: 1
console.log(distanceFromHqInFeet(43)); // Output: 264
console.log(distanceTravelledInFeet(34, 38)); // Output: 1056
console.log(calculatesFarePrice(34, 38)); // Output: 8.48
