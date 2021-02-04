
// DOM Selected Elements
const body = document.querySelector('body')
const timeCounter = document.querySelector('#counter')
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
const pauseBtn = document.querySelector('#pause')
const heartBtn = document.querySelector('#heart')
const likesContainer = document.querySelector('ul.likes')
const form = document.querySelector('#comment-form')
const commentList = document.querySelector('#list')
let timer = setInterval(moreTime, 1000)
let likesArray = []
// console.log(timeCounter);

// Event Listeners

window.addEventListener('load', function(e){
    console.log('page loaded')
    return timer
})


body.addEventListener('click', btnHandler)
function btnHandler(e){
    if (e.target === plusBtn){
        moreTime()
    }
    else if (e.target === minusBtn) {
        lessTime()
    }
    else if (e.target === heartBtn) {
        console.log("liked")
        const numLiked = timeCounter.textContent
        likesArray.push(numLiked)
        liker(numLiked)
    }
    else if (e.target.textContent.includes("pause")) {
        console.log( "paused")
        stopCounter()
        plusBtn.disabled = true
        minusBtn.disabled = true
        heartBtn.disabled = true
        pauseBtn.textContent = 'resume'
    }
    else if (e.target.textContent.includes("resume")) {
        console.log("resumed")
        reStartCounter()
        plusBtn.disabled = false
        minusBtn.disabled = false
        heartBtn.disabled = false
        pauseBtn.textContent = 'pause'
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault()
    const comment = e.target['comment'].value
    commentBuilder(comment)
    e.target.reset()
})


// Logic Handlers
function liker(numLiked) {
    const showLikes = document.createElement('li')
    let totalLikes = likesArray.filter(num => num === numLiked).length
    showLikes.textContent = `You liked ${numLiked}! This number has ${totalLikes} likes.`
    likesContainer.append(showLikes)
}



function commentBuilder(comment) {
    const newComment = document.createElement('li')
    newComment.className = "comments"
    newComment.textContent = comment
    commentList.append(newComment)
}

function stopCounter(){
    clearInterval(timer)
}

function reStartCounter(){
    timer = setInterval(moreTime, 1000)
}

// function buttonHandler(button){
    // button.disabled ? button.disabled = false : button.disabled = true
// }

function moreTime(){
    let counterNum = parseInt(timeCounter.textContent)
    timeCounter.innerText = counterNum + 1
    console.log("more time!");
}

function lessTime(){
    let counterNum = parseInt(timeCounter.textContent)
    timeCounter.innerText = counterNum - 1
    console.log("less time!");
}


// Deliverables

