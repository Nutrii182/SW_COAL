﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CapaModelo
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class COALEntities : DbContext
    {
        public COALEntities()
            : base("name=COALEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Usuarios> Usuarios { get; set; }
        public virtual DbSet<Habitos> Habitos { get; set; }
        public virtual DbSet<Adicional> Adicional { get; set; }
        public virtual DbSet<Tratamiento> Tratamiento { get; set; }
        public virtual DbSet<Antecendentes> Antecendentes { get; set; }
        public virtual DbSet<Pacientes> Pacientes { get; set; }
        public virtual DbSet<Consultas> Consultas { get; set; }
        public virtual DbSet<Parodontograma> Parodontograma { get; set; }
        public virtual DbSet<Tejidos> Tejidos { get; set; }
    }
}
