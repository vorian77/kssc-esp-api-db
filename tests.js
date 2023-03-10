"use strict";

const http = require('./util/http.js');

module.exports.testEcho = function (ctx) {
  const rtn = 'Query Param(s): ' + JSON.stringify(ctx.query);
  console.log(rtn);
  ctx.body = rtn;
  ctx.status = 200;
}

module.exports.testHttp = async function (ctx) {
  const method = ctx.request.method;
  const url = ctx.query.url;

  try {
    const response = await http(method, url, ctx);
    ctx.status = response.status;
    ctx.body = response.statusText;
  } catch(err) {
    throw err;
  }
}
