//create a javascript program to print the following format
//name
//email
//address
//phone
//ceate a js array with 10 objects with email, name, address, phonekeys
//print each object in the above mentioned format pof array variable
/*const contacts = [
    { name: "John Doe", email: "john.doe@example.com", address: "123 Main St", phone: "123-456-7890" },
    { name: "Jane Smith", email: "jane.smith@example.com", address: "456 Elm St", phone: "987-654-3210" },
    { name: "Alice Johnson", email: "alice.johnson@example.com", address: "789 Oak St", phone: "555-123-4567" },
    { name: "Bob Brown", email: "bob.brown@example.com", address: "321 Pine St", phone: "444-555-6666" },
    { name: "Charlie Davis", email: "charlie.davis@example.com", address: "654 Maple St", phone: "333-444-5555" },
    { name: "Diana Evans", email: "diana.evans@example.com", address: "987 Birch St", phone: "222-333-4444" },
    { name: "Evan Foster", email: "evan.foster@example.com", address: "159 Cedar St", phone: "111-222-3333" },
    { name: "Fiona Green", email: "fiona.green@example.com", address: "753 Walnut St", phone: "666-777-8888" },
    { name: "George Harris", email: "george.harris@example.com", address: "852 Spruce St", phone: "999-888-7777" },
    { name: "Hannah White", email: "hannah.white@example.com", address: "951 Redwood St", phone: "000-111-2222" },
    
];

for (let i = 0; i < contacts.length; i++) {
    console.log(`name: ${contacts[i].name}`);
    console.log(`email: ${contacts[i].email}`);
    console.log(`address: ${contacts[i].address}`);
    console.log(`phone: ${contacts[i].phone}`);
    console.log('........................................'); // Add a blank line for better readability
}
//for in loop and for of loop used for object and array
//tree structure of objectin loop
//pattern print in js assignment 
*/

//pattern print in js assignment

const word = "programming";
for (let i = 0; i < word.length; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) {
        line += word[j];
    }
    console.log(line);
}

//numeric pattern print in js assignment
let n = 5;
for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += j;
    }
    console.log(line);
}
//reverse numeric line pattern print in js assignment

let m = 5;  
for (let i = 1; i <= m; i++) {
    let line = "";
    for (let j = i; j >= 1; j--) {
        line += j;
    }
    console.log(line);
}

