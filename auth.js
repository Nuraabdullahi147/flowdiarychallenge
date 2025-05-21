 const form = document.getElementById('login form');
const emailinput =  document.getElementById('email');
const passwordinput = document.getElemenconsttById('password');
const erromessage = document.getElementById('erro-message'); 

  form.addEventListener('submit',function(e){e.preventDefault();
    if(emailinput.value ===''){erromessage.textContent = 'email could not be empty!'; return;} else{erromessage.textContent ='';}  });
    if(passwordinput.value === ''){erromessage.textContent = 'password could not be empty!'; return;} else{erromessage.textContent='';});

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]){8,}$/;
  
  if(passwordRegex.test(password)){
   erromessage.textContent = 'password must be at least 8 characters ,uppercase,lowercase,numbers,and special character';
    return;
   }
     erromessage.textContent = '';
      alert(log in successful);

    });