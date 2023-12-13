import { Metadata } from "next"

import { cn } from "@/lib/utils"

import { DemoCookieSettings } from "./_components/cookie-settings"
import { DemoCreateAccount } from "./_components/create-account"
import { DemoDatePicker } from "./_components/date-picker"
import { DemoGithub } from "./_components/github-card"
import { DemoNotifications } from "./_components/notifications"
import { DemoPaymentMethod } from "./_components/payment-method"
import { DemoReportAnIssue } from "./_components/report-an-issue"
import { DemoShareDocument } from "./_components/share-document"
import { DemoTeamMembers } from "./_components/team-members"

export const metadata: Metadata = {
  title: "Cards",
  description: "Examples of cards built using the components.",
}

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  )
}

export default function CardsPage() {
  return (
    <>
      <div className="items-start justify-center gap-6 p-8 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="grid items-start col-span-2 gap-6 lg:col-span-1">
          <DemoContainer>
            <DemoCreateAccount />
          </DemoContainer>
          <DemoContainer>
            <DemoPaymentMethod />
          </DemoContainer>
        </div>
        <div className="grid items-start col-span-2 gap-6 lg:col-span-1">
          <DemoContainer>
            <DemoTeamMembers />
          </DemoContainer>
          <DemoContainer>
            <DemoShareDocument />
          </DemoContainer>
          <DemoContainer>
            <DemoDatePicker />
          </DemoContainer>
          <DemoContainer>
            <DemoNotifications />
          </DemoContainer>
        </div>
        <div className="grid items-start col-span-2 gap-6 lg:col-span-1 lg:grid-cols-2 xl:grid-cols-1">
          <DemoContainer>
            <DemoReportAnIssue />
          </DemoContainer>
          <DemoContainer>
            <DemoGithub />
          </DemoContainer>
          <DemoContainer>
            <DemoCookieSettings />
          </DemoContainer>
        </div>
      </div>
    </>
  )
}
