import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {QuestionAnswer} from "../../models/question-answer";
import {CapacityAndNeed} from "../../models/capacity-and-need";
import {SummaryAction} from "../../models/summary-action";
import {Thema} from "../../models/thema";

@Injectable({
  providedIn: 'root'
})
export class ThemaService {

  constructor(private readonly http: HttpClient) {
  }

  public getQuestionnaire(): Observable<Thema[]> {
    return this.http.get<Thema[]>(environment.apiUrl + '/questionnaire');
  }

  public putThemeQuestionAnswers(themeId: string, questionAnswers: QuestionAnswer[]): Observable<string> {
    return this.http.put<string>(environment.apiUrl + `/themes/${themeId}`, questionAnswers);
  }

  public putThemeCapacityAndNeed(themeId: string, capacityAndNeeds: CapacityAndNeed[]): Observable<string> {
    return this.http.put<string>(environment.apiUrl + `/themes/${themeId}`, capacityAndNeeds);
  }

  public putThemeSummaryActions(themeId: string, summaryActions: SummaryAction[]): Observable<string> {
    return this.http.put<string>(environment.apiUrl + `/themes/${themeId}/summaryactions`, summaryActions);
  }
}
