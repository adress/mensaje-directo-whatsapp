const getValueFront = (id: string, htmlElment: string = 'input'): string | undefined => {
    if (htmlElment == 'input') {
        return (document.querySelector('#' + id) as HTMLInputElement | null)?.value;
    }
    else if (htmlElment == 'select') {
        return (document.querySelector('#' + id) as HTMLSelectElement | null)?.value;
    }
    else if (htmlElment == 'area') {
        return (document.querySelector('#' + id) as HTMLTextAreaElement | null)?.value;
    }
}


document.addEventListener('DOMContentLoaded', (event) => {
    const btnSend = document.querySelector('#sendMessageWA');
    btnSend?.addEventListener('click', () => {
        const typeWa = getValueFront('typeWa', 'select') || 'web';
        const countryCode = getValueFront('countryCodeWA', 'select');
        const phoneNumber = getValueFront('phoneNumberWA', 'input');
        const message = getValueFront('messageWA', 'area') || '';
        
        const options: { [key: string]: string } = { 'web': 'web.whatsapp.com', 'desktop': 'api.whatsapp.com' };
        window.open(`https://${options[typeWa]}/send/?phone=${countryCode}${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
    });
})
