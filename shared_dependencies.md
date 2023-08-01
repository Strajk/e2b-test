Shared Dependencies:

1. **Exported Variables**: 
   - `Crawler` from `crawler.ts`
   - `Bike` from `bike.ts`
   - `handlePagination` from `paginationHandler.ts`
   - `handleDynamicContent` from `dynamicContentHandler.ts`
   - `storeData` from `dataStorage.ts`

2. **Data Schemas**: 
   - `BikeSchema` in `bike.ts` which will define the structure of the bike data to be scraped.

3. **DOM Element IDs**: 
   - `bike-list` for the list of bikes on the webpage
   - `pagination` for the pagination element on the webpage
   - `bike-name`, `bike-price` for the individual bike details on the webpage

4. **Message Names**: 
   - `ScrapeComplete` for the event when scraping is completed
   - `PageChange` for the event when the page is changed during pagination
   - `DataStored` for the event when scraped data is stored

5. **Function Names**: 
   - `startCrawling` in `main.ts` to start the web scraping process
   - `extractBikeData` in `crawler.ts` to extract bike data from the webpage
   - `handlePagination` in `paginationHandler.ts` to handle pagination on the webpage
   - `handleDynamicContent` in `dynamicContentHandler.ts` to handle dynamic content on the webpage
   - `storeData` in `dataStorage.ts` to store the scraped data in JSON format.