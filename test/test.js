var x = 1

function changeX() {
    return function() {
        x+=1
        console.log(x)
    }
}
changeX(x)()
console.log(x)
changeX(x)()
console.log(x)
changeX(x)()
console.log(x)