import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {SummaryAction} from "../../models/summary-action";
import {Thema} from "../../models/thema";
import {ThemaResponse} from "../../models/thema-response";

@Injectable({
  providedIn: 'root'
})
export class ThemaService {

  constructor(private readonly http: HttpClient) {
  }

  public getQuestionnaire(): Observable<Thema[]> {
    return this.http.get<Thema[]>(environment.apiUrl + '/questionnaire');
  }

  public putThemaResponse(themeId: string, themaResponse: ThemaResponse): Observable<string> {
    return this.http.put<string>(environment.apiUrl + `/themes/${themeId}`, themaResponse);
  }

  public putThemeSummaryActions(themeId: string, summaryActions: SummaryAction[]): Observable<string> {
    return this.http.put<string>(environment.apiUrl + `/themes/${themeId}/summaryactions`, summaryActions);
  }
}
