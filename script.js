let tweet = document.querySelector('#tweet');
tweet.addEventListener('click', function() {
    let message = `I'm publicly committing to the 151daysofcode challenge by @neogcamp. Join and learn with me 👇
    https://151daysofcode.netlify.app/`;
    
    let twitterUrl = `https://twitter.com/intent/tweet?text=${message}`;
    window.open(twitterUrl, '_blank');
});

// I'm publicly committing to the &#x23;151daysofcode challenge by @neogcamp.
//     Join and learn with me 👇
//     https://neog.camp/;
//     #151daysofcode #neogcamp