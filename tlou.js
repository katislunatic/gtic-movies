// tlou.js
const tlouEpisodes = [
  { 
    title: "The Last of Us S1E1", 
    rating: "TV-MA", 
    desc: "Joel and Ellie meet amidst chaos.", 
    category: "Action", 
    img: "https://upload.wikimedia.org/wikipedia/en/c/c3/The_Last_of_Us_Season_1.jpg", 
    link: "https://example.com/tlou/s1e1" 
  },
  { 
    title: "The Last of Us S1E2", 
    rating: "TV-MA", 
    desc: "A journey through the infected world continues.", 
    category: "Action", 
    img: "https://upload.wikimedia.org/wikipedia/en/c/c3/The_Last_of_Us_Season_1.jpg", 
    link: "https://example.com/tlou/s1e2" 
  },
  { 
    title: "The Last of Us S1E3", 
    rating: "TV-MA", 
    desc: "Long, Long Time — a story of love and survival.", 
    category: "Action", 
    img: "https://upload.wikimedia.org/wikipedia/en/c/c3/The_Last_of_Us_Season_1.jpg", 
    link: "https://example.com/tlou/s1e3" 
  }
];

// Merge with main movies array
movies.push(...tlouEpisodes);
renderList(getFiltered());
