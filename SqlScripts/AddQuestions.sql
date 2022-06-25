USE hitw;

INSERT INTO Theme (Name)
VALUES ('Effects of the environemnt on the activity');

INSERT INTO Theme (Name)
VALUES ('Effects of the activity on the environment');

INSERT INTO Theme (Name)
VALUES ('Willingness to commit');

INSERT INTO Theme (Name)
VALUES ('Capacities and needs');

INSERT INTO Question (Data, ThemeId)
VALUES ('In your opinion, how is air quality in your activity area? 
Can you breathe well? Is the air contaminated? Does it have an unusual smell? 
How does this affect your activity and its benefits?', '1');

INSERT INTO Question (Data, ThemeId)
VALUES ('In your opinion, how is water quality in your activity area? 
Is it safe to drink? 
Does it have an unusual smell or colour? 
Does it contain chemical agents? Is it easily available? 
Is wastewater properly managed? 
How does this affect your activity and its benefits?', '1');

INSERT INTO Question (Data, ThemeId)
VALUES ('In your opinion, how is soil quality in your activity area? 
Are they fertile? Are you satisfied with their production? 
Are they contaminated? 
Is there a lot of waste in your activity area? 
How does this affect your activity and its benefits?', '1');

INSERT INTO Question (Data, ThemeId)
VALUES ('In your opinion, how is the vegetation cover in your activity area? 
Is it subject to degradation? Is it sustainably managed? 
How does this affect your activity and its benefits?', '1');

INSERT INTO Question (Data, ThemeId)
VALUES ('Does biodiversity seem protected/in danger in your activity area? 
Do you have to face species that are harmful to your activity? 
How does this affect your activity and its benefits?', '1');

INSERT INTO Question (Data, ThemeId)
VALUES ('Is your activity sensitive to climate and its fluctuations? 
Do you notice the effects of climate changes (drought, flood, hail, frost, hurricane, etc.)? 
How does this affect your activity and its benefits?', '1');

INSERT INTO Question (Data, ThemeId)
VALUES ('In your opinion, what are the main environmental issues in your activity area? 
How long have you been experiencing their effects? 
Does this situation seem critical to you? 
If the environmental context were to worsen, how would it affect your activity?', '1');

INSERT INTO Question (Data, ThemeId)
VALUES ('Overall, do you think that the environment has a positive, negative or neutral impact on your activity?', '1');

INSERT INTO Question (Data, ThemeId)
VALUES ('In the future, how do you think the effects of the environment on your activity are likely to evolve?', '1');

INSERT INTO Question (Data, ThemeId)
VALUES ('What inputs, raw materials, equipment and products (and their level of toxicity) do you use? 
In what quantity?', '2');

INSERT INTO Question (Data, ThemeId)
VALUES ('Does your activity affect air quality? 
Does it generate smokes? 
Do you take measures to limit the potential impact of your activity on air quality?', '2');

INSERT INTO Question (Data, ThemeId)
VALUES ('Does your activity affect water quality or its availability? 
Do you take measures to limit river and water tables contamination?', '2');

INSERT INTO Question (Data, ThemeId)
VALUES ('Does your activity affect soil quality? 
Do you take measures to improve soil quality or limit soil depletion, erosion or potential contamination sources?', '2');

INSERT INTO Question (Data, ThemeId)
VALUES ('Does your activity affect the vegetation cover? 
Do you take measures to improve it or limit its degradation?', '2');

INSERT INTO Question (Data, ThemeId)
VALUES ('Does your activity affect biodiversity? 
Does it threaten some vegetal/animal species (or their habitat, food, breeding grounds)?  
Do you take measures to limit these impacts or in favour of biodiversity?', '2');

INSERT INTO Question (Data, ThemeId)
VALUES ('Does your activity generate waste or wastewater?  
At which stage of the process and in what quantities? 
How do you treat them?  
Does it have consequences around or beyond your activity area?', '2');

INSERT INTO Question (Data, ThemeId)
VALUES ('What energy source do you use for your activity (wood, coal, fuel, electricity, etc.)? 
In what quantity? 
Does it have consequences around your activity area, in supply areas, or in terms of greenhouse gases emissions?', '2');

INSERT INTO Question (Data, ThemeId)
VALUES ('Overall, do you think that your activity has a positive, negative or neutral impact on the environment?', '2');

INSERT INTO Question (Data, ThemeId)
VALUES ('In the future, how do you think the effects of your activity on the environment are likely to evolve?', '2');

INSERT INTO Question (Data, ThemeId)
VALUES ('Do you have to comply with environmental regulations when pursuing your activity?   
Do you have any environmental certification? If so, which one(s)? 
Do you know any (other) that could be of interest to you?', '3');

INSERT INTO Question (Data, ThemeId)
VALUES ('Do you think that environmental management* measures are essential to the conduct of your activity? Do you think they hold a sufficient place at the moment? Why? 
Would you like to improve your action in that regard?', '3');

INSERT INTO Question (Data, ThemeId)
VALUES ('What concrete actions do you think we could undertake in order to improve the state of the environment, or to mitigate environmental pressures in your activity area? 
How could you participate in these efforts?', '3');

INSERT INTO Question (Data, ThemeId)
VALUES ('What concrete actions8 could you undertake to strengthen positive impacts and/or mitigate negative impacts of the environment on your activity?  
Are you already implementing such actions? If so, which ones?', '3');

INSERT INTO Question (Data, ThemeId)
VALUES ('What concrete actions9 could you undertake to strengthen positive impacts and/or mitigate negative impacts of your activity on the environment? 
Are you already implementing such actions? If so, which ones? ', '3');

INSERT INTO Question (Data, ThemeId)
VALUES ('Do you know any organisation(s) or individual(s) working on environmental issues, in particular in your activity area and/or sector? If so, which ones? 
Have you received support from them in the past? Of what type (information, training, technical support, financial support, etc.)? 
What theme(s) did they cover? 
Was this support occasional or continued? 
Were the people working with you (staff, members of the association, etc.) involved? 
In what way(s) did it help?', '4');

INSERT INTO Question (Data, ThemeId)
VALUES ('Do you think (in your private capacity or in your organisation’s) you hold the knowledge and technical, organisational and/or financial capacities to implement the actions identified in theme 3? 
What kind of support would you need?', '4');

INSERT INTO Theme (Name)
VALUES ('TERMS OF USE');

INSERT INTO TermsOfUseQuestion (Data)
VALUES ('WHICH OF THE FOLLOWING TERMS BEST DESCRIBES THE PRODUCER?');
INSERT INTO TermsOfUseQuestion (Data)
VALUES ('WHO PARTICIPATES IN THE APPLICATION OF THIS QUESTIONNAIRE?');
INSERT INTO TermsOfUseQuestion (Data)
VALUES ('THE INDICATOR SCORES ARE ASSIGNED BY:');

INSERT INTO PrioriPosterioriQuestion (Question)
VALUES ('SHORT DESCRIPTION OF THE ACTIVITY');
INSERT INTO PrioriPosterioriQuestion (Question)
VALUES ('SHORT DESCRIPTION OF THE ENVIRONMENTAL CONTEXT');
INSERT INTO PrioriPosterioriQuestion (Question)
VALUES ('MUTUAL EFFECTS BETWEEN THE ENVIRONMENT AND THE ACTIVITY');
