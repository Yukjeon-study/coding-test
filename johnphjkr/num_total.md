## Coding Test 문제

### 📌 문제 설명

- ***연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

### ❗ 문제 풀이

```javascript
function solution(num, total) {
    var answer = [];
    var k = 0;
    for (var a = 1; a < num; a++){
        k = k + a;
    }
    var first_num = (total - k) / num;
    for (var b = 0; b < num; b++){
        answer[b] = first_num + b;
    }
    return answer;
}
```

---

### ❔ review
