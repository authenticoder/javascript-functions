function seed(...args) {
  return args;
}

function same([x, y], [j, k]) {
  // let a = arguments[0];
  // let b = arguments[1];
  // return JSON.stringify(a) === JSON.stringify(b);
  return x === j && y === k;
}

// The game state to search for `cell` is passed as the `this` value of the function.
function contains(cell) {
  let gameState = JSON.stringify(this);
  return gameState.includes(cell);
}

const printCell = (cell, state) => {
  // let alive = contains.call(state, cell);
  // if (alive) {
  //   return '\u25A3';
  // }
  // return '\u25A2';
  return contains.call(state, cell) ? "\u25A3" : "\u25A2";
};

const corners = (state = []) => {
  if (state.length) {
    // let [x, y] = [...state];

    // const bottomLeftX = x[0];
    // const bottomLeftY = x[1] - 1;
    // const topRightX = y[0];
    // const topRightY = y[1] + 1;

    const bottomLeftX = Math.min(...state.map((item) => item[0]));
    const bottomLeftY = Math.min(...state.map((item) => item[1]));
    const topRightX = Math.max(...state.map((item) => item[0]));
    const topRightY = Math.max(...state.map((item) => item[1]));

    return {
      topRight: [topRightX, topRightY],
      bottomLeft: [bottomLeftX, bottomLeftY],
    };
  } else {
    return {
      topRight: [0, 0],
      bottomLeft: [0, 0],
    };
  }
};

const printCells = (state) => {};

const getNeighborsOf = ([x, y]) => {};

const getLivingNeighbors = (cell, state) => {};

const willBeAlive = (cell, state) => {};

const calculateNext = (state) => {};

const iterate = (state, iterations) => {};

const main = (pattern, iterations) => {};

const startPatterns = {
  rpentomino: [
    [3, 2],
    [2, 3],
    [3, 3],
    [3, 4],
    [4, 4],
  ],
  glider: [
    [-2, -2],
    [-1, -2],
    [-2, -1],
    [-1, -1],
    [1, 1],
    [2, 1],
    [3, 1],
    [3, 2],
    [2, 3],
  ],
  square: [
    [1, 1],
    [2, 1],
    [1, 2],
    [2, 2],
  ],
};

const [pattern, iterations] = process.argv.slice(2);
const runAsScript = require.main === module;

if (runAsScript) {
  if (startPatterns[pattern] && !isNaN(parseInt(iterations))) {
    main(pattern, parseInt(iterations));
  } else {
    console.log("Usage: node js/gameoflife.js rpentomino 50");
  }
}

exports.seed = seed;
exports.same = same;
exports.contains = contains;
exports.getNeighborsOf = getNeighborsOf;
exports.getLivingNeighbors = getLivingNeighbors;
exports.willBeAlive = willBeAlive;
exports.corners = corners;
exports.calculateNext = calculateNext;
exports.printCell = printCell;
exports.printCells = printCells;
exports.startPatterns = startPatterns;
exports.iterate = iterate;
exports.main = main;
