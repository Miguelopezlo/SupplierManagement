-- TC_GB_04
-- By: Miguel Angel Lopez
-- Date: 2023-11-14
-- Description: Creating the package CONTRACT_PACKAGE to save the contracts in the table TEMP_CONTRACTS

CREATE OR REPLACE PACKAGE APP_M_PROV_SELECC.contract_package AS 
PROCEDURE save_contracts(p_supplier_id NUMBER);
END contract_package;

CREATE OR REPLACE PACKAGE BODY APP_M_PROV_SELECC.contract_package AS
  PROCEDURE save_contracts(p_supplier_id NUMBER) IS
  BEGIN
    -- Elimina los datos existentes en la tabla temporal
    DELETE FROM TEMP_CONTRACTS;

    -- Inserta los nuevos datos en la tabla temporal
    INSERT INTO APP_M_PROV_SELECC.TEMP_CONTRACTS (CONTRACTID, CONTRACTDESCRIPTION, STARTDATE, FINISHDATE, CONTRACTSTATE, PRODUCTID, SUPPLIERID)
    SELECT CONTRACTID, CONTRACTDESCRIPTION, STARTDATE, FINISHDATE, CONTRACTSTATE, PRODUCTID, p_supplier_id
    FROM CONTRACT
    WHERE SUPPLIERID = p_supplier_id;

    COMMIT;

    EXCEPTION
      WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('ERROR: ' || SQLERRM);
        RAISE;
  END;
END;
