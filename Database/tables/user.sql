-- TC_GB_04
-- By: Miguel Angel Lopez
-- Date: 2023-11-14
-- Description: creates table User to save users in the system
-- APP_M_PROV_SELECC.USERS definition

CREATE TABLE "APP_M_PROV_SELECC"."USERS" 
   (	"USERID" NUMBER(10,0) NOT NULL ENABLE, 
	"USERNAME" VARCHAR2(255 CHAR), 
	"USERPASSWORD" VARCHAR2(255 CHAR), 
	 PRIMARY KEY ("USERID")