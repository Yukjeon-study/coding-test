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