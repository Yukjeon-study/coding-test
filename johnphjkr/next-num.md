## Coding Test 문제

### 📌 문제 설명

- ***등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

### ❗ 문제 풀이

```javascript
function solution(common) {
    var answer = 0;
    
    var a1, a2, b1, b2;
    a1 = common[1] - common[0];
    a2 = common[2] - common[1];
    b1 = common[1] / common[0];
    b2 = common[2] / common[1];

    answer = common[common.length - 1];
    
    if (a1 === a2) {
        answer = answer + a2;
    }
    if (b1 === b2) {
        answer = answer * b2;
    }
    
    return answer;
}
```

---

### ❔ review

