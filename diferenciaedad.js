/* algoritmo*/
//crear variables y obtener su valor
//preguntarme cual de los 2 datos es mayor
// hacer la diferencia en el orden correspondiente
// devolver la respuesta


let edad = prompt ("Cual es tu Edad?");
let edad2 = prompt ("Cual es la Edad de tu Hermano?");

if (edad > edad2)
{
    let diferencia = edad - edad2
    alert("tu hermano y tu se llevan" + diferencia+ "años, tu eres el mayor")
}
else if (edad < edad2)
{
     let diferencia = edad2 - edad;
     alert ("Tu hermano y tu se llevan" +diferencia+ "años, tu eres el menor")
}

alert("tu hno y tu se llevan " + diferencia + "años");