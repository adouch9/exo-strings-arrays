let msg = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

let sanitize = msg.trim()
let sanitize2 = sanitize.toUpperCase()


console.log(sanitize2);

let splitMsg = sanitize2.split(" ");

let count = 0

for (let i = 0; i < splitMsg.length; i++)
  if (splitMsg[i] === `BOB`)
    count++
