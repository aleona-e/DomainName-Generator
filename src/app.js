window.onload = function() {
  let pronoun = ["my", "your", "the", "our"];
  let adj = ["big", "amazing", "fancy", "pink"];
  let noun = ["plant", "car", "sunset", "mouse"];
  let extension = [".com", ".io", ".co", ".es"];

  //forEach
  function domainNameGeneratorForEach() {
    let currentDomain = "";
    let allDomains = [];
    pronoun.forEach(function(eachPronoun) {
      adj.forEach(function(eachAdj) {
        noun.forEach(function(eachNoun) {
          extension.forEach(function(eachExtension) {
            currentDomain = eachPronoun + eachAdj + eachNoun + eachExtension;
            allDomains.push(currentDomain);
          });
        });
      });
    });
    return allDomains;
  }

  let all = domainNameGeneratorForEach();
  let ul = document.getElementById("domain");
  //for each element in the array create a li tag
  all.forEach(function(element) {
    let li = document.createElement("li");
    //each li is a domain
    li.innerHTML = element;
    //put the li(s) inside the ul
    ul.appendChild(li);
  });

  console.log(domainNameGeneratorForEach);
};

/*regular for//
  function domainNameGenerator() {
    let currentDomain = "";
    let allDomains = [];
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < extension.length; l++) {
            currentDomain = pronoun[i] + adj[j] + noun[k] + extension[l];
            allDomains.push(currentDomain);
          }
        }
      }
    }
    return allDomains;
  }
*/
//let myFunction = (a, b) => a * b;
/*hello = () => {
    return "Hello World!";
  }

  hello = function() {
  return "Hello World!";
}
*/
/*
  const printSomething = () => console.log("blablabla");
  const printSomething2 = (something) => console.log(something);
  const printSomething3 = (something) => {
    return something.toUpperCase();
  };
  */
