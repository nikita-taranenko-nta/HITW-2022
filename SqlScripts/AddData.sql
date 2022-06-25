USE hitw;

INSERT INTO Person (FirstName, LastName)
VALUES ('testname', 'testlastname');
INSERT INTO Person (FirstName, LastName)
VALUES ('boer jos', 'lol i need a lastname');

INSERT INTO Project (Name, PersonId)
VALUES ('testproject', 1);
INSERT INTO project (Name, PersonId)
VALUES ('boer jos zijn varkensstal', 2);

INSERT INTO Theme (Name)
VALUES ('my little theme name');
INSERT INTO Theme (Name)
VALUES ('my little theme name 2: the themening');

INSERT INTO Question (Name,Data,ThemeId)
VALUES ('flying speed bird coconuts please?', 'flying speed bird coconuts please?', 1);
INSERT INTO Question (Name,Data,ThemeId)
VALUES ('Do you feel lucky?', 'Do you feel lucky?', 2);

INSERT INTO ThemeScore (ThemeId,ProjectId,Score)
VALUES (1, 1, 2);
INSERT INTO ThemeScore (ThemeId,ProjectId,Score)
VALUES (2, 1, 3);
INSERT INTO ThemeScore (ThemeId,ProjectId,Score)
VALUES (1, 2, 4);
INSERT INTO ThemeScore (ThemeId,ProjectId,Score)
VALUES (2, 2, 0);

INSERT INTO Answer (Data,ThemeScoreId,QuestionId)
VALUES ('Nikiti has a dirty hat', 1, 1);
INSERT INTO Answer (Data,ThemeScoreId,QuestionId)
VALUES ('thx thomas for the beerz', 1, 2);
INSERT INTO Answer (Data,ThemeScoreId,QuestionId)
VALUES ('we all love c# and strongly dislike java', 2, 1);
INSERT INTO Answer (Data,ThemeScoreId,QuestionId)
VALUES ('i have no more inspiration', 2, 2);

--todo add submission and commitment