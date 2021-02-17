let text = "JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript";
let javaScript = text.split(" ");
let count = 0;


for(let i = 0; i < text.length; i++)
    if(javaScript[i] === 'Javascript')
    count++
    console.log("Le mot javascript est mentionner " + count + " fois dans le texte")








// const msg = "JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript";
// const mot = "Javascript";

// console.log(`${msg.includes(mot) ? "Le mot javascript est bien présent" : "Le mot Javascript n'est pas présent"}`);







