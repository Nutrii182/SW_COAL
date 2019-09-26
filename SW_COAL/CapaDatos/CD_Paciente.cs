using CapaModelo;
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
                        in_tratamiento = paci.dtIniciaTratamiento,
                        fn_tratamiento = paci.dtTerminaTratamiento,
                        fecha_nacimiento = paci.dtFechaNacimiento,
                        sexo = paci.sSexo,
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
    }
}