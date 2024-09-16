document.addEventListener('DOMContentLoaded', function () {
  const quoteText = document.getElementById('quote');
  const quoteAuthor = document.getElementById('author');
  const newQuoteBtn = document.getElementById('new-quote');
  const shareQuoteBtn = document.getElementById('share-quote');
  const themeButtons = document.querySelectorAll('.theme-button');

  // Expanded list of quotes
  const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
  ];

  // Function to get a new random quote
  function getNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = `"${randomQuote.text}"`;
    quoteAuthor.textContent = randomQuote.author ? `- ${randomQuote.author}` : '- Unknown';
  }

  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Event listener for generating a new quote
  newQuoteBtn.addEventListener('click', getNewQuote);

  // Event listener for sharing the quote on Twitter
  shareQuoteBtn.addEventListener('click', function () {
    const quote = quoteText.textContent;
    const author = quoteAuthor.textContent;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)} ${encodeURIComponent(author)}`;
    window.open(tweetUrl, '_blank');
  });

  // Event listener for theme selection
  themeButtons.forEach(button => {
    button.addEventListener('click', function () {
      document.body.className = this.dataset.theme;
      if (this.dataset.theme === 'colorful') {
        document.querySelectorAll('#quote-box').forEach(element => {
          element.style.color = getRandomColor();
        });
      }
    });
  });

  // Generate the first quote
  getNewQuote();
});
