// CODE here for your Lambda Classes
class Person {
  constructor (attributes){
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person{
  constructor(InstructorAttrabutes){
    super(InstructorAttrabutes);
    this.specialty = InstructorAttrabutes.specialty;
    this.favLanguage= InstructorAttrabutes.favLanguage;
    this.catchPhrase = InstructorAttrabutes.catchPhrase;
  }
  demo(subject){
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, name){
    console.log(`${this.student} recives a perfect score on ${subject}`);
  }
}

class Student extends Instructor{
  constructor(StudentAttrabutes){
    super(StudentAttrabutes);
    this.previousBackground =StudentAttrabutes.previousBackground;
    this.className = StudentAttrabutes.className;
    this.favSubjects = StudentAttrabutes.favSubjects;
  }
  listsSubjects(){
    this.favSubjects.forEach(element => console.log(element));
  }
  PRAssignment(subject){
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject){
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManagers extends Student {
  constructor(ProjectManagersAttrabutes) {
    super(ProjectManagersAttrabutes);
    this.gradClassName = ProjectManagersAttrabutes.gradClassName;
    this.favInstructor = ProjectManagersAttrabutes.favInstructor;
  }
  standUp(channel){
    console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
  }
  debugsCode(student, subject){
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}


const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
const andrew = new Student({
  name: 'andrew',
  location: 'seattle',
  age: 31,
  favSubjects: ['html','css','JS'],
  specialty: 'learning',
  catchPhrase: `JS is hard`,
  previousBackground: `boatbuilder`
});
const derrick = new ProjectManagers({
  name: 'derrick',
  location: 'someplace',
  age: 100,
  favSubjects: ['c','c++','JS'],
  specialty: 'c',
  catchPhrase: `Panda Express!!!`
});

console.log(derrick);
console.log(andrew.sprintChallenge('JavaScript'));
console.log(andrew.listsSubjects());
console.log(derrick.debugsCode(andrew, 'JavaScript'));
