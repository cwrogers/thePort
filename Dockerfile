FROM node:20-alpine AS base

FROM base as builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .

ENV NODE_ENV=production
RUN npm run build

FROM base as runner
ARG CONTACT_EMAIL

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

