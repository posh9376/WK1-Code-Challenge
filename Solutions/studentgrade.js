function studentGradeGenerator() {
    //assigning marks a value by prompting user to input student marks
    const marks = parseInt(prompt('Enter the students marks: '))

     // checking if marks is greater than 79 and returning an A if it has  
    if (marks > 79) {
        return('Student has scored a clean A :-)')
    }
    //if the marks is between 60 an 79 the student is granted a B
    else if (marks >= 60 && marks <= 79) {
        return('Student has scored a B')
    }
    //Ensuring that if the student has scored between 49 and 59 they are given a C
    else if (marks >= 49 && marks <= 59) {
        return('Student has scored a C')
    }
    ///Ensuring that if the student has scored between 40 and 59 they are given a D
    else if (marks >= 40 && marks <= 49){
        return('Student scored a D')
    }
    ///Ensuring that if the student has scored between 49 and 59 they are given a c
    else if (marks < 40){
        return('Student scored an E :-(')
    }
    //ensures that is the input is not a number the user is made aware to input anumber next time
    else{
        return('Enter a number next time!!')
    }
    
   
    
}