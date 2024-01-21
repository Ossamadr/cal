let inp = document.getElementById("inp");
let count = document.getElementById("count");
let deleteBtn = document.getElementById("deleteBtn");

count.onclick = function () {
  if (inp.value != 0) {
    document.getElementById("hours").innerHTML = `ساعات : ${
      inp.value * 365 * 24
    }`;
    document.getElementById("minutes").innerHTML = `دقائق : ${
      inp.value * 365 * 24 * 60
    }`;
    document.getElementById("seconds").innerHTML = `ثواني : ${
      inp.value * 365 * 24 * 60 * 60
    }`;

  }
  inp.value = ""
 
};
deleteBtn.onclick = function  () {
    document.getElementById("hours").innerHTML = `ساعات :`;
    document.getElementById("minutes").innerHTML = `دقائق :`;
    document.getElementById("seconds").innerHTML = `ثواني :`;
   
}