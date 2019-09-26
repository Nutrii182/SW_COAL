using CapaModelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaDatos
{
    public class CD_Usuario
    {

        public UsuarioModel ValidarUsuario(UsuarioModel user)
        {
            try
            {

                using (var contexto = new COALEntities())
                {
                    int iComp = contexto.Usuarios.Where(u => u.usuario == user.sUsuario && u.contraseña == user.sContraseña).Count();

                    if (iComp > 0)
                    {
                        user = contexto.Usuarios.Where(u => u.usuario == user.sUsuario && u.contraseña == user.sContraseña).Select(
                            usu => new UsuarioModel()
                            {
                                sUsuario = usu.usuario,
                                sContraseña = usu.contraseña,
                                sNombre = usu.nombre,
                                sAp_Paterno = usu.ap_paterno,
                                sAp_Materno = usu.ap_materno,
                                lTelefono = usu.telefono,
                                lCelular = usu.celular

                            }).FirstOrDefault();

                        return user;
                    }
                    else
                    {
                        return null;
                    }
                }

            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public UsuarioModel NuevoUsuario(UsuarioModel user)
        {
            try
            {
                using (var contexto = new COALEntities())
                {
                    var iComp = contexto.Usuarios.Where(u => u.usuario == user.sUsuario || u.nombre == user.sNombre &&
                    u.ap_paterno == user.sAp_Paterno && u.ap_materno == user.sAp_Materno).FirstOrDefault();

                    if (iComp != null)
                        return null;

                    var nuevoUsuario = new Usuarios
                    {
                        nombre = user.sNombre,
                        ap_paterno = user.sAp_Paterno,
                        ap_materno = user.sAp_Materno,
                        telefono = user.lTelefono,
                        celular = user.lCelular,
                        correo = user.sCorreo,
                        usuario = user.sUsuario,
                        contraseña = user.sContraseña
                    };
                    contexto.Usuarios.Add(nuevoUsuario);
                    contexto.SaveChanges();
                    return user;
                }

            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<UsuarioModel> MostrarUsuarios()
        {
            try
            {

                using (var context = new COALEntities())

                    return context.Usuarios.Select(u => new UsuarioModel()
                    {
                        sNombre = u.nombre,
                        sAp_Paterno = u.ap_paterno,
                        sAp_Materno = u.ap_materno
                    }).ToList();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

    }
}