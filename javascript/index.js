#!/usr/bin/env node

const { question } = require("readline-sync")

let sex = 0

while(!sex) sex = Number(question("성별을 입력 해주세요: (남=1, 여=2) "))

let pri = Number(question("키를 입력하세요: "))

let height = pri / 100
let weight = Number(question("몸무게를 입력하세요: "))

let result = weight / (height * height)

if(sex === 1) var oldCalcVersion = (pri - 100) * 0.9
else if(sex === 2) var oldCalcVersion = (pri - 100) * 0.85

if(result > 29) var vv = "고도비만"
else if(25 <= result) var vv = "비만"
else if(23 <= result) var vv = "과체중"
else if(18.5 <= result) var vv = "정상"
else if(result <= 18.6) var vv = "저체중"
else var vv = "알수없음"

console.log(`\nBMI 결과: ${result}\n평균 몸무게: ${oldCalcVersion}\n종류: ${vv}\n`)

question("엔터로 마치세요")
