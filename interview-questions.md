# ASSESSMENT 3: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. What is object destructuring?

  Your answer: this allows an object/method to be called in the program without needing to reference it's state. Basically giving it a shorter nick-name to use more easily in the program but so it still knows wtf it's talking about.

  Researched answer:
  Destructuring on objects lets you bind variables to different properties of an object. You specify the property being bound, followed by the variable you are binding its value to



2. What are the three arguments that .map() and .filter() can accept?

  Your answer: Value, index, array

  Researched answer: Under the hood, map passes three arguments to your callback:

      - The current item in the array
      - The array index of the current item
      - The entire array you called map on 



3. What is the difference between a class and an object?

  Your answer:
  A class is a blueprint for objects that is created with certain specifications, where an object is a specific instance of the class. Class - human, object - Rachael. Classes can also have child classes that provide additional specifications while maintaining the specifications/blueprint of the parent. Parent class - human, child class - woman, object - Rachael.  

  Researched answer:
  A class defines object properties including a valid range of values, and a default value. A class also describes object behavior. An object is a member or an "instance" of a class.


4. What is the difference between a HTML div and a span?

  Your answer:
  A div is for a block of code, while a span is for in-line code

  Researched answer:
  The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.


5. What is React.Fragment and why would you want to use it?

  Your answer:
  It separates your JSX from the HTML portion of the React file. 

  Researched answer: 
  A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.


6. What are three options for creating responsive design?

  Your answer:
    Using a meta tag with viewport
    Using bootstrap
    Media queries
    

  Researched answer:
  - Flexible layouts - Using a flexible grid to create the website layout that will dynamically resize to any width.
  - Media queries - An extension to media types when targeting and including styles. Media queries allow designers to specify different styles for specific browser and device circumstances.
  - Flexible media - Makes media (images, video and other formats) scalable, by changing the size of the media as the size of the viewport changes.


## Looking Ahead: Terms for Next Week
- Object oriented programming
  Object-oriented programming (OOP) refers to a type of computer programming (software design) in which programmers define the data type of a data structure, and also the types of operations (functions) that can be applied to the data structure.

- irb
  IRB stands for "Interactive Ruby." It's a Ruby shell or REPL. REPL stands for read–eval–print loop.

- Instance variable
  In object-oriented programming with classes, an instance variable is a variable defined in a class (i.e. a member variable), for which each instantiated object of the class has a separate copy, or instance. An instance variable is similar to a class variable.

- Ruby hash
  A Hash is a dictionary-like collection of unique keys and their values. Also called associative arrays, they are similar to Arrays, but where an Array uses integers as its index, a Hash allows you to use any object type.

- Class relationships
  Three important relationships in Ruby are known as ‘belongs to…’, ‘has many…’, and “has many of each other”. The ‘belongs to’ and ‘has many’ relationships are considered to be the inverse of one another. 

- Getter and Setter methods in Ruby
  These methods allow us to access a class’s instance variable from outside the class. Getter methods are used to get the value of an instance variable while the setter methods are used to set the value of an instance variable of some class.