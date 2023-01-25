## Coding Test 문제

### 📌 문제 설명

- 정수 배열 `numbers`가 매개변수로 주어집니다. `numbers`의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
- 제한사항
  - 0 ≤ `numbers`의 원소 ≤ 1,000
  - 1 ≤ `numbers`의 길이 ≤ 100
  - 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.

### ❗ 문제 풀이

```javascript
function solution(numbers) {
  let sum = 0;
  numbers.forEach(function (i) {
    return (sum += i);
  });
  return sum / numbers.length;
}
```

##### 다른 사람의 풀이

```javascript
function solution(numbers) {
  var answer = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  return answer;
}
```

### ❔ review

- `reduce()`메소드는 각 각 요소에 대해 주어진 주어진 리듀서(reducer)를 느리게 실행하고, 하나의 결과값을 반환
  - `배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);`
- `forEach()` 메서드는 배열에 활용이 가능한 메서드로, 파라미터로 주어진 함수를 배열 요소 각각에 대해 실행하는 메서드
