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
        public ConsultaModel MuestraConsulta(ConsultaModel con)
        {
            try
            {
                ConsultaModel consulta = new ConsultaModel();

                var context = new COALEntities();
                //var p = context.Pacientes.Where(x => x.idpaciente == con.iIdPaciente).Join (context.Usuarios, y => y.odontologo, u => u.idusuario, )
                var result = (from p in context.Pacientes
                              where p.idpaciente == con.iIdPaciente
                              join u in context.Usuarios on p.odontologo equals u.idusuario
                              join ant in context.Antecendentes on p.idpaciente equals ant.paciente
                              join h in context.Habitos on p.idpaciente equals h.idhabito
                              join adi in context.Adicional on p.idpaciente equals adi.idadicional
                              join tej in context.Tejidos on p.idpaciente equals tej.idtejidos
                              join tra in context.Tratamiento on p.idpaciente equals tra.idtratamiento
                              select new ConsultaModel
                              {
                                  //pacientes
                                  iIdPaciente = p.idpaciente,
                                  sNombre = p.nombre,
                                  sApePaterno = p.apellido_paterno,
                                  sApeMaterno = p.apellido_materno,
                                  sDomicilio = p.domicilio,
                                  lTelefono = p.telefono,
                                  lCelular = p.celular,
                                  dtFechaNacimiento = p.fecha_nacimiento.ToString(),
                                  sSexo = p.sexo,
                                  sApa_Res = p.apa_resp,
                                  sApa_Cardi = p.apa_cardi,
                                  sApa_Diges = p.apa_diges,
                                  sSis_Nerv = p.sis_nerv,
                                  sProp_Guagu = p.prob_goagu,
                                  sDesmayos = p.desmayos,
                                  sVerti_Mareo = p.verti_mareo,
                                  sDiabetes = p.diabetes,
                                  sTiroides = p.tiroides,
                                  sFie_Reu = p.fie_reu,
                                  sHipertension = p.hipertension,
                                  sOtroAntecedente = p.otro_antecedente,
                                  iOdontologo = p.odontologo,
                                  sOdontologo = u.nombre,
                                  //antecedentes
                                  sEmbarazo = ant.embarazo,
                                  iMesesEmbarazo = ant.meses_embarazo,
                                  sAnticonceptivos = ant.anticonceptivos,
                                  sTipoAnticoncep = ant.tipo_anticoncep,
                                  sFuma = ant.fumador,
                                  sBebe = ant.consume_alcohol,
                                  sDrogas = ant.drogas,
                                  sAlergia = ant.alergia,
                                  sTipoAlergia = ant.tipo_alergia,
                                  sHigieneBucal = ant.higiene_bucal,
                                  //habitos
                                  sBricomania = h.bricomania,
                                  sContrac_Musc = h.contrac_musc,
                                  sHabi_Mordi = h.habi_mordi,
                                  sResp_Bucal = h.resp_bucal,
                                  sChupa_Labios = h.chupa_labios,
                                  sChupa_Lengua = h.chupa_lengua,
                                  sChupa_Dedos = h.chupa_dedos,
                                  iFrecuencia = h.frecuencia,
                                  sAlimentacion = h.alimentacion,
                                  //adicional
                                  sRechiApri = adi.rech_apri,
                                  sTrataEncias = adi.trat_encias,
                                  sOriHigBucal = adi.ori_bucal,
                                  sCirugiaEncias = adi.ciru_encias,
                                  sHemorragiaBucal = adi.hemorragias,
                                  iCepillado = adi.veces_cepillado,
                                  sTipoCepillo = adi.tipo_cepillo,
                                  //Tejidos
                                  sDuros = tej.duros,
                                  sRx = tej.rx,
                                  sEncia = tej.encia,
                                  sInsert_Epi = tej.inser_epi,
                                  sLengua = tej.lengua,
                                  sPulpa = tej.pulpa,
                                  sVelo = tej.velo,
                                  sCarrillos = tej.carrillos,
                                  sSob_Mord = tej.sob_mord,
                                  sMordi_Abier = tej.mordi_abier,
                                  sDesg_Bru = tej.desg_bru,
                                  sAnoclusion = tej.anoclusion,
                                  //Tratamiento
                                  sBajoTratamiento = tra.bajo_tratamiento,
                                  sTipoTratamiento = tra.tipo_tratamiento,
                                  sNombreDoctor = tra.nombre_doctor,
                                  sApePaterDoc = tra.apePat_doctor,
                                  sApeMaterDoc = tra.apeMat_doctor,
                                  lTelDoct = tra.tel_doctor,
                                  lCelDoct = tra.cel_doctor,
                                  dtIniciaTratamiento = tra.ini_trata,
                                  dtTerminaTratamiento = tra.fin_trata,
                                  sTomaMedi = tra.toma_medi,
                                  sMedicamento = tra.medicamento,
                                  sHospi = tra.hospitalizado,
                                  sMotivo = tra.motivo,
                                  //paradontograma
                                  //sD11 = par.d11,
                                  //sD21 = par.d21,
                                  //sD31 = par.d31,
                                  //sD41 = par.d41,
                                  //sD12 = par.d12,
                                  //sD22 = par.d22,
                                  //sD32 = par.d32,
                                  //sD42 = par.d42,
                                  //sD13 = par.d13,
                                  //sD23 = par.d23,
                                  //sD33 = par.d33,
                                  //sD43 = par.d43,
                                  //sD14 = par.d14,
                                  //sD24 = par.d24,
                                  //sD34 = par.d34,
                                  //sD44 = par.d44,
                                  //sD15 = par.d15,
                                  //sD25 = par.d25,
                                  //sD35 = par.d35,
                                  //sD45 = par.d45,
                                  //sD16 = par.d16,
                                  //sD26 = par.d26,
                                  //sD36 = par.d36,
                                  //sD46 = par.d46,
                                  //sD17 = par.d17,
                                  //sD27 = par.d27,
                                  //sD37 = par.d37,
                                  //sD47 = par.d47,
                                  //sD18 = par.d18,
                                  //sD28 = par.d28,
                                  //sD38 = par.d38,
                                  //sD48 = par.d48,

                              }).FirstOrDefault();

                if (result == null)
                    return null;

                return result;

            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
