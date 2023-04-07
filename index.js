function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

function showMoreOrLess(){

    if(document.getElementById('text-hidden').classList.contains('hidden')){
        // code si il a la classe hidden
        document.getElementById('text-hidden').classList.remove('hidden');
  
        // show less
        document.getElementById('show').innerHTML = 'show less';
    }else{
        // si il n'a pas la classe hidden
        document.getElementById('text-hidden').classList.add('hidden');
        // show more
        document.getElementById('show').innerHTML = 'show more';
    }
  
    
  
  }