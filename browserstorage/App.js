localStorage.setItem('name',"Maleesha");  // add
console.log(localStorage.getItem('name')); //get
localStorage.setItem('name',"Thisura"); //to update add again 
localStorage.removeItem('name'); //remove



sessionStorage.setItem('age',25);
sessionStorage.setItem('age',28);//to update add again
console.log(sessionStorage.getItem('age',25));
sessionStorage.removeItem('age');



document.cookie = 'name=Dilki; expires='+ new Date(2025,0,1).toUTCString();
document.cookie = 'lastname=Arunodi; expires='+ new Date(2025,0,1).toUTCString();
