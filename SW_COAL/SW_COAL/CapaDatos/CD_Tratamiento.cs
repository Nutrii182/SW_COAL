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

        public List<ConsultaModel> MostrarTratamiento()
        {
            try
            {
                using(var context = new COALEntities())
                {
                    return context.Tratamiento.Select(t => new ConsultaModel()
                    {
                        sBajoTratamiento = t.bajo_tratamiento,
                        sTipoTratamiento = t.tipo_tratamiento,
                        sNombreDoctor = t.nombre_doctor,
                        sApePaterDoc = t.apePat_doctor,
                        sApeMaterDoc = t.apeMat_doctor,
                        lTelDoct = t.tel_doctor,
                        lCelDoct = t.cel_doctor,
                        dtIniciaTratamiento = t.ini_trata,
                        dtTerminaTratamiento = t.fin_trata,
                        sTomaMedi = t.toma_medi,
                        sMedicamento = t.medicamento,
                        sHospi = t.hospitalizado,
                        sMotivo = t.motivo
                    }).ToList();
                }
            }
            catch(Exception e)
            {
                throw e;
            }
        }
    }
}