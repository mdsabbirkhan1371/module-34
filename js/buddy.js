const loadBuddyes = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddy(data))
}
loadBuddyes()
const displayBuddy = (data) => {
    const buddyies = data.results
    const buddyiesDiv = document.getElementById('buddyies');
    for (const buddy of buddyies) {
        console.log(buddy)
        const p = document.createElement('p')
        p.innerText = ` name:${buddy.name.title} ${buddy.name.first} ${buddy.name.last},${buddy.cell}`
        buddyiesDiv.appendChild(p)
    }
}