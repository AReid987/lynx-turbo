import million from "million/compiler";
import nextra from 'nextra';

const withNextra = nextra({
  defaultShowCopyCode: true,
  flexsearch: {
    codeblocks: true
  }
})({ theme: 'nextra-theme-docs', themeConfig: './theme.config.jsx' })

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const millionConfig = {
  auto: true,// if you're using RSC: auto: { rsc: true },
};

// Combine Million and Nextra configurations
export default million.next(
  withNextra(nextConfig),
  millionConfig
);