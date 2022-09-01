let password = document.getElementById('password');

    function genPassword() { 
        let chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGhIJKLMNOPQRSTUVWXYZ'
        let passwordLength = 12;
        let password = '';
        for (let i = 0 ; i < passwordLength; i++) { 
            let randomNumber = Math.floor(Math.random() * chars.length)
            password += chars.substring(randomNumber, randomNumber + 1)
         }
        document.getElementById('password').value = password
    }
   function copyPassword() { 
    let copyText = document.getElementById('password');
    copyText.select();
    copyText.setSelectionRange(0,999);
    document.execCommand('copy');
} 
