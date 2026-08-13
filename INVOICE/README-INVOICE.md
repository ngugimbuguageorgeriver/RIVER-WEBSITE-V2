For River, I’d design it as a proper electronic invoice system, not just an HTML invoice template.

It can automatically generate:

Invoice number — e.g. RIV-2026-000147
Issue date — generated automatically
Issue time — generated automatically
Time zone — EAT (UTC+03:00)
Due date
Currency — KES / USD / EUR, etc.
Seller details — River IT Solutions
Client/customer details
Invoice line items
Quantity × unit price
Discounts
Tax/VAT
Subtotal
Total
Amount paid
Balance due
Payment terms
Bank/payment information
Notes
Invoice status
Optional PO/reference number
Automatic unique invoice ID
Printable/PDF version
Email-ready version
Audit-friendly timestamps
The timestamp should be explicit

For example:

Issued: 13 August 2026, 10:31 EAT
UTC: 13 August 2026, 07:31 UTC
Time Zone: Africa/Nairobi (EAT, UTC+03:00)

I would actually store the underlying timestamp in UTC, then render it as EAT for River's invoices. That prevents timezone ambiguity later.

I would structure the invoice like this

RIVER IT SOLUTIONS

ELECTRONIC INVOICE

Invoice No. RIV-2026-000147
Status UNPAID

	
Issued	13 Aug 2026, 10:31 EAT
Due	27 Aug 2026
Currency	KES
Payment Terms	Net 14

FROM

River IT Solutions
Nairobi, Kenya
Email: ...
Phone: ...
Tax/VAT details: ...

BILL TO

Client Company Ltd.
Contact Person
Address
Email
Phone
Tax/VAT details

Invoice items
Description	Qty	Unit Price	Tax	Amount
Software development	1	KES 250,000	16%	KES 250,000
Cloud deployment	1	KES 40,000	16%	KES 40,000

Subtotal: KES 290,000
VAT: KES 46,400
TOTAL: KES 336,400

Payment instructions

Bank / M-Pesa / other payment method

Reference: RIV-2026-000147