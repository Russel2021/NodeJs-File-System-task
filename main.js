const fetch = require('node-fetch');
const fs = require("fs")

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => {
        fs.writeFileSync('./result/posts.json',JSON.stringify(json,null,2),(err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
    
        }
      })
    })

    
