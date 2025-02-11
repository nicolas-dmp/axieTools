function uncheckAll() {
      // All Axies alive
      document.getElementById('a1d').style.visibility = "hidden";
      document.getElementById('a2d').style.visibility = "hidden";
      document.getElementById('a3d').style.visibility = "hidden";
      // Axie1 parts clear
      document.getElementById('a1m1').style.visibility = "hidden";
      document.getElementById('a1m2').style.visibility = "hidden";
      document.getElementById('a1h1').style.visibility = "hidden";
      document.getElementById('a1h2').style.visibility = "hidden";
      document.getElementById('a1b1').style.visibility = "hidden";
      document.getElementById('a1b2').style.visibility = "hidden";
      document.getElementById('a1t1').style.visibility = "hidden";
      document.getElementById('a1t2').style.visibility = "hidden";
      
      // Axie2 parts clear
      document.getElementById('a2m1').style.visibility = "hidden";
      document.getElementById('a2m2').style.visibility = "hidden";
      document.getElementById('a2h1').style.visibility = "hidden";
      document.getElementById('a2h2').style.visibility = "hidden";
      document.getElementById('a2b1').style.visibility = "hidden";
      document.getElementById('a2b2').style.visibility = "hidden";
      document.getElementById('a2t1').style.visibility = "hidden";
      document.getElementById('a2t2').style.visibility = "hidden";
      
      // Axie3 parts clear
      document.getElementById('a3m1').style.visibility = "hidden";
      document.getElementById('a3m2').style.visibility = "hidden";
      document.getElementById('a3h1').style.visibility = "hidden";
      document.getElementById('a3h2').style.visibility = "hidden";
      document.getElementById('a3b1').style.visibility = "hidden";
      document.getElementById('a3b2').style.visibility = "hidden";
      document.getElementById('a3t1').style.visibility = "hidden";
      document.getElementById('a3t2').style.visibility = "hidden";
      
  }


/**
 * Axie parts toggle
 * A(n) = stands for an axie and its number
 * P(n) = stands for an axie part innitial and its number of appearance
 */
// Generic
function toggleAxieDeath(axie, visibility){
  document.getElementById('a' + axie + 'm1').style.visibility = visibility;
  document.getElementById('a' + axie + 'm2').style.visibility = visibility;
  document.getElementById('a' + axie + 'h1').style.visibility = visibility;
  document.getElementById('a' + axie + 'h2').style.visibility = visibility;
  document.getElementById('a' + axie + 'b1').style.visibility = visibility;
  document.getElementById('a' + axie + 'b2').style.visibility = visibility;
  document.getElementById('a' + axie + 't1').style.visibility = visibility;
  document.getElementById('a' + axie + 't2').style.visibility = visibility;
}

// Axie1
function toggleA1D(){
  var a1d = document.getElementById('a1d');
  
  if (a1d.style.visibility === 'hidden') {
    a1d.style.visibility = 'visible';
  } else {
    a1d.style.visibility = 'hidden';
  }

  toggleAxieDeath(1, a1d.style.visibility)
}

function toggleA1M1(){
  var am1 = document.getElementById('a1m1');
  
  if (am1.style.visibility === 'hidden') {
    am1.style.visibility = 'visible';
  } else {
    am1.style.visibility = 'hidden';
  }
}  

function toggleA1M2(){
    var am1 = document.getElementById('a1m2');
    
    if (am1.style.visibility === 'hidden') {
      am1.style.visibility = 'visible';
    } else {
      am1.style.visibility = 'hidden';
    }
}

function toggleA1H1(){
  var am1 = document.getElementById('a1h1');
  
  if (am1.style.visibility === 'hidden') {
    am1.style.visibility = 'visible';
  } else {
    am1.style.visibility = 'hidden';
  }
}  

function toggleA1H2(){
    var am1 = document.getElementById('a1h2');
    
    if (am1.style.visibility === 'hidden') {
      am1.style.visibility = 'visible';
    } else {
      am1.style.visibility = 'hidden';
    }
}

function toggleA1B1(){
  var am1 = document.getElementById('a1b1');
  
  if (am1.style.visibility === 'hidden') {
    am1.style.visibility = 'visible';
  } else {
    am1.style.visibility = 'hidden';
  }
}  

function toggleA1B2(){
    var am1 = document.getElementById('a1b2');
    
    if (am1.style.visibility === 'hidden') {
      am1.style.visibility = 'visible';
    } else {
      am1.style.visibility = 'hidden';
    }
}

function toggleA1T1(){
  var am1 = document.getElementById('a1t1');
  
  if (am1.style.visibility === 'hidden') {
    am1.style.visibility = 'visible';
  } else {
    am1.style.visibility = 'hidden';
  }
}  

function toggleA1T2(){
    var am1 = document.getElementById('a1t2');
    
    if (am1.style.visibility === 'hidden') {
      am1.style.visibility = 'visible';
    } else {
      am1.style.visibility = 'hidden';
    }
}

// Axie2
function toggleA2D(){
  var a2d = document.getElementById('a2d');
  
  if (a2d.style.visibility === 'hidden') {
    a2d.style.visibility = 'visible';
  } else {
    a2d.style.visibility = 'hidden';
  }

  toggleAxieDeath(2, a2d.style.visibility)
}

function toggleA2M1(){
  var am1 = document.getElementById('a2m1');
  
  if (am1.style.visibility === 'hidden') {
    am1.style.visibility = 'visible';
  } else {
    am1.style.visibility = 'hidden';
  }
}  

function toggleA2M2(){
    var am1 = document.getElementById('a2m2');
    
    if (am1.style.visibility === 'hidden') {
      am1.style.visibility = 'visible';
    } else {
      am1.style.visibility = 'hidden';
    }
}

function toggleA2H1(){
  var am1 = document.getElementById('a2h1');
  
  if (am1.style.visibility === 'hidden') {
    am1.style.visibility = 'visible';
  } else {
    am1.style.visibility = 'hidden';
  }
}  

function toggleA2H2(){
    var am1 = document.getElementById('a2h2');
    
    if (am1.style.visibility === 'hidden') {
      am1.style.visibility = 'visible';
    } else {
      am1.style.visibility = 'hidden';
    }
}

function toggleA2B1(){
  var am1 = document.getElementById('a2b1');
  
  if (am1.style.visibility === 'hidden') {
    am1.style.visibility = 'visible';
  } else {
    am1.style.visibility = 'hidden';
  }
}  

function toggleA2B2(){
    var am1 = document.getElementById('a2b2');
    
    if (am1.style.visibility === 'hidden') {
      am1.style.visibility = 'visible';
    } else {
      am1.style.visibility = 'hidden';
    }
}

function toggleA2T1(){
  var am1 = document.getElementById('a2t1');
  
  if (am1.style.visibility === 'hidden') {
    am1.style.visibility = 'visible';
  } else {
    am1.style.visibility = 'hidden';
  }
}  

function toggleA2T2(){
    var am1 = document.getElementById('a2t2');
    
    if (am1.style.visibility === 'hidden') {
      am1.style.visibility = 'visible';
    } else {
      am1.style.visibility = 'hidden';
    }
}

// Axie3
function toggleA3D(){
  var a3d = document.getElementById('a3d');
  
  if (a3d.style.visibility === 'hidden') {
    a3d.style.visibility = 'visible';
  } else {
    a3d.style.visibility = 'hidden';
  }

  toggleAxieDeath(3, a3d.style.visibility)
}

function toggleA3M1(){
  var am1 = document.getElementById('a3m1');
  
  if (am1.style.visibility === 'hidden') {
    am1.style.visibility = 'visible';
  } else {
    am1.style.visibility = 'hidden';
  }
}  

function toggleA3M2(){
    var am1 = document.getElementById('a3m2');
    
    if (am1.style.visibility === 'hidden') {
      am1.style.visibility = 'visible';
    } else {
      am1.style.visibility = 'hidden';
    }
}

function toggleA3H1(){
  var am1 = document.getElementById('a3h1');
  
  if (am1.style.visibility === 'hidden') {
    am1.style.visibility = 'visible';
  } else {
    am1.style.visibility = 'hidden';
  }
}  

function toggleA3H2(){
    var am1 = document.getElementById('a3h2');
    
    if (am1.style.visibility === 'hidden') {
      am1.style.visibility = 'visible';
    } else {
      am1.style.visibility = 'hidden';
    }
}

function toggleA3B1(){
  var am1 = document.getElementById('a3b1');
  
  if (am1.style.visibility === 'hidden') {
    am1.style.visibility = 'visible';
  } else {
    am1.style.visibility = 'hidden';
  }
}  

function toggleA3B2(){
    var am1 = document.getElementById('a3b2');
    
    if (am1.style.visibility === 'hidden') {
      am1.style.visibility = 'visible';
    } else {
      am1.style.visibility = 'hidden';
    }
}

function toggleA3T1(){
  var am1 = document.getElementById('a3t1');
  
  if (am1.style.visibility === 'hidden') {
    am1.style.visibility = 'visible';
  } else {
    am1.style.visibility = 'hidden';
  }
}  

function toggleA3T2(){
    var am1 = document.getElementById('a3t2');
    
    if (am1.style.visibility === 'hidden') {
      am1.style.visibility = 'visible';
    } else {
      am1.style.visibility = 'hidden';
    }
}