// Challenge 2: Speed Detector
function speedDetector(speed) {
  const speedLimit = 70; // Maximum allowed speed
  const kmPerPoint = 5; // Every 5 km/s over the limit = 1 point

  // If speed is within or below the limit
  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    // Calculate demerit points
    const points = Math.floor((speed - speedLimit) / kmPerPoint);

    // If points exceed 12, license is suspended
    if (points > 12) {
      console.log("License suspended");
    } else {
      console.log("Points: " + points);
    }
  }
}

//Example Test Cases
speedDetector(80); // Points: 2
speedDetector(70); // Ok
speedDetector(135); // License suspended
