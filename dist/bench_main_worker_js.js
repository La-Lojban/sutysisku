/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./bench/main.worker.js":
/*!******************************!*\
  !*** ./bench/main.worker.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jlongster_sql_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jlongster/sql.js */ \"../../node_modules/@jlongster/sql.js/dist/sql-wasm.js\");\n/* harmony import */ var _jlongster_sql_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jlongster_sql_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.. */ \"../index.js\");\n/* harmony import */ var _memory_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../memory/backend */ \"../memory/backend.js\");\n/* harmony import */ var _indexeddb_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../indexeddb/backend */ \"../indexeddb/backend.js\");\n/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queries */ \"./bench/queries.js\");\n/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_queries__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _queries_raw_idb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./queries-raw-idb */ \"./bench/queries-raw-idb.js\");\n\n\n\n\n\n\n\n// Various global state for the demo\nlet currentBackendType = 'idb';\nlet cacheSize = 0;\nlet pageSize = 4096;\nlet dbName = `db21.sqlite`;\nlet recordProfile = false;\nlet useRawIDB = false;\n\nlet memoryBackend = new _memory_backend__WEBPACK_IMPORTED_MODULE_2__.default({});\nlet idbBackend = new _indexeddb_backend__WEBPACK_IMPORTED_MODULE_3__.default(() => {\n  console.error('Unable to write!');\n});\nlet sqlFS;\n\n// Helper methods\n\nlet SQL = null;\nasync function init() {\n  if (SQL == null) {\n    SQL = await _jlongster_sql_js__WEBPACK_IMPORTED_MODULE_0___default()({ locateFile: file => file });\n    sqlFS = new ___WEBPACK_IMPORTED_MODULE_1__.SQLiteFS(SQL.FS, idbBackend);\n    SQL.register_for_idb(sqlFS);\n\n    if (typeof SharedArrayBuffer === 'undefined') {\n      output(\n        '<code>SharedArrayBuffer</code> is not available in your browser. Falling back.'\n      );\n    }\n\n    SQL.FS.mkdir('/blocked');\n    SQL.FS.mount(sqlFS, {}, '/blocked');\n  }\n}\n\nfunction getPageSize(db) {\n  let stmt = db.prepare('PRAGMA page_size');\n  stmt.step();\n  let row = stmt.getAsObject();\n  stmt.free();\n  return row.page_size;\n}\n\nfunction output(msg) {\n  self.postMessage({ type: 'output', msg });\n}\n\nfunction clearTimings() {\n  self.postMessage({ type: 'clearTimings' });\n}\n\nfunction outputTiming(timing) {\n  self.postMessage({ type: 'outputTiming', timing });\n}\n\nlet _db = null;\nfunction closeDatabase() {\n  if (_db) {\n    output(`Closed db`);\n    _db.close();\n    _db = null;\n  }\n}\n\nasync function getRawIDBDatabase() {\n  return new Promise((resolve, reject) => {\n    let req = globalThis.indexedDB.open('raw-db');\n    req.onsuccess = e => {\n      resolve(e.target.result);\n    };\n    req.onupgradeneeded = e => {\n      let db = e.target.result;\n      if (!db.objectStoreNames.contains('kv')) {\n        db.createObjectStore('kv');\n      }\n    };\n    req.onblocked = e => {\n      console.log('opening db is blocked');\n    };\n  });\n}\n\nasync function getDatabase() {\n  await init();\n  if (_db == null) {\n    if (useRawIDB) {\n      _db = await getRawIDBDatabase();\n      return _db;\n    }\n\n    let path = `/blocked/${dbName}`;\n\n    if (typeof SharedArrayBuffer === 'undefined') {\n      let stream = SQL.FS.open(path, 'a+');\n      await stream.node.contents.readIfFallback();\n      SQL.FS.close(stream);\n    }\n\n    _db = new SQL.Database(path, { filename: true });\n\n    // Should ALWAYS use the journal in memory mode. Doesn't make\n    // any sense at all to write the journal. It's way slower\n    _db.exec(`\n      PRAGMA cache_size=-${cacheSize};\n      PRAGMA journal_mode=MEMORY;\n      PRAGMA page_size=${pageSize};\n    `);\n    output(`Opened ${dbName} (${currentBackendType}) cache size: ${cacheSize}`);\n  }\n\n  if (!useRawIDB) {\n    let curPageSize = getPageSize(_db);\n\n    if (curPageSize !== pageSize) {\n      output('Page size has changed, running VACUUM to restructure db');\n      _db.exec('VACUUM');\n      // Vacuuming resets the cache size, so set it back\n      _db.exec(`PRAGMA cache_size=-${cacheSize}`);\n      output(`Page size is now ${getPageSize(_db)}`);\n    }\n  }\n\n  return _db;\n}\n\nfunction formatNumber(num) {\n  return new Intl.NumberFormat('en-US').format(num);\n}\n\nasync function populate(count, { timings = true } = {}) {\n  let q = useRawIDB ? _queries_raw_idb__WEBPACK_IMPORTED_MODULE_5__ : _queries__WEBPACK_IMPORTED_MODULE_4__;\n  let db = await getDatabase();\n\n  q.clear(db, output);\n\n  if (recordProfile) {\n    sqlFS.backend.startProfile();\n  }\n\n  // Only reason this needs to `await` is for the raw idb\n  // implementation; sqlite would be sync\n  await q.populate(db, count, output, timings ? outputTiming : () => {});\n\n  if (recordProfile) {\n    sqlFS.backend.stopProfile();\n  }\n\n  if (!useRawIDB) {\n    let { node } = SQL.FS.lookupPath(`/blocked/${dbName}`);\n    let file = node.contents;\n\n    output(\n      'File is now: ' +\n        formatNumber(file.meta.size / 1024) +\n        'KB as ' +\n        formatNumber(file.meta.size / 4096) +\n        ' blocks'\n    );\n  }\n}\n\nasync function populateSmall() {\n  clearTimings();\n\n  return populate(100);\n}\n\nasync function populateLarge() {\n  clearTimings();\n\n  let count = 400000;\n  if (currentBackendType === 'memory') {\n    output(\n      'Cannot write 1,000,000 items to memory backend, reducing to 100,000'\n    );\n    count = 100000;\n  }\n  return populate(count);\n}\n\nasync function sumAll({ clear = true } = {}) {\n  if (clear) {\n    clearTimings();\n  }\n\n  let q = useRawIDB ? _queries_raw_idb__WEBPACK_IMPORTED_MODULE_5__ : _queries__WEBPACK_IMPORTED_MODULE_4__;\n  let db = await getDatabase();\n  if (recordProfile) {\n    sqlFS.backend.startProfile();\n  }\n\n  await q.sumAll(db, output, outputTiming);\n\n  if (recordProfile) {\n    sqlFS.backend.stopProfile();\n  }\n}\n\nasync function randomReads({ clear = true } = {}) {\n  if (clear) {\n    clearTimings();\n  }\n\n  let q = useRawIDB ? _queries_raw_idb__WEBPACK_IMPORTED_MODULE_5__ : _queries__WEBPACK_IMPORTED_MODULE_4__;\n  let db = await getDatabase();\n  if (recordProfile) {\n    sqlFS.backend.startProfile();\n  }\n\n  await q.randomReads(db, output, outputTiming);\n\n  if (recordProfile) {\n    sqlFS.backend.stopProfile();\n  }\n}\n\nasync function prepBench() {\n  clearTimings();\n\n  // Delete the file to ensure we start with a fresh db that isn't\n  // muddled by any previous work (even if we clear the db, this makes\n  // sure it's not badly partitioned or something)\n  await deleteFile();\n\n  // Force the db to open and wait a bit to ensure everything is ready\n  // (so we don't see any perf hit on the first read)\n  await getDatabase();\n  await new Promise(resolve => setTimeout(resolve, 1000));\n}\n\nasync function readBench() {\n  await prepBench();\n\n  for (let i of [100, 500, 1000, 5000, 10000, 50000, 100000]) {\n    // Setting up for reads requires us to do writes... this is\n    // basically duplicating the write benchmark, but keeping it this\n    // way so it's easy to parse the timing numbers. If we combined\n    // the benchmarks we'd get mixed numbers and have to separate them\n    await populate(i, { timings: false });\n    await sumAll({ clear: false });\n  }\n}\n\nasync function writeBench() {\n  await prepBench();\n\n  for (let i of [100, 500, 1000, 5000, 10000, 50000, 100000]) {\n    await populate(i);\n  }\n}\n\nasync function deleteFile() {\n  await init();\n  closeDatabase();\n\n  if (useRawIDB) {\n    globalThis.indexedDB.deleteDatabase('raw-db');\n    return;\n  }\n\n  let filepath = `/blocked/${dbName}`;\n\n  let exists = true;\n  try {\n    SQL.FS.stat(filepath);\n  } catch (e) {\n    exists = false;\n  }\n\n  if (exists) {\n    SQL.FS.unlink(filepath);\n  }\n  _db = null;\n}\n\nlet methods = {\n  init,\n  populateSmall,\n  populateLarge,\n  sumAll,\n  randomReads,\n  deleteFile,\n  readBench,\n  writeBench\n};\n\nif (typeof self !== 'undefined') {\n  self.onmessage = msg => {\n    switch (msg.data.type) {\n      case 'ui-invoke':\n        if (methods[msg.data.name] == null) {\n          throw new Error('Unknown method: ' + msg.data.name);\n        }\n        methods[msg.data.name]();\n        break;\n\n      case 'run-query': {\n        getDatabase().then(db => {\n          let stmt = db.prepare(msg.data.sql);\n          let rows = [];\n          while (stmt.step()) {\n            rows.push(stmt.getAsObject());\n          }\n          stmt.free();\n          self.postMessage({\n            type: 'query-results',\n            data: rows,\n            id: msg.data.id\n          });\n        });\n        break;\n      }\n\n      case 'profiling': {\n        recordProfile = msg.data.on;\n        break;\n      }\n\n      case 'options':\n        switch (msg.data.name) {\n          case 'backend':\n            closeDatabase();\n            currentBackendType = msg.data.value;\n            // We dont really support swapping the backend like this,\n            // but it works for the demo\n            if (currentBackendType === 'memory') {\n              sqlFS.backend = memoryBackend;\n            } else {\n              sqlFS.backend = idbBackend;\n            }\n            break;\n\n          case 'cacheSize': {\n            cacheSize = parseInt(msg.data.value);\n\n            getDatabase().then(db => {\n              db.exec(`\n                PRAGMA cache_size=-${cacheSize};\n              `);\n              output(`Cache size is now ${cacheSize}KB`);\n            });\n\n            break;\n          }\n\n          case 'pageSize': {\n            closeDatabase();\n            pageSize = parseInt(msg.data.value);\n            // This will force the db to load which checks the\n            // requested page size and vacuums if necessary\n            getDatabase();\n            break;\n          }\n\n          case 'raw-idb': {\n            if (msg.data.on !== useRawIDB) {\n              closeDatabase();\n              useRawIDB = msg.data.on;\n              if (useRawIDB) {\n                output('Switched to using raw IndexedDB');\n              } else {\n                output('Switched to using SQLIte');\n              }\n            }\n            break;\n          }\n        }\n        break;\n    }\n  };\n} else {\n  for (let method of Object.keys(methods)) {\n    let btn = document.querySelector(`#${method}`);\n    if (btn) {\n      btn.addEventListener('click', methods[method]);\n    }\n  }\n  init();\n}\n\n\n//# sourceURL=webpack:///./bench/main.worker.js?");

/***/ }),

/***/ "./bench/queries-raw-idb.js":
/*!**********************************!*\
  !*** ./bench/queries-raw-idb.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clear\": () => (/* binding */ clear),\n/* harmony export */   \"populate\": () => (/* binding */ populate),\n/* harmony export */   \"sumAll\": () => (/* binding */ sumAll),\n/* harmony export */   \"randomReads\": () => (/* binding */ randomReads)\n/* harmony export */ });\nfunction uid(i) {\n  // This will make ids of different lengths, but we want to inject\n  // some larger data than just ints (something like a uuid) but we\n  // don't want to actually generate uuids because that's slow-ish and\n  // we want profiling to show sqlite as much as possible\n  return '0000000000000000000000000' + i;\n}\n\nfunction formatNumber(num) {\n  return new Intl.NumberFormat('en-US').format(num);\n}\n\nfunction clear(db, output) {\n  let trans = db.transaction(['kv'], 'readwrite');\n  let store = trans.objectStore('kv');\n  return new Promise((resolve, reject) => {\n    let req = store.clear();\n    req.onsuccess = resolve;\n    req.onerror = reject;\n  });\n}\n\nfunction populate(db, count, output, outputTiming) {\n  let start = Date.now();\n  let trans = db.transaction(['kv'], 'readwrite');\n  let store = trans.objectStore('kv');\n\n  output(`Inserting ${formatNumber(count)} items (raw idb)`);\n\n  return new Promise((resolve, reject) => {\n    for (let i = 0; i < count; i++) {\n      let id = uid(i);\n      let value = (Math.random() * 100) | 0;\n      store.put(value, id);\n    }\n    trans.oncomplete = () => {\n      let took = Date.now() - start;\n      output('Done! Took: ' + took);\n      outputTiming(took);\n      resolve();\n    };\n    trans.onerror = reject;\n  });\n}\n\nfunction sumAll(db, output, outputTiming) {\n  let start = Date.now();\n  let trans = db.transaction(['kv'], 'readonly');\n  let store = trans.objectStore('kv');\n  let count = 0;\n  output('Running a sum on all values');\n\n  return new Promise((resolve, reject) => {\n    let req = store.openCursor();\n    let total = 0;\n    req.onsuccess = e => {\n      let cursor = e.target.result;\n      if (cursor) {\n        count++;\n        total += cursor.value;\n        cursor.continue();\n      } else {\n        let took = Date.now() - start;\n        output(`Total sum: ${total} (counted ${count} items), took ${took}`);\n        outputTiming(took);\n        resolve();\n      }\n    };\n    req.onerror = reject;\n  });\n}\n\nfunction randomReads(db, output) {\n  output('randomReads is not implemented for raw idb yet');\n  // let trans = db.transaction(['kv'], 'readonly');\n  // let store = trans.objectStore('kv');\n  // return new Promise((resolve, reject) => {\n  // });\n}\n\n\n//# sourceURL=webpack:///./bench/queries-raw-idb.js?");

/***/ }),

/***/ "./bench/queries.js":
/*!**************************!*\
  !*** ./bench/queries.js ***!
  \**************************/
/***/ ((module) => {

eval("if (globalThis.performance == null) {\n  globalThis.performance = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'perf_hooks'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).performance;\n}\n\nfunction uid(i) {\n  // This will make ids of different lengths, but we want to inject\n  // some larger data than just ints (something like a uuid) but we\n  // don't want to actually generate uuids because that's slow-ish and\n  // we want profiling to show sqlite as much as possible\n  return '0000000000000000000000000' + i;\n}\n\nfunction formatNumber(num) {\n  return new Intl.NumberFormat('en-US').format(num);\n}\n\nasync function clear(db, output = console.log) {\n  output('Clearing existing data');\n  db.exec(`\n    BEGIN TRANSACTION;\n    DROP TABLE IF EXISTS kv;\n    CREATE TABLE kv (key TEXT, value TEXT);\n    COMMIT;\n  `);\n  output('Done');\n}\n\nfunction populate(db, count, output = console.log, outputTiming = console.log) {\n  let start = Date.now();\n  db.exec('BEGIN TRANSACTION');\n  let stmt = db.prepare('INSERT INTO kv (key, value) VALUES (?, ?)');\n\n  output(`Inserting ${formatNumber(count)} items`);\n\n  for (let i = 0; i < count; i++) {\n    stmt.run([uid(i), ((Math.random() * 100) | 0).toString()]);\n  }\n  db.exec('COMMIT');\n  let took = Date.now() - start;\n  output('Done! Took: ' + took);\n  outputTiming(took);\n}\n\nfunction sumAll(db, output = console.log, outputTiming = console.log) {\n  output('Running <code>SELECT COUNT(*) FROM kv</code>');\n\n  let stmt;\n  try {\n    stmt = db.prepare(`SELECT SUM(value) FROM kv`);\n  } catch (err) {\n    output('Error (make sure you write data first): ' + err.message);\n    throw err;\n  }\n\n  let start = performance.now();\n  let row;\n\n  if (stmt.all) {\n    let row = stmt.all();\n    output(JSON.stringify(row));\n  } else {\n    while (stmt.step()) {\n      row = stmt.getAsObject();\n    }\n    stmt.free();\n  }\n\n  let took = performance.now() - start;\n  output('<code>' + JSON.stringify(row) + '</code>');\n\n  outputTiming(took);\n  output('Done reading, took ' + formatNumber(took) + 'ms');\n  output('That scanned through all of the data');\n}\n\nasync function randomReads(\n  db,\n  output = console.log,\n  outputTiming = console.log\n) {\n  output(\n    'Running <code>SELECT key FROM kv LIMIT 1000 OFFSET ?</code> 20 times with increasing offset'\n  );\n  let start = Date.now();\n\n  let stmt;\n  try {\n    stmt = db.prepare(`SELECT key FROM kv LIMIT 1000 OFFSET ?`);\n  } catch (err) {\n    output('Error (make sure you write data first): ' + err.message);\n    throw err;\n  }\n\n  let canRebind = !!stmt.reset;\n\n  for (let i = 0; i < 20; i++) {\n    let off = i * 300;\n    if (canRebind) {\n      stmt.bind([off]);\n    }\n    // output('Using offset: ' + formatNumber(off));\n\n    if (stmt.all) {\n      // better-sqlite3 doesn't allow you to rebind the same\n      // statement. This is probably a tiny perf hit, but negligable\n      // for what we're measuring (it's already so much faster anyway)\n      stmt = db.prepare(`SELECT key FROM kv LIMIT 2000 OFFSET ${off}`);\n      let rows = stmt.all();\n      console.log(rows[rows.length - 1]);\n    } else {\n      let num = 0;\n      while (stmt.step()) {\n        num++;\n        let row = stmt.get();\n        if (num === 999) {\n          // output('(999 items hidden)');\n        } else if (num > 998) {\n          // output('<code>' + JSON.stringify(row) + '</code>');\n        }\n      }\n    }\n\n    if (canRebind) {\n      stmt.reset();\n    }\n  }\n\n  if (stmt.free) {\n    stmt.free();\n  }\n\n  let took = Date.now() - start;\n  outputTiming(took);\n  output('Done reading, took ' + formatNumber(took) + 'ms');\n}\n\nmodule.exports = { clear, populate, sumAll, randomReads };\n\n\n//# sourceURL=webpack:///./bench/queries.js?");

/***/ }),

/***/ "../index.js":
/*!*******************!*\
  !*** ../index.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SQLiteFS\": () => (/* binding */ SQLiteFS)\n/* harmony export */ });\n/* harmony import */ var _sqlite_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sqlite-fs */ \"../sqlite-fs.js\");\n\n\n// Right now we don't support `export from` so we do this manually\nconst SQLiteFS = _sqlite_fs__WEBPACK_IMPORTED_MODULE_0__.default;\n\n\n//# sourceURL=webpack:///../index.js?");

/***/ }),

/***/ "../indexeddb/backend.js":
/*!*******************************!*\
  !*** ../indexeddb/backend.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IndexedDBBackend)\n/* harmony export */ });\n/* harmony import */ var _sqlite_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sqlite-file */ \"../sqlite-file.js\");\n/* harmony import */ var perf_deets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perf-deets */ \"../../node_modules/perf-deets/index.js\");\n/* harmony import */ var _sqlite_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sqlite-util */ \"../sqlite-util.js\");\n/* harmony import */ var _file_ops__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file-ops */ \"../indexeddb/file-ops.js\");\n/* harmony import */ var _file_ops_fallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file-ops-fallback */ \"../indexeddb/file-ops-fallback.js\");\n\n\n\n\n\n\nclass IndexedDBBackend {\n  constructor(onFallbackFailure) {\n    this.onFallbackFailure = onFallbackFailure;\n  }\n\n  createFile(filename) {\n    let ops;\n    if (typeof SharedArrayBuffer !== 'undefined') {\n      // SharedArrayBuffer exists! We can run this fully\n      ops = new _file_ops__WEBPACK_IMPORTED_MODULE_3__.FileOps(filename);\n    } else {\n      // SharedArrayBuffer is not supported. Use the fallback methods\n      // which provide a somewhat working version, but doesn't\n      // support mutations across connections (tabs)\n      ops = new _file_ops_fallback__WEBPACK_IMPORTED_MODULE_4__.FileOpsFallback(filename, this.onFallbackFailure);\n    }\n\n    let file = new _sqlite_file__WEBPACK_IMPORTED_MODULE_0__.File(filename, ops);\n\n    // If we don't need perf data, there's no reason for us to hold a\n    // reference to the files. If we did we'd have to worry about\n    // memory leaks\n    if (true) {\n      if (this._files == null) {\n        this._files = new Set();\n      }\n      this._files.add(file);\n    }\n\n    return file;\n  }\n\n  // Instead of controlling the profiler from the main thread by\n  // posting a message to this worker, you can control it inside the\n  // worker manually with these methods\n  startProfile() {\n    perf_deets__WEBPACK_IMPORTED_MODULE_1__.start();\n    for (let file of this._files) {\n      // If the writer doesn't exist, that means the file has been\n      // deleted\n      if (file.ops.writer) {\n        let writer = file.ops.writer;\n        let reader = file.ops.reader;\n        writer.string('profile-start');\n        writer.finalize();\n        reader.int32();\n        reader.done();\n      }\n    }\n  }\n\n  stopProfile() {\n    perf_deets__WEBPACK_IMPORTED_MODULE_1__.stop();\n    for (let file of this._files) {\n      if (file.ops.writer) {\n        let writer = file.ops.writer;\n        let reader = file.ops.reader;\n        writer.string('profile-stop');\n        writer.finalize();\n        reader.int32();\n        reader.done();\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///../indexeddb/backend.js?");

/***/ }),

/***/ "../indexeddb/file-ops-fallback.js":
/*!*****************************************!*\
  !*** ../indexeddb/file-ops-fallback.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FileOpsFallback\": () => (/* binding */ FileOpsFallback)\n/* harmony export */ });\n/* harmony import */ var _sqlite_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sqlite-util */ \"../sqlite-util.js\");\n\n\nfunction positionToKey(pos, blockSize) {\n  // We are forced to round because of floating point error. `pos`\n  // should always be divisible by `blockSize`\n  return Math.round(pos / blockSize);\n}\n\nasync function openDb(name) {\n  return new Promise((resolve, reject) => {\n    let req = globalThis.indexedDB.open(name, 2);\n    req.onsuccess = event => {\n      let db = event.target.result;\n\n      db.onversionchange = () => {\n        console.log('closing because version changed');\n        db.close();\n      };\n      db.onclose = () => {};\n\n      resolve(db);\n    };\n    req.onupgradeneeded = event => {\n      let db = event.target.result;\n      if (!db.objectStoreNames.contains('data')) {\n        db.createObjectStore('data');\n      }\n    };\n    req.onblocked = e => console.log('blocked', e);\n    req.onerror = req.onabort = e => reject(e.target.error);\n  });\n}\n\n// Using a separate class makes it easier to follow the code, and\n// importantly it removes any reliance on internal state in\n// `FileOpsFallback`. That would be problematic since these method\n// happen async; the args to `write` must be closed over so they don't\n// change\nclass Persistance {\n  constructor(onFallbackFailure) {\n    this._openDb = null;\n    this.hasAlertedFailure = false;\n    this.onFallbackFailure = onFallbackFailure;\n  }\n\n  async getDb() {\n    if (this._openDb) {\n      return this._openDb;\n    }\n\n    this._openDb = await openDb(this.dbName);\n    return this._openDb;\n  }\n\n  closeDb() {\n    if (this._openDb) {\n      this._openDb.close();\n      this._openDb = null;\n    }\n  }\n\n  // Both `readAll` and `write` rely on IndexedDB transactional\n  // semantics to work, otherwise we'd have to coordinate them. If\n  // there are pending writes, the `readonly` transaction in `readAll`\n  // will block until they are all flushed out. If `write` is called\n  // multiple times, `readwrite` transactions can only run one at a\n  // time so it will naturally apply the writes sequentially (and\n  // atomically)\n\n  async readAll() {\n    let db = await this.getDb(this.dbName);\n    let blocks = new Map();\n\n    let trans = db.transaction(['data'], 'readonly');\n    let store = trans.objectStore('data');\n\n    return new Promise((resolve, reject) => {\n      // Open a cursor and iterate through the entire file\n      let req = store.openCursor(IDBKeyRange.lowerBound(-1));\n      req.onerror = reject;\n      req.onsuccess = e => {\n        let cursor = e.target.result;\n        if (cursor) {\n          blocks.set(cursor.key, cursor.value);\n          cursor.continue();\n        } else {\n          resolve(blocks);\n        }\n      };\n    });\n  }\n\n  async write(writes, cachedFirstBlock, hasLocked) {\n    let db = await this.getDb(this.dbName);\n\n    // We need grab a readwrite lock on the db, and then read to check\n    // to make sure we can write to it\n    let trans = db.transaction(['data'], 'readwrite');\n    let store = trans.objectStore('data');\n\n    await new Promise((resolve, reject) => {\n      let req = store.get(0);\n      req.onsuccess = e => {\n        if (hasLocked) {\n          if (!(0,_sqlite_util__WEBPACK_IMPORTED_MODULE_0__.isSafeToWrite)(req.result, cachedFirstBlock)) {\n            if (this.onFallbackFailure && !this.hasAlertedFailure) {\n              this.hasAlertedFailure = true;\n              this.onFallbackFailure();\n            }\n            reject(new Error('Fallback mode unable to write file changes'));\n            return;\n          }\n        }\n\n        // Flush all the writes\n        for (let write of writes) {\n          store.put(write.value, write.key);\n        }\n\n        trans.onsuccess = () => resolve();\n        trans.onerror = () => reject();\n      };\n      req.onerror = reject;\n    });\n  }\n}\n\nclass FileOpsFallback {\n  constructor(filename, onFallbackFailure) {\n    this.filename = filename;\n    this.dbName = this.filename.replace(/\\//g, '-');\n    this.cachedFirstBlock = null;\n    this.writeQueue = null;\n    this.blocks = new Map();\n    this.lockType = 0;\n    this.transferBlockOwnership = false;\n\n    this.persistance = new Persistance(onFallbackFailure);\n  }\n\n  async readIfFallback() {\n    this.transferBlockOwnership = true;\n    this.blocks = await this.persistance.readAll();\n\n    return this.readMeta();\n  }\n\n  lock(lockType) {\n    // Locks always succeed here. Essentially we're only working\n    // locally (we can't see any writes from anybody else) and we just\n    // want to track the lock so we know when it downgrades from write\n    // to read\n    this.cachedFirstBlock = this.blocks.get(0);\n    this.lockType = lockType;\n    return true;\n  }\n\n  unlock(lockType) {\n    if (this.lockType > _sqlite_util__WEBPACK_IMPORTED_MODULE_0__.LOCK_TYPES.SHARED && lockType === _sqlite_util__WEBPACK_IMPORTED_MODULE_0__.LOCK_TYPES.SHARED) {\n      // Within a write lock, we delay all writes until the end of the\n      // lock. We probably don't have to do this since we already\n      // delay writes until an `fsync`, however this is an extra\n      // measure to make sure we are writing everything atomically\n      this.flush();\n    }\n    this.lockType = lockType;\n    return true;\n  }\n\n  delete() {\n    let req = globalThis.indexedDB.deleteDatabase(this.dbName);\n    req.onerror = () => {\n      console.warn(`Deleting ${this.filename} database failed`);\n    };\n    req.onsuccess = () => {};\n  }\n\n  open() {\n    this.writeQueue = [];\n    this.lockType = 0;\n  }\n\n  close() {\n    this.flush();\n\n    if (this.transferBlockOwnership) {\n      this.transferBlockOwnership = false;\n    } else {\n      this.blocks = new Map();\n    }\n\n    this.persistance.closeDb();\n  }\n\n  readMeta() {\n    let metaBlock = this.blocks.get(-1);\n    if (metaBlock) {\n      let block = this.blocks.get(0);\n\n      return {\n        size: metaBlock.size,\n        blockSize: (0,_sqlite_util__WEBPACK_IMPORTED_MODULE_0__.getPageSize)(new Uint8Array(block))\n      };\n    }\n    return null;\n  }\n\n  writeMeta(meta) {\n    this.blocks.set(-1, meta);\n    this.queueWrite(-1, meta);\n  }\n\n  readBlocks(positions, blockSize) {\n    let res = [];\n    for (let pos of positions) {\n      res.push({\n        pos,\n        data: this.blocks.get(positionToKey(pos, blockSize))\n      });\n    }\n    return res;\n  }\n\n  writeBlocks(writes, blockSize) {\n    for (let write of writes) {\n      let key = positionToKey(write.pos, blockSize);\n      this.blocks.set(key, write.data);\n      this.queueWrite(key, write.data);\n    }\n\n    // No write lock; flush them out immediately\n    if (this.lockType <= _sqlite_util__WEBPACK_IMPORTED_MODULE_0__.LOCK_TYPES.SHARED) {\n      this.flush();\n    }\n  }\n\n  queueWrite(key, value) {\n    this.writeQueue.push({ key, value });\n  }\n\n  flush() {\n    if (this.writeQueue.length > 0) {\n      this.persistance.write(\n        this.writeQueue,\n        this.cachedFirstBlock,\n        this.lockType > _sqlite_util__WEBPACK_IMPORTED_MODULE_0__.LOCK_TYPES.SHARED\n      );\n      this.writeQueue = [];\n    }\n    this.cachedFirstBlock = null;\n  }\n}\n\n\n//# sourceURL=webpack:///../indexeddb/file-ops-fallback.js?");

/***/ }),

/***/ "../indexeddb/file-ops.js":
/*!********************************!*\
  !*** ../indexeddb/file-ops.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FileOps\": () => (/* binding */ FileOps)\n/* harmony export */ });\n/* harmony import */ var _shared_channel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-channel */ \"../indexeddb/shared-channel.js\");\n\n\nfunction positionToKey(pos, blockSize) {\n  // We are forced to round because of floating point error. `pos`\n  // should always be divisible by `blockSize`\n  return Math.round(pos / blockSize);\n}\n\nfunction startWorker(reader, writer) {\n  // In a normal world, we'd spawn the worker here as a child worker.\n  // However Safari doesn't support nested workers, so we have to\n  // proxy them through the main thread\n  self.postMessage({\n    type: '__absurd:spawn-idb-worker',\n    argBuffer: writer.buffer,\n    resultBuffer: reader.buffer\n  });\n\n  self.addEventListener('message', e => {\n    switch (e.data.type) {\n      // Normally you would use `postMessage` control the profiler in\n      // a worker (just like this worker go those events), and the\n      // perf library automatically handles those events. We don't do\n      // that for the special backend worker though because it's\n      // always blocked when it's not processing. Instead we forward\n      // these events by going through the atomics layer to unblock it\n      // to make sure it starts immediately\n      case '__perf-deets:start-profile':\n        writer.string('profile-start');\n        writer.finalize();\n        reader.int32();\n        reader.done();\n        break;\n\n      case '__perf-deets:stop-profile':\n        writer.string('profile-stop');\n        writer.finalize();\n        reader.int32();\n        reader.done();\n        break;\n    }\n  });\n}\n\nclass FileOps {\n  constructor(filename) {\n    this.filename = filename;\n  }\n\n  // TODO: This should be renamed to `getDatabaseName`\n  getStoreName() {\n    return this.filename.replace(/\\//g, '-');\n  }\n\n  invokeWorker(method, args) {\n    if (this.reader == null || this.writer == null) {\n      throw new Error(\n        `Attempted ${method} on ${this.filename} but file not open`\n      );\n    }\n\n    let reader = this.reader;\n    let writer = this.writer;\n\n    switch (method) {\n      case 'readBlocks': {\n        let { name, positions, blockSize } = args;\n\n        let res = [];\n        for (let pos of positions) {\n          writer.string('readBlock');\n          writer.string(name);\n          writer.int32(positionToKey(pos, blockSize));\n          writer.finalize();\n\n          let data = reader.bytes();\n          reader.done();\n          res.push({\n            pos,\n            // If th length is 0, the block didn't exist. We return a\n            // blank block in that case\n            data: data.byteLength === 0 ? new ArrayBuffer(blockSize) : data\n          });\n        }\n\n        return res;\n      }\n\n      case 'writeBlocks': {\n        let { name, writes, blockSize } = args;\n        writer.string('writeBlocks');\n        writer.string(name);\n        for (let write of writes) {\n          writer.int32(positionToKey(write.pos, blockSize));\n          writer.bytes(write.data);\n        }\n        writer.finalize();\n\n        let res = reader.int32();\n        reader.done();\n        return res;\n      }\n\n      case 'readMeta': {\n        writer.string('readMeta');\n        writer.string(args.name);\n        writer.finalize();\n\n        let size = reader.int32();\n        let blockSize = reader.int32();\n        reader.done();\n        return size === -1 ? null : { size, blockSize };\n      }\n\n      case 'writeMeta': {\n        let { name, meta } = args;\n        writer.string('writeMeta');\n        writer.string(name);\n        writer.int32(meta.size);\n        // writer.int32(meta.blockSize);\n        writer.finalize();\n\n        let res = reader.int32();\n        reader.done();\n        return res;\n      }\n\n      case 'closeFile': {\n        writer.string('closeFile');\n        writer.string(args.name);\n        writer.finalize();\n\n        let res = reader.int32();\n        reader.done();\n        return res;\n      }\n\n      case 'lockFile': {\n        writer.string('lockFile');\n        writer.string(args.name);\n        writer.int32(args.lockType);\n        writer.finalize();\n\n        let res = reader.int32();\n        reader.done();\n        return res === 0;\n      }\n\n      case 'unlockFile': {\n        writer.string('unlockFile');\n        writer.string(args.name);\n        writer.int32(args.lockType);\n        writer.finalize();\n\n        let res = reader.int32();\n        reader.done();\n        return res === 0;\n      }\n    }\n  }\n\n  lock(lockType) {\n    return this.invokeWorker('lockFile', {\n      name: this.getStoreName(),\n      lockType\n    });\n  }\n\n  unlock(lockType) {\n    return this.invokeWorker('unlockFile', {\n      name: this.getStoreName(),\n      lockType\n    });\n  }\n\n  delete() {\n    // Close the file if it's open\n    if (this.reader || this.writer) {\n      this.close();\n    }\n\n    // We delete it here because we can't do it in the worker; the\n    // worker is stopped when the file closes. If we didn't do that,\n    // workers would leak in the case of closing a file but not\n    // deleting it. We could potentially restart the worker here if\n    // needed, but for now just assume that the deletion is a success\n    let req = globalThis.indexedDB.deleteDatabase(this.getStoreName());\n    req.onerror = () => {\n      console.warn(`Deleting ${this.filename} database failed`);\n    };\n    req.onsuccess = () => {};\n  }\n\n  open() {\n    let argBuffer = new SharedArrayBuffer(4096 * 9);\n    this.writer = new _shared_channel__WEBPACK_IMPORTED_MODULE_0__.Writer(argBuffer, {\n      name: 'args (backend)',\n      debug: false\n    });\n\n    let resultBuffer = new SharedArrayBuffer(4096 * 9);\n    this.reader = new _shared_channel__WEBPACK_IMPORTED_MODULE_0__.Reader(resultBuffer, {\n      name: 'results',\n      debug: false\n    });\n\n    // TODO: We could pool workers and reuse them so opening files\n    // aren't so slow\n    startWorker(this.reader, this.writer);\n  }\n\n  close() {\n    this.invokeWorker('closeFile', { name: this.getStoreName() });\n    this.reader = null;\n    this.writer = null;\n    this.worker = null;\n  }\n\n  readMeta() {\n    return this.invokeWorker('readMeta', { name: this.getStoreName() });\n  }\n\n  writeMeta(meta) {\n    return this.invokeWorker('writeMeta', { name: this.getStoreName(), meta });\n  }\n\n  readBlocks(positions, blockSize) {\n    if (this.stats) {\n      this.stats.read += positions.length;\n    }\n\n    return this.invokeWorker('readBlocks', {\n      name: this.getStoreName(),\n      positions,\n      blockSize\n    });\n  }\n\n  writeBlocks(writes, blockSize) {\n    if (this.stats) {\n      this.stats.writes += writes.length;\n    }\n\n    return this.invokeWorker('writeBlocks', {\n      name: this.getStoreName(),\n      writes,\n      blockSize\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///../indexeddb/file-ops.js?");

/***/ }),

/***/ "../indexeddb/shared-channel.js":
/*!**************************************!*\
  !*** ../indexeddb/shared-channel.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Reader\": () => (/* binding */ Reader),\n/* harmony export */   \"Writer\": () => (/* binding */ Writer)\n/* harmony export */ });\nlet FINALIZED = 0xdeadbeef;\n\nlet WRITEABLE = 0;\nlet READABLE = 1;\n\nclass Reader {\n  constructor(\n    buffer,\n    { initialOffset = 4, useAtomics = true, stream = true, debug, name } = {}\n  ) {\n    this.buffer = buffer;\n    this.atomicView = new Int32Array(buffer);\n    this.offset = initialOffset;\n    this.useAtomics = useAtomics;\n    this.stream = stream;\n    this.debug = debug;\n    this.name = name;\n  }\n\n  log(...args) {\n    if (this.debug) {\n      console.log(`[reader: ${this.name}]`, ...args);\n    }\n  }\n\n  waitWrite(name, timeout = null) {\n    if (this.useAtomics) {\n      this.log(`waiting for ${name}`);\n\n      while (Atomics.load(this.atomicView, 0) === WRITEABLE) {\n        if (timeout != null) {\n          if (\n            Atomics.wait(this.atomicView, 0, WRITEABLE, timeout) === 'timed-out'\n          ) {\n            throw new Error('timeout');\n          }\n        }\n\n        Atomics.wait(this.atomicView, 0, WRITEABLE, 500);\n      }\n\n      this.log(`resumed for ${name}`);\n    } else {\n      if (this.atomicView[0] !== READABLE) {\n        throw new Error('`waitWrite` expected array to be readable');\n      }\n    }\n  }\n\n  flip() {\n    this.log('flip');\n    if (this.useAtomics) {\n      let prev = Atomics.compareExchange(\n        this.atomicView,\n        0,\n        READABLE,\n        WRITEABLE\n      );\n\n      if (prev !== READABLE) {\n        throw new Error('Read data out of sync! This is disastrous');\n      }\n\n      Atomics.notify(this.atomicView, 0);\n    } else {\n      this.atomicView[0] = WRITEABLE;\n    }\n\n    this.offset = 4;\n  }\n\n  done() {\n    this.waitWrite('done');\n\n    let dataView = new DataView(this.buffer, this.offset);\n    let done = dataView.getUint32(0) === FINALIZED;\n\n    if (done) {\n      this.log('done');\n      this.flip();\n    }\n\n    return done;\n  }\n\n  peek(fn) {\n    this.peekOffset = this.offset;\n    let res = fn();\n    this.offset = this.peekOffset;\n    this.peekOffset = null;\n    return res;\n  }\n\n  string(timeout) {\n    this.waitWrite('string', timeout);\n\n    let byteLength = this._int32();\n    let length = byteLength / 2;\n\n    let dataView = new DataView(this.buffer, this.offset, byteLength);\n    let chars = [];\n    for (let i = 0; i < length; i++) {\n      chars.push(dataView.getUint16(i * 2));\n    }\n    let str = String.fromCharCode.apply(null, chars);\n    this.log('string', str);\n\n    this.offset += byteLength;\n\n    if (this.peekOffset == null) {\n      this.flip();\n    }\n    return str;\n  }\n\n  _int32() {\n    let byteLength = 4;\n\n    let dataView = new DataView(this.buffer, this.offset);\n    let num = dataView.getInt32();\n    this.log('_int32', num);\n\n    this.offset += byteLength;\n    return num;\n  }\n\n  int32() {\n    this.waitWrite('int32');\n    let num = this._int32();\n    this.log('int32', num);\n\n    if (this.peekOffset == null) {\n      this.flip();\n    }\n    return num;\n  }\n\n  bytes() {\n    this.waitWrite('bytes');\n\n    let byteLength = this._int32();\n\n    let bytes = new ArrayBuffer(byteLength);\n    new Uint8Array(bytes).set(\n      new Uint8Array(this.buffer, this.offset, byteLength)\n    );\n    this.log('bytes', bytes);\n\n    this.offset += byteLength;\n\n    if (this.peekOffset == null) {\n      this.flip();\n    }\n    return bytes;\n  }\n}\n\nclass Writer {\n  constructor(\n    buffer,\n    { initialOffset = 4, useAtomics = true, stream = true, debug, name } = {}\n  ) {\n    this.buffer = buffer;\n    this.atomicView = new Int32Array(buffer);\n    this.offset = initialOffset;\n    this.useAtomics = useAtomics;\n    this.stream = stream;\n\n    this.debug = debug;\n    this.name = name;\n\n    if (this.useAtomics) {\n      // The buffer starts out as writeable\n      Atomics.store(this.atomicView, 0, WRITEABLE);\n    } else {\n      this.atomicView[0] = WRITEABLE;\n    }\n  }\n\n  log(...args) {\n    if (this.debug) {\n      console.log(`[writer: ${this.name}]`, ...args);\n    }\n  }\n\n  waitRead(name) {\n    if (this.useAtomics) {\n      this.log(`waiting for ${name}`);\n      // Switch to writable\n      // Atomics.store(this.atomicView, 0, 1);\n\n      let prev = Atomics.compareExchange(\n        this.atomicView,\n        0,\n        WRITEABLE,\n        READABLE\n      );\n\n      if (prev !== WRITEABLE) {\n        throw new Error(\n          'Wrote something into unwritable buffer! This is disastrous'\n        );\n      }\n\n      Atomics.notify(this.atomicView, 0);\n\n      while (Atomics.load(this.atomicView, 0) === READABLE) {\n        // console.log('waiting to be read...');\n        Atomics.wait(this.atomicView, 0, READABLE, 500);\n      }\n\n      this.log(`resumed for ${name}`);\n    } else {\n      this.atomicView[0] = READABLE;\n    }\n\n    this.offset = 4;\n  }\n\n  finalize() {\n    this.log('finalizing');\n    let dataView = new DataView(this.buffer, this.offset);\n    dataView.setUint32(0, FINALIZED);\n    this.waitRead('finalize');\n  }\n\n  string(str) {\n    this.log('string', str);\n\n    let byteLength = str.length * 2;\n    this._int32(byteLength);\n\n    let dataView = new DataView(this.buffer, this.offset, byteLength);\n    for (let i = 0; i < str.length; i++) {\n      dataView.setUint16(i * 2, str.charCodeAt(i));\n    }\n\n    this.offset += byteLength;\n    this.waitRead('string');\n  }\n\n  _int32(num) {\n    let byteLength = 4;\n\n    let dataView = new DataView(this.buffer, this.offset);\n    dataView.setInt32(0, num);\n\n    this.offset += byteLength;\n  }\n\n  int32(num) {\n    this.log('int32', num);\n    this._int32(num);\n    this.waitRead('int32');\n  }\n\n  bytes(buffer) {\n    this.log('bytes', buffer);\n\n    let byteLength = buffer.byteLength;\n    this._int32(byteLength);\n    new Uint8Array(this.buffer, this.offset).set(new Uint8Array(buffer));\n\n    this.offset += byteLength;\n    this.waitRead('bytes');\n  }\n}\n\n\n//# sourceURL=webpack:///../indexeddb/shared-channel.js?");

/***/ }),

/***/ "../memory/backend.js":
/*!****************************!*\
  !*** ../memory/backend.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MemoryBackend)\n/* harmony export */ });\n/* harmony import */ var _sqlite_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sqlite-file */ \"../sqlite-file.js\");\n\n\nclass FileOps {\n  constructor(filename, meta = null, data) {\n    this.filename = filename;\n    this.locked = false;\n    this.meta = meta;\n    this.data = data || new ArrayBuffer(0);\n  }\n\n  lock() {\n    return true;\n  }\n\n  unlock() {\n    return true;\n  }\n\n  open() {}\n\n  close() {\n    return true;\n  }\n\n  delete() {\n    // in-memory noop\n  }\n\n  startStats() {}\n  stats() {}\n\n  readMeta() {\n    return this.meta;\n  }\n\n  writeMeta(meta) {\n    if (this.meta == null) {\n      this.meta = {};\n    }\n    this.meta.size = meta.size;\n    this.meta.blockSize = meta.blockSize;\n  }\n\n  readBlocks(positions, blockSize) {\n    // console.log('_reading', this.filename, positions);\n    let data = this.data;\n\n    return positions.map(pos => {\n      let buffer = new ArrayBuffer(blockSize);\n\n      if (pos < data.byteLength) {\n        new Uint8Array(buffer).set(\n          new Uint8Array(data, pos, Math.min(blockSize, data.byteLength - pos))\n        );\n      }\n\n      return { pos, data: buffer };\n    });\n  }\n\n  writeBlocks(writes, blockSize) {\n    // console.log('_writing', this.filename, writes);\n    let data = this.data;\n\n    console.log('writes', writes.length);\n    let i = 0;\n    for (let write of writes) {\n      if (i % 1000 === 0) {\n        console.log('write');\n      }\n      i++;\n      let fullLength = write.pos + write.data.byteLength;\n\n      if (fullLength > data.byteLength) {\n        // Resize file\n        let buffer = new ArrayBuffer(fullLength);\n        new Uint8Array(buffer).set(new Uint8Array(data));\n        this.data = data = buffer;\n      }\n\n      new Uint8Array(data).set(new Uint8Array(write.data), write.pos);\n    }\n  }\n}\n\nclass MemoryBackend {\n  constructor(fileData) {\n    this.fileData = Object.fromEntries(\n      Object.entries(fileData).map(([name, data]) => {\n        return [name, data];\n      })\n    );\n    this.files = {};\n  }\n\n  createFile(filename) {\n    if (this.files[filename] == null) {\n      let data = this.fileData[filename];\n\n      this.files[filename] = new _sqlite_file__WEBPACK_IMPORTED_MODULE_0__.File(\n        filename,\n        new FileOps(\n          filename,\n          data\n            ? {\n                size: data.byteLength,\n                blockSize: this.defaultBlockSize\n              }\n            : null\n        )\n      );\n    }\n    return this.files[filename];\n  }\n\n  getFile(filename) {\n    return this.files[filename];\n  }\n\n  startProfile() {}\n\n  stopProfile() {}\n}\n\n\n//# sourceURL=webpack:///../memory/backend.js?");

/***/ }),

/***/ "../sqlite-file.js":
/*!*************************!*\
  !*** ../sqlite-file.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBoundaryIndexes\": () => (/* binding */ getBoundaryIndexes),\n/* harmony export */   \"readChunks\": () => (/* binding */ readChunks),\n/* harmony export */   \"writeChunks\": () => (/* binding */ writeChunks),\n/* harmony export */   \"File\": () => (/* binding */ File)\n/* harmony export */ });\n/* harmony import */ var perf_deets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! perf-deets */ \"../../node_modules/perf-deets/index.js\");\n/* harmony import */ var _sqlite_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sqlite-util */ \"../sqlite-util.js\");\n\n\n\nfunction range(start, end, step) {\n  let r = [];\n  for (let i = start; i <= end; i += step) {\n    r.push(i);\n  }\n  return r;\n}\n\nfunction getBoundaryIndexes(blockSize, start, end) {\n  let startC = start - (start % blockSize);\n  let endC = end - 1 - ((end - 1) % blockSize);\n\n  return range(startC, endC, blockSize);\n}\n\nfunction readChunks(chunks, start, end) {\n  let buffer = new ArrayBuffer(end - start);\n  let bufferView = new Uint8Array(buffer);\n\n  let cursor = 0;\n  for (let i = 0; i < chunks.length; i++) {\n    let chunk = chunks[i];\n\n    // TODO: jest has a bug where we can't do `instanceof ArrayBuffer`\n    if (chunk.data.constructor.name !== 'ArrayBuffer') {\n      throw new Error('Chunk data is not an ArrayBuffer');\n    }\n\n    let cstart = 0;\n    let cend = chunk.data.byteLength;\n\n    if (start > chunk.pos) {\n      cstart = start - chunk.pos;\n    }\n    if (end < chunk.pos + chunk.data.byteLength) {\n      cend = end - chunk.pos;\n    }\n\n    if (cstart > chunk.data.byteLength || cend < 0) {\n      continue;\n    }\n\n    let len = cend - cstart;\n\n    bufferView.set(\n      new Uint8Array(chunk.data, cstart, len),\n      chunk.pos - start + cstart\n    );\n    cursor += len;\n  }\n\n  return buffer;\n}\n\nfunction writeChunks(bufferView, blockSize, start, end) {\n  let indexes = getBoundaryIndexes(blockSize, start, end);\n  let cursor = 0;\n\n  return indexes\n    .map(index => {\n      let cstart = 0;\n      let cend = blockSize;\n      if (start > index && start < index + blockSize) {\n        cstart = start - index;\n      }\n      if (end > index && end < index + blockSize) {\n        cend = end - index;\n      }\n\n      let len = cend - cstart;\n      let chunkBuffer = new ArrayBuffer(blockSize);\n\n      if (start > index + blockSize || end <= index) {\n        return null;\n      }\n\n      let off = bufferView.byteOffset + cursor;\n\n      let available = bufferView.buffer.byteLength - off;\n      if (available <= 0) {\n        return null;\n      }\n\n      let readLength = Math.min(len, available);\n\n      new Uint8Array(chunkBuffer).set(\n        new Uint8Array(bufferView.buffer, off, readLength),\n        cstart\n      );\n      cursor += readLength;\n\n      return {\n        pos: index,\n        data: chunkBuffer,\n        offset: cstart,\n        length: readLength\n      };\n    })\n    .filter(Boolean);\n}\n\nclass File {\n  constructor(filename, ops, meta = null) {\n    this.filename = filename;\n    this.buffer = new Map();\n    this.ops = ops;\n    this.meta = meta;\n    this._metaDirty = false;\n    this.writeLock = false;\n  }\n\n  bufferChunks(chunks) {\n    for (let i = 0; i < chunks.length; i++) {\n      let chunk = chunks[i];\n      this.buffer.set(chunk.pos, chunk);\n    }\n  }\n\n  open() {\n    this.ops.open();\n    let meta = this.ops.readMeta();\n\n    // It's possible that `setattr` has already been called if opening\n    // the file in a mode that truncates it to 0\n    if (this.meta == null) {\n      if (meta == null) {\n        // New file\n\n        meta = { size: 0 };\n      }\n\n      this.meta = meta;\n    }\n\n    return meta;\n  }\n\n  close() {\n    this.fsync();\n    this.ops.close();\n  }\n\n  delete() {\n    this.ops.delete();\n  }\n\n  load(indexes) {\n    let status = indexes.reduce(\n      (acc, b) => {\n        let inMemory = this.buffer.get(b);\n        if (inMemory) {\n          acc.chunks.push(inMemory);\n        } else {\n          acc.missing.push(b);\n        }\n        return acc;\n      },\n      { chunks: [], missing: [] }\n    );\n\n    let missingChunks = [];\n    if (status.missing.length > 0) {\n      perf_deets__WEBPACK_IMPORTED_MODULE_0__.record('read-blocks');\n      missingChunks = this.ops.readBlocks(status.missing, this.meta.blockSize);\n      perf_deets__WEBPACK_IMPORTED_MODULE_0__.endRecording('read-blocks');\n    }\n    return status.chunks.concat(missingChunks);\n  }\n\n  read(bufferView, offset, length, position) {\n    // console.log('reading', this.filename, offset, length, position);\n    let buffer = bufferView.buffer;\n\n    if (length <= 0) {\n      return 0;\n    }\n    if (position < 0) {\n      // TODO: is this right?\n      return 0;\n    }\n    if (position >= this.meta.size) {\n      let view = new Uint8Array(buffer, offset);\n      for (let i = 0; i < length; i++) {\n        view[i] = 0;\n      }\n\n      return length;\n    }\n\n    position = Math.max(position, 0);\n    let dataLength = Math.min(length, this.meta.size - position);\n\n    let start = position;\n    let end = position + dataLength;\n\n    let indexes = getBoundaryIndexes(this.meta.blockSize, start, end);\n\n    let chunks = this.load(indexes);\n    let readBuffer = readChunks(chunks, start, end);\n\n    if (buffer.byteLength - offset < readBuffer.byteLength) {\n      throw new Error('Buffer given to `read` is too small');\n    }\n    let view = new Uint8Array(buffer);\n    view.set(new Uint8Array(readBuffer), offset);\n\n    // TODO: I don't need to do this. `unixRead` does this for us.\n    for (let i = dataLength; i < length; i++) {\n      view[offset + i] = 0;\n    }\n\n    return length;\n  }\n\n  write(bufferView, offset, length, position) {\n    // console.log('writing', this.filename, offset, length, position);\n\n    if (this.meta.blockSize == null) {\n      // We don't have a block size yet (an empty file). The first\n      // write MUST be the beginning of the file. This is a new file\n      // and the first block contains the page size which we need.\n      // sqlite will write this block first, and if you are directly\n      // writing a db file to disk you can't write random parts of it.\n      // Just write the whole thing and we'll get the first block\n      // first.\n\n      let pageSize = (0,_sqlite_util__WEBPACK_IMPORTED_MODULE_1__.getPageSize)(\n        new Uint8Array(bufferView.buffer, bufferView.byteOffset + offset)\n      );\n\n      // Page sizes must be a power of 2 between 512 and 65536.\n      // These was generated by doing `Math.pow(2, N)` where N >= 9\n      // and N <= 16.\n      if (\n        ![512, 1024, 2048, 4096, 8192, 16384, 32768, 65536].includes(pageSize)\n      ) {\n        throw new Error(\n          'File has invalid page size. (the first block of a new file must be written first)'\n        );\n      }\n\n      this.setattr({ blockSize: pageSize });\n    }\n\n    let buffer = bufferView.buffer;\n\n    if (length <= 0) {\n      return 0;\n    }\n    if (position < 0) {\n      return 0;\n    }\n    if (buffer.byteLength === 0) {\n      return 0;\n    }\n\n    perf_deets__WEBPACK_IMPORTED_MODULE_0__.count('writes');\n\n    length = Math.min(length, buffer.byteLength - offset);\n\n    let writes = writeChunks(\n      new Uint8Array(buffer, offset, length),\n      this.meta.blockSize,\n      position,\n      position + length\n    );\n\n    // Find any partial chunks and read them in and merge with\n    // existing data\n    let { partialWrites, fullWrites } = writes.reduce(\n      (state, write) => {\n        if (write.length !== this.meta.blockSize) {\n          state.partialWrites.push(write);\n        } else {\n          state.fullWrites.push({\n            pos: write.pos,\n            data: write.data\n          });\n        }\n        return state;\n      },\n      { fullWrites: [], partialWrites: [] }\n    );\n\n    let reads = [];\n    if (partialWrites.length > 0) {\n      reads = this.load(partialWrites.map(w => w.pos));\n    }\n\n    let allWrites = fullWrites.concat(\n      reads.map(read => {\n        let write = partialWrites.find(w => w.pos === read.pos);\n\n        // MuTatIoN!\n        new Uint8Array(read.data).set(\n          new Uint8Array(write.data, write.offset, write.length),\n          write.offset,\n          write.length\n        );\n\n        return read;\n      })\n    );\n\n    this.bufferChunks(allWrites);\n\n    if (position + length > this.meta.size) {\n      this.setattr({ size: position + length });\n    }\n\n    return length;\n  }\n\n  async readIfFallback() {\n    if (this.ops.readIfFallback) {\n      // Reset the meta\n      let meta = await this.ops.readIfFallback();\n      this.meta = meta || { size: 0 };\n    }\n  }\n\n  lock(lockType) {\n    // TODO: Perf APIs need improvement\n    if (!this._recordingLock) {\n      perf_deets__WEBPACK_IMPORTED_MODULE_0__.record('locked');\n      this._recordingLock = true;\n    }\n\n    if (this.ops.lock(lockType)) {\n      if (lockType >= _sqlite_util__WEBPACK_IMPORTED_MODULE_1__.LOCK_TYPES.RESERVED) {\n        this.writeLock = true;\n      }\n      return true;\n    }\n    return false;\n  }\n\n  unlock(lockType) {\n    if (lockType === 0) {\n      perf_deets__WEBPACK_IMPORTED_MODULE_0__.endRecording('locked');\n      this._recordingLock = false;\n    }\n\n    if (this.writeLock) {\n      // In certain cases (I saw this while running VACUUM after\n      // changing page size) sqlite changes the size of the file\n      // _after_ `fsync` for some reason. In our case, this is\n      // critical because we are relying on fsync to write everything\n      // out. If we just did some writes, do another fsync which will\n      // check the meta and make sure it's persisted if dirty (all\n      // other writes should already be flushed by now)\n      this.fsync();\n      this.writeLock = false;\n    }\n\n    return this.ops.unlock(lockType);\n  }\n\n  fsync() {\n    if (this.buffer.size > 0) {\n      // We need to handle page size changes which restructures the\n      // whole db. We check if the page size is being written and\n      // handle it\n      let first = this.buffer.get(0);\n      if (first) {\n        let pageSize = (0,_sqlite_util__WEBPACK_IMPORTED_MODULE_1__.getPageSize)(new Uint8Array(first.data));\n\n        if (pageSize !== this.meta.blockSize) {\n          // The page size changed! We need to reflect that in our\n          // storage. We need to restructure all pending writes and\n          // change our page size so all future writes reflect the new\n          // size.\n          let buffer = this.buffer;\n          this.buffer = new Map();\n\n          // We take all pending writes, concat them into a single\n          // buffer, and rewrite it out with the new size. This would\n          // be dangerous if the page size could be changed at any\n          // point in time since we don't handle partial reads here.\n          // However sqlite only ever actually changes the page size\n          // in 2 cases:\n          //\n          // * The db is empty (no data yet, so nothing to read)\n          // * A VACUUM command is rewriting the entire db\n          //\n          // In both cases, we can assume we have _all_ the needed\n          // data in the pending buffer, and we don't have to worry\n          // about overwriting anything.\n\n          let writes = [...buffer.values()];\n          let totalSize = writes.length * this.meta.blockSize;\n          let buf = new ArrayBuffer(totalSize);\n          let view = new Uint8Array(buf);\n\n          for (let write of writes) {\n            view.set(new Uint8Array(write.data), write.pos);\n          }\n\n          // Rewrite the buffer with the new page size\n          this.bufferChunks(writeChunks(view, pageSize, 0, totalSize));\n\n          // Change our page size\n          this.setattr({ blockSize: pageSize });\n        }\n      }\n\n      this.ops.writeBlocks([...this.buffer.values()], this.meta.blockSize);\n    }\n\n    if (this._metaDirty) {\n      // We only store the size right now. Block size is already\n      // stored in the sqlite file and we don't need the rest\n      //\n      // TODO: Currently we don't delete any extra blocks after the\n      // end of the file. This isn't super important, and in fact\n      // could cause perf regressions (sqlite doesn't compress files\n      // either!) but what we probably should do is detect a VACUUM\n      // command (the whole db is being rewritten) and at that point\n      // delete anything after the end of the file\n      this.ops.writeMeta({ size: this.meta.size });\n      this._metaDirty = false;\n    }\n\n    this.buffer = new Map();\n  }\n\n  setattr(attr) {\n    if (this.meta == null) {\n      this.meta = {};\n    }\n\n    // Size is the only attribute we actually persist. The rest are\n    // stored in memory\n\n    if (attr.mode !== undefined) {\n      this.meta.mode = attr.mode;\n    }\n\n    if (attr.blockSize !== undefined) {\n      this.meta.blockSize = attr.blockSize;\n    }\n\n    if (attr.size !== undefined) {\n      this.meta.size = attr.size;\n      this._metaDirty = true;\n    }\n  }\n\n  getattr() {\n    return this.meta;\n  }\n}\n\n\n//# sourceURL=webpack:///../sqlite-file.js?");

/***/ }),

/***/ "../sqlite-fs.js":
/*!***********************!*\
  !*** ../sqlite-fs.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SQLiteFS)\n/* harmony export */ });\nconst ERRNO_CODES = {\n  EPERM: 63,\n  ENOENT: 44\n};\n\n// This implements an emscripten-compatible filesystem that is means\n// to be mounted to the one from `sql.js`. Example:\n//\n// let BFS = new SQLiteFS(SQL.FS, idbBackend);\n// SQL.FS.mount(BFS, {}, '/blocked');\n//\n// Now any files created under '/blocked' will be handled by this\n// filesystem, which creates a special file that handles read/writes\n// in the way that we want.\nclass SQLiteFS {\n  constructor(FS, backend) {\n    this.FS = FS;\n    this.backend = backend;\n\n    this.node_ops = {\n      getattr: node => {\n        let fileattr = FS.isFile(node.mode) ? node.contents.getattr() : null;\n\n        let attr = {};\n        attr.dev = 1;\n        attr.ino = node.id;\n        attr.mode = fileattr ? fileattr.mode : node.mode;\n        attr.nlink = 1;\n        attr.uid = 0;\n        attr.gid = 0;\n        attr.rdev = node.rdev;\n        attr.size = fileattr ? fileattr.size : FS.isDir(node.mode) ? 4096 : 0;\n        attr.atime = new Date(0);\n        attr.mtime = new Date(0);\n        attr.ctime = new Date(0);\n        attr.blksize = fileattr ? fileattr.blockSize : 4096;\n        attr.blocks = Math.ceil(attr.size / attr.blksize);\n        return attr;\n      },\n      setattr: (node, attr) => {\n        if (this.FS.isFile(node.mode)) {\n          node.contents.setattr(attr);\n        } else {\n          if (attr.mode != null) {\n            node.mode = attr.mode;\n          }\n          if (attr.size != null) {\n            node.size = attr.size;\n          }\n        }\n      },\n      lookup: (parent, name) => {\n        throw new this.FS.ErrnoError(ERRNO_CODES.ENOENT);\n      },\n      mknod: (parent, name, mode, dev) => {\n        if (name.endsWith('.lock')) {\n          throw new Error('Locking via lockfiles is not supported');\n        }\n\n        return this.createNode(parent, name, mode, dev);\n      },\n      rename: (old_node, new_dir, new_name) => {\n        throw new Error('rename not implemented');\n      },\n      unlink: (parent, name) => {\n        let node = this.FS.lookupNode(parent, name);\n        node.contents.delete(name);\n      },\n      readdir: node => {\n        // We could list all the available databases here if `node` is\n        // the root directory. However Firefox does not implemented\n        // such a methods. Other browsers do, but since it's not\n        // supported on all browsers users will need to track it\n        // separate anyway right now\n\n        throw new Error('readdir not implemented');\n      },\n      symlink: (parent, newname, oldpath) => {\n        throw new Error('symlink not implemented');\n      },\n      readlink: node => {\n        throw new Error('symlink not implemented');\n      }\n    };\n\n    this.stream_ops = {\n      open: stream => {\n        if (this.FS.isFile(stream.node.mode)) {\n          stream.node.contents.open();\n        }\n      },\n\n      close: stream => {\n        if (this.FS.isFile(stream.node.mode)) {\n          stream.node.contents.close();\n        }\n      },\n\n      read: (stream, buffer, offset, length, position) => {\n        // console.log('read', offset, length, position)\n        return stream.node.contents.read(buffer, offset, length, position);\n      },\n\n      write: (stream, buffer, offset, length, position) => {\n        // console.log('write', offset, length, position);\n        return stream.node.contents.write(buffer, offset, length, position);\n      },\n\n      llseek: (stream, offset, whence) => {\n        // Copied from MEMFS\n        var position = offset;\n        if (whence === 1) {\n          position += stream.position;\n        } else if (whence === 2) {\n          if (FS.isFile(stream.node.mode)) {\n            position += stream.node.contents.getattr().size;\n          }\n        }\n        if (position < 0) {\n          throw new this.FS.ErrnoError(28);\n        }\n        return position;\n      },\n      allocate: (stream, offset, length) => {\n        stream.node.contents.setattr({ size: offset + length });\n      },\n      mmap: (stream, address, length, position, prot, flags) => {\n        throw new Error('mmap not implemented');\n      },\n      msync: (stream, buffer, offset, length, mmapFlags) => {\n        throw new Error('msync not implemented');\n      },\n      fsync: (stream, buffer, offset, length, mmapFlags) => {\n        stream.node.contents.fsync();\n      }\n    };\n  }\n\n  mount() {\n    return this.createNode(null, '/', 16384 /* dir */ | 511 /* 0777 */, 0);\n  }\n\n  lock(path, lockType) {\n    let { node } = this.FS.lookupPath(path);\n    return node.contents.lock(lockType);\n  }\n\n  unlock(path, lockType) {\n    let { node } = this.FS.lookupPath(path);\n    return node.contents.unlock(lockType);\n  }\n\n  createNode(parent, name, mode, dev) {\n    // Only files and directories supported\n    if (!(this.FS.isDir(mode) || this.FS.isFile(mode))) {\n      throw new this.FS.ErrnoError(ERRNO_CODES.EPERM);\n    }\n\n    var node = this.FS.createNode(parent, name, mode, dev);\n    if (this.FS.isDir(node.mode)) {\n      node.node_ops = {\n        mknod: this.node_ops.mknod,\n        lookup: this.node_ops.lookup,\n        unlink: this.node_ops.unlink,\n        setattr: this.node_ops.setattr\n      };\n      node.stream_ops = {};\n      node.contents = {};\n    } else if (this.FS.isFile(node.mode)) {\n      node.node_ops = this.node_ops;\n      node.stream_ops = this.stream_ops;\n\n      // Create file!\n      node.contents = this.backend.createFile(name);\n    }\n\n    // add the new node to the parent\n    if (parent) {\n      parent.contents[name] = node;\n      parent.timestamp = node.timestamp;\n    }\n\n    return node;\n  }\n}\n\n\n//# sourceURL=webpack:///../sqlite-fs.js?");

/***/ }),

/***/ "../sqlite-util.js":
/*!*************************!*\
  !*** ../sqlite-util.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LOCK_TYPES\": () => (/* binding */ LOCK_TYPES),\n/* harmony export */   \"getPageSize\": () => (/* binding */ getPageSize),\n/* harmony export */   \"isSafeToWrite\": () => (/* binding */ isSafeToWrite)\n/* harmony export */ });\nlet LOCK_TYPES = {\n  NONE: 0,\n  SHARED: 1,\n  RESERVED: 2,\n  PENDING: 3,\n  EXCLUSIVE: 4\n};\n\nfunction getPageSize(bufferView) {\n  // See 1.3.2 on https://www.sqlite.org/fileformat.html The page size\n  // is stored as a 2 byte integer at the 16th byte. It's stored as\n  // big-endian so the first byte is the larger one. Combine it into a\n  // single integer.\n  let int1 = bufferView[16];\n  let int2 = bufferView[17];\n  return (int1 << 8) + int2;\n}\n\nfunction isSafeToWrite(localData, diskData) {\n  if (localData != null && diskData != null) {\n    let localView = new Uint8Array(localData);\n    let diskView = new Uint8Array(diskData);\n\n    // See\n    // https://github.com/sqlite/sqlite/blob/master/src/pager.c#L93-L96\n    // (might be documented somewhere? I didn't see it this clearly in\n    // the docs). At least one of these bytes change when sqlite3 writes\n    // data. We can check this against our in-memory data to see if it's\n    // safe to write (if something changes underneath us, it's not)\n    for (let i = 24; i < 40; i++) {\n      if (localView[i] !== diskView[i]) {\n        return false;\n      }\n    }\n    return true;\n  }\n\n  // One of them is null, so it's only safe if to write if both are\n  // null, otherwise they are different\n  return localData == null && diskData == null;\n}\n\n\n//# sourceURL=webpack:///../sqlite-util.js?");

/***/ }),

/***/ "?ed39":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?");

/***/ }),

/***/ "?d20d":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ }),

/***/ "?8329":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///path_(ignored)?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jlongster_sql_js_dist_sql-wasm_js-node_modules_perf-deets_index_js"], () => (__webpack_require__("./bench/main.worker.js")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"bench_main_worker_js": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return __webpack_require__.e("vendors-node_modules_jlongster_sql_js_dist_sql-wasm_js-node_modules_perf-deets_index_js").then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;