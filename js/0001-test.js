export const test = () => {
    
    const a = document.createElement('a');
    a.href = 'https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript';
    a.textContent = 'my last not resolved chellenge';
    a.style.display = 'block';
    a.style.paddingTop = '30px';

    const htmlBody = document.querySelector('body').appendChild(a);

};