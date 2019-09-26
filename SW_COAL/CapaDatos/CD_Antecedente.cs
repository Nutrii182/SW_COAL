using CapaModelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaDatos
{
    public class CD_Antecedente
    {
        public AntecedentesModel NuevoAntecedente(AntecedentesModel antec)
        {
            try
            {
                using (var context = new COALEntities())
                {
                    var icomp = context.Antecendentes.Where(a => a.paciente == antec.iPaciente || a.antecedente == antec.sAntecedente).FirstOrDefault();

                    if (icomp != null)
                        return null;

                    var nuevoAntecedente = new Antecendentes
                    {
                        antecedente = antec.sAntecedente,
                        otro_antecedente = antec.sOtroAntecedente,
                        embarazo = antec.sEmbarazo,
                        meses_embarazo = antec.iMesesEmbarazo,
                        anticonceptivos = antec.sAnticonceptivos,
                        tipo_anticoncep = antec.sTipoAnticoncep,
                        fumador = antec.sFuma,
                        consume_alcohol = antec.sBebe,
                        drogas = antec.sDrogas,
                        alergia = antec.sAlergia,
                        tipo_alergia = antec.sTipoAlergia,
                        higiene_bucal = antec.sHigieneBucal,
                        paciente = antec.iPaciente
                    };
                    context.Antecendentes.Add(nuevoAntecedente);
                    context.SaveChanges();
                    return antec;
                }

            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}