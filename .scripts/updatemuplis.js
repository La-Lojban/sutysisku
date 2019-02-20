// JavaScript Document
const fs = require("fs"),
  path = require("path-extra"),
  LineByLineReader = require('line-by-line'),
  sqlite3 = require('better-sqlite3').verbose();

// download_sentences();
// tatocreatedb();
// ningau_la_muplis();
// ningau_la_muplis_poholska();
// selectinto();
// generateorphanenglishsentences();}
// generateorphanfrenchsentences();
// tempo();
// gettagsstats();
jboenglish_dict();

function ningau_la_muplis() {
  const db = new sqlite3.Database(path.join(__dirname, "../../dumps", "1.sql"));
  const wstream = fs.createWriteStream(path.join(__dirname, "../data", "parsed-tatoeba.js.temp"));
  wstream.write('sorcu["muplis"] = {\n');
  db.serialize(function() {
    db.run("BEGIN TRANSACTION");
    db.each("SELECT tat.sentence as one,tati.sentence as six,group_concat(distinct tag.tag) as five FROM tatoeba as tat left join links on links.fir=tat.idsentence left join tatoeba as tati on links.sec=tati.idsentence left join tags as tag on tag.ids=tat.idsentence where (tat.username<>'\\N' and tati.username<>'\\N' and tat.lang='jbo' and not exists (select a.ids from tags as a where (a.ids=tat.idsentence and a.tag='@needs native check'))) group by tat.sentence,tati.sentence limit 1000000", function(err, row) {

      if (row.five === null) {
        wstream.write("\"" + row.one.replace(/"/g, "'") + "\":{d:\"" + (row.six || "").replace(/"/g, "'").replace(/[\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/gi, " ").replace(/\\/g, "\\\\".replace("\\", "\\\\")) + "\"},\n");
      } else {
        wstream.write("\"" + row.one.replace(/"/g, "'") + "\":{t:\"" + row.five + "\",d:\"" + (row.six || "").replace(/"/g, "'").replace(/[\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/gi, " ").replace(/\\/g, "\\\\".replace("\\", "\\\\")) + "\"},\n");
      }
    });
    db.run("COMMIT");
  });
  db.close(function() {
    wstream.write('};\n');
    wstream.end();
    fs.renameSync(path.join(__dirname, "../data", "parsed-tatoeba.js.temp"), path.join(__dirname, "../data", "parsed-tatoeba.js"));
  });
};

function ningau_la_muplis_poholska() {
  const db = new sqlite3.Database(path.join(__dirname, "../../dumps", "1.sql"));
  const wstream = fs.createWriteStream(path.join(__dirname, "../data", "parsed-tatoeba.js.temp"));
  wstream.write('sorcu["muplis-eng-pol"] = {\n');
  db.serialize(function() {
    db.run("BEGIN TRANSACTION");
    db.each("SELECT tat.sentence as one,tati.sentence as six,group_concat(distinct tag.tag) as five FROM tatoeba as tat left join links on links.fir=tat.idsentence left join tatoeba as tati on links.sec=tati.idsentence left join tags as tag on tag.ids=tat.idsentence where (tat.username<>'\\N' and tati.username<>'\\N' and tat.lang='pol' and tati.lang='eng' and not exists (select a.ids from tags as a where (a.ids=tat.idsentence and a.tag='@needs native check'))) group by tat.sentence,tati.sentence limit 1000000", function(err, row) {
      if (row.five === null) {
        wstream.write("\"" + row.one.replace(/"/g, "'") + "\":{d:\"" + (row.six || "").replace(/"/g, "'").replace(/[\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/gi, " ").replace(/\\/g, "\\\\".replace("\\", "\\\\")) + "\"},\n");
      } else {
        wstream.write("\"" + row.one.replace(/"/g, "'") + "\":{t:\"" + row.five + "\",d:\"" + (row.six || "").replace(/"/g, "'").replace(/[\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/gi, " ").replace(/\\/g, "\\\\".replace("\\", "\\\\")) + "\"},\n");
      }
    });
    db.run("COMMIT");
  });
  db.close(function() {
    wstream.write('};\n');
    wstream.end();
    fs.renameSync(path.join(__dirname, "../data", "parsed-tatoeba.js.temp"), path.join(__dirname, "../data", "parsed-tatoeba-eng-pol.js"));
  });
};

function selectinto() {
  const db = new sqlite3.Database(path.join(__dirname, "../../dumps", "1.sql"));
  const wstream = fs.createWriteStream(path.join(__dirname, "../data", "workontagstatoeba.js.temp"));
  wstream.write("<!DOCTYPE HTML>\n<html><meta http-equiv=Content-Type content='text/html;charset=UTF-8'><head><link rel='stylesheet' href='kampu.css'></head><body><table id='lojban'>\n");
  db.serialize(function() {
    db.run("BEGIN TRANSACTION");
    //db.run("DROP TABLE IF EXISTS 'merga'");
    //db.run("CREATE TABLE merga (ts TEXT, tts TEXT)");
    db.each("SELECT tat.sentence as one,tati.sentence as six,tat.lang as lan FROM tatoeba as tat left join links on links.fir=tat.idsentence left join tatoeba as tati on links.sec=tati.idsentence where ((tat.lang='jbo' and tati.lang='eng') or (tat.lang='jbo' and tati.lang='eng')) group by tat.sentence,tati.sentence limit 1000000", function(err, row) { //generate eng-jbo dict. this query is fine, just make sure that jbo is in the first column, otherwise fliflop
      if (row.lan === 'jbo') {
        wstream.write("<tr><td align='right'>" + row.one + "</td><td>" + (row.six || "") + "</tr>\n");
      } else {
        wstream.write("<tr><td align='right'>" + (row.six || "") + "</td><td>" + row.one + "</tr>\n");
      }
    });
    db.run("COMMIT");
  });
  db.close(function() {
    wstream.write('</table></body></html>\n');
    wstream.end();
    fs.renameSync(path.join(__dirname, "../data", "workontagstatoeba.js.temp"), path.join(__dirname, "../data", "eng-jbo-tatoeba.html"));
  });
};

function generateorphanenglishsentences() {
  const db = new sqlite3.Database(path.join(__dirname, "../../dumps", "1.sql"));
  const wstream = fs.createWriteStream(path.join(__dirname, "../data", "workontagstatoeba.js.temp"));
  db.serialize(function() {
    db.run("BEGIN TRANSACTION");
    db.each("SELECT tat.idsentence as one,tat.sentence as two,group_concat(distinct tati.sentence) as three FROM tatoeba as tat left left join audio as a on (a.ids=tat.idsentence) join links on links.fir=tat.idsentence left join tatoeba as tati on (links.sec=tati.idsentence and tati.lang='jbo') left join tags as tag on tag.ids=tat.idsentence where (tat.lang='eng' and a.ids is not null) group by one order by one asc limit 1000000", function(err, row) {
      if (row.three === null) {
        wstream.write(row.one + "\t" + row.two + "\t" + row.three + "\n");
      }
    });
    db.run("COMMIT");
  });
  db.close(function() {
    wstream.end();
    fs.renameSync(path.join(__dirname, "../data", "workontagstatoeba.js.temp"), path.join(__dirname, "../data", "orphan-english.csv"));
  });
};

function generateorphanfrenchsentences() {
  const db = new sqlite3.Database(path.join(__dirname, "../../dumps", "1.sql"));
  const wstream = fs.createWriteStream(path.join(__dirname, "../data", "workontagstatoeba.js.temp"));
  db.serialize(function() {
    db.run("BEGIN TRANSACTION");
    db.each("SELECT tat.idsentence as one,tat.sentence as two,group_concat(distinct tati.sentence) as three, tag.tag as four FROM tatoeba as tat left left join audio as a on (a.ids=tat.idsentence) join links on links.fir=tat.idsentence left join tatoeba as tati on (links.sec=tati.idsentence and tati.lang='jbo') left join tags as tag on tag.ids=tat.idsentence where (tat.lang='fra' and tag.tag='OK') group by one order by one asc limit 1000000", function(err, row) {
      //tat.lang='fra' and a.ids is not null
      if (row.three === null && row.four === 'OK') {
        wstream.write(row.one + "\t" + row.two + "\n");
      }
    });
    db.run("COMMIT");
  });
  db.close(function() {
    wstream.end();
    fs.renameSync(path.join(__dirname, "../data", "workontagstatoeba.js.temp"), path.join(__dirname, "../data", "orphan-francais.csv"));
  });
};

//tat.username<>'\\N' and tati.username<>'\\N'
function tempo() {
  const init = new Date('2013-01-01T00:00:00');
  let dat;
  const db = new sqlite3.Database(path.join(__dirname, "../../dumps", "1.sql"));
  const wstream = fs.createWriteStream(path.join(__dirname, "../data", "workontagstatoeba.js.temp"));
  db.serialize(function() {
    db.run("BEGIN TRANSACTION");
    db.each("SELECT tat.idsentence as one,tat.mod as two, tat.username as three FROM tatoeba as tat where (tat.lang='jbo' and tat.username='gleki') group by one order by one asc limit 1000000", function(err, row) {
      //tat.lang='fra' and a.ids is not null
      //if (; ===null && row.four ==='OK'){
      dat = new Date(row.two.replace(/ /, "T"));
      if (dat < init) {
        wstream.write(row.one + "\n");
      }
      //}
    });
    db.run("COMMIT");
  });
  db.close(function() {
    wstream.end();
    fs.renameSync(path.join(__dirname, "../data", "workontagstatoeba.js.temp"), path.join(__dirname, "../data", "not-owned-lojbo-sentences.csv"));
  });
};

function jboenglish_dict() {
  const db = new sqlite3.Database(path.join(__dirname, "../../dumps", "1.sql"));
  const wstream = fs.createWriteStream(path.join(__dirname, "../data", "jbogli.temp"));
  // wstream.write('var documentStore = [\n');
  db.serialize(function() {
    db.run("BEGIN TRANSACTION");
    db.each("SELECT tat.idsentence as zer,tat.sentence as one,tati.sentence as six,group_concat(distinct tag.tag) as five,tat.username as author FROM tatoeba as tat left join links on links.fir=tat.idsentence left join tatoeba as tati on links.sec=tati.idsentence left join tags as tag on tag.ids=tat.idsentence where (tat.username<>'\\N' and tati.username<>'\\N' and tat.lang='jbo' and tati.lang='eng' and not exists (select a.ids from tags as a where (a.ids=tat.idsentence and a.tag='@needs native check'))) group by tat.sentence,tati.sentence limit 1000000", function(err, row) {
      // if (row.five === null) {
      //   wstream.write(row.zer + "\t" + row.one.replace(/"/g, "'") + "\t" + (row.six || "").replace(/"/g, "'").replace(/[\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/gi, " ").replace(/\\/g, "\\\\".replace("\\", "\\\\")) + "\n");
      // } else {
        wstream.write(row.zer + "\t" + row.one.replace(/"/g, "'") + "\t" + (row.six || "").replace(/"/g, "'").replace(/[\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/gi, " ").replace(/\\/g, "\\\\".replace("\\", "\\\\")) + "\t" + (row.five||null) + "\t" + (row.author||null) + "\n");
      // }
    });
    db.run("COMMIT");
  });
  db.close(function() {
    // wstream.write('];\n');
    wstream.end();
    fs.renameSync(path.join(__dirname, "../data", "jbogli.temp"), path.join(__dirname, "../data", "jbogli.txt"));
  });
};

function gettagsstats() {
  const db = new sqlite3.Database(path.join(__dirname, "../../dumps", "1.sql"));
  const wstream = fs.createWriteStream(path.join(__dirname, "../data", "workontagstatoeba.js.temp"));
  db.serialize(function() {
    db.run("BEGIN TRANSACTION");
    db.each("SELECT tag.tag as tagg, count(tag.tag) as cou, tat.lang as lan FROM tags as tag join tatoeba as tat on (tag.ids = tat.idsentence) group by tagg, lan order by lan, cou desc limit 1000000", function(err, row) {
      if (row.tagg !== null) {
        wstream.write(row.lan + "\t" + row.cou + "\t" + row.tagg + "\n");
      }
    });
    db.run("COMMIT");
  });
  db.close(function() {
    wstream.end();
    fs.renameSync(path.join(__dirname, "../data", "workontagstatoeba.js.temp"), path.join(__dirname, "../data", "tatoeba-tags-stats.csv"));
  });
};

function tatocreatedb() {
  //tatogettwo();
  const tsorcu = path.join(__dirname, "../../dumps", "tatoeba/sentences_detailed.csv");
  const db = new sqlite3.Database(path.join(__dirname, "../../dumps", "1.sql"));
  db.serialize(function() {
    //db.run("PRAGMA locking_mode = EXCLUSIVE");
    db.run("PRAGMA journal_mode = OFF");
    //db.run("PRAGMA temp_store = FILE");
    //db.run("PRAGMA cache_size = 100");
    db.run("DROP TABLE IF EXISTS 'tatoeba'");
    db.run("DROP TABLE IF EXISTS 'links'");
    db.run("DROP TABLE IF EXISTS 'tags'");
    db.run("DROP TABLE IF EXISTS 'audio'");
    db.run("CREATE TABLE tatoeba (idsentence INTEGER, lang TEXT, sentence TEXT, username TEXT, ad TEXT, mod TEXT)");
    db.run("CREATE TABLE links (fir INTEGER, sec INTEGER)");
    db.run("CREATE TABLE tags (ids INTEGER, tag TEXT)");
    db.run("CREATE TABLE audio (ids INTEGER)");
    //db.run("PRAGMA synchronous = OFF");
    db.run("BEGIN TRANSACTION");
    //db.parallelize(function() {
    const stmt = db.prepare("INSERT INTO tatoeba VALUES (?,?,?,?,?,?)");
    lr = new LineByLineReader(tsorcu);
    lr.on('error', function(err) {
      // 'err' contains error object
    });
    lr.on('line', function(line) {
      // 'line' contains the current line without the trailing newline character. write it to a new file
      const l = line.split("\t");
      stmt.run(l[0], l[1], l[2], l[3], l[4], l[5]);
      //console.log(l[5]);
    });
    lr.on('end', add_links.bind(null, db, LineByLineReader, stmt));
    //});
  });
  //global.gc();
  //db=null;
};
function add_links(db, LineByLineReader, stmt) {
  stmt.finalize();
  const stmtq = db.prepare("INSERT INTO links VALUES (?,?)");
  const tjorne = path.join(__dirname, "../../dumps", "tatoeba/links.csv");
  lrq = new LineByLineReader(tjorne);
  lrq.on('error', function(err) {
    // 'err' contains error object
  });
  lrq.on('line', function(line) {
    // 'line' contains the current line without the trailing newline character. write it to a new file
    const l = line.split("\t");
    stmtq.run(l[0], l[1], l[2]);
  });
  lrq.on('end', add_tags.bind(null, db, LineByLineReader, stmtq));
};

function add_tags(db, LineByLineReader, stmtq) {
  stmtq.finalize();
  const stmtr = db.prepare("INSERT INTO tags VALUES (?,?)");
  const ttcita = path.join(__dirname, "../../dumps", "tatoeba/tags.csv");
  const lrs = new LineByLineReader(ttcita);
  lrs.on('error', function(err) {
    // 'err' contains error object
  });
  lrs.on('line', function(line) {
    // 'line' contains the current line without the trailing newline character. write it to a new file
    const l = line.split("\t");
    stmtr.run(l[0], l[1]);
  });
  lrs.on('end', add_sentences_with_audio.bind(null, db, LineByLineReader, stmtr));
};

//disabled for now
function add_sentences_with_audio(db, LineByLineReader, stmtr) {
  stmtr.finalize();
  const stmts = db.prepare("INSERT INTO audio VALUES (?)");
  const tvoksa = path.join(__dirname, "../../dumps", "tatoeba/sentences_with_audio.csv");
  const lrt = new LineByLineReader(tvoksa);
  lrt.on('error', function(err) {
    // 'err' contains error object
  });
  lrt.on('line', function(line) {
    // 'line' contains the current line without the trailing newline character. write it to a new file
    //const l = line.split("\t");
    stmts.run(line);
  });
  lrt.on('end', add_finish.bind(null, db, LineByLineReader, stmts));
};

function add_finish(db, LineByLineReader, stmts) {
  db.serialize(function() {
    stmts.finalize();
    db.run("COMMIT");
    db.run("PRAGMA shrink_memory");
    /*db.run("DROP TABLE IF EXISTS 'tatoeba'");
	db.run("DROP TABLE IF EXISTS 'links'");
	db.run("DROP TABLE IF EXISTS 'tags'");
	db.run("DROP TABLE IF EXISTS 'audio'");
	db.run("ALTER TABLE 'tatoebatemp' RENAME TO 'tatoeba'");
	db.run("ALTER TABLE 'linkstemp' RENAME TO 'links'");
	db.run("ALTER TABLE 'tagstemp' RENAME TO 'tags'");
	db.run("ALTER TABLE 'audiotemp' RENAME TO 'audio'");*/
    db.each("SELECT name FROM sqlite_master WHERE type = 'table'", function(err, row) {
      console.log(row.name);
    });
    db.close();
    /* now select */
  });
};

function download_sentences() {
  const request = require("request");
  const fs = require("fs");
  const t = path.join(__dirname, "../../dumps", "tatoeba.tar.bz2");
  const ttemp = path.join(__dirname, "../../dumps", "tatoeba.tar.bz2.temp");
  const tbakfu = path.join(__dirname, "../../dumps", "tatoeba");
  const uri = "http://downloads.tatoeba.org/exports/sentences_detailed.tar.bz2";
  requestd = request.defaults({jar: true});
  requestd({uri: uri, method: "GET"}).on("error", function(err) {}).pipe(fs.createWriteStream(ttemp)).on("finish", function() {
    fs.renameSync(ttemp, t);
    console.log("Tatoeba sentences downloaded");
    const Bunzip = require('seek-bzip');
    const compressedData = fs.readFileSync(t);
    const data = Bunzip.decode(compressedData);
    fs.writeFileSync(ttemp, data);
    const tarball = require('tarball-extract');
    tarball.extractTarball(ttemp, tbakfu, function(err) {
      if (err)
        console.log(err);
      }
    );
    download_links();
  });
};

function download_links() {
  const tlink = path.join(__dirname, "../../dumps", "links.tar.bz2");
  const tlinktemp = path.join(__dirname, "../../dumps", "links.tar.bz2.temp");
  const tlinkbakfu = path.join(__dirname, "../../dumps", "tatoeba");
  const uri = 'http://downloads.tatoeba.org/exports/links.tar.bz2';
  requestd({uri: uri, method: "GET"}).on("error", function(err) {}).pipe(fs.createWriteStream(tlinktemp)).on("finish", function() {
    fs.renameSync(tlinktemp, tlink);
    console.log("Tatoeba links downloaded");
    const Bunzip = require('seek-bzip');
    const compressedData = fs.readFileSync(tlink);
    const data = Bunzip.decode(compressedData);
    fs.writeFileSync(tlinktemp, data);
    const tarball = require('tarball-extract');
    tarball.extractTarball(tlinktemp, tlinkbakfu, function(err) {
      if (err)
        console.log(err);
      }
    );
    download_tags();
  });
};

function download_tags() {
  const ttags = path.join(__dirname, "../../dumps", "tags.tar.bz2");
  const ttagstemp = path.join(__dirname, "../../dumps", "tags.tar.bz2.temp");
  const ttagsbakfu = path.join(__dirname, "../../dumps", "tatoeba");
  const uri = 'http://downloads.tatoeba.org/exports/tags.tar.bz2';
  requestd({uri: uri, method: "GET"}).on("error", function(err) {}).pipe(fs.createWriteStream(ttagstemp)).on("finish", function() {
    fs.renameSync(ttagstemp, ttags);
    console.log("Tatoeba tags downloaded");
    const Bunzip = require('seek-bzip');
    const compressedData = fs.readFileSync(ttags);
    const data = Bunzip.decode(compressedData);
    fs.writeFileSync(ttagstemp, data);
    const tarball = require('tarball-extract');
    tarball.extractTarball(ttagstemp, ttagsbakfu, function(err) {
      if (err)
        console.log(err);
      }
    );
    download_audio();
  });
};

function download_audio() {
  const ttags = path.join(__dirname, "../../dumps", "sentences_with_audio.tar.bz2");
  const ttagstemp = path.join(__dirname, "../../dumps", "sentences_with_audio.tar.bz2.temp");
  const ttagsbakfu = path.join(__dirname, "../../dumps", "tatoeba");
  const uri = 'http://downloads.tatoeba.org/exports/sentences_with_audio.tar.bz2';
  requestd({uri: uri, method: "GET"}).on("error", function(err) {}).pipe(fs.createWriteStream(ttagstemp)).on("finish", function() {
    fs.renameSync(ttagstemp, ttags);
    console.log("Tatoeba audio ids downloaded");
    const Bunzip = require('seek-bzip');
    const compressedData = fs.readFileSync(ttags);
    const data = Bunzip.decode(compressedData);
    fs.writeFileSync(ttagstemp, data);
    const tarball = require('tarball-extract');
    tarball.extractTarball(ttagstemp, ttagsbakfu, function(err) {
      if (err)
        console.log(err);
      }
    );
    //download something else now:
  });
};
