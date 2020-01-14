import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BitcoinData} from '../models/bitcoin-data';
import {LitecoinData} from '../models/litecoin-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getBitcoinData(): Observable<BitcoinData[]> {
    return this.http.get<BitcoinData[]>('/assets/bitcoin.json');
  }

  getLitecoinData(): Observable<LitecoinData[]> {
    return this.http.get<LitecoinData[]>('/assets/litecoin.json');
  }
}
