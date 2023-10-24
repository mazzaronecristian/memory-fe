import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameDTO } from '../models/gameDTO';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiListResponse } from '../models/api-list-response.model';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  constructor(private http: HttpClient) {}

  public getResults(): Observable<ApiListResponse<GameDTO>> {
    return this.http.get<ApiListResponse<GameDTO>>(
      `${environment.servicesUrl}api/Game`
    );
  }
}
