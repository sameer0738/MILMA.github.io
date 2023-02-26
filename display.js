var glob;

function fast_food(){
    if(glob==2){
        document.getElementsByClassName("noodles").style.display="none";
    }else if(glob==3){
        document.getElementsByClassName("shakes").style.display="none";
    }else if(glob==4){
        document.getElementsByClassName("beverages").style.display="none";
    }else if(glob=5){
        document.getElementsByClassName("stationary").style.display="none";
    }else if(glob==6){
        document.getElementsByClassName("dessert").style.display="none";
    }else if(glob==7){
        document.getElementsByClassName("snacks").style.display="none";
    }

    document.getElementById("fast_food").style.display="grid";
    glob=1;
}



function noodles(){
    if(glob==1){
        document.getElementsByClassName("fast_food").style.display="none";
    }else if(glob==3){
        document.getElementsByClassName("shakes").style.display="none";
    }else if(glob==4){
        document.getElementsByClassName("beverages").style.display="none";
    }else if(glob=5){
        document.getElementsByClassName("stationary").style.display="none";
    }else if(glob==6){
        document.getElementsByClassName("dessert").style.display="none";
    }else if(glob==7){
        document.getElementsByClassName("snacks").style.display="none";
    }

    document.getElementById("noodles").style.display="grid";
    glob=2;
}

function shakes(){
    if(glob==2){
        document.getElementsByClassName("noodles").style.display="none";
    }else if(glob==1){
        document.getElementsByClassName("fast_food").style.display="none";
    }else if(glob==4){
        document.getElementsByClassName("beverages").style.display="none";
    }else if(glob=5){
        document.getElementsByClassName("stationary").style.display="none";
    }else if(glob==6){
        document.getElementsByClassName("dessert").style.display="none";
    }else if(glob==7){
        document.getElementsByClassName("snacks").style.display="none";
    }

    document.getElementById("shakes").style.display="grid";
    glob=3;
}

function beverages(){
    if(glob==2){
        document.getElementsByClassName("noodles").style.display="none";
    }else if(glob==3){
        document.getElementsByClassName("shakes").style.display="none";
    }else if(glob==1){
        document.getElementsByClassName("fast_food").style.display="none";
    }else if(glob=5){
        document.getElementsByClassName("stationary").style.display="none";
    }else if(glob==6){
        document.getElementsByClassName("dessert").style.display="none";
    }else if(glob==7){
        document.getElementsByClassName("snacks").style.display="none";
    }

    document.getElementById("beverages").style.display="grid";
    glob=4;
}

function stationary(){
    if(glob==2){
        document.getElementsByClassName("noodles").style.display="none";
    }else if(glob==3){
        document.getElementsByClassName("shakes").style.display="none";
    }else if(glob==4){
        document.getElementsByClassName("beverages").style.display="none";
    }else if(glob=1){
        document.getElementsByClassName("fast_food").style.display="none";
    }else if(glob==6){
        document.getElementsByClassName("dessert").style.display="none";
    }else if(glob==7){
        document.getElementsByClassName("snacks").style.display="none";
    }

    document.getElementById("stationary").style.display="grid";
    glob=5;
}

function dessert(){
    if(glob==2){
        document.getElementsByClassName("noodles").style.display="none";
    }else if(glob==3){
        document.getElementsByClassName("shakes").style.display="none";
    }else if(glob==4){
        document.getElementsByClassName("beverages").style.display="none";
    }else if(glob=5){
        document.getElementsByClassName("stationary").style.display="none";
    }else if(glob==6){
        document.getElementsByClassName("fast_food").style.display="none";
    }else if(glob==7){
        document.getElementsByClassName("snacks").style.display="none";
    }

    document.getElementById("dessert").style.display="grid";
    glob=6;
}

function snacks(){
    if(glob==2){
        document.getElementsByClassName("noodles").style.display="none";
    }else if(glob==3){
        document.getElementsByClassName("shakes").style.display="none";
    }else if(glob==4){
        document.getElementsByClassName("beverages").style.display="none";
    }else if(glob=5){
        document.getElementsByClassName("stationary").style.display="none";
    }else if(glob==6){
        document.getElementsByClassName("dessert").style.display="none";
    }else if(glob==1){
        document.getElementsByClassName("fast_food").style.display="none";
    }

    document.getElementById("snnacks").style.display="grid";
    glob=7;
}


/*
            var glob=0;

function fast_food(){
    if(glob==2){
        document.getElementsByClassName("noodles").s;
    }else if(glob==3){
        document.getElementsByClassName("shakes").style.display="none";
    }else if(glob==4){
        document.getElementsByClassName("beverages").style.display="none";
    }else if(glob=5){
        document.getElementsByClassName("stationary").style.display="none";
    }else if(glob==6){
        document.getElementsByClassName("dessert").style.display="none";
    }else if(glob==7){
        document.getElementsByClassName("snacks").style.display="none";
    }

    document.getElementById("fast_food").style.display="grid";
    glob=1;
}



function noodles(){
    if(glob==1){
        document.getElementsByClassName("fast_food").style.display="none";
    }else if(glob==3){
        document.getElementsByClassName("shakes").style.display="none";
    }else if(glob==4){
        document.getElementsByClassName("beverages").style.display="none";
    }else if(glob=5){
        document.getElementsByClassName("stationary").style.display="none";
    }else if(glob==6){
        document.getElementsByClassName("dessert").style.display="none";
    }else if(glob==7){
        document.getElementsByClassName("snacks").style.display="none";
    }

    document.getElementById("noodles").style.display="grid";
    glob=2;
}

function shakes(){
    if(glob==2){
        document.getElementsByClassName("noodles").style.display="none";
    }else if(glob==1){
        document.getElementsByClassName("fast_food").style.display="none";
    }else if(glob==4){
        document.getElementsByClassName("beverages").style.display="none";
    }else if(glob=5){
        document.getElementsByClassName("stationary").style.display="none";
    }else if(glob==6){
        document.getElementsByClassName("dessert").style.display="none";
    }else if(glob==7){
        document.getElementsByClassName("snacks").style.display="none";
    }

    document.getElementById("shakes").style.display="grid";
    glob=3;
}

function beverages(){
    if(glob==2){
        document.getElementsByClassName("noodles").style.display="none";
    }else if(glob==3){
        document.getElementsByClassName("shakes").style.display="none";
    }else if(glob==1){
        document.getElementsByClassName("fast_food").style.display="none";
    }else if(glob=5){
        document.getElementsByClassName("stationary").style.display="none";
    }else if(glob==6){
        document.getElementsByClassName("dessert").style.display="none";
    }else if(glob==7){
        document.getElementsByClassName("snacks").style.display="none";
    }

    document.getElementById("beverages").style.display="grid";
    glob=4;
}

function stationary(){
    if(glob==2){
        document.getElementsByClassName("noodles").style.display="none";
    }else if(glob==3){
        document.getElementsByClassName("shakes").style.display="none";
    }else if(glob==4){
        document.getElementsByClassName("beverages").style.display="none";
    }else if(glob=1){
        document.getElementsByClassName("fast_food").style.display="none";
    }else if(glob==6){
        document.getElementsByClassName("dessert").style.display="none";
    }else if(glob==7){
        document.getElementsByClassName("snacks").style.display="none";
    }

    document.getElementById("stationary").style.display="grid";
    glob=5;
}

function dessert(){
    if(glob==2){
        document.getElementsByClassName("noodles").style.display="none";
    }else if(glob==3){
        document.getElementsByClassName("shakes").style.display="none";
    }else if(glob==4){
        document.getElementsByClassName("beverages").style.display="none";
    }else if(glob=5){
        document.getElementsByClassName("stationary").style.display="none";
    }else if(glob==6){
        document.getElementsByClassName("fast_food").style.display="none";
    }else if(glob==7){
        document.getElementsByClassName("snacks").style.display="none";
    }

    document.getElementById("dessert").style.display="grid";
    glob=6;
}

function snacks(){
    if(glob==2){
        document.getElementsByClassName("noodles").style.display="none";
    }else if(glob==3){
        document.getElementsByClassName("shakes").style.display="none";
    }else if(glob==4){
        document.getElementsByClassName("beverages").style.display="none";
    }else if(glob=5){
        document.getElementsByClassName("stationary").style.display="none";
    }else if(glob==6){
        document.getElementsByClassName("dessert").style.display="none";
    }else if(glob==1){
        document.getElementsByClassName("fast_food").style.display="none";
    }

    document.getElementById("snnacks").style.display="grid";
    glob=7;
}

*/