-- TC_GB_04
-- By: Miguel Angel Lopez
-- Date: 2023-11-14
-- Description: Creating the package LOG_TRANSACTIONS to save all the transactions on the table contracts

CREATE OR REPLACE PACKAGE APP_M_PROV_SELECC.LOG_TRANSACTIONS AS
  PROCEDURE registry_transactions(p_description VARCHAR2);
END LOG_TRANSACTIONS;

CREATE OR REPLACE PACKAGE BODY APP_M_PROV_SELECC.LOG_TRANSACTIONS AS
  PROCEDURE registry_transactions(p_description VARCHAR2) IS
    -- Declara una variable para almacenar la fecha
    v_date_registry TIMESTAMP;
  BEGIN
    -- Obtén la fecha y hora actual
    SELECT CURRENT_TIMESTAMP INTO v_date_registry FROM DUAL;
    
    -- Inserta la transacción en la tabla de registro
    INSERT INTO LOG_TRANSACTION_TABLE (TRANSACTION_ID, REGISTRY_DATE, DESCRIPTION)
    VALUES (SEQ_LOG_TRANSACTION_TABLE.NEXTVAL, v_date_registry, p_description);

  EXCEPTION
    WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('ERROR: ' || SQLERRM);
      -- Puedes personalizar el manejo de errores según tus necesidades
  END;
END LOG_TRANSACTIONS;
