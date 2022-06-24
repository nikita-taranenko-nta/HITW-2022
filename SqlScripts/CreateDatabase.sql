DROP DATABASE IF EXISTS hitw;

CREATE DATABASE hitw;

USE hitw;

# Create the tables here
CREATE TABLE user (user_id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), lastname VARCHAR(50));

CREATE TABLE project (project_id INT AUTO_INCREMENT PRIMARY KEY, project_name VARCHAR(50), user_id INT,
		CONSTRAINT fk_user
		FOREIGN KEY (user_id)
			REFERENCES user(user_id));

CREATE TABLE theme (theme_id INT AUTO_INCREMENT PRIMARY KEY, theme_name VARCHAR(50));

CREATE TABLE question (question_id INT AUTO_INCREMENT PRIMARY KEY, question_name VARCHAR(50), question_string VARCHAR(500), theme_id INT,
		CONSTRAINT fk_theme
		FOREIGN KEY (theme_id)
			REFERENCES theme(theme_id));

CREATE TABLE theme_score (theme_score_id INT AUTO_INCREMENT PRIMARY KEY, theme_id INT, project_id INT, question_string VARCHAR(500),
		CONSTRAINT fk_project_theme_score
		FOREIGN KEY (project_id)
			REFERENCES project(project_id));

CREATE TABLE answer (answer_id INT AUTO_INCREMENT PRIMARY KEY, answer_string VARCHAR(500), theme_score_id INT, question_id INT,
		CONSTRAINT fk_question
		FOREIGN KEY (question_id)
			REFERENCES question(question_id),
		CONSTRAINT fk_theme_score
		FOREIGN KEY (theme_score_id)
			REFERENCES theme_score(theme_score_id));

CREATE TABLE commitment (commitment_id INT AUTO_INCREMENT PRIMARY KEY, description VARCHAR(500), target_date DATE, project_id INT,
		CONSTRAINT fk_project_commitment
		FOREIGN KEY (project_id)
			REFERENCES project(project_id));

CREATE TABLE submission (submission_id INT AUTO_INCREMENT PRIMARY KEY, comment VARCHAR(500), picture BLOB, commitment_id INT,
		CONSTRAINT fk_commitment
		FOREIGN KEY (commitment_id)
			REFERENCES commitment(commitment_id));