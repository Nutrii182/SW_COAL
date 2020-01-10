create database COAL

create table Usuarios(idusuario int identity(1,1) not null primary key, nombre varchar(25) not null, ap_paterno varchar(20) not null,
ap_materno varchar(20) not null, telefono bigint default 'No tiene', celular bigint default 'No tiene', correo varchar(25) default 'No tiene',
usuario varchar(20) not null, contraseņa varchar(20) not null, tipo nvarchar(15) not null)

create table Pacientes(idpaciente int identity(1,1) not null primary key, nombre varchar(25) not null, apellido_paterno varchar(20) not null,
apellido_materno varchar(20) not null, domicilio varchar(100) not null, telefono bigint default 'No tiene', celular bigint default 'No tiene',
fecha_nacimiento datetime not null, sexo varchar(10) not null,

apa_resp nvarchar(2) not null, apa_cardi nvarchar(2) not null,
apa_diges nvarchar(2) not null, sis_nerv nvarchar(2) not null, prob_goagu nvarchar(2) not null, desmayos nvarchar(2) not null,
verti_mareo nvarchar(2) not null, diabetes nvarchar(2) not null, tiroides nvarchar(2) not null, fie_reu nvarchar(2) not null,
hipertension nvarchar(2) not null, otro_antecedente varchar(35) default 'No tiene', embarazo nvarchar(2) not null,meses_embarazo int default 0,
anticonceptivos nvarchar(2) not null, tipo_anticoncep varchar(20), fumador nvarchar(2) not null,consume_alcohol nvarchar(2) not null,
drogas nvarchar(2) not null, alergia nvarchar(2) not null, tipo_alergia varchar(30) default 'No tiene', higiene_bucal nvarchar(5) not null,

bricomania nvarchar(2) not null,contrac_musc nvarchar(2) not null, habi_mordi nvarchar(2) not null,resp_bucal nvarchar(2) not null,
chupa_labios nvarchar(2) not null,chupa_lengua nvarchar(2) not null, chupa_dedos nvarchar(2) not null,frecuencia int default 0,
alimentacion nvarchar(5) not null, duros nvarchar(7) not null, rx nvarchar(6) not null, encia nvarchar(2) not null, inser_epi nvarchar(2) not null,
lengua nvarchar(2) not null, pulpa nvarchar(2) not null, velo nvarchar(2) not null, carrillos nvarchar(2) not null,sob_mord nvarchar(10) not null,
mordi_abier nvarchar(2) not null,desg_bru nvarchar(2) not null, anoclusion nvarchar(2) not null,

bajo_tratamiento nvarchar(2) not null, tipo_tratamiento nvarchar(6) default 'Nada', nombre_doctor varchar(25) default 'No tiene',apePat_doctor varchar(20) default 'No tiene',
apeMat_doctor varchar(20), tel_doctor bigint default 'No tiene', cel_doctor bigint default 'No tiene',ini_trata datetime, fin_trata datetime,
toma_medi nvarchar(2) not null, medicamento varchar(25) default 'No usa',hospitalizado nvarchar(2) not null, motivo varchar(30) default 'No tiene',
rech_apri nvarchar(2) not null, trat_encias nvarchar(2) not null, ori_bucal nvarchar(2) not null,ciru_encias nvarchar(2) not null,
hemorragias nvarchar(2) not null, veces_cepillado int not null, tipo_cepillo nvarchar(10) not null,
d11 nvarchar(10), d12 nvarchar(10), d13 nvarchar(10),  d14 nvarchar(10), d15 nvarchar(10), d16 nvarchar(10), d17 nvarchar(10), d18 nvarchar(10),
d21 nvarchar(10), d22 nvarchar(10),d23 nvarchar(10), d24 nvarchar(10), d25 nvarchar(10), d26 nvarchar(10), d27 nvarchar(10), d28 nvarchar(10),
d31 nvarchar(10),d32 nvarchar(10), d33 nvarchar(10), d34 nvarchar(10), d35 nvarchar(10), d36 nvarchar(10), d37 nvarchar(10), d38 nvarchar(10),
d41 nvarchar(10), d42 nvarchar(10), d43 nvarchar(10), d44 nvarchar(10), d45 nvarchar(10), d46 nvarchar(10), d47 nvarchar(10), d48 nvarchar(10),
odontologo int references Usuarios(idusuario) not null)

select * from Usuarios
select * from Pacientes

insert into Usuarios
values('rgdfd','ergd','ergdf',0,0,'regd','nutrii','yo','SuperUsuario')