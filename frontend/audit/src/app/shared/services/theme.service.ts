import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import SummaryAction from "../../models/summaryaction";
import QuestionAnswer from "../../models/questionanswer";
import CapacityAndNeed from "../../models/capacityandneed";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private readonly http: HttpClient) {
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
