USE hitw;

INSERT INTO person (name, lastname)
VALUES ('testname', 'testlastname');
INSERT INTO person (name, lastname)
VALUES ('boer jos', 'lol i need a lastname');

INSERT INTO project (project_name, person_id)
VALUES ('testproject', 1);
INSERT INTO project (project_name, person_id)
VALUES ('boer jos zijn varkensstal', 2);

INSERT INTO theme (theme_name)
VALUES ('my little theme name');
INSERT INTO theme (theme_name)
VALUES ('my little theme name 2: the themening');

INSERT INTO question (question_name,question_string,theme_id)
VALUES ('flying speed bird coconuts please?', 'flying speed bird coconuts please?', 1);
INSERT INTO question (question_name,question_string,theme_id)
VALUES ('Do you feel lucky?', 'Do you feel lucky?', 2);

INSERT INTO theme_score (theme_id,project_id,score)
VALUES (1, 1, 2);
INSERT INTO theme_score (theme_id,project_id,score)
VALUES (2, 1, 3);
INSERT INTO theme_score (theme_id,project_id,score)
VALUES (1, 2, 4);
INSERT INTO theme_score (theme_id,project_id,score)
VALUES (2, 2, 0);

INSERT INTO answer (answer_string,theme_score_id,question_id)
VALUES ('Nikiti has a dirty hat', 1, 1);
INSERT INTO answer (answer_string,theme_score_id,question_id)
VALUES ('thx thomas for the beerz', 1, 2);
INSERT INTO answer (answer_string,theme_score_id,question_id)
VALUES ('we all love c# and strongly dislike java', 2, 1);
INSERT INTO answer (answer_string,theme_score_id,question_id)
VALUES ('i have no more inspiration', 2, 2);

--todo add submission and commitment