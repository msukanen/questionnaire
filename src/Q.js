import React from 'react'
import Button from './components/Button'
import Chunk from './components/Chunk'

/**
 * A question with answer(s), points, etc.
 */
class Question {
    #text           // question text
    #answers        // answer(s) to the question
    #pts4correct    // points for correct answer
    #correctIdx     // index of correct answer in {#answers}
    #userAnsIdx     // user's answer's index

    constructor(questionData) {
        this.#userAnsIdx = undefined
        this.#text = questionData.t
        this.#answers = []
        questionData.a.forEach( a => { this.#answers.push(a) })
        this.#pts4correct = questionData.p === undefined ? 0 : questionData.p
        this.#correctIdx = questionData.c
    }

    get text(){ return this.#text }
    get answers(){ return this.#answers }
    get pts4correct(){ return this.#pts4correct }
    /**
     * Stuff to display based on answer's (in)correctness or lack of correct answer.
     */
    get correct(){ return(
        this.#correctIdx === undefined
            ? <i>&mdash; ei oikeaa tai v&auml;&auml;r&auml;&auml; vastausta</i> // ...no correct answer at all...
        : this.#text[this.#text.length-1]==='=' // question ends with '='?
            ? this.#answers[this.#correctIdx]   // ...if so, don't alter
        : ': '+this.#answers[this.#correctIdx]  // ...but if not, fiddle with it a bit.
    )}
    /**
     * What to display if user answered (in)correctly...
     */
    get userAnswer(){
        if (this.#correctIdx !== undefined && this.#userAnsIdx !== this.#correctIdx)
            return `...mutta arvasit "${this.#answers[this.#userAnsIdx]}"`
        return '' // nothing to add, nothing to comment...
    }
    set userAnswer(answerIndex){
        if (answerIndex !== undefined && (answerIndex < 0 || answerIndex >= this.#answers.length)) {
            console.log(`ERR: USER INP "${answerIndex}" out of bounds or completely invalid.`)
            answerIndex = undefined
        }
        this.#userAnsIdx = answerIndex
    }
    /**
     * Points scored, if any.
     */
    get userPoints(){
        return this.#correctIdx === undefined || this.#correctIdx === this.#userAnsIdx
            ?  this.#pts4correct
            :  0
    }
}

/**
 * Questions? Yes, a lot.
 */
class Questionnaire extends React.Component {
    static #summaryID = -1  // used as non-question 'state' to indicate Summary
    static #questionData = [
        {t: 'Paljonko kello on', a:['Paljon', 'Aika vähän', 'Onhan se'] },
        {t: '1+1 =', a:['Numero','Laskentoa',2], p:5, c:2},
        {t: 'Tämä on soitin', a:['Puhelin','Kitara','Kitaro'], p:2, c:1}
    ]

    #qs    = []
    #maxPts = 0

    constructor(props) {
        super(props)
        Questionnaire.#questionData.forEach(questionData => {
            let question = new Question(questionData)
            this.#maxPts += question.pts4correct
            this.#qs.push(question)
        })
        this.next = this.next.bind(this)
        this.state = { stage: undefined }
    }

    /**
     * Rendering state-machine.
     * 
     * @returns stuff to render.
     */
    render() {
        switch(this.state.stage) {
            case undefined:
                return <Chunk title='Questionnaire' content={<Button text='&hellip;start&hellip;' onClick={this.next}/>}/>
            case Questionnaire.#summaryID:
                return <Chunk title='Summary' content={this._contentSummary()}/>
            default:
                return <Chunk title={this.#qs[this.state.stage].text} content={this._contentQ(this.state.stage)}/>
        }
    }

    /**
     * Calculate accumulated points and form a summary chunk about all questions.
     * 
     * @returns summary chunk
     */
    _contentSummary(){
        let ptsTotal = 0
        this.#qs.forEach( question => {
            ptsTotal += question.userPoints
        })
        return<div id="summary-text"><div>
            {this.#qs.map( question => {
                return <p>{question.text} {question.correct}<br />{question.userAnswer}</p>
            })}</div>
            <p>Pisteet: {ptsTotal} / {this.#maxPts}</p>
            <Button text='uudestaan?!' onClick={this.next}/>
        </div>
    }

    /**
     * Access the desired question and form a display chunk about it.
     * 
     * @param {*} questionIndex Index of question to access.
     * @returns 
     */
    _contentQ(questionIndex) {
        return<div className="table">
            {this.#qs[questionIndex].answers.map((text, answerIndex) => {
                return <div className="row">
                    <div className="col">{text}</div>
                    <div className="col"><Button text='valitse' onClick={() => this._answerAndProceed(questionIndex, answerIndex)}/></div>
                </div>
            })}
        </div>
    }

    _answerAndProceed(questionIndex, answerIndex) {
        this.#qs[this.state.stage].userAnswer = answerIndex
        this.next()
    }

    /**
     * Proceed to next "stage" in line of questions or to summary.
     */
    next() {
        this.setState(prevState => {
            let questionIndex = prevState.stage === undefined ? 0 : prevState.stage + 1
            if (questionIndex >= Questionnaire.#questionData.length)
                questionIndex = Questionnaire.#summaryID
            return {stage: questionIndex}
        })
    }
}

export default Questionnaire
