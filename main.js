const hiddenComputerResult = document.querySelector('#hiddenComputerResult')
const hiddenInputResult = document.querySelector('#hiddenInputResult')
const itemRock = document.querySelector('#itemRock')
const itemPaper = document.querySelector('#itemPaper')
const itemScissor = document.querySelector('#itemScissor')
const computerResult = document.querySelector('#computerResult')
const inputResult = document.querySelector('#inputResult')
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const submitButton = document.querySelector('#submitButton')
const go = document.querySelector('.goButton')
const modalParagraph = document.querySelector('#modal-paragraph')
const modalBody = document.querySelector('.modal-body')
const choices = document.querySelectorAll('.choices')


hiddenComputerResult.value = Math.floor(Math.random() * 3) //randomized yung number na laman ng computer result

function pickRock(){
    hiddenInputResult.value = '0'
    inputResult.innerHTML = `<img id="Rock" src="./img/rock.png" alt="rock">`
    go.style.display = 'block'
}


function pickPaper(){
    hiddenInputResult.value = '1'
    inputResult.innerHTML = `<img id="Paper" src="./img/paper.png" alt="paper">`
    go.style.display = 'block'
}

function pickScissor(){
    hiddenInputResult.value = '2'
    inputResult.innerHTML = `<img id="Scissor" src="./img/scissor.png" alt="scissor">`
    go.style.display = 'block'
}

function goButton(){  
    console.log(hiddenComputerResult)
    computerResult.textContent = "Computer is picking..."
    switch(hiddenComputerResult.value){
        case '0':
            setInterval(() => {
                computerResult.innerHTML = `<img id="Rock" src="./img/rock.png" alt="rock">`

            }, 5000);
            break;
            case '1':
                setInterval(() => {
                    computerResult.innerHTML = `<img id="Paper" src="./img/paper.png" alt="paper">`
    
                }, 5000);               
                break;
                case '2':
                    setInterval(() => {
                        computerResult.innerHTML = `<img id="Scissor" src="./img/scissor.png" alt="scissor">`
        
                    }, 5000);
                    break;
    }
    setInterval(() => {
        if((hiddenInputResult.value == '0')&&(hiddenComputerResult.value == '0')){
            modalParagraph.textContent = 'Draw!'
        }else
        if((hiddenInputResult.value == '0')&&(hiddenComputerResult.value == '1')){
            modalParagraph.textContent = 'You Lose!'
        }else
        if((hiddenInputResult.value == '0')&&(hiddenComputerResult.value == '2')){
            modalParagraph.textContent = 'You Win!'
        }else
        if((hiddenInputResult.value == '1')&&(hiddenComputerResult.value == '0')){
            modalParagraph.textContent = 'You Win!'
        }else
        if((hiddenInputResult.value == '1')&&(hiddenComputerResult.value == '1')){
            modalParagraph.textContent = 'Draw!'
        }else
        if((hiddenInputResult.value == '1')&&(hiddenComputerResult.value == '2')){
            modalParagraph.textContent = 'You Lose!'
        }else
        if((hiddenInputResult.value == '2')&&(hiddenComputerResult.value == '0')){
            modalParagraph.textContent = 'You Lose!'
        }else
        if((hiddenInputResult.value == '2')&&(hiddenComputerResult.value == '1')){
            modalParagraph.textContent = 'You Win!'
        }else
        if((hiddenInputResult.value == '2')&&(hiddenComputerResult.value == '2')){
            modalParagraph.textContent = 'Draw!'
        }
    }, 5000);
    setInterval(() => {
        modalBody.style.display = 'block'
    }, 5000);
}   















// itemRock = '1'
// itemPaper = '2'
// itemScissor = '3'