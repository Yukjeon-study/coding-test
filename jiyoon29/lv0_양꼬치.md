## Coding Test 문제

### 📌 문제 설명

- 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 `n`과 `k`가 매개변수로 주어졌을 때, 양꼬치 `n`인분과 음료수 `k`개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.
- 제한사항
  - 0 < `n` < 1,000
  - n / 10 ≤ `k` < 1,000
  - 서비스로 받은 음료수는 모두 마십니다.

### ❗ 문제 풀이

```javascript
function solution(n, k) {
  sum = 12000 * n;
  sum += (k - Math.trunc(n / 10)) * 2000;
  return sum;
}
```

##### 다른 사람의 풀이

```javascript
function solution(n, k) {
  k -= ~~(n / 10);
  if (k < 0) k = 0;
  return n * 12000 + k * 2000;
}
```

### ❔ review

- ~~ 틸드 문법 = Math.ceil와 기능이 같다
- 다양한 Math 함수를 알고 있으면 유용할 것 같다
- trunc는 정수를 반환하는 함수
