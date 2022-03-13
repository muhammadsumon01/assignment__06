/**
 * Create a MERN stack, Laravel, Django, GoLang,  WordPress, java dives students data
 * structure and make their total income sheet with per developer data, Find specific
 * students.
 */

const devs = [
  ["Muhammad", "23", "Mern", "4200", "Uttara"],
  ["Imran", "42", "Java", "2300", "Mohammadpur"],
  ["Ashik", "10", "PHP", "3000", "Mirpur"],
  ["Sazzad", "17", "Java", "800", "Mohammadpur"],
  ["Arif", "90", "PHP", "1400", "Mirpur"],
  ["Maruf", "22", "WordPress", "1500", "Mirpur"],
  ["Siddik", "28", "Java", "1300", "Uttara"],
  ["Alif", "23", "WordPress", "400", "Uttara"],
  ["faiza", "23", "PHP", "700", "Uttara"],
  ["galib", "23", "Mern", "900", "Uttara"],
];

for (let i = 0; i < devs.length; i++) {

    // //Filter Based on name
    // if (devs[i][0] == "Siddik") {
    // devs[i].map((data) => console.log(data));
    // console.log(`
    // `)}

    // //Filter Based on Age
    // if (devs[i][1] >= 18) {
    // devs[i].map((data) => console.log(data));
    // console.log(`______________________
    // `)}

    //Filter Based on Location
    if (devs[i][4] == "Mirpur") {
    devs[i].map((data) => console.log(data));
    console.log(`______________________`)}


}


let total = 0;

devs.forEach(data => total = total + parseInt(data[3]))

console.log(`
Total Monthly Income = $${total}
______________________________________
`);