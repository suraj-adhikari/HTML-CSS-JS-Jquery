// JS for submission through create account button click

let id="no";

selectData();

// localStorage.clear();

function manageData(){
    let email=document.getElementById('email').value;
    // console.log(email);
    let password=document.getElementById('password').value;
    // console.log(password);
    if(email==""|| password==""){
        alert("Please enter value in all fields ")
    }
    else{
        console.log(id);
        if(id=="no"){
            // getting data from local storage
            let localEmail=JSON.parse(localStorage.getItem('emailStorage'));
            // console.log(localEmail);
            let localPassword=JSON.parse(localStorage.getItem('passwordStorage'));
            // console.log(localPassword);


            // if local storage is empty
            if (localEmail==null||localPassword==null) {
                let data1=[email];
                localStorage.setItem('emailStorage',JSON.stringify(data1));
                let data2=[password];
                localStorage.setItem('passwordStorage',JSON.stringify(data2));
                
            }
            // add email and password
            else{
                localEmail.push(email);
                localStorage.setItem('emailStorage',JSON.stringify(localEmail));
                localPassword.push(password);
                localStorage.setItem('passwordStorage',JSON.stringify(localPassword));
            }
            alert("Succesfully ")
            //  document.getElementById('email').value="";
            //  document.getElementById('password').value="";

        }else{
            let localEmail=JSON.parse(localStorage.getItem('emailStorage'));
            localEmail[id]=email;
            localStorage.setItem('emailStorage',JSON.stringify(localEmail));

            
            let localPassword=JSON.parse(localStorage.getItem('passwordStorage'));
            localPassword[id]=password;
            localStorage.setItem('passwordStorage',JSON.stringify(localPassword));


            alert("Detail updated")
            



        }
        document.getElementById('email').value="";
        document.getElementById('password').value="";
        selectData();
       
    } 
    
}
function formValidation() {
    event.preventDefault();
    let returnVal=true;

    // performing Validation in Login Form
    let loginEmail=document.forms['myForm']["loginEmail"].value;
    let loginPassword=document.forms['myForm']["loginPassword"].value;
    // console.log(email);


    if (loginEmail.length<5||loginPassword<5) {
        alert("email or Password is too short to accept");
        returnVal=false;   
    }
    // if(loginEmail==localEmail&&loginPassword==localPassword){
    //     alert("You have successfully logged in")
    // }
    
    
    return returnVal;
}






function selectData(){
    let localEmail=JSON.parse(localStorage.getItem('emailStorage'));
    let localPassword=JSON.parse(localStorage.getItem('passwordStorage'));
    if (localEmail!=null||localPassword!=null){
        let html="";
        let sno=1;
        for(let k in localEmail,localPassword){
            html=html+`<tr><td>${sno}</td>
            <td>${localEmail[k]}</td>
            <td>${localPassword[k]}</td>
            <td><button><a href="javascript:void(0)" onclick="editData(${k})";> Edit</a></button>
                <button><a href="javascript:void(0)" onclick="deleteData(${k})"> Delete</a>
                </button></td></tr>`
            sno++;
            document.getElementById('root').innerHTML=html;
            
        };

    }
    
}
//  Delete login detail
function deleteData(rid){
   
    let localEmail=JSON.parse(localStorage.getItem('emailStorage'));
    localEmail.splice(rid,1);
    let localPassword=JSON.parse(localStorage.getItem('passwordStorage'));
    localPassword.splice(rid,1);
    alert( `Deleted`)
    localStorage.setItem('emailStorage',JSON.stringify(localEmail));
    localStorage.setItem('passwordStorage',JSON.stringify(localPassword));
    selectData();

}

// edit login detail
function editData(rid){
    id=rid;
    let localEmail=JSON.parse(localStorage.getItem('emailStorage'));
    document.getElementById('email').value=localEmail[rid];
    let localPassword=JSON.parse(localStorage.getItem('passwordStorage'));
    document.getElementById('password').value=localPassword[rid];
    alert("You can edit Email and Password in Register form , your detail fetched there!");
    

}

