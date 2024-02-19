import { Injectable } from '@angular/core';
import { Candidate } from './candidate';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private baseURL = "http://localhost:8095/api/v1/candidate";

  constructor(private httpClient: HttpClient) { }

  getCandidatesList(): Observable<Candidate[]>{
    return this.httpClient.get<Candidate[]>(`${this.baseURL}`);
  }

  createCandidate(candidate: Candidate): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, candidate);
  }

  getCandidateById(id: number): Observable<Candidate>{
    return this.httpClient.get<Candidate>(`${this.baseURL}/${id}`);
  }


}
