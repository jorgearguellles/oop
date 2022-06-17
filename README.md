# Object-oriented programming (OOP)

# Progress traking

- [1] Last number class

## Goals

- Understand how objects work in JavaScript.
- Discover the advantages of using OOP.
- Order your code with abstraction and encapsulation.
- Reuse your code with inheritance and polymorphism.

> - Object can be physical or conceptual.
> - Object have properties and methods
>   > Property = object's characteristics
>   > Methods = object's behaviors

## 1. JavaScript Object Oriented

- **What is OOP?**

To answer the last questions, before we need speak about Paradigms.

When we write code, we can find a problem and resolve it through infinite approach.
When similar approach are resoling the same problem, we can name it Paradigm.
In Programming we have few main paradigm, like:

- Structure Paradigm
- Object Oriented Paradigm
- Functional Paradigm

We need to learn in which work context favors applying one paradigm or another.

- OOP Ventage
  - Order
  - Reuse code

## 2. Objects, Classes and Prototypes

- **What is a Object in JS?**

> Literal objects !== Instances of classes

|      Item       |         Literal object         |   object (oop)   |             object              |
| :-------------: | :----------------------------: | :--------------: | :-----------------------------: |
|  \_\_proto\_\_  |               ✅               |        ✅        |               ✅                |
| What origin is? | Prototype JS Object´s Instance | Class´s Instance | Prototype Own Object´s Instance |

- **What Prototype is?**

A Prototype is a data structure from which objects are created, since it stores the attributes and methods that can later be inherited by their instances.

- Literal Objects VS Prototype

  - Literal object

    ```js
    // Way to create a literal Object
    const natalia = {
      // attributes
      name: "natalia",
      lastName: "rojas",
      approvedCourses: ["Course Html", "Course CSS", "Course JS"],

      // methods
      // way1: approvedNewCourse: ()=>{}
      // way2: approvedNewCourse(){}
      approvedNewCourse(newCourse) {
        this.approvedCourses.push(newCourse);
      },
    };
    ```

  - Prototype

  ```js
  // Way to create a Prototype
  function Student(name, lastName, approvedCourses) {
    // attributes
    this.name = name;
    this.lastName = lastName;
    this.approvedCourses = approvedCourses;
    // Methods
    // way 1:
    // this.approvedNewCourse = function(newCourse){
    //  this.approvedCourses.push(newCourse);
  }

  //way 2:
  Student.prototype.approvedNewCourse = function (newCourse) {
    this.approvedCourses.push(newCourse);
  };
  ```

| Create methods |      Literal object       |                                              Prototype                                              |
| :------------: | :-----------------------: | :-------------------------------------------------------------------------------------------------: |
|    Way one     | approvedNewCourse: ()=>{} |        this.approvedNewCourse = function(newCourse){this.approvedCourses.pus (newCourse); };        |
|    Way two     |   approvedNewCourse(){}   | Student.prototype.approvedNewCourse = function(newCourse){ this.approvedCourses.push(newCourse); }; |

- **What are Classes in JS**

Classes are only syntactical sugar for constructor functions. Everything still works the same way!

![](https://res.cloudinary.com/practicaldev/image/fetch/s--3PePIjz5--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/qnbqubcipqjl5pb3i8ds.gif)

**RORO** Patron mean, Receive an object and return an object.

## 3. OOP Pilar

### 3.1 Abstraction

### 3.2 Encapsulation

### 3.3 Inheritance

### 3.4 Polymorphism
