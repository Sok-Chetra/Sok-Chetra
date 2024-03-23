import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
   // A list of all locales that are supported
   locales: ['en', 'kh'],

   // Used when no locale matches
   defaultLocale: 'en',
   localePrefix: 'as-needed'
});

export const config = {
   matcher: ['/((?!api|static|.*\\..*|_next).*)']
}