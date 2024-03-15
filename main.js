function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var magician = ["ali", "bilal", "hamza"];
show_magicians(magician);
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) { //i stand for index string
        magicians[i] = magicians[i] + " the great";
        // ali // the great
    }
}
var magicians2 = ["ali", "hamza", "bilal"];
make_great(magicians2);
show_magicians(magicians2);
function make_great2(magicions) {
    var greatMagicians = [];
    for (var i = 0; i < magicions.length; i++) {
        greatMagicians.push(magicions[i] + "the great");
    }
    return greatMagicians;
}
var magicians3 = ["usman", "haseeb", "wajahat"];
var greatMagicians2 = make_great2(magicians3);
show_magician(magicians3);
show_magician(greatMagicians2);
