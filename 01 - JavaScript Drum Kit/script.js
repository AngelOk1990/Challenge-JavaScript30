let buttonsContainer = document.querySelector('.buttons__container')
let audio = document.querySelector('.sound')
let buttons = document.querySelectorAll('.button')


// buttonsContainer.addEventListener('click', (event) => {
//     if (event.target.classList.contains('button')) {
//     audio.src = `./sounds/${event.target.dataset.sound}.wav`
//     audio.play()
//     }
// })

window.addEventListener('keydown', (event) => {
    switch (event.code) {
        case "KeyA":
            classAdd(buttons[0])
            audio.src = './sounds/clap.wav'
            audio.play()
            classRemove(buttons[0])
            break
            case "KeyS":
                classAdd(buttons[1])
                audio.src = './sounds/hihat.wav'
                audio.play()
                classRemove(buttons[1])
                break
                case "KeyD":
                    classAdd(buttons[2])
                    audio.src = './sounds/kick.wav'
                    audio.play()
                    classRemove(buttons[2])
                    break
                    case "KeyF":
                        classAdd(buttons[3])
                        audio.src = './sounds/openhat.wav'
                        audio.play()
                        classRemove(buttons[3])
                        break
                        case "KeyG":
                            classAdd(buttons[4])
                            audio.src = './sounds/boom.wav'
                            audio.play()
                            classRemove(buttons[4])
                            break
                            case "KeyH":
                                classAdd(buttons[5])
                                audio.src = './sounds/ride.wav'
                                audio.play()
                                classRemove(buttons[5])
                                break
                                case "KeyJ":
                                    classAdd(buttons[6])
                                    audio.src = './sounds/snare.wav'
                                    audio.play()
                                    classRemove(buttons[6])
                                    break
                                    case "KeyK":
                                        classAdd(buttons[7])
                                        audio.src = './sounds/tom.wav'
                                        audio.play()
                                        classRemove(buttons[7])
                                        break
                                        case "KeyL":
                                            classAdd(buttons[8])
                                            audio.src = './sounds/tink.wav'
                                            audio.play()
                                            classRemove(buttons[8])
                                            break

    }
})

function classAdd(item) {
    item.classList.add("active")
}

function classRemove(item) {
    setTimeout(function(){
        item.classList.remove("active")
    },300)
}