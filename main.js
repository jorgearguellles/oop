console.log('Connected');

// Way to create a literal Object
const natalia = {
  // attributes
  name: 'natalia',
  lastName: 'rojas',
  approvedCourses: [
    'Course Html',
    'Course CSS',
    'Course JS',
  ],

  // methods
  // way1: approvedNewCourse: ()=>{}
  // way2: approvedNewCourse(){}
  approvedNewCourse(newCourse){
    this.approvedCourses.push(newCourse);
  }
};

// Way to create a Prototype
function Student(name, lastName, approvedCourses){
  // attributes
  this.name = name;
  this.lastName = lastName;
  this.approvedCourses = approvedCourses;
  // Methods
  // way 1:
  // this.approvedNewCourse = function(newCourse){
  //  this.approvedCourses.push(newCourse);
  // };

}

//way 2:
Student.prototype.approvedNewCourse = function(newCourse){
  this.approvedCourses.push(newCourse);
};

// Student.prototype.removedACourse = function(course){
//   let indexOf = course.indexOf(course)
//   this.approvedCourses.filter(course);
// };

let jorge = new Student('jorge','arias', ['JS Course', 'Figma Course']);

