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
    
    public partial class Antecendentes
    {
        public int idantecedente { get; set; }
        public string antecedente { get; set; }
        public string otro_antecedente { get; set; }
        public string embarazo { get; set; }
        public Nullable<int> meses_embarazo { get; set; }
        public string anticonceptivos { get; set; }
        public string tipo_anticoncep { get; set; }
        public string fumador { get; set; }
        public string consume_alcohol { get; set; }
        public string drogas { get; set; }
        public string alergia { get; set; }
        public string tipo_alergia { get; set; }
        public string higiene_bucal { get; set; }
        public int paciente { get; set; }
    
        public virtual Pacientes Pacientes { get; set; }
    }
}
