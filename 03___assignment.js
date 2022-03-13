/**
 * Send a welcome message to everyone over the age of 18 based on the age of the data
 * array of all the members of a club and send a greeting message to the person over the
 * age of 40, of course, send the message through a function, and to those who are under
 * 18 years of age. Give the message to be attentive.
 */


const cludMembers = [
    [42, "Sumon", 53],
    [34, "Imran", 24],
    [12, "Alif", 28],
    [32, "Asif", 11],
    [41, "Asraf", 14],
    [67, "Abid", 34],
    [45, "Saif", 43],
    [96, "Sazzad", 23],
    [21, "Saimon", 45],
    [33, "Saifa", 64],
];

let memberIndexNum = 1;


if(cludMembers[memberIndexNum][2] <= 18){

    console.log(`Priyo ${cludMembers[memberIndexNum][1]} vai/bon apnake not welcome !!`);

}else if(cludMembers[memberIndexNum][2] >= 18 && cludMembers[memberIndexNum][2] <= 40){

    console.log(`Priyo ${cludMembers[memberIndexNum][1]} vai/bon apni amader vip member. Please come in!!`);

}else if(cludMembers[memberIndexNum][2] > 40){

    console.log(`Priyo ${cludMembers[memberIndexNum][1]} vai/bon apni amader chieft guest. Please come in!!`);

}else{
    `Look like something happened`
}