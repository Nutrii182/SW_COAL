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
        public TejidosModel NuevoTejido(TejidosModel teji)
        {
            try
            {

                using (var context = new COALEntities())
                {
                    var comp = context.Tejidos.Where(t => t.blandos == teji.sBlandos || t.oclusion == teji.sOclusion).FirstOrDefault();

                    if (comp != null)
                        return null;

                    var nuevoTejido = new Tejidos
                    {
                        duros = teji.sDuros,
                        rx = teji.sRx,
                        blandos = teji.sBlandos,
                        oclusion = teji.sOclusion,
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
    }
}