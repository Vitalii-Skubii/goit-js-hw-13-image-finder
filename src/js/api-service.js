import {error} from './pnotify'
export default {
    searchQuery: '',
    currentPage: 1,
    fetchImg() {
        const token = '19947316-dacc226b3a8c6b348c54c2ce4';
        const pageNumber = 12;
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.currentPage}&per_page=${pageNumber}&key=${token}`;
    
        return fetch(url).then(res => res.json()).then(({ hits }) => {
            this.incrementPage();
            return hits;
        });
            
        
    },
    resetCurrentPage() {
        this.currentPage = 1;
    },
    incrementPage() {
        this.currentPage += 1;
    },
    get query() {
        return this.searchQuery;
    },
    set query(value) {
        return this.searchQuery = value;
    },

};