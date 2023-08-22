const board = JXG.JSXGraph.initBoard('box', {
    boundingbox: [-20, 20, 20, -20],
    axis: true
});

let a = board.createElement('slider', [[3, -5], [13, -5], [-20, 0, 20]], {name: 'a'});
let b = board.createElement('slider', [[3, -7], [13, -7], [-20, 0, 20]], {name: 'b'});

let postiveGraph = board.createElement('functiongraph', [function(x) {
    return Math.sqrt(Math.pow(x, 3) + a.Value() * x + b.Value());
}], {strokeWidth: 3, strokeColor: 'black'});

let negativeGraph = board.createElement('functiongraph', [function(x) {
    return -Math.sqrt(Mate.pow(x, 3) + a.Value() * x + b.Value());
}], {strokeWidth: 3, strokeColor: 'black'});