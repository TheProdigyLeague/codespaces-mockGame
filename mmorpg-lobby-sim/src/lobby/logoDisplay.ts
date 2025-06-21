export function displayLogo(): void {
    const logo = document.createElement('img');
    logo.src = 'corporate-logo-studios.gif';
    logo.alt = 'Company Logo';
    logo.style.position = 'absolute';
    logo.style.top = '50%';
    logo.style.left = '50%';
    logo.style.transform = 'translate(-50%, -50%)';
    logo.style.animation = 'fadeIn 2s, fadeOut 2s 3s forwards';
    
    document.body.appendChild(logo);

    setTimeout(() => {
        document.body.removeChild(logo);
    }, 7000); // Remove logo after 7 seconds
}