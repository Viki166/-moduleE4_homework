//Задание 1
function setObj(obj){
	for (let key in obj){
	if (obj.hasOwnProperty(key)) {
		console.log(key, obj[key])
	}
	}
}

//Задание 2
let checkObjProperty = (obj, str) => console.log(str in obj)

//Задание 3
createObj = () => Object.create(null)

//Задание 4
// parent function
function ElectricalAppliance(category,manufacter, brand, color){
this.category = category,
this.manufacter = manufacter,
this.brand = brand,
this.color = color
}
//parent function prototype
ElectricalAppliance.prototype.checkElectricity = function(connectedToElectricity,amperage, voltage = 220 ){
let power = voltage * amperage
if (connectedToElectricity === 'True' || connectedToElectricity === 'true'){
	console.log(this.category + ' включен в розетку.', 'Мощность ' + this.category +'а' + ' = ' + power + 'Вт.')
} else  if (connectedToElectricity === 'False' || connectedToElectricity === 'false'){
	console.log(this.category +  ' не включен в розетку.')
}
}
//parent function child
const toaster = new ElectricalAppliance('Тостер', 'Китай','Bosch','Белый')
toaster.power = '980 Вт';
toaster.control = 'Механическое'
toaster.model = 'TAT3A011'
toaster.getBrand = function(){
	console.log('Бренд тостера - ' + this.brand + '.')
}
//parent function child
const fridge = new ElectricalAppliance('Холодильник','Китай','DEXP','Серый')
fridge.noise = '42дБ'
fridge.formForIse = 'Есть'
fridge.getNoise = function (){
	console.log('Уровень шума холодильника: ' + this.brand + ' - ' + this.noise + '.')
}

//Задание 5
//class parent
class ElectricalAppliance {
	constructor(category, manufacter,brand, color){
		this.category = category,
		this.manufacter = manufacter,
		this.brand = brand,
		this.color = color
	}
}
//parent class prototype 
class CheckElectricity extends ElectricalAppliance {
	constructor (category, manufacter,brand, color) {
		super(category, manufacter,brand, color)
	}
	getCheckElectricity(connectedToElectricity,amperage,voltage=220) {
		let power = voltage * amperage
		if (connectedToElectricity === 'True' || connectedToElectricity === 'true'){
			return this.category + ' включен в розетку.', 'Мощность ' + this.category +'а' + ' = ' + power + 'Вт.'
		} else  if (connectedToElectricity === 'False' || connectedToElectricity === 'false'){
			return this.category +  ' не включен в розетку.'
	}
}
}
//class prototype child
class Toaster extends CheckElectricity{
	constructor(category,manufacter,brand,color, power,control,model){
		super (category, manufacter, brand, color)
		this.power = power
		this.control = control
		this.model = model
	}
	getBrand () {
		return 'Бренд тостера - ' + this.brand + '.'
}
}
//parent class child 
const toaster = new Toaster('Тостер','Китай','Bosch','Белый', '980Bт', 'Механическое','TAT3A011')

//class prototype child
class Fride extends CheckElectricity{
	constructor(category, manufacter, brand, color, noise, formIse){
		super (category, manufacter, brand, color, )
		this.noise = noise
		this.formIse = formIse
	}
	getNoise () {
		return 'Уровень шума холодильника: ' + this.brand + ' - ' + this.noise + '.'
	}
}
//parent class child 
const fride = new Fride('Холодильник','Китай','DEXP','Серый', '42Дб', 'Есть')

console.log(toaster instanceof ElectricalAppliance)
console.log(fride instanceof ElectricalAppliance)