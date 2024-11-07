const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: new Date (`16 December ${currentYear}`),
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

holidays.futureId = 9
console.log(holidays.futureId.name || `ID ${futureId} not created yet`)

let copied = holidays.christmas
copied = { name: 'X-mas Day' }
let copiedChristmas = {
    id: holidays[christmas].id,
    name: holidays[christmas].name,
    date: new Date(holidays[christmas].date.getTime()),
}
copiedChristmas.name = 'X-mas Day'
let correctDate = new Date (copiedChristmas.date)
correctDate.setHours(0) 
correctDate.setMinutes(0) 
let isEarlier = correctDate < holidays[christmas].date
console.log('New date is earlier:', isEarlier)

if (isEarlier)
    {copiedChristmas.date = correctDate} 
console.log('ID change:', holidays[christmas].id !== copiedChristmas.id && copiedChristmas.id)
console.log('Name change:', holidays[christmas].name !== copiedChristmas.name && copiedChristmas.name)
console.log('Date change:', holidays[christmas].date !== correctDate && correctDate) // come back

const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)

const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)

const firstHoliday = new Date (firstHolidayTimestamp)
const lastHoliday = new Date (lastHolidayTimestamp)
const firstDay = String(firstHoliday.getDate()).padStart(2, 0)
const firstMonth = String(firstHoliday.getMonth() + 1).padStart(2, 0) 
const lastDay = String(lastHoliday.getDate()).padStart(2,0)
const lastMonth = String(lastHoliday.getMonth() + 1).padStart(2, 0)

console.log(`${firstDay}/${firstMonth}/${currentYear}`)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)

const randomHoliday = holidays[Math.floor(Math.random() * (8 + 1))].date
const randomDay = String(randomHoliday.getDate()).padStart(2, 0)
const randomMonth = String(randomHoliday.getMonth() + 1).padStart(2,0) 
console.log(`${randomDay}/${randomMonth}/${currentYear}`)