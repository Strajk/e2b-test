```typescript
import { Crawlee, ICrawleeOptions, ICrawleeResult } from 'crawlee';
import { Bike } from './bike';
import { handlePagination } from './utils/paginationHandler';
import { handleDynamicContent } from './utils/dynamicContentHandler';

export class Crawler {
  private crawlee: Crawlee;

  constructor() {
    const options: ICrawleeOptions = {
      url: 'https://www.canyon.com/',
      dynamicContent: true,
      dynamicContentHandler: handleDynamicContent,
      pagination: true,
      paginationHandler: handlePagination,
    };

    this.crawlee = new Crawlee(options);
  }

  public async startCrawling(): Promise<Bike[]> {
    const result: ICrawleeResult = await this.crawlee.crawl();
    const bikes: Bike[] = this.extractBikeData(result);
    return bikes;
  }

  private extractBikeData(result: ICrawleeResult): Bike[] {
    const bikes: Bike[] = [];

    result.data.forEach((item) => {
      const bike = new Bike();
      bike.name = item['bike-name'];
      bike.price = item['bike-price'];
      bikes.push(bike);
    });

    return bikes;
  }
}
```