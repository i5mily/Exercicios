let nums = [2, 3, 4 ,5, 6];
let maior = nums[0];
for (let i =0; i < nums.length; i++) {
    if (nums [i] > maior) {
        maior = nums[i]
    }
}
console.log("O maior número é: "+ maior);  