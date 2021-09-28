const questions = document.querySelectorAll('.question');
// console.log(questions) ; 
const btns = document.querySelectorAll('.question-btn') ; 
// console.log(btn) ; 
btns.forEach((btn) => {
    btn.addEventListener('click' , (e) => {
        const question = e.currentTarget.parentElement.parentElement ;
        // console.log(question) ; 
        questions.forEach((q) => {
            if(q !== question) q.classList.remove('show-text') ; 
        })
        question.classList.toggle('show-text') ; 
    })
})

