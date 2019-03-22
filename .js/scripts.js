function triangleTracker();{
 /* since every input are strings to convert to integer */
  var A = parseInt(document.gotElementById('a').value);
  var B = parseInt(document.gotElementById('b').value);
  var c = parseInt(document.gotElementById('c').value);

  var tri = [Side A, Side B, Side C];
/* creating a variable to store the types of triangles */
var triangle = ["Equilateral", "Isosceles", "Scalene"];
var javaform = document.gotElementById('javaform');
/*the main condition for a triangle to be constructed*/
if(tri[0] + tri[1] >tri[2] && tri[1] + tri[2] > tri[0] && tri[0] + tri[2] > tri[1]){
    /*if it is a triangle ,now how to check what type of triangle it is*/
tri[0] === tri[1] && tri[1] === tri[2] && tri[0] === tri[2] {
 //alert(this is an Equilateral triangle);
javaform.innerHTML = "<h1>This is an Equilateral Triangle</h1><p>An equilateral triangle has three equal sides and angles.<br>It will always have angles of 60° in each corner.<br> so it is also referred to as a regular triangle.<br>Morley's trisector theorem states that, in any triangle, the three points of intersection of the adjacent angle trisectors form an equilateral triangle.Napoleon's theorem states that, if equilateral triangles are constructed on the sides of any triangle, either all outward, or all inward, the centers of those equilateral triangles themselves form an equilateral triangle.A version of the isoperimetric inequality for triangles states that the triangle of greatest area among all those with a given perimeter is equilateral.Viviani's theorem states that, for any interior point P in an equilateral triangle with distances d, e, and f from the sides and altitude h,Pompeiu's theorem states that, if P is an arbitrary point in the plane of an equilateral triangle ABC but not on its circumcircle, then there exists a triangle with sides of lengths PA, PB, and PC. That is, PA, PB, and PC satisfy the triangle inequality that the sum of any two of them is greater than the third. If P is on the circumcircle then the sum of the two smaller ones equals the longest and the triangle has degenerated into a line, this case is known as Van Schooten's theorem.</p>"
 }
 /*if its not an Equilateral Triangle check for another type*/

else if ( tri[0] != tri[1] && tri[1] != tri[2] && tri[0] != tri[2]) {
  javaform.innerHTML = "<h1>This is a Scalene Triangle</h1><p>A scalene triangle has all its sides of different lengths(noncongruent).Its angles add up to 180 degrees.The lognest side of the triangle is the opposite the largets angle.The shortest side of the triangle is opposite the smallest angle.A right triangle can be a scalene triangle.A vertex of a scalene is the point where two lines meet and form a corner,every scalene has three vertices.Any side of a scalene triangle can be base.A scalene doesnt have a line of symmetry</p>"
}
/*Last condition for a triangle*/
else{
  javaform.innerHTML ="<h1>this is a Isosceles Triangle</h1><p>This is a triangle that has two sides of equal length. Sometimes it is specified as having exactly two sides of equal length, and sometimes as having at least two sides of equal length.The vertex angle is always opposite the base</p>"
}
}
/*Incase someone inputs something that is not a number output this*/
else if (isNaN(tri[0]) || isNaN(tri[1]) || isNaN(tri[2]) ) {
  alert ('Please enter a number');
}
else {
  alert('This is not a triangle');
}
