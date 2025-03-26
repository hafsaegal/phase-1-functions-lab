// Code your solution in this file!

// Function to calculate distance in blocks from HQ (42nd Street)
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - 42);
}

// Function to calculate distance from HQ in feet (1 block = 264 feet)
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

// Function to calculate distance traveled in feet between two points
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// Function to calculate fare price based on distance traveled
function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // Free ride
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // $0.02 per foot after the first 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat rate of $25
  } else {
    return "cannot travel that far"; // Above 2500 feet
  }
}

// Exporting functions if required for testing
// module.exports = { distanceFromHqInBlocks, distanceFromHqInFeet, distanceTravelledInFeet, calculatesFarePrice };

