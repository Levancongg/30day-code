// Gallery functionality
class ImageGallery {
    constructor() {
        this.currentIndex = 0;
        this.images = [
            'asset/1.jpg',
            'asset/2.jpg', 
            'asset/3.jpg',
            'asset/4.jpg',
            'asset/5.jpg',
            'asset/6.jpg',
            'asset/7.jpg',
            'asset/8.jpg'
        ];
        
        this.init();
    }
    
    init() {
        // Get DOM elements
        this.gallery = document.querySelector('.gallery');
        this.galleryInner = document.querySelector('.gallery_inner img');
        this.closeBtn = document.querySelector('.gallery button');
        this.prevBtn = document.querySelector('.control_prev');
        this.nextBtn = document.querySelector('.control_next');
        this.imageElements = document.querySelectorAll('.image img');
        
        // Add event listeners
        this.addEventListeners();
    }
    
    addEventListeners() {
        // Click on images to open gallery
        this.imageElements.forEach((img, index) => {
            img.addEventListener('click', () => {
                this.openGallery(index);
            });
        });
        
        // Close gallery
        this.closeBtn.addEventListener('click', () => {
            this.closeGallery();
        });
        
        // Navigation buttons
        this.prevBtn.addEventListener('click', () => {
            this.prevImage();
        });
        
        this.nextBtn.addEventListener('click', () => {
            this.nextImage();
        });
        
        // Close gallery when clicking outside the image
        this.gallery.addEventListener('click', (e) => {
            if (e.target === this.gallery) {
                this.closeGallery();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.gallery.classList.contains('show')) return;
            
            switch(e.key) {
                case 'Escape':
                    this.closeGallery();
                    break;
                case 'ArrowLeft':
                    this.prevImage();
                    break;
                case 'ArrowRight':
                    this.nextImage();
                    break;
            }
        });
    }
    
    openGallery(index) {
        this.currentIndex = index;
        this.updateGalleryImage();
        this.gallery.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    closeGallery() {
        this.gallery.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    prevImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateGalleryImage();
    }
    
    nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateGalleryImage();
    }
    
    updateGalleryImage() {
        this.galleryInner.src = this.images[this.currentIndex];
        this.galleryInner.alt = `Gallery image ${this.currentIndex + 1}`;
    }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ImageGallery();
});
