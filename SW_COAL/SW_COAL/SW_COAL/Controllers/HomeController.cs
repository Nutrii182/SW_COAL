﻿using CapaDatos;
using CapaModelo;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SWP_COAL.Controllers
{
    public class HomeController : Controller
    {

        [HttpGet]
        public ActionResult ObtieneUsuarios()
        {
            CD_Usuario usu = new CD_Usuario();
            List<UsuarioModel> listaUsu = new List<UsuarioModel>();
            listaUsu = usu.MostrarUsuarios();
            return Json(new { data = listaUsu }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]

        public ActionResult ObtieneUsuario(UsuarioModel u)
        {
            CD_Usuario usu = new CD_Usuario();
            UsuarioModel usuario = new UsuarioModel();
            usuario = usu.MuestraUsuario(u);
            return Json(new { data = usuario }, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]

        public ActionResult ObtienePacientes()
        {
            CD_Paciente paci = new CD_Paciente();
            List<PacienteModel> listaPaci = new List<PacienteModel>();
            listaPaci = paci.MuestraPacientes();
            return Json(new { data = listaPaci }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult ObtienePaciente(PacienteModel pa)
        {
            CD_Paciente paci = new CD_Paciente();
            PacienteModel Paci = new PacienteModel();
            Paci = paci.MuestraPaciente(pa);
            return Json(new { data = Paci }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult RecibePaciente(PacienteModel nuevoPaciente)
        {
            var result = new JObject();

            CD_Paciente paciente = new CD_Paciente();

            if (paciente.NuevoPaciente(nuevoPaciente) != null)
            {
                result["Exito"] = true;
            }
            else
            {
                result["Advertencia"] = true;
            }
            return Content(result.ToString());
        }

        [HttpPost]
        public ActionResult recibeUsuario(UsuarioModel nuevoUsuario)
        {
            var resultado = new JObject();

            CD_Usuario user = new CD_Usuario();


            if (user.NuevoUsuario(nuevoUsuario) != null)
            {
                resultado["Exito"] = true;
            }
            else
            {
                resultado["Advertencia"] = true;
            }
            return Content(resultado.ToString());
        }

        [HttpPost]
        public ActionResult EliminaUsuario(UsuarioModel us)
        {
            var result = new JObject();

            CD_Usuario usuario = new CD_Usuario();

            if (usuario.EliminaUsuario(us) != null)
            {
                result["Exito"] = true;
            }
            else
            {
                result["Exito"] = false;
            }
            return Content(result.ToString());
        }

        [HttpPost]
        public ActionResult EliminaPaciente(PacienteModel paci)
        {
            var resultado = new JObject();

            CD_Paciente paciente = new CD_Paciente();

            if (paciente.EliminaPaciente(paci) != null)
            {
                resultado["Exito"] = true;
            }
            else
            {
                resultado["Exito"] = false;
            }
            return Content(resultado.ToString());
        }

        [HttpPost]
        public ActionResult EditaUsuario(UsuarioModel usu)
        {
            var resultado = new JObject();

            CD_Usuario usuario = new CD_Usuario();

            if (usuario.EditaUsuario(usu) != null)
            {
                resultado["Exito"] = true;
            }
            else
            {
                resultado["Exito"] = false;
            }
            return Content(resultado.ToString());
        }

        [HttpPost]
        public ActionResult EditaPaciente(PacienteModel pac)
        {
            var result = new JObject();

            CD_Paciente paciente = new CD_Paciente();

            if (paciente.EditaPaciente(pac) != null)
            {
                result["Exito"] = true;
            }
            else
            {
                result["Exito"] = false;
            }
            return Content(result.ToString());
        }

        public ActionResult Agregar_Usuario()
        {
            if ((UsuarioModel)Session["usuario"] != null)
            {
                return View();
            }
            return RedirectToRoute(new { controller = "Login", action = "Index" });
        }
        public ActionResult Agregar_Paciente()
        {

            if ((UsuarioModel)Session["usuario"] != null)
            {
                ViewBag.Message = "Your application description page.";

                return View();
            }
            return RedirectToRoute(new { controller = "Login", action = "Index" });
        }

        public ActionResult Index()
        {
            if ((UsuarioModel)Session["usuario"] != null)
            {
                return View();
            }
            return RedirectToRoute(new { controller = "Login", action = "Index" });
        }

        public ActionResult ModificaUsuario()
        {
            if ((UsuarioModel)Session["usuario"] != null)
            {
                return View();
            }
            return RedirectToRoute(new { controller = "Login", action = "Index" });
        }

        public ActionResult ModificaPaciente()
        {
            if ((UsuarioModel)Session["usuario"] != null)
            {
                return View();
            }
            return RedirectToRoute(new { controller = "Login", action = "Index" });
        }

        public ActionResult Pacientes()
        {
            if ((UsuarioModel)Session["usuario"] != null)
            {
                var paci = new COALEntities();
                return View(paci.Pacientes);
            }
            return RedirectToRoute(new { controller = "Login", action = "Index" });
        }

        public ActionResult Usuarios()
        {
            if ((UsuarioModel)Session["usuario"] != null)
            {
                var usu = new COALEntities();
                return View(usu.Usuarios);
            }
            return RedirectToRoute(new { controller = "Login", action = "Index" });
        }

        public ActionResult Calendario()
        {
            if ((UsuarioModel)Session["usuario"] != null)
            {
                return View();
            }
            return RedirectToRoute(new { controller = "Login", action = "Index" });
        }

        public ActionResult DetallesUsuario()
        {
            if ((UsuarioModel)Session["usuario"] != null)
            {
                return View();
            }
            return RedirectToRoute(new { controller = "Login", action = "Index" });
        }

        public ActionResult DetallesPaciente()
        {
            if ((UsuarioModel)Session["usuario"] != null)
            {
                return View();
            }
            return RedirectToRoute(new { controller = "Login", action = "Index" });
        }

    }
}