function show_magicians(magicians: string[]): void {

    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

 const magician: string[] = ["ali", "bilal","hamza"];
 show_magicians(magician)

 function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {      //i stand for index string
  magicians[i] = magicians[i] + " the great"
  // ali // the great
    }
  }
const magicians2: string[] = ["ali","hamza","bilal"];
make_great(magicians2)
show_magicians(magicians2)

function make_great2(magicions: string[]): string[] {
    const greatMagicians: string [] = [];
    for (let i = 0; i < magicions.length; i++) {
        greatMagicians.push(magicions[i] + "the great");
    }
    
    return greatMagicians;
    }
    
    const magicians3: string[] = ["usman","haseeb", "wajahat"];
    const greatMagicians2: string[] = make_great2(magicians3);
    show_magician(magicians3);
    show_magician(greatMagicians2);
    
    