/* replace in JS */

/*let matn = "Salom hammaga! salom berdim hammaga. salom"
/!*console.log(matn.replace(/salom|berdim|hammaga/gi,"alik"));*!/
let yangiMatn = matn.replace(/salom|hammaga/gi,function (soz){
   if (soz == "Salom" || soz == "salom"){
       return "alik";
   }
   else if (soz == "hammaga"){
       return "barchaga"
   }
});
console.log(yangiMatn);*/

/* Push & Pop in JS */
/*let list = [];
list.push("Maftuna");
console.log(list.length);
console.log(list);
list.push("Odiljonova");
console.log(list.length);
console.log(list);
list.push("18 yoshda");
console.log(list.length);
console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.pop());
console.log(list);*/

/* Unshift & shift in JS */

/*let list = [];
list.unshift("Madina");
console.log(list.length);
console.log(list);
list.unshift("Rahmatova");
console.log(list.length);
console.log(list);
list.unshift("17 yoshda");
console.log(list.length);
console.log(list);
console.log(list.shift());
console.log(list);
console.log(list.shift());
console.log(list);*/

/* Sort in JS */

/*let list = ["Sayyora","Ziyoda","Latofat","Umida","Nargiza","Charos"];
console.log(list.sort().reverse());*/
/*let sonlar = [535,846,45,34,17,28,128,444,707,789];

let tartiblanganSonlar = sonlar.sort(function (a,b){
    return a-b;
})
console.log(tartiblanganSonlar.reverse());*/

/*let belgilar = "0123456789";
function parolBer(){
    let i = 0;
    let parol = '';
    while (i < 6){
        let son = parseInt(Math.random() * belgilar.length);
        parol += belgilar[son];
        i++;
    }
    document.querySelector("input").value = parol;
}*/

document.querySelector('.tugma').addEventListener('click',function (){
    let ekran = document.querySelector('.ekran');
    console.log(typeof parseInt(ekran.value));
    ekran.value = parseInt(ekran.value) + 1;
});
document.querySelector('.nolga').addEventListener('click',function (){
    document.querySelector('.ekran').value = 0;
});

