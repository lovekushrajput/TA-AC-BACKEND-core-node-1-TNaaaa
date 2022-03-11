// Q. Create 2 files
//   1. area.js
//   2. app.js
//   3. In area.js write functions to calculate area of square, rectangle and circle and export them using module.exports
//   4. In app.js, require functions from area.js and execute the areas of given figures and console.log the results.

let  sqaureArea = function (side){
    console.log(side*side)
}

let rectangleArea = function (length,width) {
    console.log(2 * (length * width))
}

let circleArea = function (radius) {
    console.log(2 * 22/7*radius)
}


module.exports = {
    sqaureArea:sqaureArea,
    rectangleArea:rectangleArea,
    circleArea:circleArea,
}