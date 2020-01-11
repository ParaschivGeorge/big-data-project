import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BitcoinData} from '../models/bitcoin-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getBitcoinData(): Observable<BitcoinData[]> {
    return this.http.get<BitcoinData[]>('/assets/bitcoin.json');
  }
}
