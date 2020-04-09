#!/usr/bin/env node

let sex = 1

let pri = 180

let height = pri / 100
let weight = 100

let result = weight / (height * height)

if (sex === 1) var oldCalcVersion = (pri - 100) * 0.9
else if (sex === 2) var oldCalcVersion = (pri - 100) * 0.85

if (result > 29) var vv = "고도비만"
else if (25 <= result) var vv = "비만"
else if (23 <= result) var vv = "과체중"
else if (18.5 <= result) var vv = "정상"
else if (result <= 18.6) var vv = "저체중"
else var vv = "알수없음"

console.log(`\nBMI 결과: ${result}\n평균 몸무게: ${oldCalcVersion}\n종류: ${vv}\n`)