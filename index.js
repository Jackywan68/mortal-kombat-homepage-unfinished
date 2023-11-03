const faders = document.querySelectorAll('.fade-in');

const appearOptions ={};


const appearOnScroll = new IntersectionObserver(function(entries, apperOnScroll) {
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return
      }
      else{
        document.querySelectorAll(".fade-in").classList.add('show');
      }
    })
}, appearOptions)

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

