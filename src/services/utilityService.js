import generate from 'nanoid/generate';
import url from 'nanoid/url';

export function generateShortId() {
    return generate(url, 10);
}
