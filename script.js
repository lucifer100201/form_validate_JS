
let name_box= document.querySelector("#name");
let lastname_box = document.querySelector("#lastName");
let email_box = document.querySelector("#email");
let password_box = document.querySelector("#password");
let confirmpassword_box = document.querySelector("#confirmPassword")
let btn_box = document.querySelector("button");
let output_box = document.querySelector("#output")

btn_box.addEventListener('click',getUserDeatils);

let arr =[];
function getUserDeatils(eventDetails){
    eventDetails.preventDefault();
    
    
    let name = name_box.value;
    let lastname = lastname_box.value;
    let email =email_box.value;
    let password = password_box.value;
    let confirmpassword = confirmpassword_box.value;

    console.log(name.toUpperCase()+" "+lastname.toUpperCase(),email,password,confirmpassword)
     let createDiv = document.createElement('div');
     createDiv.innerHTML =`Name:${name.toUpperCase()+" "+lastname.toUpperCase()}<br>Email:${email}<br>Password:${password}<br>Confirm Password:${confirmpassword}`;
   
    output_box.append(createDiv);
    
   
}







