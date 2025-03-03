const words = {
  movies: [
    "The Shawshank Redemption",
    "The Godfather",
    "Inception",
    "The Dark Knight",
    "Pulp Fiction",
    "Forrest Gump",
    "The Lord of the Rings: The Return of the King",
    "Star Wars: Episode V - The Empire Strikes Back",
    "Fight Club",
    "The Matrix",
    "Schindler's List",
    "Goodfellas",
    "Jurassic Park",
    "The Lion King",
    "Titanic",
    "Back to the Future",
    "Gladiator",
    "The Silence of the Lambs",
    "Saving Private Ryan",
    "Interstellar",
  ],
  books: [
    "To Kill a Mockingbird",
    "1984",
    "Pride and Prejudice",
    "The Great Gatsby",
    "Moby-Dick",
    "War and Peace",
    "The Catcher in the Rye",
    "The Hobbit",
    "Jane Eyre",
    "The Lord of the Rings",
    "Brave New World",
    "The Adventures of Huckleberry Finn",
    "Crime and Punishment",
    "Anna Karenina",
    "The Grapes of Wrath",
    "Wuthering Heights",
    "One Hundred Years of Solitude",
    "The Brothers Karamazov",
    "Catch-22",
    "The Picture of Dorian Gray",
  ],
  music: [
    "The Beatles",
    "The Rolling Stones",
    "Queen",
    "Led Zeppelin",
    "Pink Floyd",
    "The Who",
    "AC/DC",
    "Guns N' Roses",
    "Nirvana",
    "U2",
    "Radiohead",
    "Coldplay",
    "The Black Keys",
    "Arctic Monkeys",
    "The Strokes",
  ],
};

const hints = {
  movies: "Movie",
  books: "Book",
  music: "Music Band",
};

const topics = ["movies", "books", "music"];

const shrugman = new Shrugman(words, hints, topics);

let currentTopic = null;
let curerentWord = null;

function startGame(topic);{
shrugman.startGame(topic);
currentTopuc = topic;
currentWord = shrugman.getRandomWord;
displayWord();
}