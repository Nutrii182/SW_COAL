
using CapaModelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaDatos
{
    public class CD_Paradontograma
    {
        public ConsultaModel nuevoParadonto(ConsultaModel par)
        {
            using(var context = new COALEntities())
            {
                var comp = context.Parodontograma.Where(p => p.paciente == par.iPaciente).FirstOrDefault();

                if (comp != null)
                    return null;

                var nuevoParadonto = new Parodontograma
                {
                    d11 = par.sD11, d12 = par.sD12, d13 = par.sD13, d14 = par.sD14,
                    d15 = par.sD15, d16 = par.sD16, d17 = par.sD17, d18 = par.sD18,
                    d21 = par.sD21, d22 = par.sD22, d23 = par.sD23, d24 = par.sD24,
                    d25 = par.sD25, d26 = par.sD26, d27 = par.sD27, d28 = par.sD28,
                    d31 = par.sD31, d32 = par.sD32, d33 = par.sD33, d34 = par.sD34,
                    d35 = par.sD35, d36 = par.sD36, d37 = par.sD37, d38 = par.sD38,
                    d41 = par.sD41, d42 = par.sD42, d43 = par.sD43, d44 = par.sD44,
                    d45 = par.sD45, d46 = par.sD46, d47 = par.sD47, d48 = par.sD48,
                    paciente = par.iPaciente
                };

                context.Parodontograma.Add(nuevoParadonto);
                context.SaveChanges();
                return par;
            }
        }

        public List<ConsultaModel> MostrarParadontograma()
        {
            try
            {
                using(var context = new COALEntities())
                {
                    return context.Parodontograma.Select(p => new ConsultaModel()
                    {
                        sD11 = p.d11, sD21 = p.d21, sD31 = p.d31, sD41 = p.d41,
                        sD12 = p.d12, sD22 = p.d22, sD32 = p.d32, sD42 = p.d42,
                        sD13 = p.d13, sD23 = p.d23, sD33 = p.d33, sD43 = p.d43,
                        sD14 = p.d14, sD24 = p.d24, sD34 = p.d34, sD44 = p.d44,
                        sD15 = p.d15, sD25 = p.d25, sD35 = p.d35, sD45 = p.d45,
                        sD16 = p.d16, sD26 = p.d26, sD36 = p.d36, sD46 = p.d46,
                        sD17 = p.d17, sD27 = p.d27, sD37 = p.d37, sD47 = p.d47,
                        sD18 = p.d18, sD28 = p.d28, sD38 = p.d38, sD48 = p.d48             
                        
                    }).ToList();
                }
            }catch(Exception e)
            {
                throw e;
            }
        }
    }
}
