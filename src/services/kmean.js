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
const valueData = [
  [19, 15, 39],
  [21, 15, 81],
  [20, 16, 6],
  [23, 16, 77],
  [31, 17, 40],
  [22, 17, 76],
  [35, 18, 6],
  [23, 18, 94],
  [64, 19, 3],
  [30, 19, 72],
  [67, 19, 14],
  [35, 19, 99],
  [58, 20, 15],
  [24, 20, 77],
  [37, 20, 13],
  [22, 20, 79],
  [35, 21, 35],
  [20, 21, 66],
  [52, 23, 29],
  [35, 23, 98],
  [35, 24, 35],
  [25, 24, 73],
  [46, 25, 5],
  [31, 25, 73],
  [54, 28, 14],
  [29, 28, 82],
  [45, 28, 32],
  [35, 28, 61],
  [40, 29, 31],
  [23, 29, 87],
  [60, 30, 4],
  [21, 30, 73],
  [53, 33, 4],
  [18, 33, 92],
  [49, 33, 14],
  [21, 33, 81],
  [42, 34, 17],
  [30, 34, 73],
  [36, 37, 26],
  [20, 37, 75],
  [65, 38, 35],
  [24, 38, 92],
  [48, 39, 36],
  [31, 39, 61],
  [49, 39, 28],
  [24, 39, 65],
  [50, 40, 55],
  [27, 40, 47],
  [29, 40, 42],
  [31, 40, 42],
  [49, 42, 52],
  [33, 42, 60],
  [31, 43, 54],
  [59, 43, 60],
  [50, 43, 45],
  [47, 43, 41],
  [51, 44, 50],
  [69, 44, 46],
  [27, 46, 51],
  [53, 46, 46],
  [70, 46, 56],
  [19, 46, 55],
  [67, 47, 52],
  [54, 47, 59],
  [63, 48, 51],
  [18, 48, 59],
  [43, 48, 50],
  [68, 48, 48],
  [19, 48, 59],
  [32, 48, 47],
  [70, 49, 55],
  [47, 49, 42],
  [60, 50, 49],
  [60, 50, 56],
  [59, 54, 47],
  [26, 54, 54],
  [45, 54, 53],
  [40, 54, 48],
  [23, 54, 52],
  [49, 54, 42],
  [57, 54, 51],
  [38, 54, 55],
  [67, 54, 41],
  [46, 54, 44],
  [21, 54, 57],
  [48, 54, 46],
  [55, 57, 58],
  [22, 57, 55],
  [34, 58, 60],
  [50, 58, 46],
  [68, 59, 55],
  [18, 59, 41],
  [48, 60, 49],
  [40, 60, 40],
  [32, 60, 42],
  [24, 60, 52],
  [47, 60, 47],
  [27, 60, 50],
  [48, 61, 42],
  [20, 61, 49],
  [23, 62, 41],
  [49, 62, 48],
  [67, 62, 59],
  [26, 62, 55],
  [49, 62, 56],
  [21, 62, 42],
  [66, 63, 50],
  [54, 63, 46],
  [68, 63, 43],
  [66, 63, 48],
  [65, 63, 52],
  [19, 63, 54],
  [38, 64, 42],
  [19, 64, 46],
  [18, 65, 48],
  [19, 65, 50],
  [63, 65, 43],
  [49, 65, 59],
  [51, 67, 43],
  [50, 67, 57],
  [27, 67, 56],
  [38, 67, 40],
  [40, 69, 58],
  [39, 69, 91],
  [23, 70, 29],
  [31, 70, 77],
  [43, 71, 35],
  [40, 71, 95],
  [59, 71, 11],
  [38, 71, 75],
  [47, 71, 9],
  [39, 71, 75],
  [25, 72, 34],
  [31, 72, 71],
  [20, 73, 5],
  [29, 73, 88],
  [44, 73, 7],
  [32, 73, 73],
  [19, 74, 10],
  [35, 74, 72],
  [57, 75, 5],
  [32, 75, 93],
  [28, 76, 40],
  [32, 76, 87],
  [25, 77, 12],
  [28, 77, 97],
  [48, 77, 36],
  [32, 77, 74],
  [34, 78, 22],
  [34, 78, 90],
  [43, 78, 17],
  [39, 78, 88],
  [44, 78, 20],
  [38, 78, 76],
  [47, 78, 16],
  [27, 78, 89],
  [37, 78, 1],
  [30, 78, 78],
  [34, 78, 1],
  [30, 78, 73],
  [56, 79, 35],
  [29, 79, 83],
  [19, 81, 5],
  [31, 81, 93],
  [50, 85, 26],
  [36, 85, 75],
  [42, 86, 20],
  [33, 86, 95],
  [36, 87, 27],
  [32, 87, 63],
  [40, 87, 13],
  [28, 87, 75],
  [36, 87, 10],
  [36, 87, 92],
  [52, 88, 13],
  [30, 88, 86],
  [58, 88, 15],
  [27, 88, 69],
  [59, 93, 14],
  [35, 93, 90],
  [37, 97, 32],
  [32, 97, 86],
  [46, 98, 15],
  [29, 98, 88],
  [41, 99, 39],
  [30, 99, 97],
  [54, 101, 24],
  [28, 101, 68],
  [41, 103, 17],
  [36, 103, 85],
  [34, 103, 23],
  [32, 103, 69],
  [33, 113, 8],
  [38, 113, 91],
  [47, 120, 16],
  [35, 120, 79],
  [45, 126, 28],
  [32, 126, 74],
  [32, 137, 18],
  [30, 137, 83],
];
const k = 2;

const clusters = kMeans(data, k);

export { clusters };
