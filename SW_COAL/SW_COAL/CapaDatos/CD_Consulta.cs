using CapaModelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaDatos
{
    public class CD_Consulta
    {
        public ConsultaModel NuevaConsulta (ConsultaModel con)
        {
            try
            {
                using(var context = new COALEntities())
                {

                    return null;
                }

            }catch(Exception e)
            {
                throw e;
            }
        }
            
    }
}
