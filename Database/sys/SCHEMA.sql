-- TC_GB_04
-- By: Miguel Angel Lopez
-- Date: 2023-11-13
-- Description: creates schema APP_M_PROV_SELECC

alter session set "_ORACLE_SCRIPT"=true;
CREATE USER APP_M_PROV_SELECC IDENTIFIED BY 1234;
GRANT ALL PRIVILEGES TO APP_M_PROV_SELECC;