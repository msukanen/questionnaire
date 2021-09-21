import React from 'react'

class Question {
    #text
    #answers
    #pts4correct
    #correctIdx
    #userAnsIdx

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
    get correct(){ return(
        this.#correctIdx === undefined
            ? <i>&mdash; ei oikeaa tai v&auml;&auml;r&auml;&auml; vastausta</i>
        : this.#text[this.#text.length-1]==='='
            ? this.#answers[this.#correctIdx]
        : ': '+this.#answers[this.#correctIdx]
    )}
    get userAnswer(){
        if (this.#correctIdx !== undefined && this.#userAnsIdx !== this.#correctIdx)
            return `...mutta arvasit "${this.#answers[this.#userAnsIdx]}"`
        return ''
    }
    set userAnswer(answerIndex){
        if (answerIndex !== undefined && (answerIndex < 0 || answerIndex >= this.#answers.length)) {
            console.log(`ERR: USER INP "${answerIndex}" out of bounds or completely invalid.`)
            answerIndex = undefined
        }
        this.#userAnsIdx = answerIndex
    }
    get userPoints(){
        return this.#correctIdx === undefined || this.#correctIdx === this.#userAnsIdx
            ?  this.#pts4correct
            :  0
    }
}

class Questionnaire extends React.Component {
    static #summaryID = -1
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

    render() {return<div id="questionnaire">
        <h1>{this._title()}</h1>
        {this._content()}
    </div>}

    _title() {
        switch(this.state.stage) {
            case undefined: return 'Questionnaire'
            case Questionnaire.#summaryID: return 'Summary'
            default: return this.#qs[this.state.stage].text
        }
    }

    _content() {
        switch(this.state.stage) {
            case undefined: return this._contentStart()
            case Questionnaire.#summaryID: return this._contentSummary()
            default: return this._contentQ(this.state.stage)
        }
    }

    _contentStart(){
        return <button onClick={this.next}>&hellip;start&hellip;</button>
    }
    _contentSummary(){
        let ptsTotal = 0
        this.#qs.forEach( question => {
            ptsTotal += question.userPoints
        })
        return<div id="summary-text"><p>
            {this.#qs.map( question => {
                return <p>{question.text} {question.correct}<br />{question.userAnswer}</p>
            })}</p>
            <p>Pisteet: {ptsTotal} / {this.#maxPts}</p>
            <button onClick={this.next}>uudestaan?!</button>
        </div>
    }
    _contentQ(questionIndex) {
        return<>
            {this.#qs[questionIndex].answers.map((text, answerIndex) =>
                <div>{text}
                    <button onClick={() => this.answerAndProceed(questionIndex, answerIndex)}>valitse</button>
                </div>
            )}
        </>
    }

    answerAndProceed(questionIndex, answerIndex) {
        this.#qs[questionIndex].userAnswer = answerIndex
        this.next()
    }

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
