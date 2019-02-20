// JavaScript Document
// This script generates .html files for la sutysisku of every localization
// the template is taken from cipra/template.html file

//import
const fs = require("fs"),
  path = require("path-extra");

//config
const args = process.argv.slice(2);
const langs =
  args.length > 0
    ? args
    : [
        "en",
        "cll",
        "ru",
        "eo",
        "es",
        "fr-facile",
        "ile",
        "ina",
        "ithkuil",
        "ja",
        "jbo",
        "laadan",
        "ldp",
        "ru",
        "zh",
        "zamenhofo",
        "epo-tha",
        "simplingua-zho",
        "toki",
        "ktv-eng",
        "jb",
        "en-pt-BR",
        "muplis",
        "muplis-eng-pol",
        "cipra"
      ];
//read template.html into var
const template = fs.readFileSync(
  path.join(__dirname, "../../i/cipra", "template.html"),
  {
    encoding: "utf8"
  }
);
//read sisku.xml template into var
const sisku = fs.readFileSync(
  path.join(__dirname, "../../i/cipra", "sisku.xml"),
  {
    encoding: "utf8"
  }
);

//functions
//generic
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function rgbToHex(rgb) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
}

function fullColorHex(r, g, b) {
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);
  return "#" + red + green + blue;
}

//tempalting - remove parts not relevant to the current sutysisku
String.prototype.stripout = function(config, tag) {
  const tags = tag
    .split("\\|")
    .map(j => (config[j] && config[j] !== "false" ? true : false));
  const m = tags.includes(true);
  const ku = m ? "$1" : "";
  const antiku = !m ? "$1" : "";
  // console.log(tag, m, "-" + ku + "-", antiku);
  return (
    this
      //OR operator
      .replace(
        new RegExp(
          "\\/\\/<" + tag + ">([\\s\\S]*?)\\/\\/<\\/" + tag + ">",
          "gm"
        ),
        ku
      )
      .replace(new RegExp("<" + tag + ">([\\s\\S]*?)</" + tag + ">", "gm"), ku)
      //NOT operator
      .replace(
        new RegExp(
          "\\/\\/<" + tag + " false>([\\s\\S]*?)\\/\\/<\\/" + tag + ">",
          "gm"
        ),
        antiku
      )
      .replace(
        new RegExp("<" + tag + " false>([\\s\\S]*?)</" + tag + ">", "gm"),
        antiku
      )
  );
};

String.prototype.replaceMergefield = function(config) {
  return Object.keys(config).reduce((acc, i) => {
    return acc.replace(new RegExp("%" + i + "%", "g"), config[i]);
  }, this);
};

//generate files
langs.forEach(lang => {
  //generate index.html
  const config = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../../i", lang, "config.json"), {
      encoding: "utf8"
    })
  );
  const config_fallback = {
    title: "la sutysisku zo'u: ze'i mitysisku lo valsi",
    favicon: "../pixra/snime.svg",
    icon16: "../pixra/16.png",
    icon32: "../pixra/32.png",
    ogurl: "https://la-lojban.github.io/sutysisku/" + lang + "/index.html",
    ogtitle: "Sutysisku",
    searchurl: "/sutysisku/" + lang + "/sisku.xml",
    searchtitle: lang + "-sutysisku",
    titlelogo:
      "<a id='title' href='#'><span id='site-title'><img src=\"../pixra/snime.svg\" height='16' width='16'><font color='#fff'>la sutysisku</font></span></a>",
    mupliskari1: "56,136,233",
    mupliskari2: "34,87,213",
    mupliskari3: "38,99,224",
    mupliskari4: "25,65,165",
    rimniskari1: "230,47,0",
    rimniskari2: "119,29,29",
    rimniskari3: "220,4,4",
    rimniskari4: "95,29,0",
    gradpos1: "0%",
    gradpos2: "13%",
    gradpos3: "88%",
    gradpos4: "100%",
    rimnigradpos1: "0%",
    rimnigradpos2: "10%",
    rimnigradpos3: "91%",
    rimnigradpos4: "100%",
    kunti: "Clear",
    rimni: "Rhyme search",
    cnano: "Normal search"
  };
  const arr = (config.mupliskari4 || config_fallback.mupliskari4)
    .split(",")
    .map(i => i.trim());
  config.mupliskariralju = fullColorHex(arr[0], arr[1], arr[2]);
  const output = template
    .replaceMergefield(config)
    .replaceMergefield(config_fallback)
    ////strip out according to Lojbanicity of the sutysisku
    .stripout(config, "xuzganalojudri\\|lojbo")
    .stripout(config, "xuzganalojudri")
    .stripout(config, "lojbo")
    .stripout(config, "muplis")
    //delete comments, compress code
    .replace(/^[ \t]+/gm, "")
    .replace(/^\/\/.*$/gm, "")
    .replace(/\/\*((?!\/\*)[\s\S]*?)\*\//gm, "")
    .replace(/<!--[\s\S]*?-->/gm, "")
    .replace(/\n\s*\n/g, "\n");
  fs.writeFileSync(path.join(__dirname, "../../i", lang, "index.html"), output);

  //current datetime
  const d = new Date();
  const n =
    d.getFullYear() +
    "-" +
    addZero(d.getMonth() + 1) +
    "-" +
    addZero(d.getDate()) +
    "T" +
    addZero(d.getHours()) +
    ":" +
    addZero(d.getMinutes()) +
    ":" +
    addZero(d.getSeconds());
  const n_for_url = n.replace(/[^0-9]/g, "_");
  //generate sisku.xml and update webapp.cache
  if (lang !== "cipra") {
    const file = fs.readFileSync(
      path.join(__dirname, "../../i", lang, "bangu.js"),
      {
        encoding: "utf8"
      }
    );
    const b = sisku
      .replace(
        "%template%",
        "https://la-lojban.github.io/sutysisku/en/index.html#sisku/{searchTerms}"
      )
      .replace("%shortname%", lang + "-sutysisku")
      .replaceMergefield(config);
    fs.writeFileSync(path.join(__dirname, "../../i", lang, "sisku.xml"), b);
    //now update manifest
    const webappcachefile = path.join(
      __dirname,
      "../" + lang + "/",
      "webapp.appcache"
    );
    //change date in manifest
    const pars = fs
      .readFileSync(webappcachefile, {
        encoding: "utf8"
      })
      .replace(/\n# .+\n/, "\n# " + n + "\n")
      .replace(/\?sisku=([0-9_\?]|sisku=)+/g, "?sisku=" + n_for_url);
    fs.writeFileSync(webappcachefile, pars);
    console.log(webappcachefile + " updated");
  }

  //generate worker.js
  const workerjsfile =
    "window = this;var sorcu={};var bau = location.href.split('/').slice(-2)[0];if (bau==='cipra'){bau='en';}\npostMessage({kind: 'loading'});\nimportScripts('bangu.js','../data/parsed-" +
    lang.replace(/^cipra$/, "en").replace(/^muplis/, "tatoeba") +
    ".js?sisku=" +
    n_for_url +
    "', '" +
    (["cipra", "cll"].includes(lang)
      ? "./sisku.js?sisku=" + n_for_url
      : "../sisku.js?sisku=" + n_for_url) +
    "');\npostMessage({kind: 'ready'});\nthis.onmessage = function(ev) {if (ev.data.kind == 'newSearch') {sisku(ev.data, function(results) {postMessage({kind: 'searchResults', results: results,query:ev.data.query})})}}";
  fs.writeFileSync(
    path.join(__dirname, "../../i", lang, "worker.js"),
    workerjsfile
  );
});
