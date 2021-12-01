// UI elements

const form       = document.querySelector(".details-collector-form ");
const cards      = document.querySelector(".cards");
const email      = document.getElementById("email");
const fullName   = document.getElementById("full-name");
const mobileNumber= document.getElementById("mobile-number");
const role= document.getElementById("role");


// console.log(form);
form.addEventListener("submit",function(e){

    //check if all the inputs are filled correctly

    if(email.value !== '' && fullName.value !== '' && mobileNumber !== '' && role.value !== ''){

            // console.log(email.value);
            // console.log(fullName.value);
            // console.log(mobileNumber.value);
            // console.log(role.value);

            //steps

            //get the value from the inputs

            //create an div element 
            const div = document.createElement('div');


            //add class to the created div
            div.className = 'card';
            // console.log(div)


            //add the html contents/codes to the created div

            let htmlTemplate = ` 
            
            <b>Officer's desk</b>
            <div class="card-inner">
                <div class="card-inner-item">
                    <b>Role</b>
                    <p>${role.value}</p>
                </div>
                <div class="card-inner-item">
                    <b>Contact</b>
                    <p>${email.value}</p>
                    <p>${mobileNumber.value}</p>
                </div>
                <div class="card-inner-item">
                    <b>Full name</b>
                    <p>${fullName.value}</p>
                </div>
            </div>
            <div>
                <div class="trash-container"><i class="fa fa-trash trash-icon"></i></div>
            </div>
        `;

            //add template to the created div
            div.innerHTML = htmlTemplate;
            // console.log(div)

            //show it on the ui
            cards.insertAdjacentElement("beforeend",div)
            
            //store it on the localstorage
            if (localStorage.getItem('employeeDetails')===null){
                let arr=[];
                arr.push({email: email.value, mobileNumber:mobileNumber.value, fullName:fullName.value, role: role.value })
                localStorage.setItem('employeeDetails',JSON.stringify(arr));
                
            }else{
                let arr=[];
                arr =JSON.parse(localStorage.getItem("employeeDetails"))
                arr.push({email: email.value, mobileNumber:mobileNumber.value, fullName:fullName.value, role: role.value })
            localStorage.setItem("employeeDetails",JSON.stringify(arr));
            }


            
            //clear the input
            email.value         = '';
            fullName.value      = '';
            mobileNumber.value  = '';
            role.value          = '';

            //focus on email
            email.focus();

            //showing successful message
            const successMsg = document.createElement('div');
            successMsg.className = "success-message";
            successMsg.textContent="Form filled up correctly";
            form.insertAdjacentElement("beforebegin",successMsg);

            setTimeout(() => {
                successMsg.remove();
            }, 2000);

            




    }
    else{

        //create new div for showing error message
        const errMsg = document.createElement('div');
        
        //adding className to the newly created div
        errMsg.className = 'error-message';

        //changing text content of errMsg
        errMsg.textContent = "Fill the form correctly";

        //showing on the ui
        form.insertAdjacentElement("beforebegin",errMsg);

        setTimeout(() => {
            errMsg.remove();
        }, 4000);
    }




    e.preventDefault();
});

