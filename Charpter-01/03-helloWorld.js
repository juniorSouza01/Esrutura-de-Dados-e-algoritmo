/* const */

const framework = {
    name: 'Angular'
};



let movie = 'Lord of the rings';
//var movie = 'Batman vc Superman'; // erro, movie ja foi declarada
function starWarsFan(){
    const movie = 'Star Wars';
    return movie;
}

function marvelFan(){
    movie = 'The avengers';
    return movie;
}

function blizzardFan(){
    const isFan = true;
    let phrase = 'Warcraft';
    console.log(`Before if: ${phrase}`);

    if(isFan){
        let phrase = 'Initial text';
        phrase = 'For the Horde!';
        console.log(`Inside if: ${phrase}`);
    }
    phrase = 'For the Alliance!';
    console.log(`After if: ${phrase}`);
}

console.log(movie);
console.log(starWarsFan());
console.log(marvelFan());
console.log(movie);
blizzardFan();