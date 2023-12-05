export const bookCategories = [
    "Fiction",
    "Non-fiction",
    "Mystery/Thriller",
    "Science Fiction (Sci-Fi)",
    "Fantasy",
    "Romance",
    "Biography",
    "Philosophy",
    "Science",
    "History",
    "Travel",
    "Horror",
    "Comedy",
    "Drama",
    "Mystery",
    "Graphic Novels/Comics",
    "Adventure",
    "Crime",
];


export const getRandomCategories = (count) => {
    const shuffled = bookCategories.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

