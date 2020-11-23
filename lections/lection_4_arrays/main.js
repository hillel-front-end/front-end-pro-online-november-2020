console.log('Lection_4');

n = 15; // столбцы
m = 5; // рядки

borderItem = '*';
space = '&nbsp;';

strSpaces = '';
strFilled = '';
for(j = 1; j <= n - 2; j++) {
    strSpaces = strSpaces + space;
    strFilled = strFilled + borderItem;
}
resultSpace = '*' + strSpaces + '*<br />';
resultFilled = strFilled + borderItem + borderItem + '<br />';

// strFilled = '';
// for(j = 1; j <= n; j++) {
//     strFilled = strFilled + borderItem;
// }
// resultFilled = strFilled + '<br />';

resultLinewWithSpaces = '';
for(i = 1; i <= m - 2; i++) {
    resultLinewWithSpaces = resultLinewWithSpaces + resultSpace;
}


// document.write(resultFilled);
// // for(i = 1; i <= m - 2; i++) {
// //     document.write(resultSpace);    
// // }
// document.write(resultLinewWithSpaces); 
// document.write(resultFilled);


// ---------------------------
// two dimensional arrays


array = [
    [1, 2, 3],
    [4, 5, 6, 77, 88, 99],
    [7, 8]
];


// стандартный цикл перебора любого одномерного массива A
for(i = 0; i < array.length; i++) {/* code */}

// стандартный цикл перебора любого двумерного массива A
for(i = 0; i < array.length; i++) {
    for(j = 0; j < array[i].length; j++) {
        /* code */
    }
}



n = 5;
m = 5;

A = new Array(n);

for(i = 0; i < A.length; i++){
    A[i]= new Array(m);
    for(j = 0; j < A[i].length; j++) {
        A[i][j] = Math.floor(Math.random()*20 - 10);
    }
}

// console.log(A);

// --------------------------------------------
max = A[0][0];

for(i = 0; i < A.length; i++) {
    for(j = 0; j < A[i].length; j++) {
        if (A[i][j] > max) {
            max = A[i][j];
        }
    }
}
// console.log(max);


// --------------------------------------------
n = 9;
m = n;

center = Math.floor(n/2);

k = 3;

document.write(n + ' ' + m + '<br />');
for(i = 1; i <= n; i++) {
    for(j = 1; j <= m; j++) {
        // if (i == k) {
        //     document.write('** ');
        // } else
        // if (j == k) {
        //     document.write('** ');
        // } else
        // if (i == j) {
        //     document.write(  '** ');
        // } else 
        // if (i + j == n + 1) {
        //     document.write('** ');
        // } else 
        // if (i < j) {
        //     document.write('** ');
        // } else 
        // if (i + j > n + 1) {
        //     document.write('** ');
        // } else 
        // if (i > center && j > center && i + j <= n + 1 + 4) {
        //     document.write('** ');
        // } else
        if (i <= j && i + j <= n + 1) {
            document.write('** ');
        } else
        document.write(i + '' + j + ' ');
    }    
    document.write('<br />');
}

/*
1. к ряду k или к столбцу k, где k = 3;
    i == k
    j == k

2. на главной диагонали
    i == j

3. на побочной диагонали
    i + j == n + 1, где n - длина

4. ниже главной диагонали
    i > j
5. выше главной диагонали
    i < j

6. ниже побочной диагонали
    i + j > n + 1, где n - длина

7. выше побочной диагонали
    i + j < n + 1, где n - длина

*/









// n = 10;
// m = 15;
// document.write('<br />')
// for(i = 1; i <= n; i++) {
//     for(j = 1; j <= m; j++) {
//         if (i == 1 || j == 1 || i == n || j == m || j == 7) {
//             document.write('*')
//         } else {
//             document.write('&nbsp;')
//         }
//     }
//     document.write('<br />')
// }