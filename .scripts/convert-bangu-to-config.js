var fs = require('fs');
var path = require('path-extra');

var ncp = require('ncp').ncp;
const langs = ["en","cipra","ru","eo","es","fr-facile","ile","ina","ithkuil","ja","jbo","laadan","ldp","ru","zamenhofo","toki","jb","en-pt-BR","muplis","muplis-eng-pol"];
// var wget = require('wget-improved');

langs.forEach(l => {
  // var src = "https://raw.githubusercontent.com/La-Lojban/sutysisku/master/"+l+"/bangu.js";
  // var output = path.join(__dirname, '../' + l + '/bangu-old.js');
  // var options = {
  //     // see options below
  // };
  // var download = wget.download(src, output, options);
  // download.on('error', function(err) {
  //     console.log(err);
  // });
  // download.on('start', function(fileSize) {
  //     console.log(fileSize);
  // });
  // download.on('end', function(output) {
  //     console.log(output);
  // });
  // download.on('progress', function(progress) {
  //     // code to show progress bar
  // });

  const bangujs = path.join(__dirname, '../' + l + '/bangu.js');
  const banguoldjs = path.join(__dirname, '../' + l + '/bangu-old.js');
  const configjs = path.join(__dirname, '../' + l + '/config.json');
  const bangudata = (fs.existsSync(banguoldjs)?fs.readFileSync(banguoldjs, 'utf8'):'').split(";\n");
  let configdata = {};//(fs.existsSync(configjs)?fs.readFileSync(configjs, 'utf8'):'').split(";\n");
  let newbangudata=[];
  for (let i in bangudata){
    if (/^(\/\/.*?\n)?(window\.)?(xuzganalojudri)/.test(bangudata[i])){
      const g=bangudata[i].replace(/^window\./,'').split("=");
      const key = g.shift().trim();
      const value = g.join("=").trim().replace(/^["']/,'').replace(/["']$/,'');
      if (key) configdata[key]=value;
    }
    if (/^(\/\/.*?\n)?(window\.)?(nasezvafahi|bangudecomp|bangulo|bangubuild|xuzganalojudri|judri|cllnotci|purc|arrcll)/.test(bangudata[i])){
      newbangudata.push(bangudata[i]);
    }
    else {
      bangudata[i]=bangudata[i].replace(/^window\./,'').split("=");
      const key = bangudata[i].shift().trim();
      const value = bangudata[i].join("=").trim().replace(/^["']/,'').replace(/["']$/,'');
      if (key) configdata[key]=value;
    }
  }
  //try{fs.unlinkSync(bangujs + "-old");}catch(e){}
  // fs.writeFileSync(bangujs + "-old", bangudata, 'utf8', function(err) {
  //   if (err)
  //     return console.log(err);
  //   }
  // );
  fs.writeFileSync(bangujs, newbangudata.join(";\n")+";", 'utf8', function(err) {
    if (err)
      return console.log(err);
    }
  );
  fs.writeFileSync(configjs, JSON.stringify(configdata,null," "), 'utf8', function(err) {
    if (err)
      return console.log(err);
    }
  );
});
