/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define(["N/currentRecord", "N/url"], function(currentRecord, url) {

    function pageInit(scriptContext) {
        // Do Nothing
    }

    function BPG_CLPrintCommercialInvoiceButton() {
        var recordId = currentRecord.get().id;

        
        var slUrl = url.resolveScript({
            scriptId: 'customscript_bpg_custom_sl_print_comminv',
            deploymentId: 'customdeploy_bpg_custom_sl_print_comminv',
            params: { recordId: recordId } // Pass any necessary parameters to the Suitelet
        });
        window.open(slUrl);
    }

    return {
        pageInit: pageInit,
        BPG_CLPrintCommercialInvoiceButton: BPG_CLPrintCommercialInvoiceButton
    };

});
