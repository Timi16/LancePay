import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    ok: true,
    routes: {
      bulkInvoices: {
        create: '/api/routes-d/bulk-invoices/create',
        uploadCsv: '/api/routes-d/bulk-invoices/upload-csv',
        status: '/api/routes-d/bulk-invoices/status?jobId={id}',
        template: '/api/routes-d/bulk-invoices/template',
      },
      utils: {
        feeQuote: '/api/routes-d/utils/fee-quote?amount={usd_amount}',
      },
    },
  })
}

