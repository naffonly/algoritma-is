randomArray = (length, max) =>
    [...new Array(length)].map(() => Math.round(Math.random() * max));

  function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
  }
  
  function printArray(arr) {
    console.log(arr.join(' '));
  }
  
  function grade(num, arr) {
    let rs = [];
  
    var filter = arr.filter(value => value >= num);
    if (filter.length < 1) {
      return console.log(-1);
    }
    return console.log(filter);
  }
  
  function init(size) {
    let arr = randomArray(size, 10);
    let valueGrade = 8;
  
    console.log(`Sorting array of size ${size}...`);
    let startTime = performance.now();
    console.log('=> data array');
    // printArray(arr);
    console.log('=> proses insertion Sort');
    // ====================================================
    insertionSort(arr);
    // ===========================================
    console.log('=> hasil insertion Sort');
    // printArray(arr);
    console.log('=> hasil grading data ');
    grade(valueGrade, arr);
    let endTime = performance.now(); // Waktu selesai
  
    console.log(
      `Execution time for size ${size}: ${(endTime - startTime).toFixed(2)} ms`
    );
  }
  
  init(1500);
  