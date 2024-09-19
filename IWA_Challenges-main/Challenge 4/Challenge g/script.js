let FREE_WARNING = 'Free shipping only applies to single customer orders'
let BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
let NONE_SELECTED = '0'
let shipping = null
let currency = null
let customers = '1'
const location = 'RSA'

if (location === 'RSA') { 
	shipping === 400 
	currency === 'R' }

else if (location === NAM){
     shipping = 600 
	 currency = '$'
	}
	else if (location === 'NK'){
		console.log(BANNED_WARNIN)
	}
else {
	shipping = 800
	currency = "$"
}

let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * 'NONE_SELECTED'
let batteries = 35 * 2
let pens = 5 * 'NONE_SELECTED' 



if ((shoes + batteries + pens + shirts) >= 1000) {{
	if ((location = 'NAM' || location === "RSA") && (customers === 1)) {
		    shipping = 0 
			console.log(FREE_WARNING)
		}
	}
}

if (shipping === 0 && customers !== 1) { console.log(WARNING) }

location = 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)



