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
    
    public partial class Tejidos
    {
        public string duros { get; set; }
        public string rx { get; set; }
        public string blandos { get; set; }
        public string oclusion { get; set; }
        public int paciente { get; set; }
    
        public virtual Pacientes Pacientes { get; set; }
    }
}
