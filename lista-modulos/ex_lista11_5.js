var rs = require("readline-sync")
var ageCalculator = require('age-calculator');
let { AgeFromDateString, AgeFromDate } = require('age-calculator');
var ano = rs.questionInt("Qual o ano que vc nasceu?")
var mês = rs.questionInt("Qual foi o mes que vc nasceu?")
var dia = rs.questionInt("Qual dia vc nasceu?")

var ageFromString = new AgeFromDateString('ano-mês-dia').age;
console.log("value from ageFromString", ageFromString);