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
                                sTipo = usu.tipo,

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
                        contraseña = user.sContraseña,
                        tipo = user.sTipo
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

        public UsuarioModel EditaUsuario(UsuarioModel usu)
        {
            try
            {
                using (var context = new COALEntities())
                {
                    var u = context.Usuarios.Where(us => us.idusuario == usu.iId).Single();

                    if (u == null)
                        return null;

                    u.nombre = usu.sNombre;
                    u.ap_paterno = usu.sAp_Paterno;
                    u.ap_materno = usu.sAp_Materno;
                    u.telefono = usu.lTelefono;
                    u.celular = usu.lCelular;
                    u.correo = usu.sCorreo;
                    u.usuario = usu.sUsuario;
                    u.contraseña = usu.sContraseña;
                    u.tipo = usu.sTipo;
                    context.SaveChanges();
                    return usu;
                }

            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public UsuarioModel MuestraUsuario(UsuarioModel usu)
        {
            try
            {
                using (var context = new COALEntities())
                {
                    UsuarioModel usuario = new UsuarioModel();
                    var u = context.Usuarios.Where(us => us.usuario == usu.sUsuario || us.idusuario == usu.iId).FirstOrDefault();

                    if (u == null)
                        return null;

                    usuario.iId = u.idusuario;
                    usuario.sNombre = u.nombre;
                    usuario.sAp_Paterno = u.ap_paterno;
                    usuario.sAp_Materno = u.ap_materno;
                    usuario.lTelefono = u.telefono;
                    usuario.lCelular = u.celular;
                    usuario.sCorreo = u.correo;
                    usuario.sContraseña = u.contraseña;
                    usuario.sUsuario = u.usuario;
                    usuario.sTipo = u.tipo;
                    return usuario;
                }
            }catch(Exception e)
            {
                throw e;
            }
        }

        public List<UsuarioModel> MostrarUsuarios()
        {
            try
            {
                using (var context = new COALEntities())
                {
                    return context.Usuarios.Select(u => new UsuarioModel()
                    {
                        iId = u.idusuario,
                        sNombre = u.nombre,
                        sAp_Paterno = u.ap_paterno,
                        sAp_Materno = u.ap_materno,
                        lTelefono = u.telefono,
                        lCelular = u.celular,
                        sCorreo = u.correo,
                        sContraseña = u.contraseña,
                        sUsuario = u.usuario,
                        sTipo = u.tipo
                    }).ToList();
                }
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        public UsuarioModel EliminaUsuario(UsuarioModel usu)
        {
            try
            {
                using (var context = new COALEntities())
                {
                    var eliUsu = context.Usuarios.Where(u => u.idusuario == usu.iId).Single();

                    if (eliUsu == null)
                        return null;

                    context.Usuarios.Remove(eliUsu);
                    context.SaveChanges();
                    return usu;
                }

            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}