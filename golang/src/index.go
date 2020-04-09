package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func main() {
	sex := float64(0)

	for sex == 0 {
		fmt.Println("성별을 입력 해주세요: (남=1, 여=2) ")

		sex = scanner()
	}

	fmt.Println("키를 입력하세요: ")
	pri := scanner()
	height := pri / 100

	fmt.Println("몸무게를 입력하세요: ")
	weight := scanner()

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

func scanner() float64 {
	scanner := bufio.NewScanner(os.Stdin)

	v := float64(0)

	for scanner.Scan() {
		i, err := strconv.ParseInt(scanner.Text(), 10, 64)

		if err != nil {
			fmt.Println(err)
			os.Exit(2)
		}

		if i != 0 {
			v = float64(i)
			break
		}
	}

	return v
}
