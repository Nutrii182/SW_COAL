using CapaModelo;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaDatos
{
    public class CD_Paciente
    {
        public PacienteModel NuevoPaciente(PacienteModel paci)
        {
            try
            {
                using (var context = new COALEntities())
                {
                    var comp = context.Pacientes.Where(p => p.nombre == paci.sNombre && p.apellido_paterno == paci.sApePaterno
                    && p.apellido_materno == paci.sApeMaterno).FirstOrDefault();

                    if (comp != null)
                        return null;

                    var nuevoPaciente = new Pacientes
                    {
                        nombre = paci.sNombre,
                        apellido_paterno = paci.sApePaterno,
                        apellido_materno = paci.sApeMaterno,
                        domicilio = paci.sDomicilio,
                        telefono = paci.lTelefono,
                        celular = paci.lCelular,
                        fecha_nacimiento = paci.dtFechaNacimiento,
                        sexo = paci.sSexo,
                        apa_resp = paci.sApa_Res,
                        apa_cardi = paci.sApa_Cardi,
                        apa_diges = paci.sApa_Diges,
                        sis_nerv = paci.sSis_Nerv,
                        prob_goagu = paci.sProp_Guagu,
                        desmayos = paci.sDesmayos,
                        verti_mareo = paci.sVerti_Mareo,
                        diabetes = paci.sDiabetes,
                        tiroides = paci.sTiroides,
                        fie_reu = paci.sFie_Reu,
                        hipertension = paci.sHipertension,
                        otro_antecedente = paci.sOtroAntecedente,
                        bajo_tratamiento = paci.sBajoTratamiento,
                        tipo_tratamiento = paci.sTipoTratamiento,
                        nombre_doctor = paci.sNombreDoctor,
                        apePat_doctor = paci.sApePaterDoc,
                        apeMat_doctor = paci.sApeMaterDoc,
                        tel_doctor = paci.lTelDoct,
                        cel_doctor = paci.lCelDoct,
                        ini_trata = paci.dtIniciaTratamiento,
                        fin_trata = paci.dtTerminaTratamiento,
                        toma_medi = paci.sTomaMedi,
                        medicamento = paci.sMedicamento,
                        hospitalizado = paci.sHospi,
                        motivo = paci.sMotivo,
                        duros = paci.sDuros,
                        rx = paci.sRx,
                        encia = paci.sEncia,
                        inser_epi = paci.sInsert_Epi,
                        lengua = paci.sLengua,
                        pulpa = paci.sPulpa,
                        velo = paci.sVelo,
                        carrillos = paci.sCarrillos,
                        sob_mord = paci.sSob_Mord,
                        mordi_abier = paci.sMordi_Abier,
                        desg_bru = paci.sDesg_Bru,
                        anoclusion = paci.sAnoclusion,
                        embarazo = paci.sEmbarazo,
                        meses_embarazo = paci.iMesesEmbarazo,
                        anticonceptivos = paci.sAnticonceptivos,
                        tipo_anticoncep = paci.sTipoAnticoncep,
                        fumador = paci.sFuma,
                        consume_alcohol = paci.sBebe,
                        drogas = paci.sDrogas,
                        alergia = paci.sAlergia,
                        tipo_alergia = paci.sTipoAlergia,
                        higiene_bucal = paci.sHigieneBucal,
                        bricomania = paci.sBricomania,
                        contrac_musc = paci.sContrac_Musc,
                        habi_mordi = paci.sHabi_Mordi,
                        resp_bucal = paci.sResp_Bucal,
                        chupa_labios = paci.sChupa_Labios,
                        chupa_lengua = paci.sChupa_Lengua,
                        chupa_dedos = paci.sChupa_Dedos,
                        frecuencia = paci.iFrecuencia,
                        alimentacion = paci.sAlimentacion,
                        rech_apri = paci.sRechiApri,
                        trat_encias = paci.sTrataEncias,
                        ori_bucal = paci.sOriHigBucal,
                        ciru_encias = paci.sCirugiaEncias,
                        hemorragias = paci.sHemorragiaBucal,
                        veces_cepillado = paci.iCepillado,
                        tipo_cepillo = paci.sTipoCepillo,
                        //d11 = paci.sD11,
                        //d12 = paci.sD12,
                        //d13 = paci.sD13,
                        //d14 = paci.sD14,
                        //d15 = paci.sD15,
                        //d16 = paci.sD16,
                        //d17 = paci.sD17,
                        //d18 = paci.sD18,
                        //d21 = paci.sD21,
                        //d22 = paci.sD22,
                        //d23 = paci.sD23,
                        //d24 = paci.sD24,
                        //d25 = paci.sD25,
                        //d26 = paci.sD26,
                        //d27 = paci.sD27,
                        //d28 = paci.sD28,
                        //d31 = paci.sD31,
                        //d32 = paci.sD32,
                        //d33 = paci.sD33,
                        //d34 = paci.sD34,
                        //d35 = paci.sD35,
                        //d36 = paci.sD36,
                        //d37 = paci.sD37,
                        //d38 = paci.sD38,
                        //d41 = paci.sD41,
                        //d42 = paci.sD42,
                        //d43 = paci.sD43,
                        //d44 = paci.sD44,
                        //d45 = paci.sD45,
                        //d46 = paci.sD46,
                        //d47 = paci.sD47,
                        //d48 = paci.sD48,
                        odontologo = paci.iOdontologo
                    };
                    context.Pacientes.Add(nuevoPaciente);
                    context.SaveChanges();
                    return paci;
                }

            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<PacienteModel> MuestraPacientes()
        {
            try
            {
                using (var context = new COALEntities())
                {
                    return context.Pacientes.Select(p => new PacienteModel()
                    {
                        //pacientes
                        iIdPaciente = p.idpaciente,
                        sNombre = p.nombre,
                        sApePaterno = p.apellido_paterno,
                        sApeMaterno = p.apellido_materno,
                        sDomicilio = p.domicilio,
                        lTelefono = p.telefono,
                        lCelular = p.celular,
                        dtFechaNacimiento = p.fecha_nacimiento,
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
                        //antecedentes
                        sEmbarazo = p.embarazo,
                        iMesesEmbarazo = p.meses_embarazo,
                        sAnticonceptivos = p.anticonceptivos,
                        sTipoAnticoncep = p.tipo_anticoncep,
                        sFuma = p.fumador,
                        sBebe = p.consume_alcohol,
                        sDrogas = p.drogas,
                        sAlergia = p.alergia,
                        sTipoAlergia = p.tipo_alergia,
                        sHigieneBucal = p.higiene_bucal,
                        //habitos
                        sBricomania = p.bricomania,
                        sContrac_Musc = p.contrac_musc,
                        sHabi_Mordi = p.habi_mordi,
                        sResp_Bucal = p.resp_bucal,
                        sChupa_Labios = p.chupa_labios,
                        sChupa_Lengua = p.chupa_lengua,
                        sChupa_Dedos = p.chupa_dedos,
                        iFrecuencia = p.frecuencia,
                        sAlimentacion = p.alimentacion,
                        //adicional
                        sRechiApri = p.rech_apri,
                        sTrataEncias = p.trat_encias,
                        sOriHigBucal = p.ori_bucal,
                        sCirugiaEncias = p.ciru_encias,
                        sHemorragiaBucal = p.hemorragias,
                        iCepillado = p.veces_cepillado,
                        sTipoCepillo = p.tipo_cepillo,
                        //Tejidos
                        sDuros = p.duros,
                        sRx = p.rx,
                        sEncia = p.encia,
                        sInsert_Epi = p.inser_epi,
                        sLengua = p.lengua,
                        sPulpa = p.pulpa,
                        sVelo = p.velo,
                        sCarrillos = p.carrillos,
                        sSob_Mord = p.sob_mord,
                        sMordi_Abier = p.mordi_abier,
                        sDesg_Bru = p.desg_bru,
                        sAnoclusion = p.anoclusion,
                        //Tratamiento
                        sBajoTratamiento = p.bajo_tratamiento,
                        sTipoTratamiento = p.tipo_tratamiento,
                        sNombreDoctor = p.nombre_doctor,
                        sApePaterDoc = p.apePat_doctor,
                        sApeMaterDoc = p.apeMat_doctor,
                        lTelDoct = p.tel_doctor,
                        lCelDoct = p.cel_doctor,
                        dtIniciaTratamiento = p.ini_trata,
                        dtTerminaTratamiento = p.fin_trata,
                        sTomaMedi = p.toma_medi,
                        sMedicamento = p.medicamento,
                        sHospi = p.hospitalizado,
                        sMotivo = p.motivo,
                        //paradontograma
                        //sD11 = paci.d11,
                        //sD21 = paci.d21,
                        //sD31 = paci.d31,
                        //sD41 = paci.d41,
                        //sD12 = paci.d12,
                        //sD22 = paci.d22,
                        //sD32 = paci.d32,
                        //sD42 = paci.d42,
                        //sD13 = paci.d13,
                        //sD23 = paci.d23,
                        //sD33 = paci.d33,
                        //sD43 = paci.d43,
                        //sD14 = paci.d14,
                        //sD24 = paci.d24,
                        //sD34 = paci.d34,
                        //sD44 = paci.d44,
                        //sD15 = paci.d15,
                        //sD25 = paci.d25,
                        //sD35 = paci.d35,
                        //sD45 = paci.d45,
                        //sD16 = paci.d16,
                        //sD26 = paci.d26,
                        //sD36 = paci.d36,
                        //sD46 = paci.d46,
                        //sD17 = paci.d17,
                        //sD27 = paci.d27,
                        //sD37 = paci.d37,
                        //sD47 = paci.d47,
                        //sD18 = paci.d18,
                        //sD28 = paci.d28,
                        //sD38 = paci.d38,
                        //sD48 = paci.d48,
                        iOdontologo = p.odontologo
                    }).ToList();
                }

            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public PacienteModel MuestraPaciente(PacienteModel paci)
        {
            try
            {

                using (var context = new COALEntities())
                {
                    PacienteModel paciente = new PacienteModel();

                    var p = context.Pacientes.Where(pa => pa.idpaciente == paci.iIdPaciente).FirstOrDefault();

                    if (p == null)
                        return null;

                    //pacientes
                    paciente.iIdPaciente = p.idpaciente;
                    paciente.sNombre = p.nombre;
                    paciente.sApePaterno = p.apellido_paterno;
                    paciente.sApeMaterno = p.apellido_materno;
                    paciente.sDomicilio = p.domicilio;
                    paciente.lTelefono = p.telefono;
                    paciente.lCelular = p.celular;
                    paciente.dtFechaNacimiento = p.fecha_nacimiento;
                    paciente.sSexo = p.sexo;
                    paciente.sApa_Res = p.apa_resp;
                    paciente.sApa_Cardi = p.apa_cardi;
                    paciente.sApa_Diges = p.apa_diges;
                    paciente.sSis_Nerv = p.sis_nerv;
                    paciente.sProp_Guagu = p.prob_goagu;
                    paciente.sDesmayos = p.desmayos;
                    paciente.sVerti_Mareo = p.verti_mareo;
                    paciente.sDiabetes = p.diabetes;
                    paciente.sTiroides = p.tiroides;
                    paciente.sFie_Reu = p.fie_reu;
                    paciente.sHipertension = p.hipertension;
                    paciente.sOtroAntecedente = p.otro_antecedente;
                    //antecedentes
                    paciente.sEmbarazo = p.embarazo;
                    paciente.iMesesEmbarazo = p.meses_embarazo;
                    paciente.sAnticonceptivos = p.anticonceptivos;
                    paciente.sTipoAnticoncep = p.tipo_anticoncep;
                    paciente.sFuma = p.fumador;
                    paciente.sBebe = p.consume_alcohol;
                    paciente.sDrogas = p.drogas;
                    paciente.sAlergia = p.alergia;
                    paciente.sTipoAlergia = p.tipo_alergia;
                    paciente.sHigieneBucal = p.higiene_bucal;
                    //habitos
                    paciente.sBricomania = p.bricomania;
                    paciente.sContrac_Musc = p.contrac_musc;
                    paciente.sHabi_Mordi = p.habi_mordi;
                    paciente.sResp_Bucal = p.resp_bucal;
                    paciente.sChupa_Labios = p.chupa_labios;
                    paciente.sChupa_Lengua = p.chupa_lengua;
                    paciente.sChupa_Dedos = p.chupa_dedos;
                    paciente.iFrecuencia = p.frecuencia;
                    paciente.sAlimentacion = p.alimentacion;
                    //adicional
                    paciente.sRechiApri = p.rech_apri;
                    paciente.sTrataEncias = p.trat_encias;
                    paciente.sOriHigBucal = p.ori_bucal;
                    paciente.sCirugiaEncias = p.ciru_encias;
                    paciente.sHemorragiaBucal = p.hemorragias;
                    paciente.iCepillado = p.veces_cepillado;
                    paciente.sTipoCepillo = p.tipo_cepillo;
                    //Tejidos
                    paciente.sDuros = p.duros;
                    paciente.sRx = p.rx;
                    paciente.sEncia = p.encia;
                    paciente.sInsert_Epi = p.inser_epi;
                    paciente.sLengua = p.lengua;
                    paciente.sPulpa = p.pulpa;
                    paciente.sVelo = p.velo;
                    paciente.sCarrillos = p.carrillos;
                    paciente.sSob_Mord = p.sob_mord;
                    paciente.sMordi_Abier = p.mordi_abier;
                    paciente.sDesg_Bru = p.desg_bru;
                    paciente.sAnoclusion = p.anoclusion;
                    //Tratamiento
                    paciente.sBajoTratamiento = p.bajo_tratamiento;
                    paciente.sTipoTratamiento = p.tipo_tratamiento;
                    paciente.sNombreDoctor = p.nombre_doctor;
                    paciente.sApePaterDoc = p.apePat_doctor;
                    paciente.sApeMaterDoc = p.apeMat_doctor;
                    paciente.lTelDoct = p.tel_doctor;
                    paciente.lCelDoct = p.cel_doctor;
                    paciente.dtIniciaTratamiento =  p.ini_trata;
                    paciente.dtTerminaTratamiento = p.fin_trata;
                    paciente.sTomaMedi = p.toma_medi;
                    paciente.sMedicamento = p.medicamento;
                    paciente.sHospi = p.hospitalizado;
                    paciente.sMotivo = p.motivo;
                    //paradontograma
                    //paciente.sD11 = paci.d11;
                    //paciente.sD21 = paci.d21;
                    //paciente.sD31 = paci.d31;
                    //paciente.sD41 = paci.d41;
                    //paciente.sD12 = paci.d12;
                    //paciente.sD22 = paci.d22;
                    //paciente.sD32 = paci.d32;
                    //paciente.sD42 = paci.d42;
                    //paciente.sD13 = paci.d13;
                    //paciente.sD23 = paci.d23;
                    //paciente.sD33 = paci.d33;
                    //paciente.sD43 = paci.d43;
                    //paciente.sD14 = paci.d14;
                    //paciente.sD24 = paci.d24;
                    //paciente.sD34 = paci.d34;
                    //paciente.sD44 = paci.d44;
                    //paciente.sD15 = paci.d15;
                    //paciente.sD25 = paci.d25;
                    //paciente.sD35 = paci.d35;
                    //paciente.sD45 = paci.d45;
                    //paciente.sD16 = paci.d16;
                    //paciente.sD26 = paci.d26;
                    //paciente.sD36 = paci.d36;
                    //paciente.sD46 = paci.d46;
                    //paciente.sD17 = paci.d17;
                    //paciente.sD27 = paci.d27;
                    //paciente.sD37 = paci.d37;
                    //paciente.sD47 = paci.d47;
                    //paciente.sD18 = paci.d18;
                    //paciente.sD28 = paci.d28;
                    //paciente.sD38 = paci.d38;
                    //paciente.sD48 = paci.d48;
                    paciente.iOdontologo = p.odontologo;
                    return paciente;
                }

            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public PacienteModel EliminaPaciente(PacienteModel pac)
        {
            try
            {
                using (var context = new COALEntities())
                {
                    var eliPaci = context.Pacientes.Where(p => p.idpaciente == pac.iIdPaciente).Single();

                    if (eliPaci == null)
                        return null;

                    context.Pacientes.Remove(eliPaci);
                    context.SaveChanges();
                    return pac;
                }
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public PacienteModel EditaPaciente(PacienteModel paci)
        {
            using(var context = new COALEntities())
            {
                var p = context.Pacientes.Where(pac => pac.idpaciente == paci.iIdPaciente).FirstOrDefault();

                if (p == null)
                    return null;

                p.nombre = paci.sNombre;
                p.apellido_paterno = paci.sApePaterno;
                p.apellido_materno = paci.sApeMaterno;
                p.domicilio = paci.sDomicilio;
                p.telefono = paci.lTelefono;
                p.celular = paci.lCelular;

                string sfechanac = paci.dtFechaNacimiento.ToString("yyyy/MM/dd", CultureInfo.InvariantCulture);
                p.fecha_nacimiento = DateTime.Parse(sfechanac);

                p.sexo = paci.sSexo;
                p.apa_resp = paci.sApa_Res;
                p.apa_cardi = paci.sApa_Cardi;
                p.apa_diges = paci.sApa_Diges;
                p.sis_nerv = paci.sSis_Nerv;
                p.prob_goagu = paci.sProp_Guagu;
                p.desmayos = paci.sDesmayos;
                p.verti_mareo = paci.sVerti_Mareo;
                p.diabetes = paci.sDiabetes;
                p.tiroides = paci.sTiroides;
                p.fie_reu = paci.sFie_Reu;
                p.hipertension = paci.sHipertension;
                p.otro_antecedente = paci.sOtroAntecedente;
                p.embarazo = paci.sEmbarazo;
                p.meses_embarazo = paci.iMesesEmbarazo;
                p.anticonceptivos = paci.sAnticonceptivos;
                p.tipo_anticoncep = paci.sTipoAnticoncep;
                p.fumador = paci.sFuma;
                p.consume_alcohol = paci.sBebe;
                p.drogas = paci.sDrogas;
                p.alergia = paci.sAlergia;
                p.alergia = paci.sTipoAlergia;
                p.higiene_bucal = paci.sHigieneBucal;
                //habitos
                p.bricomania = paci.sBricomania;
                p.contrac_musc = paci.sContrac_Musc;
                p.habi_mordi = paci.sHabi_Mordi;
                p.resp_bucal = paci.sResp_Bucal;
                p.chupa_labios = paci.sChupa_Labios;
                p.chupa_lengua = paci.sChupa_Lengua;
                p.chupa_dedos = paci.sChupa_Dedos;
                p.frecuencia = paci.iFrecuencia;
                p.alimentacion = paci.sAlimentacion;
                //adicional
                p.rech_apri = paci.sRechiApri;
                p.trat_encias = paci.sTrataEncias;
                p.ori_bucal = paci.sOriHigBucal;
                p.ciru_encias = paci.sCirugiaEncias;
                p.hemorragias = paci.sHemorragiaBucal;
                p.veces_cepillado = paci.iCepillado;
                p.tipo_cepillo = paci.sTipoCepillo;
                //Tejidos
                p.duros = paci.sDuros;
                p.rx = paci.sRx;
                p.encia = paci.sEncia;
                p.inser_epi = paci.sInsert_Epi;
                p.lengua = paci.sLengua;
                p.pulpa = paci.sPulpa;
                p.pulpa = paci.sVelo;
                p.carrillos = paci.sCarrillos;
                p.sob_mord = paci.sSob_Mord;
                p.mordi_abier = paci.sMordi_Abier;
                p.desg_bru = paci.sDesg_Bru;
                p.anoclusion = paci.sAnoclusion;
                //Tratamiento
                p.bajo_tratamiento = paci.sBajoTratamiento;
                p.tipo_tratamiento = paci.sTipoTratamiento;
                p.nombre_doctor = paci.sNombreDoctor;
                p.apePat_doctor = paci.sApePaterDoc;
                p.apeMat_doctor = paci.sApeMaterDoc;
                p.tel_doctor = paci.lTelDoct;
                p.cel_doctor = paci.lCelDoct;
                p.ini_trata = paci.dtIniciaTratamiento;
                p.fin_trata = paci.dtTerminaTratamiento;
                p.toma_medi = paci.sTomaMedi;
                p.medicamento = paci.sMedicamento;
                p.hospitalizado = paci.sHospi;
                p.motivo = paci.sMotivo;
                //paradontograma
                //p.d11 = paci.sD11;
                //p.d21 = paci.sD21;
                //p.d31 = paci.sD31;
                //p.d41 = paci.sD41;
                //p.d12 = paci.sD12;
                //p.d22 = paci.sD22;
                //p.d32 = paci.sD32;
                //p.d42 = paci.sD42;
                //p.d13 = paci.sD13;
                //p.d23 = paci.sD23;
                //p.d33 = paci.sD33;
                //p.d43 = paci.sD43;
                //p.d14 = paci.sD14;
                //p.d24 = paci.sD24;
                //p.d34 = paci.sD34;
                //p.d44 = paci.sD44;
                //p.d15 = paci.sD15;
                //p.d25 = paci.sD25;
                //p.d35 = paci.sD35;
                //p.d45 = paci.sD45;
                //p.d16 = paci.sD16;
                //p.d26 = paci.sD26;
                //p.d36 = paci.sD36;
                //p.d46 = paci.sD46;
                //p.d17 = paci.sD17;
                //p.d27 = paci.sD27;
                //p.d37 = paci.sD37;
                //p.d47 = paci.sD47;
                //p.d18 = paci.sD18;
                //p.d28 = paci.sD28;
                //p.d38 = paci.sD38;
                //p.d48 = paci.sD48;
                context.SaveChanges();
                return paci;
            }
        }
    }
}
