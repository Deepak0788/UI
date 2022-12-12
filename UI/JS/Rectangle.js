class Rectangle extends Shape() {
    //initializing Object
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    getlength() {
        return this.length;
    }
    setlength() {
        this.length = this.length;
    }
    getwidth() {
        return this.width;
    }
    setwidth() {
        this.width = width;
    }
    setarea() {
        this.area = this.length * this.width;
    }
}