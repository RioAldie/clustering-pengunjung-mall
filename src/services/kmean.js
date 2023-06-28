function kMeans(data, k) {
  // Step 1: Initialize centroids randomly
  let centroids = initializeCentroids(data, k);
  let loop = true;

  let clusters = assignPointsToCentroids(data, centroids);
  while (loop) {
    // Step 2: Assign each data point to the nearest centroid
    let clusters = assignPointsToCentroids(data, centroids);

    // Step 3: Update centroids based on the assigned data points
    let newCentroids = updateCentroids(data, clusters);

    // Step 4: Check convergence
    if (areCentroidsConverged(centroids, newCentroids)) {
      break;
    }

    centroids = newCentroids;
    loop = false;
  }

  return clusters;
}

// Helper function to initialize centroids randomly
function initializeCentroids(data, k) {
  const centroids = [];
  const dataCopy = [...data];
  const randomIndices = getRandomUniqueIndices(dataCopy.length, k);

  for (let i = 0; i < k; i++) {
    const randomIndex = randomIndices[i];
    centroids.push(dataCopy[randomIndex]);
  }

  return centroids;
}

// Helper function to assign each data point to the nearest centroid
function assignPointsToCentroids(data, centroids) {
  const clusters = new Array(centroids.length).fill().map(() => []);

  for (let i = 0; i < data.length; i++) {
    const dataPoint = data[i];
    let minDistance = Infinity;
    let closestCentroid = null;

    for (let j = 0; j < centroids.length; j++) {
      const centroid = centroids[j];
      const distance = calculateDistance(dataPoint, centroid);

      if (distance < minDistance) {
        minDistance = distance;
        closestCentroid = j;
      }
    }

    clusters[closestCentroid].push(dataPoint);
  }

  return clusters;
}

// Helper function to calculate the Euclidean distance between two points
function calculateDistance(pointA, pointB) {
  let sumSquaredDistances = 0;

  for (let i = 0; i < pointA.length; i++) {
    const diff = pointA[i] - pointB[i];
    sumSquaredDistances += diff * diff;
  }

  return Math.sqrt(sumSquaredDistances);
}

// Helper function to update centroids based on the assigned data points
function updateCentroids(data, clusters) {
  const newCentroids = [];

  for (let i = 0; i < clusters.length; i++) {
    const cluster = clusters[i];

    if (cluster.length === 0) {
      // If a cluster has no data points, keep the same centroid
      newCentroids.push(data[i]);
      continue;
    }

    const dimensionSums = new Array(data[0].length).fill(0);

    for (let j = 0; j < cluster.length; j++) {
      const dataPoint = cluster[j];

      for (let d = 0; d < dataPoint.length; d++) {
        dimensionSums[d] += dataPoint[d];
      }
    }

    const centroid = dimensionSums.map((sum) => sum / cluster.length);
    newCentroids.push(centroid);
  }

  return newCentroids;
}

// Helper function to check convergence
function areCentroidsConverged(oldCentroids, newCentroids) {
  for (let i = 0; i < oldCentroids.length; i++) {
    const oldCentroid = oldCentroids[i];
    const newCentroid = newCentroids[i];

    for (let j = 0; j < oldCentroid.length; j++) {
      if (oldCentroid[j] !== newCentroid[j]) {
        return false;
      }
    }
  }

  return true;
}

// Helper function to generate an array of random unique indices within a range
function getRandomUniqueIndices(range, count) {
  const indices = [];

  while (indices.length < count) {
    const randomIndex = Math.floor(Math.random() * range);

    if (!indices.includes(randomIndex)) {
      indices.push(randomIndex);
    }
  }

  return indices;
}

// Example usage
const data = [
  [2, 3, 1, 2, 3],
  [5, 6, 7, 4, 5],
  [1, 4, 2, 3, 1],
  [10, 12, 10, 11, 9],
  [7, 8, 8, 6, 9],
  [2, 1, 1, 1, 2],
];
const k = 5;

const clusters = kMeans(data, k);

export { clusters };
