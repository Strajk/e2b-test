import { Crawler } from '../crawler';

export async function handleDynamicContent(crawler: Crawler): Promise<void> {
    try {
        await crawler.page.waitForNavigation({ waitUntil: 'networkidle0' });
    } catch (error) {
        console.error('Error handling dynamic content:', error);
    }
}