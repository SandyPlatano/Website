'use client'

import { useEffect } from 'react'
import CTAButton from '@/components/cta-button'
import PageSection from '@/components/page-section'
import SectionHeading from '@/components/section-heading'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <PageSection variant="muted">
      <div className="flex flex-col items-center gap-10 text-center">
        <span className="rounded-full border border-pf-charcoal/15 bg-white/80 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-pf-muted">
          Error
        </span>
        <SectionHeading
          align="center"
          title="Something went wrong"
          description="We encountered an unexpected error. Please try again or return to the homepage."
        />
        <div className="flex flex-wrap items-center justify-center gap-4">
          <CTAButton 
            href="/" 
            label="Back to homepage" 
          />
          <button
            onClick={reset}
            className="rounded-sm border border-pf-charcoal/20 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-pf-charcoal transition-colors hover:bg-pf-charcoal hover:text-white"
          >
            Try again
          </button>
        </div>
      </div>
    </PageSection>
  )
}

