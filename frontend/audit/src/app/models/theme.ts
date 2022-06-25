import {Question} from "./question";
import { Score } from "./Score";

export class theme {
  public id: string;
  public name: string;
  public questions: Question[];
  public scoreOverview: Score[];
}