
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
    
public partial class Tratamiento
{

    public int idtratamiento { get; set; }

    public string bajo_tratamiento { get; set; }

    public string tipo_tratamiento { get; set; }

    public string nombre_doctor { get; set; }

    public string apePat_doctor { get; set; }

    public string apeMat_doctor { get; set; }

    public Nullable<long> tel_doctor { get; set; }

    public Nullable<long> cel_doctor { get; set; }

    public Nullable<System.DateTime> ini_trata { get; set; }

    public Nullable<System.DateTime> fin_trata { get; set; }

    public string toma_medi { get; set; }

    public string medicamento { get; set; }

    public string hospitalizado { get; set; }

    public string motivo { get; set; }

    public int paciente { get; set; }



    public virtual Pacientes Pacientes { get; set; }

}

}
