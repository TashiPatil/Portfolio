var p1 = document.querySelector(".yo")
var p2 = document.querySelector(".name")
var p3 = document.querySelector(".devo")

var line1 = 'Hello there!'
var line2 = 'I am Tashi'
var line3 = 'Frontend Developer'

var length1 = 0
var length2 = 0
var length3 = 0

function animation () {
    if(length1 < line1.length){
        p1.innerHTML += line1[length1]
        length1++;
    }
    else if (length2 < line2.length){
        p2.innerHTML += line2[length2]
        length2++;


    }
    else if (length3 < line3.length){
        p3.innerHTML += line3[length3]
        length3++;


    }
    setTimeout(animation,100);
}


animation()