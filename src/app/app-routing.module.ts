import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';

const routes: Routes = [{path: 'candidate-list', component: CandidateListComponent},
  {path: 'create-candidate', component: CreateCandidateComponent},
  {path: '', redirectTo: 'candidates', pathMatch: 'full'},
  {path: 'candidate-details/:id', component: CandidateDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
