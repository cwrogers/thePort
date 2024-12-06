FROM node:20-alpine AS base
ARG CONTACT_EMAIL
ARG POSTHOG_KEY
ARG POSTHOG_URL

FROM base as builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

# Set environment variables
RUN echo "EMAIL=$CONTACT_EMAIL" > .env
RUN echo "BUILD_DATE=$(date +'%b %-d, %Y')" >> .env
RUN echo "COMMIT_SHA=$(git rev-parse --short HEAD)" >> .env
RUN echo "NEXT_PUBLIC_POSTHOG_KEY=$POSTHOG_KEY" >> .env
RUN echo "NEXT_PUBLIC_POSTHOG_URL=$POSTHOG_URL" >> .env
ENV NODE_ENV=production

# Build the app
RUN npm run build


FROM base as runner

WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV EMAIL=$CONTACT_EMAIL

RUN addgroup --system --gid 1001 nextjs
RUN adduser --system  --uid 1001 --ingroup nextjs nextjs

RUN mkdir .next
RUN chown -R nextjs:nextjs .next

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT=3000

USER nextjs
CMD node server.js
