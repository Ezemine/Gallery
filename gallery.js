const divs = document.querySelectorAll('.project');

function toggleActive() 
{
    divs.forEach(x => x.classList.remove("inactive"));
    if (this.classList.contains("active"))
            this.classList.toggle("active");
        else
        {
            divs.forEach(x => x.classList.remove("active"));
            this.classList.toggle("active");
        }

    if (document.getElementsByClassName("projects").classList.contains("active"))
    { //Checks if gallery has active node to display smaller "inactive" nodes
        divs.forEach(x => x.classList.contains("active")? true : x.classList.add("inactive"));
    }
}

divs.forEach(x => x.addEventListener("click", toggleActive));