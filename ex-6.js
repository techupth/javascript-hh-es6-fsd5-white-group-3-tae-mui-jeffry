let height = undefined;
let result = checkHeight(height);

function checkHeight (height) {
    if(height === undefined) {
        return `Height is not defined`
    } else {
        return height
    }
}

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
