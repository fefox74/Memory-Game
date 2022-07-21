//arrays and variables
var img = ["images/elephant.jpg", "images/snake.jpg", "images/horse.png"]
var classes = ["a", "b", "c", "d", "e", "f"]
var numbers = ["0", "1", "2", "0", "1", "2"]

//set a random img
for (var i = 0; i < classes.length; i++) {

    var imgSelected = document.querySelector("." + classes[i]);

    var randomNum = Math.floor(Math.random() * numbers.length);

    var imgNum = numbers[randomNum];

    imgSelected.setAttribute("src", img[imgNum]);


    numbers.splice(randomNum, 1);
}


//hide the div when pressed and if the imgs are identical throw alert
var div = document.querySelectorAll(".div");

var deletedDivs = 0;

for (var e = 0; e < div.length; e++) {
    //add the event listener to all the divs
    (div[e]).addEventListener("click", function () {

        //hide the pressed div
        this.classList.add("hide");
        this.classList.remove("div");

        //add 1 to deleted divs
        deletedDivs++;

        console.log(deletedDivs);

        //if deleted divs are odd add id to div pressed to get 
        if (deletedDivs % 2 === 1 && deletedDivs !== 0) {
            this.setAttribute("id", "pressed");
            let firstPressedName = document.getElementById("pressed").getAttribute("name");
            var src1 = document.querySelector("img[name='" + firstPressedName + "']").getAttribute("src");
            console.log(src1);
        }

        //if deleted divs are even get the name of this and use it to get the source of the image
        if (deletedDivs % 2 === 0 ) {
            var value = this.getAttribute("name");
            var src2 = document.querySelector("img[name='" + value + "']").getAttribute("src");
            console.log(src2);
        }

        //check if the sources are identical
        if (deletedDivs % 2 === 0 && src1 === src2) {
            console.log(src1 + " " + src2)
            alert("great");

        //if the imgs werent the same hide them again
        } else if (deletedDivs % 2 === 0 &&  src1 !== src2) {
            document.querySelectorAll(".hide")[0].classList.add("div");
            document.querySelectorAll(".hide")[1].classList.add("div");
            document.querySelectorAll(".hide")[1].classList.remove("hide");
            document.querySelectorAll(".hide")[0].classList.remove("hide");
        }

        //remove id from div
        if (deletedDivs % 2 === 0 && deletedDivs !== 0) {
            document.getElementById("pressed").removeAttribute("id");
        }
    });

}




// lastRandomNumber.push(randomNum);

// while(hasDuplicates(lastRandomNumber) && lastRandomNumber.length <= 3) {
//     randomNum = Math.floor(Math.random() * 3);
//     lastRandomNumber.pop();
// }
// if(lastRandomNumber.length > 3)