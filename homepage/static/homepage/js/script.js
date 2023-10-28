let index = 0;
function runIntro(){
    const instructionCon = document.getElementById('instructionCon');
    const flashingText = document.getElementById('flashingText');
    const link = document.getElementById('link');
    const git = document.getElementById('git');
    if(instructionCon && flashingText){
        instructionCon.style.display = 'none';
        flashingText.style.display = 'none';
        link.style.display = 'inline-flex'
        git.style.display = 'inline-flex'
    }
    const introText = "But you can call me Sonny, and this is my portfolio. I'm a determined Certified " +
        "Pharmacy Technician/Data " +
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