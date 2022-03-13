/**
 * Create an array data structure with some data of fifth-grade students where their results will be published based on
 * GPA and grade based on. Publish CGPA and final grade in the final result
 */


/**
 * CGPA, GPA, Grade Calculation
 */

// Roll Number -
// Name -
// Father Name -
// Mother Name -
// Location -
// Bangla (bn) -
// English (en) -
// Math -
// Science -
// Social Science -
// Religion -


const students = [
    [1, "Muhammad Sumon", "Joshim Ahmed","Asifa Begum", "Uttara", 67 , 35 , 34 , 79 , 88 , 99 ],
    [2, "Imran Khan", "Imu Rahman","Asifa Begum", "Mirpur", 77 , 49 , 84 , 89 , 48 , 29 ],
    [3, "karim", "Joshim Ahmed","Jannat Begum", "Mohammadpur", 47 , 72 , 34 , 59 , 88 , 99 ],
    [4, "saif", "Rahim Ahmed","Rahima Begum", "Mirpur", 57 , 62 , 54 , 39 , 88 , 89 ],
    [5, "adib", "Karim Ahmed","Karima Begum", "Uttara", 67 , 72 , 74 , 79 , 68 , 49 ],
    [6, "Siratun", "Asif Ahmed","Asifa Begum", "Uttara", 77 , 42 , 24 , 69 , 48 , 69 ],
    [7, "Sazzad Rahman", "Saima Ahmed","Saima Khatun", "Uttara", 87 , 62 , 44 , 79 , 58 , 79 ],
    [8, "Alif", "Joshim Ahmed","Kais Begum", "Mohammadpur", 97 , 92 , 74 , 49 , 28 , 19 ],
    [9, "Hasna", "Joshim Ahmed","Bias Begum", "Mirpur", 57 , 42 , 34 , 79 , 78 , 49 ],
    [10, "Josna", "Joshim Ahmed","Asidfa Begum", "Mohammadpur", 87 , 72 , 34 , 79 , 88 , 99 ],
]

 function ResultCalc() {


    // Data from user

    // this.studentName = prompt(`What's your name?`);
    // this.studentRoll = prompt(`What's your roll?`);

    // this.bangla = prompt(`What's your total mark in bangla?`);
    // this.english = prompt(`What's your total mark in english?`);
    // this.math = prompt(`What's your total mark in math?`);
    // this.science = prompt(`What's your total mark in science?`);
    // this.religion = prompt(`What's your total mark in religion?`);

    let studentIndexNum = 2; // Please change this value to see changes


    this.studentName    = students[studentIndexNum][1];
    this.studentRoll    = students[studentIndexNum][0];

    this.bangla         = students[studentIndexNum][5];
    this.english        = students[studentIndexNum][6];
    this.math           = students[studentIndexNum][7];
    this.science        = students[studentIndexNum][8];
    this.SocialScience  = students[studentIndexNum][9];
    this.religion       = students[studentIndexNum][10];

    this.totalNumber = parseInt(this.bangla) + parseInt(this.english) + parseInt(this.math) + parseInt(this.science) + parseInt(this.religion);

    this.gpaCalc = number => {

            if (number >= 0 && number <= 32) {
                    return 0;
            } else if (number >= 33 && number <= 39) {
                    return 1;
            } else if (number >= 40 && number <= 49) {
                    return 2;
            } else if (number >= 50 && number <= 59) {
                    return 3;
            } else if (number >= 60 && number <= 69) {
                    return 3.5;
            } else if (number >= 70 && number <= 79) {
                    return 4;
            } else if (number >= 80 && number <= 100) {
                    return 5;
            } else {
                    return 'Enter Correct Number Between 0 - 100'
            }

    }

    this.gradeCalc = number => {

            if (number >= 0 && number <= 32) {
                    return 'F';
            } else if (number >= 33 && number <= 39) {
                    return 'D';
            } else if (number >= 40 && number <= 49) {
                    return 'C';
            } else if (number >= 50 && number <= 59) {
                    return 'B';
            } else if (number >= 60 && number <= 69) {
                    return 'A-';
            } else if (number >= 70 && number <= 79) {
                    return 'A';
            } else if (number >= 80 && number <= 100) {
                    return 'A+';
            } else {
                    return 'Enter Correct Number Between 0 - 100'
            }

    }




    this.passFailCheck = () => {

            let cgpa = ((this.gpaCalc(this.bangla)) + (this.gpaCalc(this.english)) + (this.gpaCalc(this.math)) + (this.gpaCalc(this.science)) + (this.gpaCalc(this.religion))) / 5;


            if ((this.gpaCalc(this.bangla)) == 0 || this.gpaCalc(this.english) == 0 || this.gpaCalc(this.math) == 0 || this.gpaCalc(this.science) == 0 || this.gpaCalc(this.religion) == 0) {
                    return `Failed`;
            } else {
                    return cgpa;
            }

    }

}

let resultCheck = new ResultCalc();

console.log(`

    Hi ${resultCheck.studentName}! Your Roll Number ${resultCheck.studentRoll}. Your Result Processing Done. Check below !

    -------------------------------------------------------
    Subject Name    | Subject Number | GPA        | GRADE
    -------------------------------------------------------
    Bangla          | ${resultCheck.bangla}             | ${resultCheck.gpaCalc(resultCheck.bangla)}          | ${resultCheck.gradeCalc(resultCheck.bangla)}
    English         | ${resultCheck.english}             | ${resultCheck.gpaCalc(resultCheck.english)}          | ${resultCheck.gradeCalc(resultCheck.english)}
    Math            | ${resultCheck.math}             | ${resultCheck.gpaCalc(resultCheck.math)}          | ${resultCheck.gradeCalc(resultCheck.math)}
    Science         | ${resultCheck.science}             | ${resultCheck.gpaCalc(resultCheck.science)}          | ${resultCheck.gradeCalc(resultCheck.science)}
    Social Science  | ${resultCheck.SocialScience}             | ${resultCheck.gpaCalc(resultCheck.SocialScience)}          | ${resultCheck.gradeCalc(resultCheck.SocialScience)}
    Religion        | ${resultCheck.religion}             | ${resultCheck.gpaCalc(resultCheck.religion)}          | ${resultCheck.gradeCalc(resultCheck.religion)}
    -------------------------------------------------------
              Total - ${resultCheck.totalNumber}       CGPA - ${resultCheck.passFailCheck()}
`);