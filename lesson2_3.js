function show(data){
    console.log(data);
}
var name;
var admin;
admin = name;
name = "Vasyl";
switch(name){
    case "Vasyl":{
        show("Vasyl");
        break;
    }
    default:{
         show("Unrecognized name");
    }
}