// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace HITW.Models.Entities
{
    public partial class ProjectAssessment
    {
        public ProjectAssessment()
        {
            Assessments = new HashSet<Assessment>();
            ProjectAssessmentLessonLearneds = new HashSet<ProjectAssessmentLessonLearned>();
        }

        public int Id { get; set; }
        public string Comment { get; set; }
        public int? ProjectId { get; set; }

        public virtual Project Project { get; set; }
        public virtual ICollection<Assessment> Assessments { get; set; }
        public virtual ICollection<ProjectAssessmentLessonLearned> ProjectAssessmentLessonLearneds { get; set; }
    }
}