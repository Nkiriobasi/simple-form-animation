function animatedForm(){
    // Getting all of our arrows-down and storing in a const 
    const arrows = document.querySelectorAll('.fa-arrow-down');
    
    // ForEach input form in the form
    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            // Check for validation
            if (input.type === "text" && validateUser(input)){
               nextSlide(parent,nextForm);
            }else if(input.type === 'email' && validateEmail(input)){
                nextSlide(parent, nextForm);
            }else if(input.type === 'password' && validateUser(input)){
                nextSlide(parent, nextForm);
            }else{
                parent.style.animation = "shake 0.5s ease";
            }
            // Get rid of animation
            parent.addEventListener("animationend", () => {
                parent.style.animation = "";
            })
        });
    });
}


function validateUser(user){
    if (user.value.length < 6){
        error('rgb(189,87,87)');
    }else{
        error('rgb(87, 189, 130)');
        return true;
    }
}

function validateEmail(email){
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)){
        error('rgb(87, 189, 130)');
        return true;
    }else{
        error('rgb(189,87,87)');
    }
}

// error function
function error(color){
    document.body.style.backgroundColor = color;
}

// Nextslide function
function nextSlide(parent, nextForm){
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}




animatedForm();