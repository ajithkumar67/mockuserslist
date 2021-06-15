

 function signup(){
      
        var namey = document.getElementById('usname1');
        var emaily = document.getElementById('usemail1');
        var passwy = document.getElementById('uspass1');
        
        
        localStorage.setItem('namey', namey.value);
        localStorage.setItem('emaily', emaily.value);
        localStorage.setItem('passwy', passwy.value);
        localStorage.setItem('grootsflag', 1);

    }

