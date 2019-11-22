using CapaModelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaDatos
{
    public class CD_Tejidos
    {
        public ConsultaModel NuevoTejido(ConsultaModel teji)
        {
            try
            {

                using (var context = new COALEntities())
                {
                    var comp = context.Tejidos.Where(t => t.paciente == teji.iPaciente).FirstOrDefault();

                    if (comp != null)
                        return null;

                    var nuevoTejido = new Tejidos
                    {
                        duros = teji.sDuros,
                        rx = teji.sRx,
                        encia = teji.sEncia,
                        inser_epi = teji.sInsert_Epi,
                        lengua = teji.sLengua,
                        pulpa = teji.sPulpa,
                        velo = teji.sVelo,
                        carrillos = teji.sCarrillos,
                        sob_mord = teji.sSob_Mord,
                        mordi_abier = teji.sMordi_Abier,
                        desg_bru = teji.sDesg_Bru,
                        anoclusion = teji.sAnoclusion,
                        paciente = teji.iPaciente
                    };
                    context.Tejidos.Add(nuevoTejido);
                    context.SaveChanges();
                    return teji;
                }

            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<ConsultaModel> MostrarTejido()
        {
            try
            {
                using(var context = new COALEntities())
                {
                    return context.Tejidos.Select(t => new ConsultaModel()
                    {
                        sDuros = t.duros,
                        sRx = t.rx,
                        sEncia = t.encia,
                        sInsert_Epi = t.inser_epi,
                        sLengua = t.lengua,
                        sPulpa = t.pulpa,
                        sVelo = t.velo,
                        sCarrillos = t.carrillos,
                        sSob_Mord = t.sob_mord,
                        sMordi_Abier = t.mordi_abier,
                        sDesg_Bru = t.desg_bru,
                        sAnoclusion = t.anoclusion
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