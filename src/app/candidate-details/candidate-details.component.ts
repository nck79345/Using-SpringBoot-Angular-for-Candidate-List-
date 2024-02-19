import { Component, OnInit } from '@angular/core';
;
import { ActivatedRoute } from '@angular/router';
import { Candidate } from './../candidate';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit  {
  recId!: number;
  candidate!: Candidate;
  constructor(private route: ActivatedRoute, private candidateService:CandidateService) { }

  ngOnInit(): void {
    this.recId= this.route.snapshot.params['id'];

    this.candidate = new Candidate();
    this.candidateService.getCandidateById(this.recId).subscribe( data => {
      this.candidate = data;
    });

 }


}

