import { Crawler } from '../crawler';

export async function handlePagination(crawler: Crawler): Promise<void> {
    const paginationElement = await crawler.getElement('#pagination');
    const pages = await paginationElement.getElements('.page');

    for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        const isActive = await page.getAttribute('class').includes('active');

        if (!isActive) {
            await page.click();
            crawler.emit('PageChange', i + 1);
            await crawler.waitUntilPageLoads();
        }
    }
}