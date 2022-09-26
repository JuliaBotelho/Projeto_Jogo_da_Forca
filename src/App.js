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
    //const [hiddenWordatt, sethiddenWordatt] = useState([])

    /*     function Letter(props) {
            return (
                <button >{props.theletter}</button>
            )
        } */


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

    console.log(sortedWord)
    let i;
    //let underlines2 = sortedWord.map((item) => item = "_ ");

    let errorsNumber = 0;
    function letterAttempt(index) {


        if (sortedWord.includes(alphabet[index]) === true) {
            for (i = 0; i < sortedWord.length; i++) {
                if (alphabet[index] === sortedWord[i]) {
                    sethiddenWord(hiddenWord[i]=alphabet[index])
                }
            }
            
        } else {
            alert("errou")
        }

        //sethiddenWordatt(...hiddenWordatt, underlines2)
        //alert(`clicou em ${alphabet[index]}`)
        //console.log(hiddenWordatt)
    }


    //console.log(hiddenWord)


    return (
        <>
            <div className="content">
                <div className="hangman">
                    <img src={images[errorsNumber]} />
                </div>
                <div className="theword">
                    <button onClick={(sortedWord.length === 0) ? wordDraft : null} className="pick-word">Escolher Palavra</button>
                    <div className="hidden-word">{hiddenWord}</div>
                </div>
            </div>
            <div className="keyboard">
                <div className={(sortedWord.length === 0) ? "the-letters-inactive" : "the-letters-active"}>
                    {alphabet.map((a, index) => <button key={index} onClick={(sortedWord.length === 0) ? null : () => letterAttempt(index)}>{a}</button>)}
                </div>
                <div className="the-guess">
                    <span>Já sei a palavra!  <input /> </span>
                    <button>Chutar</button>
                </div>
            </div>
        </>
    )
}