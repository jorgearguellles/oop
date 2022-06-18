class Class {
  constructor({name}){
    this.name = name
  }
}

class Course {
  constructor({name, classes = []}){
    this.name = name
    this.classes = classes
  }
}

const basicProgramming = new Course({
  name: 'Basic Programming course'
})
const definitiveProgrammingCourse = new Course({
  name: 'Definitive Programming course'
})
const advanceProgrammingCourse = new Course({
  name: 'Advance Programming course'
})

class LearningPaths {
  constructor({name, courses = []}){
    this.name = name
    this.courses = courses
  }
};

const videoGameSchool = new LearningPaths({ 
  name: 'Video Game School', 
  courses: [
    basicProgramming,
    definitiveProgrammingCourse,
    advanceProgrammingCourse
  ]
})

class Student {
  constructor({name = 'No name yet', lastName = 'No last name yet', approvedCourses = [], email = 'No email yet'}){
    this.name = name
    this.lastName = lastName
    this.approvedCourses = approvedCourses
    this.email = email
  };

  approvedNewCourse(newCourse){
    this.approvedCourses.push(newCourse);
  };
};