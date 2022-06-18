function videoPlay(id){
  const urlSecret = 'www.t.url-secret/' + id;
  console.log('Is Playing the video by '+ urlSecret)
}
function videoStop(id){
  const urlSecret = 'www.t.url-secret/' + id;
  console.log('Stop video from '+ urlSecret)
}

class PlatziClass {
  constructor({name, videoID}){
    this.name = name
    this.videoID = videoID
  };

  play(){

  };

  pause(){

  };

};



class Course {
  constructor({name, classes = []}){
    /* 
    this._name communicate don't call directly
    this attribute outside of the class
    So, we have to create a function to call this attribute
    and this is the security way to get this attribute
    */ 
    this._name = name
    this.classes = classes
  };

  get name(){
    return this._name;
  }

  set name(newName){
    if ( newName === 'Bad course'){
      console.error( newName + ' is not a valid name, please try a new name')
    } else {
      this._name = newName;
    }
  }

};




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