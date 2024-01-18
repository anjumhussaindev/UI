const navLinks = [
    { text: 'Home', url: '' },
    { text: 'Product', url: '' },
    { text: 'Pricing', url: '' },
    { text: 'Contact', url: '' }
];

const displayLinks = (links, containerId) => {
    const container = document.getElementById(containerId);


    links.forEach(link => {
        const a = document.createElement('a');
        a.textContent = link.text;
        a.href = link.url;
        container.appendChild(a);
    });
}

document.addEventListener('DOMContentLoaded', ()=> {
    displayLinks(navLinks, 'links');
});