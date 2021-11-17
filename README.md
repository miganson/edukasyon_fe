
# Frontend code
This readme will explain how the UI works

## Input Grades Text Area
This text area will accept the input for the grades to be inputted in the database. 

 1. The input must start with the "Quarter" and the current quarter of  
    the year in a single digit number (1, 2, 3 ,4).
 2. The input must then be followed by the First and Last name of the
    student restricted in  one word each.
 3. The grade can then be inputted to the specific student    after the
    name. Home works will be inputted after the "H" and Test Grades
    will be inputted after "T"

    Example:

>     Quarter 1
>     Susan Smith H 75 88 94 95 84 68 91 74 100 82 93 T 73 82 81 92 85
>     John Wright H 86 55 96 78 93 85 80 74 76 82 62 T 82 89 93 70 74
>     Quarter 2
>     Susan Smith H 75 88 94 95 84 68 91 74 100 82 93 T 73 82 81 92 85
>     John Wright H 86 55 96 78 93 85 80 74 76 82 62 T 82 89 93 70 74

## Add Grades Button
This Button will add the inputted data in the text area to the database.

## Clear Grades Button
This Button will clear the database of all the students with their respective grades.

## Grades Link
This Link will direct the user to the specific homework grades and test grades per quarter of the sudent along with their computed final grade.

### Back Button
This will return the user to the user list page.

### Name
This will show the name of the specific student in review.

### quarter1, quarter2, quarter3, quarter4
This will show the specific quarter of the grades to be viewed.

### Homework
This will show the list of homework grades per student under the specific quarter.

### Tests
This will show the list of test grades per student under the specific quarter.

### Final Grade
This will show the computed final grade per student under the specific quarter.
The final grade is computed as follows and is rounded up to the nearest tenth.

    (Sum of all Test Grades x 60%) + (Sum of all Homework Grades x 40%)
The lowest Homework Grade per quarter per student is removed from the computation.

