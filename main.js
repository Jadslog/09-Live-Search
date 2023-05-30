let allPosts = [
  {
    title: "5 Tips for Boosting Productivity in the Workplace",
  },
  {
    title: "The Ultimate Guide to Healthy Eating on a Budget",
  },
  {
    title: "Mastering Time Management: A Step-by-Step Approach",
  },
  {
    title: "The Art of Effective Communication: Key Strategies for Success",
  },
  {
    title: "Unlocking Creativity: How to Overcome Writer's Block",
  },
  {
    title: "Demystifying SEO: A Beginner's Guide to Search Engine Optimization",
  },
  {
    title:
      "The Power of Positive Thinking: Transforming Your Mindset for Success",
  },
];


const searchIcon = document.querySelector("header.main-header .search-icon");
const searchResults = document.querySelector("header.main-header .search-results");
const searchInput = document.querySelector(".search-results .search-input");

let filteredPosts

searchIcon.addEventListener ("click", () => {
    searchResults.classList.toggle("active");
});

searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();

    if (query )
});