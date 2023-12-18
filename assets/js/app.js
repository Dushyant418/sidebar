const openbtn = document.querySelector(".openbtn")
const slidebar = document.querySelector(".slidebar")
const cutbtn = document.querySelector(".cutbtn")
const gradiant = document.querySelector(".gradiant")


openbtn.addEventListener("click", function () {
    slidebar.classList.toggle("active")
})

cutbtn.addEventListener("click", function () {
    slidebar.classList.toggle("active")
    gradiant.classList.toggle("active")

})

openbtn.addEventListener("click", function () {
    gradiant.classList.toggle("active")
})