//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class Consultas
    {
        public int idconsulta { get; set; }
        public int paciente { get; set; }
        public int antecedente { get; set; }
        public int habito { get; set; }
        public int tratamiento { get; set; }
        public int tejido { get; set; }
        public int adicional { get; set; }
    
        public virtual Adicional Adicional1 { get; set; }
        public virtual Antecendentes Antecendentes { get; set; }
        public virtual Habitos Habitos { get; set; }
        public virtual Pacientes Pacientes { get; set; }
        public virtual Tejidos Tejidos { get; set; }
        public virtual Tratamiento Tratamiento1 { get; set; }
    }
}