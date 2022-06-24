

DROP DATABASE IF EXISTS hitw;

CREATE DATABASE hitw;

USE hitw;

-- Create the tables here
CREATE TABLE person (person_id INT IDENTITY PRIMARY KEY, name VARCHAR(50), lastname VARCHAR(50));

CREATE TABLE project (project_id INT IDENTITY PRIMARY KEY, project_name VARCHAR(50), person_id INT,
		CONSTRAINT fk_person
		FOREIGN KEY (person_id)
			REFERENCES person(person_id));

CREATE TABLE theme (theme_id INT IDENTITY PRIMARY KEY, theme_name VARCHAR(50));

CREATE TABLE question (question_id INT IDENTITY PRIMARY KEY, question_name VARCHAR(50), question_string VARCHAR(500), theme_id INT,
		CONSTRAINT fk_theme
		FOREIGN KEY (theme_id)
			REFERENCES theme(theme_id));

CREATE TABLE theme_score (theme_score_id INT IDENTITY PRIMARY KEY, theme_id INT, project_id INT, question_string VARCHAR(500),
		CONSTRAINT fk_project_theme_score
		FOREIGN KEY (project_id)
			REFERENCES project(project_id));

CREATE TABLE answer (answer_id INT IDENTITY PRIMARY KEY, answer_string VARCHAR(500), theme_score_id INT, question_id INT,
		CONSTRAINT fk_question
		FOREIGN KEY (question_id)
			REFERENCES question(question_id),
		CONSTRAINT fk_theme_score
		FOREIGN KEY (theme_score_id)
			REFERENCES theme_score(theme_score_id));

CREATE TABLE commitment (commitment_id INT IDENTITY PRIMARY KEY, description VARCHAR(500), target_date DATE, project_id INT,
		CONSTRAINT fk_project_commitment
		FOREIGN KEY (project_id)
			REFERENCES project(project_id));

CREATE TABLE submission (submission_id INT IDENTITY PRIMARY KEY, comment VARCHAR(500), picture VARBINARY(max), commitment_id INT,
		CONSTRAINT fk_commitment
		FOREIGN KEY (commitment_id)
			REFERENCES commitment(commitment_id));