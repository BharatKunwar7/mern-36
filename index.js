
//comment
//single line comment
/*
multiline comment
*/
//variables==>changing values
 //var scope is global




var x=10
console.log(x)
{
    var x=20
    console.log(x)
}
console.log(x) 
//local scope
let y=10
console.log(y)
{
    let y=20
    console.log(y)
}       
console.log(y)
//constant==>unchanging values fix data hold
//scope block=local


//data types
/*
1.string
'',"",``
2.number


*/
let c;
console.log(c)

//univesal data type    json every programing language use json data type
 let h=10
 h++
 console.log(h)
 ++h
    console.log(h)

//=== compare values and data type
//== compare only values
//null colaeching operator ?

//object destructuring

let product={
    productname:"iphone",
    price:1000,
    brand:"apple",
}
let {productname,price,brand}=product
console.log(productname)
//aliashing  brand:brandName =brand rakhna sakinxa

//spread operator and rest operator

let obj1={ 
    name:"ram",
    age:20,
} 
//let obj2=obj1
//obj2.name="hari"
//console.log(obj1.name)//hari

let obj2={
    ...obj1}
    obj2.name="sita"
    console.log(obj2.name)
    

    //template literals
    let username ="jhon"
    let age=20
    let address=`${username} is ${age} years old`
    console.log(address)


























