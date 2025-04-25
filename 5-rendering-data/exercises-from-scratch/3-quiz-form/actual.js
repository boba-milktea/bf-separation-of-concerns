'use strict';

const actual = ({ question, answers, correct, selected }) => {
    const formEl = document.createElement('form');
    const questionEl = document.createElement('p');
    questionEl.innerText = question;

    for (let i = 0; i < answers.length; i++) {
        const inputEl = document.createElement('input');
        inputEl.type = 'radio';
        inputEl.name = 'answers';
        const brEl = document.createElement('br');
        const textEl = document.createElement('text');
        textEl.innerText = answers[i];
        if (i === selected) {
            inputEl.checked = 'true';
            textEl.className = selected !== correct ? 'incorrect' : 'correct';
            textEl.innerText += selected !== correct ? ' ✖' : ' √';
        }

        formEl.append(inputEl, textEl, brEl);
    }

    formEl.prepend(questionEl);
    return formEl;
};
