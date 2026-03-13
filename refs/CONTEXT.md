# AI SaaS Landing Architecture

## Next.js SSR + Multi Agent + Programmatic SEO

Modern architecture for **AI SaaS Landing Platforms** designed for:

* SEO domination
* dynamic landing generation
* social media preview optimization
* AI marketing automation
* scalable SSR deployment

This architecture converts **React SPA (Vite)** into **Next.js SSR** with **AI-powered landing generation**.

---

# Core Concept

The platform is built around **LandingPage.jsx as the main entry**, while other pages are routed via **Next.js SSR**.

The system supports:

* Dynamic landing pages
* AI generated marketing content
* Programmatic SEO
* Multi AI agents
* Edge rendering

---

# Original SPA Files

```id="9a7c1d"
AdminApp.jsx
AffiliateApp.jsx
DonationApp.jsx
LandingPage.jsx
Marketing.jsx
```

These files will be stored as **UI domain modules** inside the `refs` folder.

---

# Final Architecture

```id="p8b5aa"
project-root

app
│
├ layout.jsx
├ page.jsx
│
├ marketing
│   └ page.jsx
│
├ donation
│   └ page.jsx
│
├ affiliate
│   └ page.jsx
│
├ admin
│   └ page.jsx
│
├ lp
│   └ [slug]
│       └ page.jsx
│
├ api
│   ├ agent
│   │   └ route.js
│   │
│   └ seo
│       └ route.js
│
refs
│
├ LandingPage.jsx
├ Marketing.jsx
├ DonationApp.jsx
├ AffiliateApp.jsx
└ AdminApp.jsx

agents
│
├ marketingAgent.js
├ seoAgent.js
├ affiliateAgent.js
├ donationAgent.js
└ analyticsAgent.js

seo
│
├ metadata.js
└ dynamicSEO.js

components
lib
public
│
└ og

next.config.js
vercel.json
package.json
```

---

# Install Next.js

```id="b2e14f"
npx create-next-app@latest ai-platform
```

Recommended settings:

```id="dc64e0"
App Router : YES
TypeScript : optional
Tailwind : optional
```

---

# Move SPA UI Modules

Move original React files to:

```id="fd1f6b"
/refs
```

Example:

```id="1b1d0e"
refs
   LandingPage.jsx
   Marketing.jsx
   DonationApp.jsx
   AffiliateApp.jsx
   AdminApp.jsx
```

---

# Root Layout

File:

```
app/layout.jsx
```

```id="72ab0f"
export const metadata = {
  title: "DonasiOnline Platform",
  description: "Digital ecosystem for NGOs, donation infrastructure and partnerships"
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )

}
```

---

# Main Entry

## LandingPage.jsx

Route:

```
/
```

File:

```
app/page.jsx
```

```id="f7b2a4"
import LandingPage from "@/refs/LandingPage"
import { generateMetadata } from "@/seo/metadata"

export const metadata = generateMetadata({

  title: "DonasiOnline Platform",
  description: "Digital infrastructure for NGO donations and partnerships",
  image: "/og/landing.png"

})

export default function Page() {

  return <LandingPage />

}
```

Now **LandingPage.jsx is the core UI entry**.

---

# Marketing Page

Route:

```
/marketing
```

File:

```
app/marketing/page.jsx
```

```id="efb9b8"
import Marketing from "@/refs/Marketing"
import { generateMetadata } from "@/seo/metadata"

export const metadata = generateMetadata({

  title: "Marketing Executive Program",
  description: "Join our marketing executive partnership and build recurring income",
  image: "/og/marketing.png"

})

export default function Page() {

  return <Marketing />

}
```

---

# Donation Platform

Route:

```
/donation
```

File:

```
app/donation/page.jsx
```

```id="91b924"
import DonationApp from "@/refs/DonationApp"
import { generateMetadata } from "@/seo/metadata"

export const metadata = generateMetadata({

  title: "Digital Donation Platform",
  description: "Create digital fundraising systems for mosques, foundations and NGOs",
  image: "/og/donation.png"

})

export default function Page() {

  return <DonationApp />

}
```

---

# Affiliate Portal

Route:

```
/affiliate
```

File:

```
app/affiliate/page.jsx
```

```id="3f69b6"
import AffiliateApp from "@/refs/AffiliateApp"
import { generateMetadata } from "@/seo/metadata"

export const metadata = generateMetadata({

  title: "Affiliate Partner Program",
  description: "Earn recurring commission by referring NGOs",
  image: "/og/affiliate.png"

})

export default function Page() {

  return <AffiliateApp />

}
```

---

# Admin Panel

Route:

```
/admin
```

File:

```
app/admin/page.jsx
```

```id="6c2c0c"
import AdminApp from "@/refs/AdminApp"

export const metadata = {

  title: "Admin Panel",
  robots: "noindex,nofollow"

}

export default function Page() {

  return <AdminApp />

}
```

---

# Programmatic SEO Pages

Route example:

```
/lp/ngo-donation-platform
/lp/digital-zakat-platform
/lp/online-fundraising-system
```

File:

```
app/lp/[slug]/page.jsx
```

```id="d3f8f6"
import { getLandingContent } from "@/seo/dynamicSEO"

export async function generateMetadata({ params }) {

  const data = await getLandingContent(params.slug)

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data.image]
    }
  }

}

export default async function Page({ params }) {

  const data = await getLandingContent(params.slug)

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  )

}
```

---

# AI Agent Layer

Agents stored in:

```
/agents
```

Example:

```id="0e0a92"
agents

marketingAgent.js
seoAgent.js
affiliateAgent.js
donationAgent.js
analyticsAgent.js
```

Example:

```id="1f7a8e"
export async function seoAgent(keyword){

  return {

    title:`Best ${keyword} Platform`,
    description:`Modern ${keyword} infrastructure`,
    content:`AI generated SEO article`

  }

}
```

---

# AI API Endpoint

File:

```
app/api/agent/route.js
```

```id="4e82e4"
import { seoAgent } from "@/agents/seoAgent"

export async function POST(req){

  const body = await req.json()

  const result = await seoAgent(body.keyword)

  return Response.json(result)

}
```

---

# Dynamic SEO Generator

File:

```
seo/dynamicSEO.js
```

```id="c2df20"
import { seoAgent } from "@/agents/seoAgent"

export async function getLandingContent(slug){

  const keyword = slug.replace("-", " ")

  const data = await seoAgent(keyword)

  return {

    title: data.title,
    description: data.description,
    content: data.content,
    image: "/og/default.png"

  }

}
```

---

# Vercel Config

File:

```
vercel.json
```

```id="b6a2aa"
{
  "regions": ["sin1"],
  "framework": "nextjs"
}
```

---

# Deploy to Vercel

Push to GitHub:

```id="f4d14a"
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin YOUR_REPO
git push -u origin main
```

Go to:

```
https://vercel.com
```

Import repository and deploy.

---

# Final Routes

Public pages:

```
/
/marketing
/donation
/affiliate
```

Programmatic SEO:

```
/lp/[keyword]
```

Example:

```
/lp/ngo-donation-platform
/lp/online-zakat-platform
/lp/digital-fundraising-system
```

Admin:

```
/admin
```

---

# Key Benefits

## SEO Domination

Programmatic SEO allows generating **hundreds of landing pages automatically**.

---

## Social Media Preview

Each page supports:

* OpenGraph
* WhatsApp preview
* Facebook preview
* X preview
* LinkedIn preview

---

## AI Marketing Automation

AI agents can generate:

* landing pages
* marketing content
* SEO articles
* affiliate campaigns

---

## Ultra Scalable

The architecture supports:

* Vercel Edge
* serverless APIs
* AI orchestration
* global CDN

---

# Core Entry

```
refs/LandingPage.jsx
```

Rendered via:

```
app/page.jsx
```

with **SSR + SEO + AI integration**.

---

End of document.
