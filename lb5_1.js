var M = prompt('Введите количество столбцов: ',1);
var N = prompt('Введите количество строк: ', 1);
var arr = [];
for (let i=0; i<N; i++){
    arr.push([]);
}
for (let i=0; i<N; i++){
    for(let j=0; j<M; j++){
        arr[i].push(prompt('Введите число: ', 0));
    }
}
var count = +M*+N;
var sum = +0;
for (let i=0; i<N; i++){
    for(let j=0; j<M; j++){
        sum += +arr[i][j];
    }
}
var average = sum/count;
var m = +0;
var n = +0;
var diff = Math.abs(average-arr[0][0]);
for (let i=0; i<N; i++){
    for(let j=0; j<M; j++){
        let x = Math.abs(average-arr[i][j]);
        if (x<diff){
            diff=x;
            m=j;
            n=i;
        }
    }
}
for (let i=0; i<N; i++){
    console.log(arr[i].join(" "));
}
console.log('Среднее арифм.: ', average);
console.log('Искомое число: ', arr[n][m]);
console.log('Номера строки и столбца соостветственно: ', n+1, m+1);