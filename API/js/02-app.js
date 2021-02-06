document.addEventListener('DOMcontentLoaded0', () => {
    const observer = new IntersectionObserver( entries => {
    console.log(entries[0]);
    } );
      
    observer.observe(document.querySelector('.premium'));
    
    });