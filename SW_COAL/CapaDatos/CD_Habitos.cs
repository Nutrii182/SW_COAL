using CapaModelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaDatos
{
    public class CD_Habitos
    {
        public HabitosModel NuevoHabito(HabitosModel habit)
        {
            try
            {

                using (var context = new COALEntities())
                {
                    var comp = context.Habitos.Where(h => h.paciente == habit.iPaciente).FirstOrDefault();

                    if (comp != null)
                        return null;

                    var nuevoHabito = new Habitos
                    {
                        bricomania = habit.sBricomania,
                        contrac_musc = habit.sContrac_Musc,
                        habi_mordi = habit.sHabi_Mordi,
                        resp_bucal = habit.sResp_Bucal,
                        chupa_labios = habit.sChupa_Labios,
                        chupa_lengua = habit.sChupa_Lengua,
                        chupa_dedos = habit.sChupa_Dedos,
                        frecuencia = habit.iFrecuencia,
                        alimentacion = habit.sAlimentacion,
                        paciente = habit.iPaciente
                    };
                    context.Habitos.Add(nuevoHabito);
                    context.SaveChanges();
                    return habit;
                }

            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}