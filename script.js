let tweet = document.querySelector('#tweet');
let tweet2 = document.querySelector('#tweet2');
tweet.addEventListener('click', function() {
    let message = `I'm publicly committing to the 151daysofcode challenge by @neogcamp. Join and learn with me 👇
    https://151daysofcode.netlify.app/`;
    
    let twitterUrl = `https://twitter.com/intent/tweet?text=${message}`;
    window.open(twitterUrl, '_blank');
});

tweet2.addEventListener('click', function() {
    let message = `I'm publicly committing to the 151daysofcode challenge by @neogcamp. Join and learn with me 👇
    https://151daysofcode.netlify.app/`;
    
    let twitterUrl = `https://twitter.com/intent/tweet?text=${message}`;
    window.open(twitterUrl, '_blank');
});

// I'm publicly committing to the &#x23;151daysofcode challenge by @neogcamp.
//     Join and learn with me 👇
//     https://neog.camp/;
//     #151daysofcode #neogcamp


  // data-text="I&#39;m publicly committing to the #151daysofcode challenge by @neogcamp.&#13;&#13;Learn more and join me 👇&#13;"
  //     data-url="https://151daysofcode.netlify.app/&#13;&#13;"
  //     data-hashtags="151daysofcode #neogcamp"
  //     data-lang="en"
  //     data-show-count="false"

      // href="https://twitter.com/share?ref_src=twsrc%5Etfw"