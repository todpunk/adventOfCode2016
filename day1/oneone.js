'use strict';

var origin = {EW: 0, NS: 0, dir: 'N'};
var dirMap = {
    N: {L: 'W', R: 'E'},
    E: {L: 'N', R: 'S'},
    S: {L: 'E', R: 'W'},
    W: {L: 'S', R: 'N'}
}

var dirMod = {
    N: {axisKey: 'NS', multiplier: 1},
    E: {axisKey: 'EW', multiplier: 1},
    S: {axisKey: 'NS', multiplier: -1},
    W: {axisKey: 'EW', multiplier: -1}
}

var input = 'R3, L5, R2, L1, L2, R5, L2, R2, L2, L2, L1, R2, L2, R4, R4, R1, L2, L3, R3, L1, R2, L2, L4, R4, R5, L3, R3, L3, L3, R4, R5, L3, R3, L5, L1, L2, R2, L1, R3, R1, L1, R187, L1, R2, R47, L5, L1, L2, R4, R3, L3, R3, R4, R1, R3, L1, L4, L1, R2, L1, R4, R5, L1, R77, L5, L4, R3, L2, R4, R5, R5, L2, L2, R2, R5, L2, R194, R5, L2, R4, L5, L4, L2, R5, L3, L2, L5, R5, R2, L3, R3, R1, L4, R2, L1, R5, L1, R5, L1, L1, R3, L1, R5, R2, R5, R5, L4, L5, L5, L5, R3, L2, L5, L4, R3, R1, R1, R4, L2, L4, R5, R5, R4, L2, L2, R5, R5, L5, L2, R4, R4, L4, R1, L3, R1, L1, L1, L1, L4, R5, R4, L4, L4, R5, R3, L2, L2, R3, R1, R4, L3, R1, L4, R3, L3, L2, R2, R2, R2, L1, L4, R3, R2, R2, L3, R2, L3, L2, R4, L2, R3, L4, R5, R4, R1, R5, R3';

function move(turnDir, distance) {
  // Change the direction we're facing to the appropriately mapped result
  origin.dir = dirMap[origin.dir][turnDir];
  // Move in that direction for the appropriate spaces
  var axis = dirMod[origin.dir].axisKey
  origin[axis] += dirMod[origin.dir].multiplier * distance;
}

function runPlot(instruction) {
  var turndir = instruction[0];
  var distance = parseInt(instruction.substr(1));
  move(turndir, distance);
}

input = input.replace(',', '').split(' ');

input.forEach(runPlot);

console.log(Math.abs(origin.EW) + Math.abs(origin.NS))
