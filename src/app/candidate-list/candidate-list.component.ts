import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from '../candidate.service';
import { Candidate } from './../candidate';
import * as XLSX from 'xlsx'
@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
candidates: Candidate[] = [];

fileName= 'Candidate.xlsx';
   candidate = [
  {
       "recId": 1,
        "candidateNo": 111111,
        "candidateName": "Bob",
        "score": 99,
        "rank": 2,
        "updateDate": "14/02/2024 19:00:00"
    },
    {
        "recId": 2,
        "candidateNo": 111112,
        "candidateName": "Raj",
        "score": 45,
        "rank": 9,
        "updateDate": "15/02/2024 19:00:00"
    },
    {
        "recId": 3,
        "candidateNo": 111113,
        "candidateName": "Anuj",
        "score": 57,
        "rank": 8,
        "updateDate": "16/02/2024 19:00:00"
    }

  ]

  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }

  


  constructor(private candidateService:CandidateService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCandidates();
  }

  private getCandidates(){
    this.candidateService.getCandidatesList().subscribe(data => {
      this.candidates = data;
    });
}
candidateDetails(id: number){
    this.router.navigate(['candidate-details', id]);
  }

  }
