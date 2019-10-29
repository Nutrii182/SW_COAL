﻿using CapaModelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaDatos
{
    public class CD_Paciente
    {
        public PacientesModel NuevoPaciente(PacientesModel paci)
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

        public List<PacientesModel> MostrarPacientes()
        {
            try
            {
                using (var context = new COALEntities())

                    return context.Pacientes.Select(p => new PacientesModel()
                    {
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
                        iOdontologo = p.odontologo
                    }).ToList();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public PacientesModel EliminaPaciente(PacientesModel pac)
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
    }
}