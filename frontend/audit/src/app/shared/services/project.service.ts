import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Project} from "../../models/project";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {SummaryAction} from "../../models/summary-action";
import {LessonLearned} from "../../models/lesson-learned";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private readonly http: HttpClient) {
  }

  public postProject(project: Project): Observable<string> {
    return this.http.post<string>(environment.apiUrl + '/projects', project);
  }

  public getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(environment.apiUrl + '/projects');
  }

  public getProject(projectId: string): Observable<Project> {
    return this.http.get<Project>(environment.apiUrl + `/projects/${projectId}`);
  }

  public putProject(project: Project): Observable<string> {
    return this.http.put<string>(environment.apiUrl + `/projects/${project.id}`, project);
  }

  public deleteProject(projectId: string): Observable<string> {
    return this.http.delete<string>(environment.apiUrl + `/projects/${projectId}`);
  }

  public putSummaryAction(projectId: string, summaryAction: SummaryAction): Observable<string> {
    return this.http.put<string>(environment.apiUrl + `/projects/${projectId}/summaryactions`, summaryAction);
  }

  public putDiagnosisLessonsLearned(projectId: string, lessonsLearned: LessonLearned): Observable<string> {
    return this.http.put<string>(environment.apiUrl + `/projects/${projectId}/lessonslearned`, lessonsLearned);
  }

}
