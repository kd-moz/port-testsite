import {
  CookieBanner,
  CookieOptOut,
  CookiePreferences,
  RecallButton,
  createCookieYes,
} from "@cookieyes/react";

createCookieYes()
  .mode("offline")
  .regulation("GDPR")
  .colorScheme("system")
  .mount();

export function CookieYesRoot() {
  return (
    <>
      <CookieBanner />
      <CookiePreferences />
      <CookieOptOut />
      <RecallButton />
    </>
  );
}
