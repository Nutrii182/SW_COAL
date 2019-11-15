using CapaModelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaDatos
{
    public class CD_InfoAdicional
    {
        public ConsultaModel NuevaInfoAdi(ConsultaModel infadi)
        {
            try
            {

                using (var context = new COALEntities())
                {
                    var comp = context.Adicional.Where(adi => adi.paciente == infadi.iPaciente).FirstOrDefault();

                    if (comp != null)
                        return null;

                    var nuevaInfoAdi = new Adicional
                    {
                        rech_apri = infadi.sRechiApri,
                        trat_encias = infadi.sTrataEncias,
                        ori_bucal = infadi.sOriHigBucal,
                        ciru_encias = infadi.sCirugiaEncias,
                        hemorragias = infadi.sHemorragiaBucal,
                        veces_cepillado = infadi.iCepillado,
                        tipo_cepillo = infadi.sTipoCepillo,
                        paciente = infadi.iPaciente
                    };
                    context.Adicional.Add(nuevaInfoAdi);
                    context.SaveChanges();
                    return infadi;
                }

            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}