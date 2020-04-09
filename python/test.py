sex = 1

pri = 180

height = pri / 100
weight = 100

result = weight / (height * height)

if sex == 1:
    oldCalcVersion = (pri - 100) * 0.9
else:
    oldCalcVersion = (pri - 100) * 0.85

if result > 29:
    vv="고도비만"
elif 25<=result :
    vv="비만"
elif 23<=result :
    vv="과체중"
elif 18.5<=result :
    vv="정상"
elif result<=18.6:
    vv="저체중"
else:
    vv="알수없음"

print(f"\nBMI 결과: {str(result)}\n평균 몸무게: {str(oldCalcVersion)}\n종류: {vv}\n")