using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaModelo
{
    public class ConsultaModel
    {
        //tratamiento
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

        //tejidos
        public String sDuros { get; set; }

        public String sRx { get; set; }

        public String sEncia { get; set; }

        public String sInsert_Epi { get; set; }

        public String sLengua { get; set; }

        public String sPulpa { get; set; }

        public String sVelo { get; set; }

        public String sCarrillos { get; set; }

        public String sSob_Mord { get; set; }

        public String sMordi_Abier { get; set; }

        public String sDesg_Bru { get; set; }

        public String sAnoclusion { get; set; }

        //antecedentes

        public String sEmbarazo { get; set; }

        public int iMesesEmbarazo { get; set; }

        public String sAnticonceptivos { get; set; }

        public String sTipoAnticoncep { get; set; }

        public String sFuma { get; set; }

        public String sBebe { get; set; }

        public String sDrogas { get; set; }

        public String sAlergia { get; set; }

        public String sTipoAlergia { get; set; }

        public String sHigieneBucal { get; set; }

        //habitos

        public String sBricomania { get; set; }

        public String sContrac_Musc { get; set; }

        public String sHabi_Mordi { get; set; }

        public String sResp_Bucal { get; set; }

        public String sChupa_Labios { get; set; }

        public String sChupa_Lengua { get; set; }

        public String sChupa_Dedos { get; set; }

        public int iFrecuencia { get; set; }

        public String sAlimentacion { get; set; }

        //adicional
        public String sRechiApri { get; set; }

        public String sTrataEncias { get; set; }

        public String sOriHigBucal { get; set; }

        public String sCirugiaEncias { get; set; }

        public String sHemorragiaBucal { get; set; }

        public int iCepillado { get; set; }

        public String sTipoCepillo { get; set; }

        public int iPaciente { get; set; }
    }
}
