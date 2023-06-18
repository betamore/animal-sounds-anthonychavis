// Write code here
const cowSounds = () => console.log('Cows go MOOOO!');
const dogSounds = () => console.log('Dogs go WOOOF!');
const duckSounds = () => console.log('Ducks go QUACK!');
const whatSound = animal => animal == "Cow" ? cowSounds() : animal == 'Dog' ? dogSounds() : animal == 'Duck' ? duckSounds() : console.log('I am not sure what noise that animal makes' );
        


// DONT CHANGE. THIS IS FOR TESTING
let animals = [ "Bat", "Cat", "Cat", "Dog", "Cow", "Duck", "Dog", "Fish", "Cow", "Dog", "Duck", "Duck" ];

for (let animal of animals) {
        whatSound(animal);
}
