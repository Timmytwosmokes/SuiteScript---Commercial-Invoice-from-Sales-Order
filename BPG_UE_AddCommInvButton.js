/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define([], () => {

    const beforeLoad = (scriptContext) => {
        const form = scriptContext.form;
        form.addButton({
            id: "custpage_print_commercial_inv_button",
            label: "Print Commercial Invoice",
            functionName: "BPG_CLPrintCommercialInvoiceButton()"
        });
        form.clientScriptModulePath = "SuiteScripts/BPG_CLPrintCommercialInvoiceButton"; // Update the path to your client script
    };

    return { beforeLoad };

});
