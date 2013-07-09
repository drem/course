#!/usr/bin/env node
var result=[2], limit=99999;
for(var i=2; i<=limit && result.length<100; i++){
	if(isPrime(i)){
		result.push(i);
	}
}
console.log(result.join(","));

function isPrime(n){
	for(var i=2; i<=Math.ceil(Math.sqrt(n)); i++){
		if(n%i==0)return false;
	}
	return true;
};

var fs=require("fs"), outfile="prime.txt", out=result.join(",");
fs.writeFileSync(outfile,out);

