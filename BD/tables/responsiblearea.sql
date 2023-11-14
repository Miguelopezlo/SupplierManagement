-- TC_GB_04
-- By: Miguel Angel Lopez
-- Date: 2023-11-14
-- Description: creates table RESPONSIBLEAREA as a auxiliar table to save the responsible area for one contract
-- APP_M_PROV_SELECC.RESPONSIBLEAREA definition

CREATE TABLE "APP_M_PROV_SELECC"."RESPONSIBLEAREA" 
   (	"RESPONSIBLEAREAID" NUMBER NOT NULL ENABLE, 
	"RESPONSIBLEAREANAME" VARCHAR2(50) NOT NULL ENABLE, 
	 CONSTRAINT "RESPONSIBLEAREA_PK" PRIMARY KEY ("RESPONSIBLEAREAID"))