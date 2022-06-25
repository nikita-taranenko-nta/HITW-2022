﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace HITW.Models.Entities
{
    public partial class Project
    {
        public Project()
        {
            CommitmentContracts = new HashSet<CommitmentContract>();
            PrioriPosterioriValues = new HashSet<PrioriPosterioriValue>();
            ProjectAssessments = new HashSet<ProjectAssessment>();
            ProjectCommitments = new HashSet<ProjectCommitment>();
            ProjectLessonLearneds = new HashSet<ProjectLessonLearned>();
            ProjectTermsOfUseAnswers = new HashSet<ProjectTermsOfUseAnswer>();
            ThemeScores = new HashSet<ThemeScore>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int? PersonId { get; set; }
        public string ProductiveUnit { get; set; }
        public string Country { get; set; }
        public string Region { get; set; }
        public string Municipality { get; set; }
        public int? ProducerId { get; set; }
        public string ContactDetails { get; set; }
        public string ConfidentialInformation { get; set; }
        public string TermsOfUseComment { get; set; }
        public string ProducerLesson { get; set; }
        public string TeamLesson { get; set; }

        public virtual Person Person { get; set; }
        public virtual Person Producer { get; set; }
        public virtual ICollection<CommitmentContract> CommitmentContracts { get; set; }
        public virtual ICollection<PrioriPosterioriValue> PrioriPosterioriValues { get; set; }
        public virtual ICollection<ProjectAssessment> ProjectAssessments { get; set; }
        public virtual ICollection<ProjectCommitment> ProjectCommitments { get; set; }
        public virtual ICollection<ProjectLessonLearned> ProjectLessonLearneds { get; set; }
        public virtual ICollection<ProjectTermsOfUseAnswer> ProjectTermsOfUseAnswers { get; set; }
        public virtual ICollection<ThemeScore> ThemeScores { get; set; }
    }
}