function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

// CONFIGURATION texte rétractable

//   1
function showMoreOrLess1(){

    if(document.getElementById('text-hidden1').classList.contains('hidden1')){
        // code si il a la classe hidden
        document.getElementById('text-hidden1').classList.remove('hidden1');
  
        // show less
        document.getElementById('show1').innerHTML = 'show less1';
    }else{
        // si il n'a pas la classe hidden
        document.getElementById('text-hidden1').classList.add('hidden1');
        // show more
        document.getElementById('show1').innerHTML = 'show more1';
    }
  }

//   2
function showMoreOrLess2(){

    if(document.getElementById('text-hidden2').classList.contains('hidden2')){
        // code si il a la classe hidden
        document.getElementById('text-hidden2').classList.remove('hidden2');
  
        // show less
        document.getElementById('show2').innerHTML = 'show less2';
    }else{
        // si il n'a pas la classe hidden
        document.getElementById('text-hidden2').classList.add('hidden2');
        // show more
        document.getElementById('show2').innerHTML = 'show more2';
    }
  }

  //   3
function showMoreOrLess3(){

    if(document.getElementById('text-hidden3').classList.contains('hidden3')){
        // code si il a la classe hidden
        document.getElementById('text-hidden3').classList.remove('hidden3');
  
        // show less
        document.getElementById('show3').innerHTML = 'show less3';
    }else{
        // si il n'a pas la classe hidden
        document.getElementById('text-hidden3').classList.add('hidden3');
        // show more
        document.getElementById('show3').innerHTML = 'show more3';
    }
  }
