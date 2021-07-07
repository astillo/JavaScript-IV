// CODE here for your Lambda Classes
class Person {
    constructor(att){
        this.name = att.name;
        this.age = att.age;
        this.location = att.location;
    }
    speak(){
        return `hello my name is ${this.name} I am from ${this.location}.`
    }
}

class Instructor extends Person{
    constructor(att){
        super(att)
        this.specialty = att.specialty;
        this.favLanguage = att.favLanguage;
        this.catchPhrase = att.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject){
        return `${student} recieves a perfect score on ${subject}`
    }
    
}

class Student extends Person{
    constructor(att){
        super(att)
        this.previousBackground = att.previousBackground;
        this.className = att.className;
        this.favSubjects = att.favSubjects;
    }
    listSubjects(){
        for (let i = 0 ; i<this.favSubjects.length; i++){
            console.log(this.favSubjects[i]) 
        }
    }
    PRAssignment(subject){
        return `${this.name} has submited a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has begun the sprint challenge on ${subject}`
    }
}

class ProjectManagers extends Instructor{
    constructor(att){
        super(att)
        this.gradClassName = att.gradClassName;
        this.favInstructor = att.favInstructor;
    }
    standup(slack){
        return `${this.name} announces to ${slack} standy times!`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}`
    }
}

const alex = new Student({
    name: 'Alex Stillo',
    location: 'Houston',
    age: 21,
    previousBackground: 'Transcore',
    className: 'Web21',
    favSubjects: ['Programming', 'History', "LA", "Math"],
});

const will = new ProjectManagers({
    name: 'Will U',
    location: 'Abeline',
    age: 26,
    favLanguage: 'Javascript',
    specialty: 'Front-end',
    catchPhrase: 'Wubba lubba dub dub',
    gradClassName: 'Havard',
    favInstructor: 'Dan Levy'
})
const dan = new Instructor({
    name: 'Dan Levy',
    location: 'Denver',
    age: 28,
    favLanguage: 'React',
    specialty: 'back-end',
    catchPhrase: 'Wubba lubba wubba dub',
})
console.log('******************')
console.log(alex.speak())
console.log(alex.listSubjects())
console.log(alex.PRAssignment('Math'))
console.log(alex.sprintChallenge('Javascript 4'))
console.log(alex.previousBackground)
console.log("*******************")
console.log(will.speak())
console.log(will.catchPhrase)
console.log(will.standup('web21_will'))
console.log(will.debugsCode('alex stillo', 'javascript 4'))
console.log(will.gradClassName)
console.log("*******************")
console.log(dan.speak())
console.log(dan.demo('Javascript 3'))
console.log(dan.grade('alex stillo', 'javascript 3'))
console.log(dan.catchPhrase)




