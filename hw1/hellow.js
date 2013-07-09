#!/usr/bin/env node
var fs=require("fs"),
outfile="hellow.txt",
out="A startup is a business built to grow rapidly.\n";
fs.writeFileSync(outfile,out);

