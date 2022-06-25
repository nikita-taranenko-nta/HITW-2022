import {Assessment} from "./assessment";
import {LessonLearned} from "./lesson-learned";

export class ProjectAssessment {
  public projectAssessments: Assessment[];
  public comments: string;
  public lessonsLearned: LessonLearned[];
}
