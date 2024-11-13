// Do not edit HTML

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line only

 const books = [
{
    status : document.queryselector('#book1 .status').innerText,
    html : {
        reserve:document.querySelector('#book1 .reserve'),
        checkout:document.querySelector('#book1 .checkout'),
        checkin:document.querySelectorselector("#book1 .checkin") 
    } 
},

{
    status : document.queryselector('#book2 .status').innerText,
    html : {
        reserve:document.querySelector('#book2 .reserve'),
        checkout:document.querySelector('#book2 .checkout'),
        checkin:document.querySelectorselector("#book2 .checkin") 
    } 
},
 
{
    status : document.queryselector('#book3 .status').innerText,
    html : {
        reserve:document.querySelector('#book3 .reserve'),
        checkout:document.querySelector('#book3 .checkout'),
        checkin:document.querySelectorselector("#book3 .checkin") 
    } 
}

]

books.forEach((book) => {
    // Get the status details from STATUS_MAP based on the current book's status
    const statusDetails = STATUS_MAP[book.status];

    // Set the color of the status element
    book.html.status.style.color = statusDetails.color;

    // Enable or disable buttons based on status
    book.html.reserve.disabled = !statusDetails.canReserve;
    book.html.checkout.disabled = !statusDetails.canCheckout;
    book.html.checkin.disabled = !statusDetails.canCheckIn;
});
