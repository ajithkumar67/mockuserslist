
    function checkloginl() {
        
        var loemaily = localStorage.getItem('emaily');
        var lopaswy = localStorage.getItem('passwy');

        var lemaily = document.getElementById('usemail2');
        var lpasswy = document.getElementById('uspass2');

    
    if(lemaily.value == loemaily && lpasswy.value == lopaswy) {
        localStorage.setItem('grootlflag', 1);
        document.getElementById('indexnav').click(); 
        
    }else {
        alert('Please check your email and password');
    }

    }
  
  
