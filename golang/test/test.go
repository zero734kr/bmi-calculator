package main

import (
	"fmt"
)

func main() {
	sex := float64(1)

	pri := float64(180)
	height := pri / 100

	weight := float64(100)

	result := weight / (height * height)

	oldCalcVersion := float64(0)

	if sex == 1 {
		oldCalcVersion = (pri - 100) * float64(0.9)
	} else if sex == 2 {
		oldCalcVersion = (pri - 100) * float64(0.85)
	}

	s := fmt.Sprint(oldCalcVersion)

	vv := "알수없음"

	if result > 29 {
		vv = "고도비만"
	} else if 25 <= result {
		vv = "비만"
	} else if 23 <= result {
		vv = "과체중"
	} else if 18.5 <= result {
		vv = "정상"
	} else if result <= 18.6 {
		vv = "저체중"
	}

	re := fmt.Sprint(result)

	fmt.Println("\nBMI 결과: " + re + "\n평균 몸무게: " + s + "\n종류: " + vv + "\n")
}