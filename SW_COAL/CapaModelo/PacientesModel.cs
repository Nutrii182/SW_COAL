using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaModelo
{
    public class PacientesModel
    {
        public String sNombre { get; set; }

        public String sApePaterno { get; set; }

        public String sApeMaterno { get; set; }

        public String sDomicilio { get; set; }

        public long? lTelefono { get; set; }

        public long? lCelular { get; set; }

        public DateTime dtFechaNacimiento { get; set; }

        public String sSexo { get; set; }

        public int iOdontologo { get; set; }
    }
}