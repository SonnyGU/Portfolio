let index = 0;
function runIntro(){
    const instructionCon = document.getElementById('instructionCon');
    if(instructionCon){
        instructionCon.style.display = 'none';
    }
    const introText = "Hi I'm Sonny, and this is my portfolio Determined Certified Pharmacy Technician/Data " +
        "Coordinator transitioning into a dynamic Software Engineer role, backed by a B.S. in Computer Science. With a " +
        "keen analytical acumen and strong programming skills, I’m ready to contribute significantly to a progressive " +
        "development team. Committed to driving innovation, optimizing solutions, and embracing new challenges in " +
        "software engineering with confidence and resilience."
    const introContainer = document.getElementById("introContainer")

    function typeText(){
        if(index < introText.length){
            introContainer.innerHTML += introText.charAt(index);
            index++;

            setTimeout(runIntro, 50)
        }

    }

    typeText();

}

window.addEventListener('keydown', function (e){
    if(e.key === "Enter"){
        runIntro();
    }
});