/**
 * Is Element in Viewport?
 * @param   {HTMLElement}
 * @return   {boolean}
 */
function isElementInViewport(element) {
   var rect = element.getBoundingClientRect();
   return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
}

function isBottomOutViewport(element) {
   var rect = element.getBoundingClientRect();
   return (
      rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)
   );
}

/**
 * Animate on scroll.
 * This is a function for scroll event.
 */
function animateOnScroll() {
   var innerHeight = window.innerHeight || document.documentElement.clientHeight;
   var elements = document.querySelectorAll('.show-in');
   for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      if (isElementInViewport(element) || innerHeight <= 300) {
         element.classList.add('scale-show');
      } else if (isBottomOutViewport(element)) {
         element.classList.add('scale-hide');
      }
   }
}

(function() {
   setTimeout(function() {
      animateOnScroll(); // To show the elements that are visibles in viewport once the page is loaded.
      window.addEventListener('scroll', animateOnScroll);
   }, 1000);
})();

(function(){
   // Allow the carousel.
   $(document).ready(function(){
      $('.carousel').carousel();
   });
})();
