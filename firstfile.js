

console.log("Hi, my name is jaouad and I'm 29 years old");

function whoAmI(name, age) {
    console.log(`Hi, my name is ${name} and I'm ${age} years old`);
    let yearOfBirth = 2018 - age;
    console.log(`I was born in ${yearOfBirth}`);
}

whoAmI("Jaouad", 30);

function yearOfBirth(age) {
    if (age < 0) {
        throw new Error ("That's impossible!")
    }
    let yearOfBirth = 2018 - age;
    return yearOfBirth;
}

try {
    yearOfBirth(40);
} catch(e) {
    console.error(e.message);
}
