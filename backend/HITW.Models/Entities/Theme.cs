﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace HITW.Models.Entities
{
    public partial class Theme
    {
        public Theme()
        {
            Question = new HashSet<Question>();
            ThemeScore = new HashSet<ThemeScore>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Question> Question { get; set; }
        public virtual ICollection<ThemeScore> ThemeScore { get; set; }
    }
}