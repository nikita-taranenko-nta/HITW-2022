import {TermsOfUseAnswerQuestion} from "../enums/terms-of-use-answer-question.enum";
import {TermsOfUseAnswerAnswer} from "../enums/terms-of-use-answer-answer.enum";

export class TermsOfUseAnswer {
  public question: TermsOfUseAnswerQuestion;
  public selectedAnswer?: TermsOfUseAnswerAnswer;
  public freeTextField: string;
}
