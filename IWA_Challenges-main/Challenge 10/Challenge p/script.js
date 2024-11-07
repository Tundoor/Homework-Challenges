//Only change below JS, not the HTML

     root1 = document.querySelector('dl[data-key = "order1"]')
     biscuits1= root1.querySelector('.biscuits .count')
     donuts1= root1.querySelector('.donuts .count')
     pancakes1= root1.querySelector('.pancakes .count')
     status1= root1.querySelector('.status')

    root2 = document.querySelector('dl[data-key = "order2"]')
    biscuits2 = root2.querySelector('.biscuits .count')
    donuts2 = root2.querySelector('.donuts .count')
    pancakes2 = root2.querySelector('.pancakes .count')
    status2 = root2.querySelector('.status')


    root3 = document.querySelector('dl[data-key = "order3"]')
    biscuits3= root3.querySelector('.biscuits .count')
    donuts3= root3.querySelector('.donuts .count')
    pancakes3= root3.querySelector('.pancakes .count')
    status3= root3.querySelector('.status')


biscuits1.textContent = root1.getAttribute('data-biscuits')
donuts1.textContent = root1.getAttribute("data-donuts")
pancakes1.textContent = root1.getAttribute('data-pancakes')

// gets the dd tag
status1.getElementsByTagName('dd')[0].id = "close1"
statusOne = document.getElementById('close1')
statusOne.textContent = root1.getAttribute('data-delivered') === "true"? 'Delivered' : 'Pending'

biscuits2.textContent = root2.getAttribute('data-biscuits')
donuts2.textContent = root2.getAttribute("data-donuts")
pancakes2.textContent = root2.getAttribute('data-pancakes')

// gets the dd tag
status2.getElementsByTagName('dd')[0].id = "close2"
statusTwo = document.getElementById("close2")
statusTwo.textContent = root2.getAttribute('data-delivered') === "true"? 'Delivered' : 'Pending'


biscuits3.textContent = root3.getAttribute('data-biscuits')
donuts3.textContent = root3.getAttribute("data-donuts")
pancakes3.textContent = root3.getAttribute('data-pancakes')

// gets the dd tag
status3.getElementsByTagName('dd')[0].id = "close3"
statusThree = document.getElementById("close3")
statusThree.textContent = root3.getAttribute('data-delivered') === "true"? 'Delivered' : 'Pending'

