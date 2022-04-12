const loadQuoates = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuoates(data))
}
const displayQuoates = quote => {
    const quoateElement = document.getElementById('quote')
    quoateElement.innerText = quote.quote;
}