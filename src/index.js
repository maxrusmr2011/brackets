module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let first = bracketsConfig.map((item) => item[0]);
    let second = bracketsConfig.map((item) => item[1]);
    for (let i = 0; i < str.length; i++) {
        let bracketIndex;
        if ((bracketIndex = first.indexOf(str[i])) >= 0) {
            if (first[bracketIndex] === second[bracketIndex]) {
                if (stack[stack.length - 1] === first[bracketIndex]) {
                    stack.pop();
                } else {
                    stack.push(str[i]);
                }
            } else {
                stack.push(str[i]);
            }
        } else if ((bracketIndex = second.indexOf(str[i])) >= 0) {
            if (stack.length > 0 && stack[stack.length - 1] === first[bracketIndex]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return !stack.length;
}
