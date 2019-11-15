using CapaModelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaDatos
{
    public class CD_Tratamiento
    {
        public ConsultaModel NuevoTratamiento(ConsultaModel trat)
        {
            try
            {

                using (var context = new COALEntities())
                {
                    var comp = context.Tratamiento.Where(t => t.paciente == trat.iPaciente).FirstOrDefault();

                    if (comp != null)
                        return null;

                    var nuevoTratamiento = new Tratamiento
                    {
                        bajo_tratamiento = trat.sBajoTratamiento,
                        tipo_tratamiento = trat.sTipoTratamiento,
                        nombre_doctor = trat.sNombreDoctor,
                        apePat_doctor = trat.sApePaterDoc,
                        apeMat_doctor = trat.sApeMaterDoc,
                        tel_doctor = trat.lTelDoct,
                        cel_doctor = trat.lCelDoct,
                        ini_trata = trat.dtIniciaTratamiento,
                        fin_trata = trat.dtTerminaTratamiento,
                        toma_medi = trat.sTomaMedi,
                        medicamento = trat.sMedicamento,
                        hospitalizado = trat.sHospi,
                        motivo = trat.sMotivo,
                        paciente = trat.iPaciente
                    };
                    context.Tratamiento.Add(nuevoTratamiento);
                    context.SaveChanges();
                    return trat;
                }

            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}