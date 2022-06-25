import {QuestionAnswer} from "./question-answer";
import {CapacityAndNeed} from "./capacity-and-need";

export class themeResponse {
  public questionAnswers: QuestionAnswer[] | CapacityAndNeed[];
  public totalScore: number;
  public freeTextField: string;
}
