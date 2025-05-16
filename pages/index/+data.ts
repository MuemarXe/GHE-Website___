import type { PageContextServer } from "vike/types";
import { redirect } from "vike/abort";

export const data = async (pageContext: PageContextServer) => {
  const url = new URL(pageContext.urlOriginal, "http://url");
  const headers = new Headers(pageContext.headers ?? {});
  const host = headers.get("x-forwarded-host") || headers.get("host") || "";
  url.host = host;
  url.protocol = "https";

  const system = {
    params: pageContext.routeParams,
    search: Object.fromEntries(url.searchParams),
    origin: url.origin,
  };

  // ✅ Your custom page metadata
  const pageMeta = {
    title: "Geharashim Engineering | Empowering Africa with STEM & IoT",
    description:
      "We build innovative STEM and IoT solutions for schools and industries, offering training, mentorship, and hands-on learning in robotics, microcontrollers, and automation.",
    socialImageUrl: `${url.origin}/assets/geharashim-preview.jpg`, // Replace with your real image path
    excludePageFromSearch: false,
    status: 200,
    redirect: null,
    custom: [
      { property: "twitter:site", content: "@Geharashim" },
      { property: "og:locale", content: "en_KE" },
    ],
  };

  // Optional redirect handling
  if (pageMeta.redirect) {
    const status =
      pageMeta.status === 301 || pageMeta.status === 302
        ? pageMeta.status
        : 302;
    throw redirect(pageMeta.redirect, status);
  }

  return {
    url: url.href,
    system,
    resources: {}, // Not using Webstudio-generated resources anymore
    pageMeta,
  } satisfies PageContextServer["data"];
};
