// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace HITW.Models.Entities
{
    public partial class Person
    {
        public Person()
        {
            ProjectPeople = new HashSet<Project>();
            ProjectProducers = new HashSet<Project>();
        }

        public int Id { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }

        public virtual ICollection<Project> ProjectPeople { get; set; }
        public virtual ICollection<Project> ProjectProducers { get; set; }
    }
}