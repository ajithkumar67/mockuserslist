var arr;
var count = 0;

var sflag = (localStorage.getItem('grootsflag'));
var lflag = (localStorage.getItem('grootlflag'));

window.onload = init;

  function init(){
    
    if((sflag == null) || sflag !=1){
    document.getElementById('signupnav').click();
   }
   else{
    if((lflag == null) || lflag !=1){
        document.getElementById('loginnav').click();
       }
   }

  }

fetch('https://grootajithfinal.free.beeceptor.com')
		.then(res => res.json())
		.then(data => {
			var userlist= "";
           
            
            arr = JSON.parse(JSON.stringify(data));
            
            
            data.forEach((u) => {
                userlist += '<div class="card" id="'+count+'" onclick="openModal(this.id)"><h3>';
                userlist += u.name;
                userlist += '</h3><p>';
                userlist += 'Age : '+u.age;
                userlist += '</p></div>';
                count = count+1;

               
            })
            document.getElementById("usercard").innerHTML += userlist;
		});
  
        
        const modalWrapper = document.querySelector('.modal__wrapper');
        const closeBtn = document.querySelector('.close');
        
       
        closeBtn.addEventListener('click', function(){
            closeModal();
        });
        
        modalWrapper.addEventListener('click', function(e){
            if(e.target !== this) return;
            closeModal();
        });
        
        document.addEventListener('keydown', function(e){
            if(e.key === 'Escape') {
                closeModal();
            }
        })
        
        function openModal(param) {
            var temp = "";

            temp += '<p>Fullname   :   '+arr[param].name+'</p>';
            temp += '<p>Age   :   '+arr[param].age+'</p>';
            temp += '<p>Fisrtname   :   '+arr[param].firstName+'</p>';
            temp += '<p>Lastname   :   '+arr[param].lastName+'</p>';
            temp += '<p>D.O.B   :   '+arr[param].dob+'</p>';
            temp += '<p>Phone   :   '+arr[param].more.phone+'</p>';
            temp += '<p>Address   :   '+arr[param].more.address_line1+', '+arr[param].more.address_line2+', '+arr[param].more.address_line3+'</p>';
            document.getElementById("mod_display").innerHTML = temp;
            document.getElementById("mod_display").className= param;
            modalWrapper.classList.add('active');
        }
        function closeModal() {
            modalWrapper.classList.remove('active');
        }

        function prevg() {
               var cnt = parseInt(document.getElementById("mod_display").className);
               cnt = cnt -1;

               if(cnt>=0){
               openModal(cnt);
               }
               else{
                   alert("No more previous records!");
               }
        }
    
        function nextg() {
            var nxt = parseInt(document.getElementById("mod_display").className);
            nxt = nxt + 1;
            if(nxt <= count - 1){
                openModal(nxt);
                }
                else{
                    alert("No more next records!");
                }
     }
