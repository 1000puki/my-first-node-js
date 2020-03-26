'use strict';
//node.js argv[0]:nodeコマンドパス argv[1]:実行プログラムパス [2]コマンド後半の引数
const number = process.argv[2] || 0;
let sum = 0;
for(let i = 1;i <= number; i++){
    sum = sum + i;
}
console.log(sum);