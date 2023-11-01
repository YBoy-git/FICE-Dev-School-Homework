var Vector = function (components) {
    this.coords = components.map(element => element);

    this.toString = function () {
        return `(${this.coords.join(",")})`;
    }

    this.haveSameDimensions = function (vector) {
        return this.coords.length === vector.coords.length;
    }

    this.equals = function (vector) {
        if (!this.haveSameDimensions(vector)) {
            return false;
        }

        return this.coords.every((coord, index) => coord === vector.coords[index]);
    }

    this.add = function (vector) {
        if (!this.haveSameDimensions(vector)) {
            throw new Error("Vectors can not be added");
        }

        return new Vector(this.coords.map((coord, index) => coord += vector.coords[index]));
    }

    this.subtract = function (vector) {
        if (!this.haveSameDimensions(vector)) {
            throw new Error("Vectors can not be subtracted");
        }

        return new Vector(this.coords.map((coord, index) => coord -= vector.coords[index]));
    }

    this.dot = function (vector) {
        if (!this.haveSameDimensions(vector)) {
            throw new Error("Vectors can not be multiplied");
        }

        return this.coords.reduce((acc, coord, index) => acc += coord * vector.coords[index], 0);
    }

    this.norm = function () {
        return Math.sqrt(this.coords.reduce((acc, coord) => acc += Math.pow(coord, 2)));
    }

    return this;
};
