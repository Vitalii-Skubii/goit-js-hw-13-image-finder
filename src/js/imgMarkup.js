import galleryItems from '../templates/galleryItems.hbs';
const refs={  addGalleryItems: document.querySelector('.gallery'),}
function renderImg(hits)
{   
    const markUp = galleryItems(hits);
    refs.addGalleryItems.insertAdjacentHTML('beforeend', markUp);
    
};
export default renderImg;
