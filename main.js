function mysubmit(obj){
    let pwdobj = document.getElementById('pwd');
    let hashobj =new jsSHA("SHA-512", "TEXT", {numRounds:1});
    hashobj.update(pwdobj.value);
    let hash = hashobj.getHash("HEX");
    pwdobj.value = hash;
}