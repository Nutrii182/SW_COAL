using CapaModelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaDatos
{
    public class CD_Consultas
    {
        public ConsultaModel NuevaConsulta (ConsultaModel con)
        {
            try
            {
                using(var context = new COALEntities())
                {

                    var nuevaConsulta = new Consultas
                    {
                        paciente = con.ipaciente,
                        antecedente = con.iantecedente,
                        habito = con.ihabito,
                        tratamiento = con.itratamiento,
                        tejido = con.itejido,
                        adicional = con.iadicional
                    };
                    context.Consultas.Add(nuevaConsulta);
                    context.SaveChanges();
                    return con;
                }

            }catch(Exception e)
            {
                throw e;
            }
        }
            
    }
}
