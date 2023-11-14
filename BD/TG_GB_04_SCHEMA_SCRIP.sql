-- TC_GB_04
-- By: Miguel Angel Lopez
-- Date: 2023-11-13
-- Description: creates schema objects for TC_GB_04

PROMPT TC_GB_04_SCHEMA_SCRIPT.sql;

ALTER SESSION SET CURRENT_SCHEMA=APP_M_PROV_SELECC;
/

PROMPT --------------CREATING TABLES -------------------

PROMPT contract.sql
@C:\SupplierManagementSystem\Database\tables\contract.sql
/

PROMPT product.sql
@C:\SupplierManagementSystem\Database\tables\product.sql
/

PROMPT log_transaction_table.sql
@C:\SupplierManagementSystem\Database\tables\log_transaction_table.sql
/

PROMPT responsiblearea.sql
@C:\SupplierManagementSystem\Database\tables\responsiblearea.sql
/

PROMPT selectionactivity.sql
@C:\SupplierManagementSystem\Database\tables\selectionactivity.sql
/

PROMPT selectioncriteria.sql
@C:\SupplierManagementSystem\Database\tables\selectioncriteria.sql
/

PROMPT supplier.sql
@C:\SupplierManagementSystem\Database\tables\supplier.sql
/

PROMPT supplierproductv1.sql
@C:\SupplierManagementSystem\Database\tables\supplierproductv1.sql
/

PROMPT temp_contracts.sql
@C:\SupplierManagementSystem\Database\tables\temp_contracts.sql
/

PROMPT user.sql
@C:\SupplierManagementSystem\Database\tables\user.sql
/


PROMPT --------------CREATING SEQUENCES-----------------

PROMPT contract_sequence.sql
@C:\SupplierManagementSystem\Database\secuences\contract_sequence.sql
/

PROMPT product_sequence.sql
@C:\SupplierManagementSystem\Database\secuences\product_sequence.sql
/

PROMPT responsiblearea_sequence.sql
@C:\SupplierManagementSystem\Database\secuences\responsiblearea_sequence.sql
/

PROMPT selectionactivity_sequence.sql
@C:\SupplierManagementSystem\Database\secuences\selectionactivity_sequence.sql
/

PROMPT selectioncriteria_sequence.sql
@C:\SupplierManagementSystem\Database\secuences\selectioncriteria_sequence.sql
/

PROMPT SEQ_LOG_TRANSACTION_TABLE.sql
@C:\SupplierManagementSystem\Database\secuences\SEQ_LOG_TRANSACTION_TABLE.sql
/

PROMPT supplier_sequence.sql
@C:\SupplierManagementSystem\Database\secuences\supplier_sequence.sql
/

PROMPT supprod_sequence.sql
@C:\SupplierManagementSystem\Database\secuences\supprod_sequence.sql
/

PROMPT user_sequence.sql
@C:\SupplierManagementSystem\Database\secuences\user_sequence.sql
/


PROMPT --------------CREATING INDEXES-------------------


PROMPT ix_contract_contractid.sql
@C:\SupplierManagementSystem\Database\indexes\ix_contract_contractid.sql
/

PROMPT ix_product_productid.sql
@C:\SupplierManagementSystem\Database\indexes\ix_product_productid.sql
/

PROMPT ix_responsiblearea_responsibleareaid.sql
@C:\SupplierManagementSystem\Database\indexes\ix_responsiblearea_responsibleareaid.sql
/

PROMPT ix_selectionactivity_activityid.sql
@C:\SupplierManagementSystem\Database\indexes\ix_selectionactivity_activityid.sql
/

PROMPT ix_selectioncriteria_selectioncriteriaid.sql
@C:\SupplierManagementSystem\Database\indexes\ix_selectioncriteria_selectioncriteriaid.sql
/

PROMPT ix_supplier_supplierid.sql
@C:\SupplierManagementSystem\Database\indexes\ix_supplier_supplierid.sql
/

PROMPT ix_supplierproductv1_id.sql
@C:\SupplierManagementSystem\Database\indexes\ix_supplierproductv1_id.sql
/

PROMPT ix_users_userid.sql
@C:\SupplierManagementSystem\Database\indexes\ix_users_userid.sql
/


PROMPT --------------CREATING REFERENCES-------------------

PROMPT fk_contract.sql
@C:\SupplierManagementSystem\Database\references\fk_contract.sql
/

PROMPT fk_product.sql
@C:\SupplierManagementSystem\Database\references\fk_product.sql
/

PROMPT fk_selectionactivity.sql
@C:\SupplierManagementSystem\Database\references\fk_selectionactivity.sql
/

PROMPT fk_supplierproductv1.sql
@C:\SupplierManagementSystem\Database\references\fk_supplierproductv1.sql
/


PROMPT ---------------------CREATING PACKAGES-------------------------

PROMPT contract_package.sql
@C:\SupplierManagementSystem\Database\packages\contract_package.sql
/

PROMPT log_transactions.sql
@C:\SupplierManagementSystem\Database\packages\log_transactions.sql
/


PROMPT --------------ALL OBJECTS SUCCESSFULLY CREATED------------------

PROMPT ----------------------------------------------------------------
PROMPT END OF TC_GB_04_SCHEMA_SCRIPT.sql
PROMPT ----------------------------------------------------------------








