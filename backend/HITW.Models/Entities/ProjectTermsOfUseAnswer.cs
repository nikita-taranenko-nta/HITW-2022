﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace HITW.Models.Entities
{
    public partial class ProjectTermsOfUseAnswer
    {
        public int Id { get; set; }
        public string Data { get; set; }
        public int? TermsOfUseQuestionId { get; set; }
        public int? TermsOfUseAnswerId { get; set; }
        public int? ProjectId { get; set; }

        public virtual Project Project { get; set; }
        public virtual TermsOfUseAnswer TermsOfUseAnswer { get; set; }
        public virtual TermsOfUseQuestion TermsOfUseQuestion { get; set; }
    }
}