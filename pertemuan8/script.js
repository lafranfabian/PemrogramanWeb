function sayHello() {
    document.write("Hello Folks!!<br>");
}

sayHello();
sayHello();

function sayHellowithname(firstname, lastname = "brian"){
    document.write("Hello " + firstname + " " + lastname+"! <br>")
}

sayHellowithname("alex","sanches");
sayHellowithname("Jago");

function register(name,gender= 'unknown'){
    document.write(`Register ${name} with gender: ${gender}</br>`)

}

register("andre","men");
register("andres");

let hello = function (name) {
    document.write(`Hello ${name}</br>`);
}

hello('Andre')

function outerFunction(outerVariable){
    function innerFunction(innerVariable){
        document.write("outer Variable: "+ outerVariable+"</br>");
        document.write("Inner Variable: "+ innerVariable);
    }
    innerFunction("Inner");
}
outerFunction("Outer");
const greet = (name) => {
    document.write("Hello, "+ name + "!");
};

greet("Charlie");
document.write('</br>')
function outerFunction(outerVariable){
   return function innerFunction(innerVariable){
        document.write("outer Variable: "+ outerVariable+"</br>");
        document.write("Inner Variable: "+ innerVariable);
    }
}
const newFunction = outerFunction("Outer");
newFunction('Inner');
newFunction('Outer');