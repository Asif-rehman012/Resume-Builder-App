function addWE(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("we");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here")

    let obj = document.getElementById("WE");
    let but = document.getElementById("weAdd");
    obj.insertBefore(newNode,but);
}

function addAQ(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aq");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here")

    let obj = document.getElementById("AQ");
    let but = document.getElementById("aqAdd");
    obj.insertBefore(newNode,but);
}

function addPR(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("pr");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here")

    let obj = document.getElementById("PR");
    let but = document.getElementById("prAdd");
    obj.insertBefore(newNode,but);
}
function validate_phone_number(txt){
    var phoneno = /^\d{10}$/;
    if(txt.value.match(phoneno)){
        return true;
    }else {
        return false;
    }
}
function validate_links(){
    let fb = document.getElementById("fb").value;
    let ig = document.getElementById("insta").value;
    let lin = document.getElementById("linked").value;
    if (fb.length!=0){
        try {
            new URL(fb);
          } catch (err) {
            //alert("Enter VALID facebook link!")
            return false;
          }
    }
    if (ig.length!=0){
        try {
            new URL(ig);
          } catch (err) {
            //alert("Enter VALID instagram link!")
            return false;
          }
    }
    if (lin.length!=0){
        try {
            new URL(lin);
          } catch (err) {
            //alert("Enter VALID LinkedIn link!")
            return false;
          }
    }
    return true 
}
function validate(){
    if ( document.getElementById("name").value.length == 0 ){
        alert( "Please enter your name" )
        return false;
    }
    if ( validate_phone_number(document.getElementById("contact")) == false ){
        alert( "Please enter a valid 10-digit phone no:" )
        return false;
    }
    if( document.getElementById("address").value.length == 0 ) {
        alert( "Please enter your address" )
        return false;
    }
    if( document.getElementById("objective").value.length == 0 ){
        alert( "Please enter your objective" )
        return false;
    }
    if ( validate_links() == false ){
        alert("Enter valid link(s)");
        return false;
    }
    else{
        let aqField = document.getElementsByClassName("aq");
        for(let j of aqField){
            if (j.value.length == 0){
                alert( "Please enter your academic qualification(s)" )
                return false
            }
        }
    }
    return true
}
function generateCV(){
    console.log("Generating CV..");
    let i = validate()
    console.log(i)
    if (i){
        document.getElementById("cv-form").style.display = "none";
        document.getElementById("cv-template").style.display = "block";
        //personal info
        document.getElementById("nameT1").innerHTML = document.getElementById("name").value;
        document.getElementById("nameT2").innerHTML = document.getElementById("name").value;
        document.getElementById("contactT").innerHTML = document.getElementById("contact").value;
        document.getElementById("addressT").innerHTML = document.getElementById("address").value;

        //objective
        document.getElementById("objectiveT").innerHTML = document.getElementById("objective").value;

        //work experience
        let workField = document.getElementsByClassName("we");
        let x = "";
        for(let i of workField){
            if ( i.value.length != 0 ){
                x = x + `<li>${i.value}</li>`
            }
        }
        console.log(x.length)
        if ( x.length == 0 ){
            document.getElementById("cv_work").style.display = "none";
        }
        else{
            document.getElementById("workT").innerHTML = x;
        }
        //academic qualification
        let aqField = document.getElementsByClassName("aq");
        let y = "";
        for(let j of aqField){
            y = y + `<li>${j.value}</li>`
        }
        document.getElementById("academicT").innerHTML = y;

        //projects
        let projects = document.getElementsByClassName("pr");
        let z = "";
        for(let k of projects){
            if ( k.value.length != 0 ){
                z = z + `<li>${i.valueOf}</li>`
            }
        }
        console.log(z.length)
        if ( z.length == 0 ){
            document.getElementById("cv_project").style.display = "none";
        }
        else{
            document.getElementById("projectT").innerHTML = x;
        }

        //links
        if(document.getElementById("fb").value.length == 0){
            document.getElementById("fbT1").style.display = "none";
        } else{
            document.getElementById("fbT").href = document.getElementById("fb").value;
        }
        if(document.getElementById("insta").value.length == 0){
            document.getElementById("instaT1").style.display = "none";
        } else{
            document.getElementById("instaT").href = document.getElementById("insta").value;
        }
        if(document.getElementById("linked").value.length == 0){
            document.getElementById("linkedT1").style.display = "none";
        } else{
            document.getElementById("linkedT").href = document.getElementById("linked").value;
        }
        // read img
        let file = document.getElementById("imgField").files[0];
        console.log(file);
        if(file != undefined){
            let reader = new FileReader();
            reader.readAsDataURL(file);
            console.log(reader.result)

            //setting img
            reader.onloadend = function(){
                document.getElementById("my-img").src = reader.result;
            }
        }
    }
}

function printCV(){
    window.print();
}