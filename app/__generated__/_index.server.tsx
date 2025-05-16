/* eslint-disable */
/* This is an auto-generated file for building the project */

import type { PageMeta } from "@webstudio-is/sdk";
import type { System, ResourceRequest } from "@webstudio-is/sdk";

export const getResources = (_props: { system: System }) => {
  const _data = new Map<string, ResourceRequest>([
    // No dynamic blocks in resources; content comes from getPageMeta
  ]);
  const _action = new Map<string, ResourceRequest>([]);
  return { data: _data, action: _action };
};

export const getPageMeta = ({
  system,
  resources,
}: {
  system: System;
  resources: Record<string, any>;
}): PageMeta => {
  return {
    title: "Geharashim Engineering | Empowering Africa with STEM & IoT",
    description:
      "We build innovative STEM and IoT solutions for schools and industries, offering training, mentorship, and hands-on learning in robotics, microcontrollers, and automation.",
    excludePageFromSearch: false,
    language: "en-KE",
    socialImageAssetName: "geharashim-social-preview.jpg",
    // You can leave socialImageUrl undefined so the loader uses socialImageAssetName
    socialImageUrl: undefined,
    status: 200,
    redirect: undefined,
    custom: [
      { property: "twitter:site", content: "@Geharashim" },
      { property: "og:locale", content: "en_KE" },
    ],
  };
};

type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params;
};

export const contactEmail = "evansmuema78@gmail.com";
