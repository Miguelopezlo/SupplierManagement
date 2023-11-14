-- TC_GB_04
-- By: Miguel Angel Lopez
-- Date: 2023-11-14
-- Description: creates trigger to use the package registry_transactions
-- APP_M_PROV_SELECC definition

CREATE OR REPLACE TRIGGER APP_M_PROV_SELECC.CONTRACT_INSERT_TRIGGER
AFTER INSERT ON CONTRACT
FOR EACH ROW
BEGIN
    LOG_TRANSACTIONS.REGISTRY_TRANSACTIONS('Nueva transacción en CONTRACT');
END;
