var text = document.getElementById("divone");

var div2 = document.createElement("div");
text.appendChild(div2);

var heading = document.createElement("span");
var headingtext = document.createTextNode("Add your skills");
heading.appendChild(headingtext);
div2.appendChild(heading);

var underline = document.createElement("hr")
heading.appendChild(underline);

var text1 = document.createElement("input");
text1.setAttribute("type" , "text")
text1.setAttribute("placeholder" , "enter your skill");
text1.setAttribute("id" , "input1");
text1.setAttribute("onmouseover" , "back()");
text1.setAttribute("onmouseout" , "back1()");


function back(){
    document.getElementById("input1").style.backgroundColor="yellow";
}
function back1(){
document.getElementById("input1").style.backgroundColor="white";
}

    

    


div2.appendChild(text1);
var btn = document.createElement("input");
btn.setAttribute("type" , "button");
btn.setAttribute("value" , "add");
btn.setAttribute("name" , "button");
btn.setAttribute("id" , "btn");
btn.setAttribute("onclick" , "clickme()");
div2.appendChild(btn);


function clickme() {
    var empty = document.getElementById("input1").value;
    if(empty === ""){
        document.getElementById("input1").style.backgroundColor="red";
       }
    else{
        var listValue = document.createTextNode(document.getElementById("input1").value);

    }

    var newdiv = document.createElement("div");
        var unorderedlisst = document.createElement("ul");
    var ordrdlist = document.createElement("li");
    ordrdlist.appendChild(listValue);
    unorderedlisst.appendChild(ordrdlist);
    newdiv.appendChild(unorderedlisst);
    div2.appendChild(newdiv);

    var delet = document.createElement("input");
    delet.setAttribute("onclick" , "deleting");
    delet.setAttribute("value" , "delete");
    delet.setAttribute("type" , "button");
    delet.setAttribute("name" , "delete");
    delet.setAttribute("class" , "left1");
    ordrdlist.appendChild(delet);

    var edit = document.createElement("input");
    edit.setAttribute("type" , "button");
    edit.setAttribute("value" , "edit");
    edit.setAttribute("onclick" , "editing");
    edit.setAttribute("name" , "edit");
    edit.setAttribute("class" , "left1");
    ordrdlist.appendChild(edit);

    delet.addEventListener("click", function () {
        delet.parentNode.remove()
        })

    edit.addEventListener("click", function () {
            var list = this.parentNode;
            var edititing = prompt("enter value",input1.value);
            ordrdlist.innerText = edititing;
            ordrdlist.appendChild(delet);
            ordrdlist.appendChild(edit);
            
            })
            
}
// var div2 = document.createComment("div")
// div2.setAttribute("class" , "class1");
// div1.appendChild(div2);

















































// function click() {
//     var idinty = document.getElementById("maindiv");
//     var para = document.createElement("p");
//     var text = document.createTextNode("You can get the number of items in the collection. The following statement assigns the number of items in the node collection to the variable ")
//     para.appendChild(text).innerHTML;
// }

// var a = document.getElementsByName(h1);
// a.setAttribute("class" , "heading1");
// console.log(a);

// function clickme() {
//     var a =document.getElementById("heading");
//     a.style.color="green";
// }

// function clickme1() {
//     var a =document.getElementById("heading");
//     a.style.color="yellow";
// }