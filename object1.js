//objects in js
// wanna print a symbol first declare it (outside) and use it as a key in ur code after that print
const symb = Symbol("key1"); //declaring

const JsUser = {
    name : "hima",
    [symb] : "mykey1", //as a key
    age: 18,
    email : "hima@google.com",
}
console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser.age);
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[symb]);

// change or update email 
JsUser.email = "hima@chatgpt.com";
console.log(JsUser.email);

//want to apply lock on data  , we freeze it
Object.freeze(JsUser);
//check if actually freeze/lock or not ...?

JsUser.name = "neha";
console.log(JsUser.name);
