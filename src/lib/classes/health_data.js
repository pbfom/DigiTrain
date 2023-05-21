import rawData from '$lib/data/user_weight.json';

export function getLabels() {
    return rawData.weights.map(function(e) {
        return e.date;
    });
} 
export function getWeightData() {
    return rawData.weights.map(function(e) {
        return e.weight;
    });
} 

export function getWeightDifference() {
    var weightData = rawData.weights.map(function(e) {
        return e.weight;
    });

    return weightData[0] - weightData[weightData.length-1];
} 

export function getCurrentWeight() {
    var weightData = rawData.weights.map(function(e) {
        return e.weight;
    });

    return weightData[weightData.length-1];
} 