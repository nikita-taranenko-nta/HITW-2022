﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace HITW.Models.Entities
{
    public partial class CommitmentAssessment
    {
        public int Id { get; set; }
        public string ActualResult { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int? AssessmentId { get; set; }
        public int? CommitmentId { get; set; }

        public virtual Assessment Assessment { get; set; }
        public virtual Commitment Commitment { get; set; }
    }
}