// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
//var sticky = header.offsetTop;
var sticky = 400;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
   header.classList.remove("hidden");
   header.classList.add("sticky");
   
  } else {
   // header.classList.remove("sticky");
   header.classList.add("hidden");
   
  }
}

document.body.onclick = (event) => {
   const elem = event.target;
   if (elem.classList.contains('payment-description_copy')){
      var copy = document.getElementById("copy");
      console.log(elem);
      navigator.clipboard.writeText(elem.innerHTML)
      
      .then(() => {
         copy.classList.add("copy_active");
         setTimeout(() => {
            copy.classList.remove("copy_active");
         }, "1000")
      })
      .catch(err => {
         console.log(err);
      })
   }
  
}


// Get all share buttons
const shareButtons = document.querySelectorAll('.share-button');

// Add click event listener to each button
shareButtons.forEach(button => {
   button.addEventListener('click', () => {
      // Get the URL of the current page
      const url = window.location.href;

      // Get the social media platform from the button's class name
      const platform = button.classList[1];

      // Set the URL to share based on the social media platform
      let shareUrl;
      switch (platform) {
         case 'facebook':
         shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
         break;
         case 'twitter':
         shareUrl = `https://twitter.com/share?url=${encodeURIComponent(url)}`;
         break;
         case 'linkedin':
         shareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}`;
         break;
         case 'pinterest':
         shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}`;
         break;
         case 'reddit':
         shareUrl = `https://reddit.com/submit?url=${encodeURIComponent(url)}`;
         break;
         case 'whatsapp':
         shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
         break;
      }

      // Open a new window to share the URL
      window.open(shareUrl, '_blank');
   });
});
