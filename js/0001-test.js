export const test = () => {
    
    const p = document.createElement('p');
    p.textContent = "Hello, world!"

    const htmlBody = document.querySelector('body').appendChild(p);

};