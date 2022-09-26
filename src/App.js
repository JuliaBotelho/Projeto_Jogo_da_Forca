import { useState } from "react"
import palavras from "./palavras"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"



export default function App() {
    const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const [sortedWord, setsortedWord] = useState([])
    const [hiddenWord, sethiddenWord] = useState([])
    const [hiddenWordatt, sethiddenWordatt] = useState([])
    const [errorsNumber, seterrorsNumber] = useState(0)
    const [attempt, setAttempt] = useState("")
    const [attemptSuccessfull, setAttemptSuccessfull] = useState(false)

    function comparador() {
        return Math.random() - 0.5;
    }

    let sortedArray;
    let underlines;

    function wordDraft() {

        palavras.sort(comparador)
        sortedArray = palavras[0].split("")
        setsortedWord(...sortedWord, sortedArray)

        underlines = sortedArray.map((item) => item = "_ ")
        sethiddenWord(...hiddenWord, underlines)

    }

    let underlines2 = sortedWord.map((item) => item = "_ ");
    console.log(sortedWord)
    let i;

    //let rightsNumber = 0;

    function letterAttempt(index) {
        if (sortedWord.includes(alphabet[index]) === true) {
            sethiddenWord(sortedWord.map((item) => (item === alphabet[index]) ? alphabet[index] : "_ "))

        } else {
            seterrorsNumber(errorsNumber + 1)
        }
 
    }
    let j;

    function attemptSuccess(){
        
        let filtered = sortedWord.filter((u,index)=>(u !== attempt[index]))
        if (filtered.length === 0){
            setAttemptSuccessfull(true)
        }else{
            attemptSuccessfull(false)
        }
    }


    return (
        <>
            <div className="content">
                <div className="hangman">
                    {(attemptSuccessfull)? (<p>Parabéns! A palavra certa era {sortedWord}</p>):(<img data-identifier="game-image" src={images[errorsNumber]} />)}
                </div>
                <div className="theword">
                    <button data-identifier="choose-word" onClick={(sortedWord.length === 0) ? wordDraft : null} className="pick-word">Escolher Palavra</button>
                    {(errorsNumber < 6)?  (<div className="hidden-word">{hiddenWord}</div>) : (<div className="hidden-word-red">{sortedWord}</div>)}
                </div>
            </div>
            <div className="keyboard">
                <div className={(sortedWord.length === 0) ? "the-letters-inactive" : "the-letters-active"}>
                    {alphabet.map((a, index) => <button data-identifier="letter" key={index} onClick={(sortedWord.length === 0) ? null : () => letterAttempt(index)}>{a}</button>)}
                </div>
                <div className="the-guess">
                    <span>Já sei a palavra!  <input data-identifier="type-guess" onChange = {e => setAttempt(e.target.value)}/> </span>
                    <button data-identifier="guess-button" onClick ={(sortedWord.length === 0) ? null : attemptSuccess}>Chutar</button>
                </div>
            </div>
        </>
    )
}