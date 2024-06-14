Print Commercial Invoice Button
Overview

The "Print Commercial Invoice" button is integrated into the NetSuite User Interface and allows users to easily print commercial invoices for sales orders directly from the sales order record page. This functionality is supported by a suite of scripts including a User Event Script, a Client Script, and a Suitelet.
Scripts Breakdown
User Event Script

The User Event Script (UserEventScript.js) adds the "Print Commercial Invoice" button to the sales order form. It configures the button to trigger the Client Script function responsible for handling the print action.

Key Points:

    Script Type: User Event Script
    API Version: 2.1
    File: UserEventScript.js

Client Script

The Client Script (ClientScript.js) defines the function BPG_CLPrintCommercialInvoiceButton() which is triggered by the button. It retrieves the current record ID and constructs a URL to call the Suitelet with necessary parameters.

Key Points:

    Script Type: Client Script
    API Version: 2.x
    Modules: N/currentRecord, N/url

Suitelet

The Suitelet (Suitelet.js) handles the request to generate the commercial invoice PDF. It loads the relevant sales order record, uses a predefined template file to generate a PDF, and sends this PDF back to the client.

Key Points:

    Script Type: Suitelet
    API Version: 2.x
    Modules: N/render, N/record, N/file, N/log

Installation

    Deploy Scripts: Upload the .js files for the User Event Script, Client Script, and Suitelet into your NetSuite SuiteScripts directory.
    Create and Deploy Script Records:
        Create new script records in NetSuite for each of the scripts and link them to the corresponding .js files.
        Deploy the scripts ensuring that the deployment parameters are set correctly.
    Update Path: Ensure the clientScriptModulePath in the User Event Script is updated to the path of your Client Script.

Usage

To use the "Print Commercial Invoice" button:

    Navigate to any sales order record in your NetSuite account.
    You will find the "Print Commercial Invoice" button on the form.
    Clicking this button will generate and download the commercial invoice for the current sales order as a PDF document.

Troubleshooting

    Button Does Not Appear: Check that the User Event Script is correctly deployed and associated with sales order records.
    Error Generating PDF: Ensure the template file exists in the file cabinet and the Suitelet script can access it. Check the Suitelet and Client Script logs for any error messages.

For further support, refer to the script logs or contact your NetSuite administrator.
