//////////////////// ! 
const sumFactorial = n => {
    let sum= 0;
    for (let i = 1; i<=n; i++){
        sum += i;
    }
    return sum;
    }
   console.log(sumFactorial(7));

///////////////////// *
  for (let i = 0; i <= 7; i++) {
    let line = '';
    for (let j = 0; j < i; j++) {
      line += '*';
    }
    console.log(line);
    }

//////////////////// -*
  for (let i = 0; i <= 7; i++) {
    let k = '';
    for (let j = 7; j > i; j--) {
      k += '-';
    }
    for (let s = 0; s < i; s++) {
      k+= '*';
    }
    console.log(line);
    }

///////////////// average
    const average=n=> {
        let sum = 0;
        for (let i = 0; i < n.length; i++){
            sum += n[i];
        }
        return sum / n.length;
        }
    console.log(average([7,10,1,5]));

