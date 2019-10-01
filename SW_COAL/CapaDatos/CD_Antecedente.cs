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
                    var icomp = context.Antecendentes.Where(a => a.paciente == antec.iPaciente).FirstOrDefault();

                    if (icomp != null)
                        return null;

                    var nuevoAntecedente = new Antecendentes
                    {
                        apa_resp = antec.sApa_Res,
                        apa_cardi = antec.sApa_Cardi,
                        apa_diges = antec.sApa_Diges,
                        sis_nerv = antec.sSis_Nerv,
                        prob_goagu = antec.sProp_Guagu,
                        desmayos = antec.sDesmayos,
                        verti_mareo = antec.sVerti_Mareo,
                        diabetes = antec.sDiabetes,
                        tiroides = antec.sTiroides,
                        fie_reu = antec.sFie_Reu,
                        hipertension = antec.sHipertension,
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