function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}
    
var p1 = pizzaOven("estilo Chicago", "tradicional",["mozzarella"], ["pepperoni","salchicha"]);
console.log(p1);
var p2 = pizzaOven("lanzada a mano", "marinara",["mozzarella","feta"], ["champiñones","aceituna"]);
console.log(p2);
var p3 = pizzaOven("Masa fina", "tradicional",["mozzarella"], ["jamon","piña"]);
console.log(p3);
var p4 = pizzaOven("Masa gruesa","Salsa de tomate",["mozzarella"], ["espinaca","salchicha","carne"]);
console.log(p4);