using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaModelo
{
    public class PacientesModel
    {
        public int iIdPaciente { get; set; }
        public String sNombre { get; set; }

        public String sApePaterno { get; set; }

        public String sApeMaterno { get; set; }

        public String sDomicilio { get; set; }

        public long? lTelefono { get; set; }

        public long? lCelular { get; set; }

        public String dtFechaNacimiento { get; set; }

        public String sSexo { get; set; }

        public String sApa_Res { get; set; }

        public String sApa_Cardi { get; set; }

        public String sApa_Diges { get; set; }

        public String sSis_Nerv { get; set; }

        public String sProp_Guagu { get; set; }

        public String sDesmayos { get; set; }

        public String sVerti_Mareo { get; set; }

        public String sDiabetes { get; set; }

        public String sTiroides { get; set; }

        public String sFie_Reu { get; set; }

        public String sHipertension { get; set; }

        public String sOtroAntecedente { get; set; }

        public int iOdontologo { get; set; }
    }
}