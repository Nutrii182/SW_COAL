using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaModelo
{
    public class TratamientoModel
    {
        public String sBajoTratamiento { get; set; }

        public String sTipoTratamiento { get; set; }

        public String sNombreDoctor { get; set; }

        public String sApePaterDoc { get; set; }

        public String sApeMaterDoc { get; set; }

        public long? lTelDoct { get; set; }

        public long? lCelDoct { get; set; }

        public DateTime? dtIniciaTratamiento { get; set; }

        public DateTime? dtTerminaTratamiento { get; set; }

        public String sTomaMedi { get; set; }

        public String sMedicamento { get; set; }

        public String sHospi { get; set; }

        public String sMotivo { get; set; }

        public int iPaciente { get; set; }
    }
}