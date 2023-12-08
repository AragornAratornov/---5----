var M = prompt('Введите порядок квадратной матрицы: ',1);
var arr = [];
for (let i = 0; i < M; i++){
    arr.push([]);
}
for (let i = 0; i < M; i++){
    for(let j = 0; j < M; j++){
        arr[i].push(prompt('Введите число: ', 1));
    }
}
var i1 = Math.trunc(+M/2)-1;
var i2 = M-i1-1;
for (let j = Math.trunc(+M/2)+1; j < M; j++) {
    i1++;
    i2--;
    for (i = i2; i <= i1 && j+i>=M; i++){
        arr[i][j] = '0';
    }
  }
console.log(arr);
