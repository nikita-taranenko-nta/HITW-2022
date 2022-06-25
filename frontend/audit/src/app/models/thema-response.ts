import {QuestionAnswer} from "./question-answer";
import {CapacityAndNeed} from "./capacity-and-need";

export class ThemaResponse {
  public questionAnswers: QuestionAnswer[] | CapacityAndNeed[];
  public totalScore: number;
  public freeTextField: string;
}
