function showDetails(scale) {
    const details = document.getElementById('details');
    const description = document.getElementById('product-description');
    
    if (scale === 'scale1') {
        description.innerText = "This Digital Kitchen Scale is perfect for all your cooking needs, featuring precise measurements and a sleek design.";
    } else if (scale === 'scale2') {
        description.innerText = "Our Bathroom Scale offers a modern look and accurate readings, helping you track your health goals.";
    } else if (scale === 'scale3') {
        description.innerText = "The Postal Scale is compact and easy to use, perfect for weighing packages and ensuring accurate postage.";
    }

    details.classList.remove('hidden');
}

function closeDetails() {
    const details = document.getElementById('details');
    details.classList.add('hidden');
}
