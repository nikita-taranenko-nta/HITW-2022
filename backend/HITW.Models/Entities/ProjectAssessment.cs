﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace HITW.Models.Entities
{
    public partial class ProjectAssessment
    {
        public ProjectAssessment()
        {
            Assessment = new HashSet<Assessment>();
            ProjectAssessmentLessonLearned = new HashSet<ProjectAssessmentLessonLearned>();
        }

        public int Id { get; set; }
        public string Comment { get; set; }
        public int? ProjectId { get; set; }

        public virtual Project Project { get; set; }
        public virtual ICollection<Assessment> Assessment { get; set; }
        public virtual ICollection<ProjectAssessmentLessonLearned> ProjectAssessmentLessonLearned { get; set; }
    }
}