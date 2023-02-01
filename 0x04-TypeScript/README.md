solutions to typescript exercises

0. Write your code in the main.ts file:

        Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
        Create two students, and create an array named studentsList containing the two variables
        Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
        Each row should contain the first name of the student and the location

    Requirements:

        When running, Webpack should return No type errors found.
        Every variable should use TypeScript when possible.

1. Create a directory task_1 and copy these configuration files into this folder: package.json, tsconfig.json, webpack.config.js

        firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
        fullTimeEmployee(boolean) this attribute should always be defined
        yearsOfExperience(number) this attribute is optional
        location(string) this attribute should always be defined
        Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute

2. Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)

3. Write a function printTeacher:

        It accepts two arguments firstName and lastName
        It returns the first letter of the firstName and the full lastName
        Example: printTeacher("John", "Doe") -> J. Doe

        Write an interface for the function named printTeacherFunction.

4. Write a Class named StudentClass:

        The constructor accepts firstName(string) and lastName(string) arguments
        The class has a method named workOnHomework that return the string Currently working
        The class has a method named displayName. It returns the firstName of the student
        The constructor of the class should be described through an Interface
        The class should be described through an Interface

    Requirements:

        You can reuse the Webpack configuration from the previous exercise to compile the code.
        When running npm run build, no TypeScript error should be displayed.
        Every variable should use TypeScript when possible.


