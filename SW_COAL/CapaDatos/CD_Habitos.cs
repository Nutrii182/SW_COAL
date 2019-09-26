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
                    var comp = context.Habitos.Where(h => h.paciente == habit.iPaciente || h.habito == habit.sHabito
                    || h.chupador == habit.sChupador).FirstOrDefault();

                    if (comp != null)
                        return null;

                    var nuevoHabito = new Habitos
                    {
                        habito = habit.sHabito,
                        chupador = habit.sChupador,
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