-- TC_GB_04
-- By: Miguel Angel Lopez
-- Date: 2023-11-14
-- Description: creates index for colum responsibleareaid
-- APP_M_PROV_SELECC

CREATE UNIQUE INDEX "APP_M_PROV_SELECC"."RESPONSIBLEAREA_PK" ON "APP_M_PROV_SELECC"."RESPONSgIBLEAREA" ("RESPONSIBLEAREAID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;