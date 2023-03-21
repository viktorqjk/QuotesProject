
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

function newQuote() {
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  if (!quote.author) {
    authorText.textContent = 'Unkown';
  } else {
    authorText.textContent = quote.author;
  if (quote.text.length > 70) {
    quoteText.classList.add('long-quote');

  }else { quoteText.classList.remove('long-quote');

  }
  quoteText.textContent = quote.text;
}
}

newQuoteBtn.addEventListener('click', newQuote);

function tweetQuote () {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}
twitterBtn.addEventListener('click', tweetQuote);