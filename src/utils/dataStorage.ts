import fs from 'fs';
import { Bike } from '../bike';

export function storeData(bikes: Bike[]): void {
    const data = JSON.stringify(bikes, null, 2);
    fs.writeFile('bikes.json', data, (err) => {
        if (err) {
            console.error('Error while storing data:', err);
            return;
        }
        console.log('Data stored successfully');
    });
}