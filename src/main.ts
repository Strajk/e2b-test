```typescript
import { Crawler } from './crawler';
import { handlePagination } from './utils/paginationHandler';
import { handleDynamicContent } from './utils/dynamicContentHandler';
import { storeData } from './utils/dataStorage';

async function startCrawling() {
    const crawler = new Crawler('https://www.canyon.com/');
    let currentPage = 1;
    let hasNextPage = true;

    while (hasNextPage) {
        const pageContent = await crawler.fetchPageContent(currentPage);
        const dynamicContent = handleDynamicContent(pageContent);
        const bikes = crawler.extractBikeData(dynamicContent);

        storeData(bikes);

        hasNextPage = handlePagination(pageContent);
        if (hasNextPage) currentPage++;
    }

    console.log('ScrapeComplete');
}

startCrawling();
```