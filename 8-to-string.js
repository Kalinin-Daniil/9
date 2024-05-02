export function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.getX = function getX() {
  return this.x;
};

Point.prototype.getY = function getY() {
  return this.y;
};

// BEGIN (write your solution here)
Point.prototype.toString = function toString() {
  return `(${this.getX()}, ${this.getY()})`;
};

// END

export function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
}

Segment.prototype.getBeginPoint = function getBeginPoint() {
  return this.beginPoint;
};

Segment.prototype.getEndPoint = function getEndPoint() {
  return this.endPoint;
};

// BEGIN
Segment.prototype.getLength = function getLength() {
  const deltaX = this.endPoint.getX() - this.beginPoint.getX();
  const deltaY = this.endPoint.getY() - this.beginPoint.getY();
  return Math.sqrt(deltaX ** 2 + deltaY ** 2);
};

Segment.prototype.toString = function toString() {
  return `[${this.beginPoint.toString()}, ${this.endPoint.toString()}]`;
};
// END