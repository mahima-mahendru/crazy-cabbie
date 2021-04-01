class Node {
    constructor(column, row, nodeSize, isStart, isFinish, isWall, grid,) {
        this.grid = grid;

        // Position
        this.column = column;
        this.row = row;

        // Width and Height
        this.nodeSize = nodeSize;

        this.isStart = isStart;
        this.isFinish = isFinish;
        this.isWall = isWall;
        
        // Neighbouring nodes
        this.neighbours = [];

        this.previousNode = null;

        this.isVisited = false;

        this.distance = Infinity;
    }

    getColour() {
        if (this.isStart == true) {
            return "#59d3de";
        } else if (this.isFinish == true) {
            return "#2284e6";
        } else if (this.isWall == true) {
            return "#000000";
        } else if (this.isVisited == true) {
            return "#9b97f0";
        }
        else {
            return "#ffd31d";
        }
    }

    draw() {
        if (this.isStart == true || this.isFinish == true || this.isWall == true  ) {
            ctx.fillStyle = this.getColour();
            ctx.fillRect(this.column * nodeSize, this.row * nodeSize, nodeSize, nodeSize);
        }
        else if(this.isVisited==true){
            ctx.fillStyle = this.getColour();
            ctx.fillRect(this.column * nodeSize, this.row * nodeSize, nodeSize, nodeSize);
        }
        else {
            ctx.lineWidth = 1;
            ctx.strokeStyle = "#000000";
            ctx.strokeRect(this.column * nodeSize, this.row * nodeSize, nodeSize, nodeSize);
        }
    }

    getNeighbours() {
        if (this.neighbours.length == 0) {
            this.populateNeighbours();
        }
        return this.neighbours;
    }

    populateNeighbours() {
        //top
        if (this.column > 0 && this.grid[this.column - 1][this.row]) {
            this.grid[this.column][this.row].neighbours.push(this.grid[this.column - 1][this.row]);
        }

        //bottom
        if (this.column < this.grid.length - 1 && this.grid[this.column + 1][this.row]) {
            this.grid[this.column][this.row].neighbours.push(this.grid[this.column + 1][this.row]);
        }

        //left
        if (this.grid[this.column][this.row - 1]) {
            this.grid[this.column][this.row].neighbours.push(this.grid[this.column][this.row - 1]);
        }

        //right
        if (this.grid[this.column][this.row + 1]) {
            this.grid[this.column][this.row].neighbours.push(this.grid[this.column][this.row + 1]);
        }
    }

    clicked() {
        this.isWall = !this.isWall;
    }
}