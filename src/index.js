import './styles.css';
import refs from './js/refs';
import API from './js/api-service';
import renderImg from './js/imgMarkup';
import { error } from './js/pnotify';


refs.formInput.addEventListener('submit', event => {
    event.preventDefault();
    API.query = event.currentTarget.elements.query.value;
    refs.addGalleryItems.innerHTML = '';
    event.currentTarget.reset();

    API.resetCurrentPage();
    fetchAPI();
    // refs.loadMoreBtn.classList.add('is-hidden');
    // API.fetchImg().then(hits => {
    //     renderImg(hits);
    //     refs.loadMoreBtn.classList.remove('is-hidden')
        
    // });
   
});

refs.loadMoreBtn.addEventListener('click', fetchAPI);

//     () => {
//         API.fetchImg().then(hits => {
//         renderImg(hits);
        
//     });
// });
    
function fetchAPI() {
    
    refs.loadMoreBtn.classList.add('is-hidden');
    API.fetchImg().then(hits => {
        
        if (hits.length===0) {
            error({
                delay: 1000,
                title: 'Img not found!',
                text: 'Try another query',
            });
            return;
        }
        
        renderImg(hits);
        // if (!renderImg(hits)) { 
        //     error({
        //     delay: 1000,
        //     text: 'Img not found!',
        //     })
            
        // }
        refs.loadMoreBtn.classList.remove('is-hidden');
        window.scrollTo({
            top: document.documentElement.scrollHeight,
                behavior: 'smooth',
        });
        }
                       
        
    );
    
}