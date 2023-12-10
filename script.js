document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("image-container");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const captionText = document.getElementById("caption");
    const closeModalButton = document.getElementById("close-modal");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");
    const totalImages = 78;
    let currentImageIndex = 0;

    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement("img");
        img.src = `${i}.jpg`; 
        img.alt = `Programming Language ${i}`;
        img.addEventListener("click", function () {
            currentImageIndex = i - 1; 
            openModal();
        });
        imageContainer.appendChild(img);
    }

    function openModal() {
        modal.style.display = "block";
        updateModalContent();
    }

    function updateModalContent() {
        modalImage.src = `${currentImageIndex + 1}.jpg`;
        captionText.innerHTML = `${currentImageIndex + 1} / ${totalImages} - ${modalImage.alt}`;
    }

    function closeModal() {
        modal.style.display = "none";
    }

    closeModalButton.addEventListener("click", closeModal);

    window.addEventListener("click", function (event) {
       
        if (event.target === modal) {
            closeModal();
        }
    });

    prevButton.addEventListener("click", function () {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        updateModalContent();
    });

    nextButton.addEventListener("click", function () {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        updateModalContent();
    });
});
// loader
