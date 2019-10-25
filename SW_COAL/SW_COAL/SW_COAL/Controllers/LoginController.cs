using CapaDatos;
using CapaModelo;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SWP_COAL.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Logeo(UsuarioModel datosUsuario)
        {
            var resultado = new JObject();
            CD_Usuario cdusuario = new CD_Usuario();
            UsuarioModel usuarioModel = new UsuarioModel();
            usuarioModel = cdusuario.ValidarUsuario(datosUsuario);

            if (usuarioModel != null)
            {
                Session["usuario"] = usuarioModel;
                resultado["Exito"] = true;
            }
            else
            {
                resultado["Exito"] = false;
                resultado["Advertencia"] = true;
            }
            return Content(resultado.ToString());
        }

        public ActionResult Logout()
        {
            HttpContext.Session.Abandon();
            return RedirectToRoute(new { Controller = "Login", Action = "Index" });
        }
    }
}