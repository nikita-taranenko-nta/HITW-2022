import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {SummaryAction} from "../../models/summary-action";
import {theme} from "../../models/theme";
import {themeResponse} from "../../models/theme-response";

@Injectable({
  providedIn: 'root'
})
export class themeService {

  constructor(private readonly http: HttpClient) {
  }

  public getQuestionnaire(): Observable<theme[]> {
    return this.http.get<theme[]>(environment.apiUrl + '/questionnaire');
  }

  public putthemeResponse(themeId: string, themeResponse: themeResponse): Observable<string> {
    return this.http.put<string>(environment.apiUrl + `/themes/${themeId}`, themeResponse);
  }

  public putThemeSummaryActions(themeId: string, summaryActions: SummaryAction[]): Observable<string> {
    return this.http.put<string>(environment.apiUrl + `/themes/${themeId}/summaryactions`, summaryActions);
  }
}
