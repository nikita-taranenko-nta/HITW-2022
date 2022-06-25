DROP DATABASE IF EXISTS hitw;

CREATE DATABASE hitw;

GO

USE hitw;

-- Create the tables here
CREATE TABLE Person (Id INT IDENTITY PRIMARY KEY,
 LastName VARCHAR(50),
 FirstName VARCHAR(50));

CREATE TABLE Project (Id INT IDENTITY PRIMARY KEY,
 Name VARCHAR(50),
 PersonId INT,
 ProductiveUnit VARCHAR(50),
 Country VARCHAR(50),
 Region VARCHAR(50),
 Municipality VARCHAR(50),
 ProducerId INT,
 ContactDetails VARCHAR(MAX),
 ConfidentialInformation VARCHAR(MAX),
 TermsOfUseComment VARCHAR(MAX),
 ProducerLesson VARCHAR(MAX),
 TeamLesson VARCHAR(MAX),
		CONSTRAINT FK_Person_Project
		FOREIGN KEY (PersonId)
			REFERENCES Person(Id),
		CONSTRAINT FK_Producer
		FOREIGN KEY (ProducerId)
			REFERENCES Person(Id));
			
CREATE TABLE TermsOfUseQuestion(Id INT IDENTITY PRIMARY KEY,
	Data VARCHAR(100))
	
CREATE TABLE TermsOfUseAnswer(Id INT IDENTITY PRIMARY KEY,
	Data VARCHAR(100),
	TermsOfUseQuestionId INT,
		CONSTRAINT FK_TermsOfUseAnswerQuestion
		FOREIGN KEY (TermsOfUseQuestionId)
			REFERENCES TermsOfUseQuestion(Id))
			
CREATE TABLE ProjectTermsOfUseAnswer(Id INT IDENTITY PRIMARY KEY,
	Data VARCHAR(100),
	TermsOfUseQuestionId INT,
	TermsOfUseAnswerId INT,
	ProjectId INT,
		CONSTRAINT FK_Project
		FOREIGN KEY (ProjectId)
			REFERENCES Project(Id),
		CONSTRAINT FK_ProjectTermsOfUseQuestion
		FOREIGN KEY (TermsOfUseQuestionId)
			REFERENCES TermsOfUseQuestion(Id),			
		CONSTRAINT FK_TermsOfUseAnswer
		FOREIGN KEY (TermsOfUseAnswerId)
			REFERENCES TermsOfUseAnswer(Id))

CREATE TABLE Theme (Id INT IDENTITY PRIMARY KEY, Name VARCHAR(50));

CREATE TABLE Question (Id INT IDENTITY PRIMARY KEY, Name VARCHAR(50), Data VARCHAR(500), ThemeId INT,
		CONSTRAINT FK_Theme_Question
		FOREIGN KEY (ThemeId)
			REFERENCES Theme(Id));

CREATE TABLE ThemeScore (Id INT IDENTITY PRIMARY KEY,
 	ThemeId INT,
	ProjectId INT,
  	Score INT,
  	Comment VARCHAR(MAX),
		CONSTRAINT FK_Project_ThemeScore
		FOREIGN KEY (ProjectId)
			REFERENCES Project(Id),
		CONSTRAINT FK_Theme_ThemeScore
		FOREIGN KEY (ThemeId)
			REFERENCES Theme(Id));
						
CREATE TABLE Action (Id INT IDENTITY PRIMARY KEY,
	Data VARCHAR(500),
	Actor VARCHAR(50),
	ThemeScoreId INT,
		CONSTRAINT FK_ThemeScoreAction
		FOREIGN KEY (ThemeScoreId)
			REFERENCES ThemeScore(Id));

CREATE TABLE Answer (Id INT IDENTITY PRIMARY KEY,
 Data VARCHAR(500),
 ThemeScoreId INT,
 QuestionId INT,
		CONSTRAINT FK_Question
		FOREIGN KEY (QuestionId)
			REFERENCES Question(Id),
		CONSTRAINT FK_ThemeScoreAnswer
		FOREIGN KEY (ThemeScoreId)
			REFERENCES ThemeScore(Id));

CREATE TABLE CapAndNeed (Id INT IDENTITY PRIMARY KEY,
 Actor VARCHAR(50),
 SupportType VARCHAR(50),
 CapTheme VARCHAR(50),
 PeopleInvolved VARCHAR(50),
 WaysItHelped VARCHAR(500),
 ThemeScoreId INT,
		CONSTRAINT FK_ThemeScoreCapAndNeed
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
