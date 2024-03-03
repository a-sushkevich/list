// https://www.iban.com/currency-codes
// JSON.stringify(Array.from(document.querySelectorAll('tr')).map(item => item.children).map(item => ({ country: item[0].innerHTML, currency: item[1].innerHTML, code: item[2].innerHTML })));
import { JSDOM } from 'jsdom';

async function parse() {
    try {
        const response = await fetch('https://www.iban.com/currency-codes');
        return await response.text()
    } catch (error) {
        console.log(error)
    }
}

const html = await parse();
const dom  = new JSDOM(html);
const rows = dom.window.document.querySelectorAll('tr');

export const list = Array.from(rows).map(item => item.children).map(item => ({ country: item[0].innerHTML, currency: item[1].innerHTML, code: item[2].innerHTML }));
