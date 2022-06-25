DROP DATABASE IF EXISTS hitw;

CREATE DATABASE hitw;

GO

USE hitw;

-- Create the tables here
CREATE TABLE Person (Id INT IDENTITY PRIMARY KEY, LastName VARCHAR(50), FirstName VARCHAR(50));

CREATE TABLE Project (Id INT IDENTITY PRIMARY KEY, Name VARCHAR(50), PersonId INT,
		CONSTRAINT FK_Person_Project
		FOREIGN KEY (PersonId)
			REFERENCES Person(Id));

CREATE TABLE Theme (Id INT IDENTITY PRIMARY KEY, Name VARCHAR(50));

CREATE TABLE Question (Id INT IDENTITY PRIMARY KEY, Name VARCHAR(50), Data VARCHAR(500), ThemeId INT,
		CONSTRAINT FK_Theme_Question
		FOREIGN KEY (ThemeId)
			REFERENCES Theme(Id));

CREATE TABLE ThemeScore (Id INT IDENTITY PRIMARY KEY, ThemeId INT, ProjectId INT, Score INT,
		CONSTRAINT FK_Project_ThemeScore
		FOREIGN KEY (ProjectId)
			REFERENCES Project(Id),
		CONSTRAINT FK_Theme_ThemeScore
		FOREIGN KEY (ThemeId)
			REFERENCES Theme(Id));

CREATE TABLE Answer (Id INT IDENTITY PRIMARY KEY, Data VARCHAR(500), ThemeScoreId INT, QuestionId INT,
		CONSTRAINT FK_Question_Answer
		FOREIGN KEY (QuestionId)
			REFERENCES Question(Id),
		CONSTRAINT FK_ThemeScore_Answer
		FOREIGN KEY (ThemeScoreId)
			REFERENCES ThemeScore(Id));

CREATE TABLE ProjectLessonLearned (Id INT IDENTITY PRIMARY KEY, Data VARCHAR(1000), IsProducer BIT, ProjectId INT,
		CONSTRAINT FK_Project_LessonLearned
		FOREIGN KEY (ProjectId)
			REFERENCES Project(Id));

CREATE TABLE ProjectCommitment (Id INT IDENTITY PRIMARY KEY, Comment VARCHAR(500), ProjectId INT,
		CONSTRAINT FK_Project_ProjectCommitment
		FOREIGN KEY (ProjectId)
			REFERENCES Project(Id));

CREATE TABLE Commitment (Id INT IDENTITY PRIMARY KEY, Description VARCHAR(500), TargetDate DATE, ProjectCommitmentId INT, IsProducer BIT,
		CONSTRAINT FK_ProjectCommitment_Commitment
		FOREIGN KEY (ProjectCommitmentId)
			REFERENCES ProjectCommitment(Id));

CREATE TABLE CommitmentContract (Id INT IDENTITY PRIMARY KEY, Contract VARBINARY(max), ProjectId INT,
		CONSTRAINT FK_Project_CommitmentContract
		FOREIGN KEY (ProjectId)
			REFERENCES Project(Id));

CREATE TABLE ProjectAssessment (Id INT IDENTITY PRIMARY KEY, Comment VARCHAR(500), ProjectId INT,
		CONSTRAINT FK_Project_ProjectAssessment
		FOREIGN KEY (ProjectId)
			REFERENCES Project(Id));

CREATE TABLE Assessment (Id INT IDENTITY PRIMARY KEY, ProgressAssessment INT, CreatedDate DATE, ProjectAssessmentId INT, IsProducer BIT,
		CONSTRAINT FK_ProjectAssessment_Assessment
		FOREIGN KEY (ProjectAssessmentId)
			REFERENCES ProjectAssessment(Id));
			
CREATE TABLE CommitmentAssessment (Id INT IDENTITY PRIMARY KEY, ActualResult VARCHAR(500), CreatedDate DATE, AssessmentId INT, CommitmentId INT,
		CONSTRAINT FK_Commitment_CommitmentAssessment
		FOREIGN KEY (CommitmentId)
			REFERENCES Commitment(Id),
		CONSTRAINT FK_Assessment_CommitmentAssessment
		FOREIGN KEY (AssessmentId)
			REFERENCES Assessment(Id));

CREATE TABLE ProjectAssessmentLessonLearned (Id INT IDENTITY PRIMARY KEY, Data VARCHAR(1000), IsProducer BIT, ProjectAssessmentId INT,
		CONSTRAINT FK_ProjectAssessment_LessonLearned
		FOREIGN KEY (ProjectAssessmentId)
			REFERENCES ProjectAssessment(Id));

CREATE TABLE Submission (Id INT IDENTITY PRIMARY KEY, Comment VARCHAR(500), Picture VARBINARY(max), CommitmentId INT,
		CONSTRAINT FK_Commitment_Submission
		FOREIGN KEY (CommitmentId)
			REFERENCES Commitment(Id));
